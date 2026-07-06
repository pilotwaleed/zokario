/* =========================================================
   ZOKARIO — accounts, profiles, password reset, reviews
   Client-side demo engine: passwords hashed with WebCrypto
   SHA-256 + per-user salt, never stored in plain text.
   Swap points for a real backend are marked with @API.
   ========================================================= */

const ZKAuth = {

  /* ---------- storage ---------- */
  _users() { return ZKStore.read("zk_accounts", {}); },
  _save(users) { ZKStore.write("zk_accounts", users); },

  async _hash(pw, salt) {
    const data = new TextEncoder().encode(salt + "·zokario·" + pw);
    const buf = await crypto.subtle.digest("SHA-256", data);
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
  },
  _salt() {
    return [...crypto.getRandomValues(new Uint8Array(12))].map(b => b.toString(16).padStart(2, "0")).join("");
  },

  norm(email) { return String(email || "").trim().toLowerCase(); },
  valid(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email); },

  /* ---------- session ---------- */
  current() {
    const e = ZKStore.read("zk_session", null);
    return e ? this._users()[e] || null : null;
  },
  _open(user) {
    ZKStore.write("zk_session", user.email);
    /* keep legacy identity in sync so checkout/thank-you keep working */
    ZKStore.setUser({ name: user.name, email: user.email });
  },
  logout() {
    localStorage.removeItem("zk_session");
  },

  /* ---------- signup / login ---------- */
  async signup(email, password, name) {
    email = this.norm(email);
    if (!this.valid(email)) throw new Error("email");
    if ((password || "").length < 8) throw new Error("weakpass");
    const users = this._users();
    if (users[email]) throw new Error("exists");
    const salt = this._salt();
    const user = {
      email, name: (name || "").trim() || email.split("@")[0],
      nick: "", genres: [], ritual: "", avatar: "📖",
      salt, passHash: await this._hash(password, salt),
      joined: new Date().toISOString().slice(0, 10)
    };
    users[email] = user;
    this._save(users);            /* @API: POST /auth/signup */
    this._open(user);
    return user;
  },

  async login(email, password) {
    email = this.norm(email);
    const user = this._users()[email];
    if (!user) throw new Error("nouser");
    const h = await this._hash(password, user.salt);
    if (h !== user.passHash) throw new Error("badpass");
    this._open(user);              /* @API: POST /auth/login */
    return user;
  },

  update(fields) {
    const me = this.current();
    if (!me) return null;
    const users = this._users();
    Object.assign(users[me.email], fields);
    this._save(users);             /* @API: PATCH /me */
    if (fields.name) ZKStore.setUser({ name: fields.name, email: me.email });
    return users[me.email];
  },

  /* ---------- forgot password (reset code by email) ---------- */
  async requestReset(email) {
    email = this.norm(email);
    const user = this._users()[email];
    if (!user) throw new Error("nouser");
    const code = String(crypto.getRandomValues(new Uint32Array(1))[0] % 900000 + 100000);
    const codes = ZKStore.read("zk_reset", {});
    codes[email] = { h: await this._hash(code, user.salt), exp: Date.now() + 15 * 60 * 1000 };
    ZKStore.write("zk_reset", codes);
    /* @API: server emails the code. Demo mode surfaces the email preview in-page. */
    return code;
  },

  async resetPassword(email, code, newPass) {
    email = this.norm(email);
    const user = this._users()[email];
    const entry = ZKStore.read("zk_reset", {})[email];
    if (!user || !entry) throw new Error("nouser");
    if (Date.now() > entry.exp) throw new Error("expired");
    if (await this._hash(String(code).trim(), user.salt) !== entry.h) throw new Error("badcode");
    if ((newPass || "").length < 8) throw new Error("weakpass");
    user.salt = this._salt();
    user.passHash = await this._hash(newPass, user.salt);
    const users = this._users(); users[email] = user; this._save(users);
    const codes = ZKStore.read("zk_reset", {}); delete codes[email]; ZKStore.write("zk_reset", codes);
    this._open(user);
    return user;
  }
};

/* =========================================================
   Reviews — verified owners only (post-purchase)
   ========================================================= */
const ZKReviews = {
  all() { return ZKStore.read("zk_reviews", {}); },
  list(pid) { return this.all()[pid] || []; },

  /* can this visitor review this product? */
  gate(pid) {
    if (!ZKStore.owns(pid)) return "buy";       /* must purchase first */
    if (!ZKAuth.current()) return "signin";     /* must be signed in  */
    const me = ZKAuth.current();
    if (this.list(pid).some(r => r.email === me.email)) return "done";
    return "ok";
  },

  add(pid, stars, text) {
    if (this.gate(pid) !== "ok") return null;
    const me = ZKAuth.current();
    const all = this.all();
    (all[pid] = all[pid] || []).unshift({
      email: me.email,
      name: me.nick || me.name,
      avatar: me.avatar || "📖",
      stars: Math.max(1, Math.min(5, +stars || 5)),
      text: String(text || "").trim().slice(0, 900),
      date: new Date().toISOString().slice(0, 10)
    });
    ZKStore.write("zk_reviews", all);            /* @API: POST /products/:id/reviews */
    return all[pid][0];
  },

  stats(pid) {
    const l = this.list(pid);
    return l.length
      ? { n: l.length, avg: Math.round(l.reduce((s, r) => s + r.stars, 0) / l.length * 10) / 10 }
      : { n: 0, avg: 0 };
  }
};

/* ---------- header: show avatar when signed in ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const me = ZKAuth.current();
  if (!me) return;
  document.querySelectorAll('.icon-btn[href="account.html"]').forEach(btn => {
    btn.innerHTML = `<span class="avatar-chip" aria-hidden="true">${me.avatar || "📖"}</span>`;
    btn.title = me.nick || me.name;
  });
});
