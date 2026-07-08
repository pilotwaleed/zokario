/* =========================================================
   ZOKARIO community engine
   Levels, subscriptions, forums, chat, moderation, spin,
   reports, flash deals, admin authority.
   Demo storage: localStorage. Every write path is marked
   @API for the future backend swap.
   ========================================================= */

/* ---------- tiny shared helpers ---------- */
const ZKC = {
  read(k, fb) { try { const v = JSON.parse(localStorage.getItem(k)); return v ?? fb; } catch { return fb; } },
  write(k, v) { localStorage.setItem(k, JSON.stringify(v)); }, /* @API */
  now() { return Date.now(); },
  id() { return Math.random().toString(36).slice(2, 10); },
  esc(s) { return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); },
  day() { return new Date().toDateString(); },
  me() { return (typeof ZKAuth !== "undefined" && ZKAuth.current) ? ZKAuth.current() : null; }
};

/* =========================================================
   OWNER + ROLES
   The house account. Full authority lives here.
   ========================================================= */
const ZK_OWNER_EMAILS = ["pilotwaleed93@gmail.com"]; /* @API server-side role check */
const ZK_OWNER_NAME = "Waleed";

const ZKRole = {
  of(user) {
    if (!user) return "guest";
    if (ZK_OWNER_EMAILS.includes((user.email || "").toLowerCase()) || user.name === ZK_OWNER_NAME) return "owner";
    if (ZKC.read("zk_admins", []).includes(user.email)) return "admin";
    return "member";
  },
  meIs(role) { const u = ZKC.me(); return u && this.of(u) === role; },
  canModerate() { const u = ZKC.me(); const r = this.of(u); return r === "owner" || r === "admin"; },
  isOwner() { return this.meIs("owner"); },
  setAdmin(email, on) { /* owner only. @API */
    if (!this.isOwner()) return false;
    let l = ZKC.read("zk_admins", []);
    l = on ? [...new Set([...l, email])] : l.filter(e => e !== email);
    ZKC.write("zk_admins", l);
    ZKReports.log("admin", (on ? "Admin appointed: " : "Admin removed: ") + email);
    return true;
  }
};

/* =========================================================
   LEVELS: points, tiers, name colors
   Colors follow the member everywhere: reviews, forums, chat.
   ========================================================= */
const ZK_TIERS = [
  { key: "page",    min: 0,    name: "Page Turner",     ar: "مقلب الصفحات",   fr: "Tourneur de pages",  color: "#E8DCC5", sym: "❧" },
  { key: "ink",     min: 60,   name: "Ink Apprentice",  ar: "متدرب الحبر",    fr: "Apprenti d'encre",   color: "#C89B6A", sym: "✎" },
  { key: "chapter", min: 180,  name: "Chapter Chaser",  ar: "ملاحق الفصول",   fr: "Chasseur de chapitres", color: "#A8BF8F", sym: "❦" },
  { key: "plot",    min: 420,  name: "Plot Weaver",     ar: "حائك الحكايات",  fr: "Tisseur d'intrigues", color: "#8FB3D9", sym: "✒" },
  { key: "shelf",   min: 900,  name: "Shelf Master",    ar: "سيد الرف",       fr: "Maitre d'etagere",   color: "#B79BE0", sym: "⚜" },
  { key: "keeper",  min: 1800, name: "Keeper of Tales", ar: "حارس الحكايات",  fr: "Gardien des contes", color: "#E0A3A3", sym: "♕" }
];

const ZKLevels = {
  points(email) { return ZKC.read("zk_points", {})[email || (ZKC.me()?.email)] || 0; },
  add(n, email) { /* @API */
    const e = email || ZKC.me()?.email; if (!e) return;
    const p = ZKC.read("zk_points", {}); p[e] = (p[e] || 0) + n; ZKC.write("zk_points", p);
  },
  tier(email) {
    const u = ZKC.me();
    const targetEmail = email || u?.email;
    /* penalties can demote for a period */
    const pen = ZKMod.state(targetEmail);
    let pts = this.points(targetEmail);
    let t = [...ZK_TIERS].reverse().find(t => pts >= t.min) || ZK_TIERS[0];
    if (pen.demotedUntil > ZKC.now()) {
      const i = Math.max(0, ZK_TIERS.indexOf(t) - 1);
      t = ZK_TIERS[i];
    }
    return t;
  },
  /* the colored signature: name + tier color + symbol, used site-wide */
  badge(user, opts = {}) {
    if (!user) return "";
    const email = user.email || user;
    const name = user.name || ZKForum.nameOf(email) || email.split("@")[0];
    const role = ZKRole.of(typeof user === "object" ? user : { email, name });
    const sub = ZKSub.isActive(email);
    let color, sym, title;
    if (role === "owner") { color = "owner"; sym = "♛"; title = "The Publisher"; }
    else if (role === "admin") { color = "#D97A7A"; sym = "⚜"; title = "House Admin"; }
    else { const t = this.tier(email); color = sub ? "gilded" : t.color; sym = ZKSym.of(email) || t.sym; title = t.name; }
    const cls = color === "owner" ? "mname mname-owner" : color === "gilded" ? "mname mname-gilded" : "mname";
    const style = (color !== "owner" && color !== "gilded") ? `style="color:${color}"` : "";
    return `<span class="${cls}" ${style} title="${ZKC.esc(title)}"><i class="msym">${sym}</i>${ZKC.esc(name)}</span>`;
  }
};

