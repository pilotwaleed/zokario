/* =========================================================
   ZOKARIO accounts, profiles, password reset, reviews
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
    if (typeof ZKMembers !== "undefined") user.memberNo = ZKMembers.assign(email);
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

  /* ---------- change password (signed in, current one verified first) ---------- */
  async changePassword(current, next) {
    const me = this.current();
    if (!me) throw new Error("nouser");
    if (await this._hash(current, me.salt) !== me.passHash) throw new Error("badpass");
    if ((next || "").length < 8) throw new Error("weakpass");
    const users = this._users();
    const u = users[me.email];
    u.salt = this._salt();
    u.passHash = await this._hash(next, u.salt);
    this._save(users);             /* @API: POST /me/password */
    return u;
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
   ZKPass: password quality. Length does the heavy lifting,
   plus a blocklist of the passwords every burglar tries first.
   ========================================================= */
const ZKPass = {
  COMMON: [
    "123456", "123456789", "12345678", "1234567", "12345", "1234567890",
    "password", "password1", "password123", "passw0rd", "p@ssword", "p@ssw0rd",
    "qwerty", "qwerty123", "qwertyuiop", "azerty", "asdfghjkl", "1q2w3e4r",
    "abc123", "abcd1234", "abc12345", "111111", "000000", "121212", "123123",
    "654321", "666666", "112233", "iloveyou", "admin", "admin123", "welcome",
    "welcome1", "letmein", "monkey", "dragon", "sunshine", "princess",
    "football", "baseball", "superman", "batman", "trustno1", "master", "shadow"
  ],
  common(pw) { return this.COMMON.includes(String(pw || "").toLowerCase()); },
  /* level: 0 too short · 1 fragile · 2 fair · 3 strong · 4 vault */
  score(pw) {
    pw = String(pw || "");
    if (this.common(pw)) return { level: 1, common: true };
    const L = pw.length;
    return { level: L < 8 ? 0 : L < 11 ? 1 : L < 14 ? 2 : L < 18 ? 3 : 4, common: false };
  }
};

/* ---------- show/hide toggle on every password field ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const EYE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 12c1.4-3.4 5-7 10-7s8.6 3.6 10 7c-1.4 3.4-5 7-10 7S3.4 15.4 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>';
  const EYE_OFF = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 3l18 18"/><path d="M10.6 5.1c.5-.1.9-.1 1.4-.1 5 0 8.6 3.6 10 7-.4 1.1-1.2 2.4-2.3 3.5M6.3 6.5C4.4 7.9 2.8 9.9 2 12c1.4 3.4 5 7 10 7 1.5 0 3-.3 4.3-.9"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>';
  document.querySelectorAll('input[type="password"]').forEach(input => {
    const wrap = document.createElement("span");
    wrap.className = "pw-wrap";
    input.parentNode.insertBefore(wrap, input);
    wrap.appendChild(input);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pw-toggle";
    const paint = () => {
      const showing = input.type === "text";
      btn.setAttribute("aria-label", ZKT(showing ? "au.hidePw" : "au.showPw"));
      btn.setAttribute("aria-pressed", showing);
      btn.innerHTML = showing ? EYE_OFF : EYE;
    };
    paint();
    btn.addEventListener("click", () => {
      input.type = input.type === "password" ? "text" : "password";
      paint();
      input.focus({ preventScroll: true });
    });
    wrap.appendChild(btn);
  });
});

/* =========================================================
   Reviews: verified owners only (post-purchase)
   ========================================================= */
const ZKReviews = {
  /* cached for the page lifetime: zkStars parses this store once per rendered
     card otherwise; add() below is the only write path and updates the cache */
  _all: null,
  all() { return this._all ?? (this._all = ZKStore.read("zk_reviews", {})); },
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
    this._all = all;
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