/* member symbols: chosen figure next to name/topics. Some free, some Gilded-only */
const ZK_SYMBOLS = {
  free:   ["❧", "✎", "❦", "☾", "✶", "⚓", "🕊", "🌿"],
  gilded: ["♛", "🦚", "🗝", "🕯", "🌙", "🎻", "🦢", "🏛"]
};
const ZKSym = {
  of(email) { return ZKC.read("zk_symbols", {})[email]; },
  set(sym) { /* @API */
    const u = ZKC.me(); if (!u) return false;
    if (ZK_SYMBOLS.gilded.includes(sym) && !ZKSub.isActive(u.email) && ZKRole.of(u) === "member") return "locked";
    const m = ZKC.read("zk_symbols", {}); m[u.email] = sym; ZKC.write("zk_symbols", m); return true;
  }
};

/* =========================================================
   SUBSCRIPTION: The Gilded Circle
   ========================================================= */
const ZK_SUB_PLANS = {
  monthly: { price: 4.99, days: 31, label: "Monthly" },
  yearly:  { price: 39,   days: 366, label: "Yearly" }
};

const ZKSub = {
  state(email) { return ZKC.read("zk_subs", {})[email || ZKC.me()?.email] || null; },
  isActive(email) { const s = this.state(email); return !!s && s.until > ZKC.now(); },
  start(plan) { /* demo checkout. @API payment gateway */
    const u = ZKC.me(); if (!u) return false;
    const p = ZK_SUB_PLANS[plan]; if (!p) return false;
    const subs = ZKC.read("zk_subs", {});
    const base = this.isActive(u.email) ? subs[u.email].until : ZKC.now();
    subs[u.email] = { plan, until: base + p.days * 864e5, started: ZKC.now() };
    ZKC.write("zk_subs", subs);
    ZKReports.log("sub", `${u.name || u.email} joined the Gilded Circle (${plan})`);
    ZKLevels.add(40, u.email);
    return true;
  },
  grantDays(days, email) { /* spin prize / owner gift. @API */
    const e = email || ZKC.me()?.email; if (!e) return;
    const subs = ZKC.read("zk_subs", {});
    const base = this.isActive(e) ? subs[e].until : ZKC.now();
    subs[e] = { plan: subs[e]?.plan || "gift", until: base + days * 864e5, started: subs[e]?.started || ZKC.now() };
    ZKC.write("zk_subs", subs);
  },
  /* Gilded discounts: rotating monthly picks, 15 to 60 percent, cap 2 buys/month */
  monthKey() { const d = new Date(); return d.getFullYear() + "-" + d.getMonth(); },
  picks() {
    /* deterministic monthly rotation so every member sees the same gilded shelf */
    const seedStr = this.monthKey();
    let seed = 0; for (const c of seedStr) seed = (seed * 31 + c.charCodeAt(0)) >>> 0;
    const rng = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32;
    const pool = (typeof ZK !== "undefined" ? ZK.products : []).filter(p => p.type === "book");
    const picks = [];
    const used = new Set();
    while (picks.length < Math.min(6, pool.length)) {
      const i = Math.floor(rng() * pool.length);
      if (used.has(i)) continue; used.add(i);
      picks.push({ id: pool[i].id, off: 15 + Math.floor(rng() * 10) * 5 }); /* 15..60 */
    }
    return picks;
  },
  discountFor(pid) {
    const u = ZKC.me(); if (!u || !this.isActive(u.email)) return 0;
    const pick = this.picks().find(p => p.id === pid);
    if (!pick) return 0;
    if (this.usedThisMonth(u.email) >= 2) return 0;
    return pick.off;
  },
  usedThisMonth(email) {
    const use = ZKC.read("zk_sub_use", {});
    return (use[email + ":" + this.monthKey()] || 0);
  },
  recordUse(email) { /* called by checkout when a gilded discount applied. @API */
    const use = ZKC.read("zk_sub_use", {});
    const k = email + ":" + this.monthKey();
    use[k] = (use[k] || 0) + 1; ZKC.write("zk_sub_use", use);
  }
};

/* =========================================================
   AUTO-MODERATOR
   Severity-weighted strike ladder:
   1pt warning · 2pts tier demotion 30d · 3pts suspend 30d ·
   4-5pts suspend 90d · 6pts+ permanent. Appeals: 72h.
   ========================================================= */
const ZKMod = {
  words: { en: { mild: [], severe: [] }, ar: { mild: [], severe: [] } }, /* filled from ZK_MODWORDS below */
  scan(text) {
    const t = " " + String(text).toLowerCase().replace(/[.,!?؛،:؟]/g, " ") + " ";
    let hit = null;
    for (const lang of ["en", "ar"]) {
      for (const w of this.words[lang].severe) if (t.includes(" " + w + " ")) return { level: "severe", word: w };
      for (const w of this.words[lang].mild) if (t.includes(" " + w + " ")) hit = { level: "mild", word: w };
    }
    return hit;
  },
  state(email) {
    const all = ZKC.read("zk_penalties", {});
    return all[email] || { strikes: 0, log: [], demotedUntil: 0, suspendedUntil: 0, banned: false, mutedUntil: 0 };
  },
  save(email, st) { const all = ZKC.read("zk_penalties", {}); all[email] = st; ZKC.write("zk_penalties", all); }, /* @API */
  penalize(email, level, context) {
    const st = this.state(email);
    const pts = level === "severe" ? 2 : 1;
    st.strikes += pts;
    let action;
    if (st.strikes >= 6) { st.banned = true; action = "permanent suspension"; }
    else if (st.strikes >= 4) { st.suspendedUntil = ZKC.now() + 90 * 864e5; action = "3 month suspension"; }
    else if (st.strikes >= 3) { st.suspendedUntil = ZKC.now() + 30 * 864e5; action = "1 month suspension"; }
    else if (st.strikes >= 2) { st.demotedUntil = ZKC.now() + 30 * 864e5; action = "tier demotion for a month"; }
    else { action = "formal warning"; }
    st.log.push({ at: ZKC.now(), level, context: (context || "").slice(0, 80), action });
    this.save(email, st);
    ZKReports.log("penalty", `${ZKForum.nameOf(email) || email}: ${action} (${level}: "${context?.slice(0, 40)}")`);
    return action;
  },
  /* gate every piece of user text through this */
  check(text) {
    const u = ZKC.me(); if (!u) return { ok: false, reason: "signin" };
    const st = this.state(u.email);
    if (st.banned) return { ok: false, reason: "banned" };
    if (st.suspendedUntil > ZKC.now()) return { ok: false, reason: "suspended", until: st.suspendedUntil };
    if (st.mutedUntil > ZKC.now()) return { ok: false, reason: "muted", until: st.mutedUntil };
    const hit = this.scan(text);
    if (hit) {
      const action = this.penalize(u.email, hit.level, text);
      return { ok: false, reason: "modded", action, level: hit.level };
    }
    return { ok: true };
  },
  mute(email, minutes) { /* moderators + auto chat-mod. @API */
    const st = this.state(email); st.mutedUntil = ZKC.now() + minutes * 6e4; this.save(email, st);
    ZKReports.log("penalty", `${ZKForum.nameOf(email) || email} muted ${minutes}m`);
  },
  ban(email, on) { if (!ZKRole.canModerate()) return; const st = this.state(email); st.banned = !!on; this.save(email, st); ZKReports.log("penalty", `${email} ${on ? "banned" : "restored"} by the house`); },
  clear(email) { if (!ZKRole.canModerate()) return; this.save(email, { strikes: 0, log: [], demotedUntil: 0, suspendedUntil: 0, banned: false, mutedUntil: 0 }); ZKReports.log("penalty", `${email} record cleared`); },
  /* appeals */
  appeal(text) { /* @API */
    const u = ZKC.me(); if (!u) return false;
    const a = ZKC.read("zk_appeals", []);
    a.unshift({ id: ZKC.id(), email: u.email, name: u.name, text: text.slice(0, 800), at: ZKC.now(), status: "pending" });
    ZKC.write("zk_appeals", a);
    ZKReports.log("appeal", `Appeal filed by ${u.name || u.email}`);
    return true;
  }
};

/* =========================================================
   FORUMS
   Wings: en / ar / intl. Sections per wing.
   ========================================================= */
const ZK_WINGS = {
  en:   { name: "The English Wing", flag: "🕮" },
  ar:   { name: "الجناح العربي", flag: "☪" },
  intl: { name: "The International Salon", flag: "🕊" }
};
const ZK_SECTIONS = [
  { key: "reading",    icon: "📖", gilded: false },
  { key: "club",       icon: "🫖", gilded: false },
  { key: "open",       icon: "🎙", gilded: false },
  { key: "bookaholic", icon: "📚", gilded: false },
  { key: "contest",    icon: "🏆", gilded: false },
  { key: "gilded",     icon: "✦",  gilded: true }
];

const ZKForum = {
  names() { return ZKC.read("zk_names", {}); },
  nameOf(email) { return this.names()[email]; },
  rememberName(email, name) { const n = this.names(); n[email] = name; ZKC.write("zk_names", n); },
  topics(wing, section) {
    let l = ZKC.read("zk_topics", []);
    if (wing) l = l.filter(t => t.wing === wing);
    if (section) l = l.filter(t => t.section === section || t.all);
    return l.sort((a, b) => (b.pinned - a.pinned) || (b.at - a.at));
  },
  byId(id) { return ZKC.read("zk_topics", []).find(t => t.id === id); },
  saveAll(l) { ZKC.write("zk_topics", l); }, /* @API */
  post(wing, section, title, body, icon) {
    const gate = ZKMod.check(title + " " + body); if (!gate.ok) return gate;
    const u = ZKC.me();
    const sec = ZK_SECTIONS.find(s => s.key === section);
    if (sec?.gilded && !ZKSub.isActive(u.email) && !ZKRole.canModerate()) return { ok: false, reason: "gilded" };
    const l = ZKC.read("zk_topics", []);
    const t = { id: ZKC.id(), wing, section, icon: icon || "💬", title: title.slice(0, 120), author: u.email,
      body: body.slice(0, 4000), at: ZKC.now(), views: 0, likes: [], replies: [], pinned: 0, closed: false, seed: false };
    l.unshift(t); this.saveAll(l);
    this.rememberName(u.email, u.name);
    ZKLevels.add(15, u.email);
    return { ok: true, id: t.id };
  },
  reply(topicId, text) {
    const gate = ZKMod.check(text); if (!gate.ok) return gate;
    const u = ZKC.me();
    const l = ZKC.read("zk_topics", []);
    const t = l.find(x => x.id === topicId);
    if (!t || t.closed) return { ok: false, reason: "closed" };
    t.replies.push({ id: ZKC.id(), author: u.email, text: text.slice(0, 2000), at: ZKC.now(), likes: [] });
    this.saveAll(l);
    this.rememberName(u.email, u.name);
    ZKLevels.add(5, u.email);
    return { ok: true };
  },
  view(topicId) { const l = ZKC.read("zk_topics", []); const t = l.find(x => x.id === topicId); if (t) { t.views++; this.saveAll(l); } },
  like(topicId, replyId) {
    const u = ZKC.me(); if (!u) return false;
    const l = ZKC.read("zk_topics", []);
    const t = l.find(x => x.id === topicId); if (!t) return false;
    const target = replyId ? t.replies.find(r => r.id === replyId) : t;
    if (!target) return false;
    const i = target.likes.indexOf(u.email);
    i === -1 ? target.likes.push(u.email) : target.likes.splice(i, 1);
    this.saveAll(l);
    return i === -1;
  },
  /* moderator powers */
  pin(topicId, on) { if (!ZKRole.canModerate()) return; const l = ZKC.read("zk_topics", []); const t = l.find(x => x.id === topicId); if (t) { t.pinned = on ? 1 : 0; this.saveAll(l); } },
  close(topicId, on) { if (!ZKRole.canModerate()) return; const l = ZKC.read("zk_topics", []); const t = l.find(x => x.id === topicId); if (t) { t.closed = !!on; this.saveAll(l); } },
  remove(topicId) { if (!ZKRole.canModerate()) return; this.saveAll(ZKC.read("zk_topics", []).filter(t => t.id !== topicId)); ZKReports.log("mod", "Topic removed: " + topicId); },
  removeReply(topicId, replyId) { if (!ZKRole.canModerate()) return; const l = ZKC.read("zk_topics", []); const t = l.find(x => x.id === topicId); if (t) { t.replies = t.replies.filter(r => r.id !== replyId); this.saveAll(l); } },
  /* custom sections added by the owner */
  extraSections() { return ZKC.read("zk_extra_sections", []); },
  addSection(key, icon, names) { /* owner. @API */
    if (!ZKRole.isOwner()) return false;
    const l = this.extraSections(); l.push({ key, icon, names }); ZKC.write("zk_extra_sections", l); return true;
  }
};

/* =========================================================
   LIVE CHAT: The Fireplace
   Rules shown first, auto-moderated, mutable.
   ========================================================= */
const ZKChat = {
  list(wing) { return ZKC.read("zk_chat_" + wing, []); },
  send(wing, text) {
    const gate = ZKMod.check(text);
    if (!gate.ok) {
      if (gate.reason === "modded" && gate.level === "mild") ZKMod.mute(ZKC.me().email, 15);
      return gate;
    }
    const u = ZKC.me();
    const l = this.list(wing);
    l.push({ id: ZKC.id(), author: u.email, text: text.slice(0, 280), at: ZKC.now() });
    if (l.length > 60) l.splice(0, l.length - 60);
    ZKC.write("zk_chat_" + wing, l); /* @API websocket */
    ZKForum.rememberName(u.email, u.name);
    return { ok: true };
  },
  removeMsg(wing, id) { if (!ZKRole.canModerate()) return; ZKC.write("zk_chat_" + wing, this.list(wing).filter(m => m.id !== id)); }
};

/* =========================================================
   DAILY SPIN: The Wheel of Wonders
   ========================================================= */
const ZK_PRIZES = [
  { key: "book",    label: "A free book of the house's choosing", weight: 4 },
  { key: "c25",     label: "25% off coupon, 48 hours",            weight: 10 },
  { key: "c10",     label: "10% off coupon, 48 hours",            weight: 18 },
  { key: "gilded7", label: "One gilded week, on the house",       weight: 6 },
  { key: "shimmer", label: "Name shimmer for 7 days",             weight: 10 },
  { key: "symbol",  label: "A rare symbol, yours to keep",        weight: 8 },
  { key: "points",  label: "+20 reader points",                   weight: 24 },
  { key: "quote",   label: "A line to carry into your day",       weight: 20 }
];
const ZKSpin = {
  canSpin() {
    const u = ZKC.me(); if (!u) return false;
    const last = ZKC.read("zk_spin_last", {})[u.email];
    return last !== ZKC.day();
  },
  spinsToday() { return ZKSub.isActive(ZKC.me()?.email) ? 2 : 1; },
  spun() { const u = ZKC.me(); const m = ZKC.read("zk_spin_count", {}); return m[u.email + ":" + ZKC.day()] || 0; },
  spin() { /* @API server-side RNG in production */
    const u = ZKC.me(); if (!u) return null;
    if (this.spun() >= this.spinsToday()) return null;
    const total = ZK_PRIZES.reduce((a, p) => a + p.weight, 0);
    let r = Math.random() * total, prize = ZK_PRIZES[ZK_PRIZES.length - 1];
    for (const p of ZK_PRIZES) { r -= p.weight; if (r <= 0) { prize = p; break; } }
    /* apply */
    if (prize.key === "points") ZKLevels.add(20, u.email);
    if (prize.key === "gilded7") ZKSub.grantDays(7, u.email);
    if (prize.key === "shimmer") { const m = ZKC.read("zk_shimmer", {}); m[u.email] = ZKC.now() + 7 * 864e5; ZKC.write("zk_shimmer", m); }
    if (prize.key === "symbol") { const m = ZKC.read("zk_symbols", {}); m[u.email] = ZK_SYMBOLS.gilded[Math.floor(Math.random() * ZK_SYMBOLS.gilded.length)]; ZKC.write("zk_symbols", m); }
    if (prize.key === "c25" || prize.key === "c10") {
      const c = ZKC.read("zk_spin_coupons", {}); c[u.email] = { off: prize.key === "c25" ? 25 : 10, until: ZKC.now() + 48 * 36e5 }; ZKC.write("zk_spin_coupons", c);
    }
    if (prize.key === "book") {
      const pool = ZK.products.filter(p => p.type === "book" && !ZKStore.owns(p.id));
      const pick = pool[Math.floor(Math.random() * pool.length)];
      if (pick) { ZKStore.grant(pick.id); prize.granted = pick.title; }
    }
    const m = ZKC.read("zk_spin_count", {}); m[u.email + ":" + ZKC.day()] = this.spun() + 1; ZKC.write("zk_spin_count", m);
    const last = ZKC.read("zk_spin_last", {}); last[u.email] = ZKC.day(); ZKC.write("zk_spin_last", last);
    ZKLevels.add(2, u.email);
    return prize;
  }
};

/* =========================================================
   REPORTS to the owner's desk
   ========================================================= */
const ZKReports = {
  log(kind, text) { /* @API push notification */
    const l = ZKC.read("zk_reports", []);
    l.unshift({ id: ZKC.id(), kind, text: String(text).slice(0, 200), at: ZKC.now(), read: false });
    if (l.length > 400) l.length = 400;
    ZKC.write("zk_reports", l);
  },
  list() { return ZKC.read("zk_reports", []); },
  unread() { return this.list().filter(r => !r.read).length; },
  markAll() { const l = this.list(); l.forEach(r => r.read = true); ZKC.write("zk_reports", l); }
};

/* =========================================================
   FLASH DEALS: a personal discount that finds you
   Random member deal: 15 to 60 percent for 3 hours.
   ========================================================= */
const ZKFlash = {
  current() {
    const u = ZKC.me(); if (!u) return null;
    const d = ZKC.read("zk_flash", {})[u.email];
    return (d && d.until > ZKC.now() && !ZKStore.owns(d.id)) ? d : null;
  },
  maybeStrike() {
    const u = ZKC.me(); if (!u) return null;
    const all = ZKC.read("zk_flash", {});
    const existing = all[u.email];
    if (existing && existing.until > ZKC.now()) return null;
    const lastRoll = ZKC.read("zk_flash_roll", {});
    if (lastRoll[u.email] === ZKC.day()) return null;
    lastRoll[u.email] = ZKC.day(); ZKC.write("zk_flash_roll", lastRoll);
    if (Math.random() > 0.38) return null; /* lightning does not strike every day */
    const pool = ZK.products.filter(p => !ZKStore.owns(p.id));
    const pick = pool[Math.floor(Math.random() * pool.length)];
    if (!pick) return null;
    const deal = { id: pick.id, off: 15 + Math.floor(Math.random() * 10) * 5, until: ZKC.now() + 3 * 36e5 };
    all[u.email] = deal; ZKC.write("zk_flash", all);
    return deal;
  }
};

/* =========================================================
   SUPPORT the house + ATELIER commissions + CONTESTS
   ========================================================= */
const ZKSupport = {
  give(amount) { /* demo. @API payment */
    const u = ZKC.me();
    const l = ZKC.read("zk_support", []);
    l.unshift({ id: ZKC.id(), email: u?.email || "guest", name: u?.name || "A quiet friend", amount: +amount, at: ZKC.now() });
    ZKC.write("zk_support", l);
    if (u) { ZKLevels.add(Math.min(60, Math.round(amount * 4)), u.email); const m = ZKC.read("zk_symbols", {}); if (!m[u.email]) { m[u.email] = "🕯"; ZKC.write("zk_symbols", m); } }
    ZKReports.log("support", `${u?.name || "Someone"} supported the house: $${amount}`);
    return true;
  },
  wall() { return ZKC.read("zk_support", []).slice(0, 12); }
};

const ZKAtelier = {
  PRICE: 12.99,
  submit(req) { /* @API + file upload */
    const u = ZKC.me(); if (!u) return false;
    const l = ZKC.read("zk_atelier", []);
    l.unshift({ id: ZKC.id(), email: u.email, name: u.name, ...req, at: ZKC.now(), status: "paid" });
    ZKC.write("zk_atelier", l);
    ZKReports.log("atelier", `Paid commission from ${u.name}: ${req.kind} (${(req.brief || "").slice(0, 40)})`);
    return true;
  },
  list() { return ZKC.read("zk_atelier", []); }
};

const ZKContest = {
  ENTRY: 5,
  current() { return ZKC.read("zk_contest", { open: true, theme: "The book that changed a season of your life", themeAr: "الكتاب الذي غير فصلا من حياتك", deadline: "quarterly", prize: "Winner takes a $50 shelf credit and a permanent laurel symbol" }); },
  setTheme(theme, themeAr, prize) { if (!ZKRole.isOwner()) return; ZKC.write("zk_contest", { open: true, theme, themeAr, prize, deadline: "quarterly" }); },
  enter(essayTitle) { /* entry fee via demo checkout. @API */
    const u = ZKC.me(); if (!u) return false;
    const l = ZKC.read("zk_contest_entries", []);
    if (l.find(e => e.email === u.email)) return "already";
    l.unshift({ id: ZKC.id(), email: u.email, name: u.name, title: essayTitle.slice(0, 140), at: ZKC.now() });
    ZKC.write("zk_contest_entries", l);
    ZKReports.log("contest", `${u.name} entered the Quarterly Quill`);
    return true;
  },
  entries() { return ZKC.read("zk_contest_entries", []); },
  crown(entryId) { if (!ZKRole.isOwner()) return; const l = this.entries(); const e = l.find(x => x.id === entryId); if (e) { e.winner = true; ZKC.write("zk_contest_entries", l); ZKReports.log("contest", `Winner crowned: ${e.name}`); } }
};

/* =========================================================
   ADMIN PRODUCT AUTHORITY
   Owner edits overlay onto ZK.products at load time.
   ========================================================= */
const ZKCatalog = {
  patches() { return ZKC.read("zk_cat_patches", {}); },
  additions() { return ZKC.read("zk_cat_add", []); },
  apply() {
    if (typeof ZK === "undefined") return;
    const patches = this.patches();
    ZK.products = ZK.products
      .filter(p => !patches[p.id]?.removed)
      .map(p => patches[p.id] ? { ...p, ...patches[p.id].set } : p);
    for (const a of this.additions()) if (!ZK.products.find(p => p.id === a.id)) ZK.products.push(a);
    /* live personal discounts paint oldPrice */
    const flash = (typeof ZKFlash !== "undefined") ? ZKFlash.current() : null;
    ZK.products = ZK.products.map(p => {
      const gild = ZKSub.discountFor(p.id);
      const fl = flash && flash.id === p.id ? flash.off : 0;
      const off = Math.max(gild, fl);
      if (!off) return p;
      const cut = Math.round(p.price * (100 - off)) / 100;
      return { ...p, oldPrice: p.price, price: cut, deal: { off, flash: !!fl && fl >= gild } };
    });
  },
  patch(pid, set) { if (!ZKRole.isOwner()) return false; const p = this.patches(); p[pid] = { ...(p[pid] || {}), set: { ...(p[pid]?.set || {}), ...set } }; ZKC.write("zk_cat_patches", p); return true; }, /* @API */
  removeProduct(pid) { if (!ZKRole.isOwner()) return false; const p = this.patches(); p[pid] = { ...(p[pid] || {}), removed: true }; ZKC.write("zk_cat_patches", p); ZKReports.log("catalog", "Product retired: " + pid); return true; },
  restore(pid) { if (!ZKRole.isOwner()) return false; const p = this.patches(); delete p[pid]; ZKC.write("zk_cat_patches", p); return true; },
  add(prod) { if (!ZKRole.isOwner()) return false; const l = this.additions(); l.push(prod); ZKC.write("zk_cat_add", l); ZKReports.log("catalog", "Product added: " + prod.title); return true; }
};

/* =========================================================
   BOOT: apply catalog, colored names in reviews,
   header forum door, flash toast, new-arrivals notifier
   ========================================================= */
ZKCatalog.apply();

/* moderation wordlists from seeds */
if (typeof ZK_MODWORDS !== "undefined") ZKMod.words = ZK_MODWORDS;

/* first-run seeding: opening topics + pinned regulations per wing */
(function seedForum() {
  if (ZKC.read("zk_topics", []).length || typeof ZK_SEED_TOPICS === "undefined") return;
  const l = [];
  const names = {};
  const mk = (wing, t, i) => {
    const email = "seed:" + t.author.toLowerCase().replace(/\s/g, "");
    names[email] = t.author;
    l.push({ id: ZKC.id(), wing, section: t.section, icon: t.icon, title: t.title, author: email,
      body: t.body.join("\n\n"), at: ZKC.now() - (i + 2) * 36e5 * 7, views: 14 + Math.floor(Math.random() * 90),
      likes: [], replies: (t.replies || []).map(r => {
        const re = "seed:" + r.author.toLowerCase().replace(/\s/g, "");
        names[re] = r.author;
        return { id: ZKC.id(), author: re, text: r.text, at: ZKC.now() - (i + 1) * 36e5 * 6, likes: [] };
      }), pinned: 0, closed: false, seed: true });
  };
  for (const wing of ["en", "ar", "intl"]) (ZK_SEED_TOPICS[wing] || []).forEach((t, i) => mk(wing, t, i));
  /* pinned regulations, visible in every section of the wing */
  if (typeof ZK_REGS !== "undefined") for (const wing of ["en", "ar", "intl"]) {
    const r = ZK_REGS[wing];
    if (!r) continue;
    l.unshift({ id: "regs-" + wing, wing, section: "reading", all: true, icon: "📜", title: r.title,
      author: "seed:thehouse", body: r.intro + "\n\n" + r.rules.map((x, i) => (i + 1) + ". " + x).join("\n") + "\n\n" + r.appeal,
      at: ZKC.now(), views: 200, likes: [], replies: [], pinned: 1, closed: true, seed: true });
  }
  names["seed:thehouse"] = "Zokario";
  ZKC.write("zk_topics", l);
  const existing = ZKC.read("zk_names", {});
  ZKC.write("zk_names", { ...existing, ...names });
})();

document.addEventListener("DOMContentLoaded", () => {
  const u = ZKC.me();

  /* ---- banned wall ---- */
  if (u) {
    const st = ZKMod.state(u.email);
    if (st.banned || st.suspendedUntil > ZKC.now()) {
      if (!/account|terms|privacy/.test(location.pathname) || location.hash !== "#appeal") {
        document.body.insertAdjacentHTML("beforeend", `
        <div class="ban-wall">
          <div class="ban-card">
            <span class="lock-ico" style="margin:0 auto 1.2rem"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg></span>
            <h2 data-i18n="mb.title">This shelf is closed to you for now</h2>
            <p data-i18n="mb.lead">Your account has an active penalty under the house regulations (respect, no profanity, no harassment). You may appeal below; appeals receive an answer within 72 hours.</p>
            <p class="ban-detail">${st.banned ? "Permanent suspension" : "Suspended until " + new Date(st.suspendedUntil).toLocaleDateString()}</p>
            <textarea id="appealText" maxlength="800" placeholder="Write your appeal to the house" data-i18n-ph="mb.ph"></textarea>
            <button class="btn btn-gold" id="appealSend" data-i18n="mb.send">Send the appeal</button>
            <p class="ban-note" data-i18n="mb.note">Reading the open library remains available. Community and purchases are paused.</p>
          </div>
        </div>`);
        document.getElementById("appealSend")?.addEventListener("click", () => {
          const t = document.getElementById("appealText").value.trim();
          if (t.length < 10) return;
          ZKMod.appeal(t);
          document.getElementById("appealSend").textContent = "✓";
          zkToast(ZKT("mb.sent"));
        });
      }
    }
  }

  /* ---- colored member names inside reviews ---- */
  document.querySelectorAll(".rv-author[data-member]").forEach(el => {
    el.innerHTML = ZKLevels.badge({ email: el.dataset.member, name: el.textContent });
  });

  /* ---- header: forum door icon on every page ---- */
  const actions = document.querySelector(".header-actions");
  if (actions && !document.querySelector(".forum-door-btn")) {
    const a = document.createElement("a");
    a.className = "icon-btn forum-door-btn";
    a.href = "forums.html";
    a.setAttribute("aria-label", "The Family Majlis");
    a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 6a8 8 0 0 1 16 0v7a3 3 0 0 1-3 3h-2l-3 4-3-4H7a3 3 0 0 1-3-3z"/><path d="M8.5 9h7M8.5 12.5h4.5"/></svg>';
    const cart = actions.querySelector('[href="cart.html"]');
    actions.insertBefore(a, cart);
  }

  /* ---- owner desk shortcut + report bell ---- */
  if (u && ZKRole.canModerate() && actions && !document.querySelector(".desk-btn")) {
    const unread = ZKReports.unread();
    const a = document.createElement("a");
    a.className = "icon-btn desk-btn";
    a.href = "admin.html";
    a.setAttribute("aria-label", "The Publisher's Desk");
    a.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.6-4.9-2.6-4.9 2.6.9-5.6-4-3.9 5.5-.8z"/></svg>${unread ? `<span class="cart-count show">${unread}</span>` : ""}`;
    actions.insertBefore(a, actions.querySelector(".forum-door-btn"));
  }

  /* ---- flash deal: lightning finds a member ---- */
  if (u && typeof ZK !== "undefined") {
    const fresh = ZKFlash.maybeStrike();
    const deal = fresh || ZKFlash.current();
    if (deal && !sessionStorage.getItem("zk_flash_seen")) {
      sessionStorage.setItem("zk_flash_seen", "1");
      const p = ZK.products.find(x => x.id === deal.id);
      if (p) {
        const mins = Math.max(1, Math.round((deal.until - ZKC.now()) / 6e4));
        document.body.insertAdjacentHTML("beforeend", `
          <a class="flash-ribbon" href="product.html?id=${p.id}">
            <b>⚡ ${ZKT("fd.title")}</b>
            <span>${ZKC.esc(p.title)} · ${deal.off}% ${ZKT("fd.off")} · ${Math.floor(mins / 60)}h ${mins % 60}m</span>
          </a>`);
        setTimeout(() => document.querySelector(".flash-ribbon")?.classList.add("show"), 600);
        setTimeout(() => document.querySelector(".flash-ribbon")?.classList.remove("show"), 12000);
      }
    }
    if (fresh) ZKReports.log("flash", `Flash deal struck ${u.name}: ${deal.id} at ${deal.off}%`);
  }

  /* ---- new arrivals notifier ---- */
  if (typeof ZK !== "undefined" && u) {
    const seen = ZKC.read("zk_seen_products", []);
    const fresh = ZK.products.filter(p => !seen.includes(p.id));
    if (seen.length && fresh.length && !sessionStorage.getItem("zk_new_seen")) {
      sessionStorage.setItem("zk_new_seen", "1");
      setTimeout(() => zkToast(ZKT("na.toast", { n: fresh.length })), 2500);
    }
    ZKC.write("zk_seen_products", ZK.products.map(p => p.id));
    /* daily visit point */
    const dv = ZKC.read("zk_visit", {});
    if (dv[u.email] !== ZKC.day()) { dv[u.email] = ZKC.day(); ZKC.write("zk_visit", dv); ZKLevels.add(3, u.email); }
  }

  /* ---- spin nudge chip ---- */
  if (u && ZKSpin.spun() < ZKSpin.spinsToday() && !/account/.test(location.pathname) && !sessionStorage.getItem("zk_spin_nudge")) {
    sessionStorage.setItem("zk_spin_nudge", "1");
    document.body.insertAdjacentHTML("beforeend",
      `<a class="spin-chip" href="account.html#wheel" aria-label="Daily wheel">🎡 <span data-i18n="sw.chip">${ZKT("sw.chip")}</span></a>`);
    setTimeout(() => document.querySelector(".spin-chip")?.classList.add("show"), 1400);
  }
});
