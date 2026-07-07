/* =========================================================
   ZOKARIO — shared engine
   Store (cart/orders/user), covers, 3D books, UI behaviours.
   ========================================================= */

/* ---------- Store ---------- */
const ZKStore = {
  read(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  write(key, val) { localStorage.setItem(key, JSON.stringify(val)); },

  cart()      { return ZKStore.read("zk_cart", []); },
  setCart(c)  { ZKStore.write("zk_cart", c); ZKStore.badge(); },
  inCart(id)  { return ZKStore.cart().includes(id); },
  add(id) {
    const c = ZKStore.cart();
    if (!c.includes(id)) { c.push(id); ZKStore.setCart(c); return true; }
    return false;
  },
  remove(id)  { ZKStore.setCart(ZKStore.cart().filter(x => x !== id)); },
  clearCart() { ZKStore.setCart([]); },

  coupon()      { return ZKStore.read("zk_coupon", null); },
  setCoupon(c)  { ZKStore.write("zk_coupon", c); },

  totals() {
    const items = ZKStore.cart().map(ZK.byId).filter(Boolean);
    const subtotal = items.reduce((s, p) => s + p.price, 0);
    const code = ZKStore.coupon();
    const rule = code && ZK.coupons[code];
    const discount = rule ? subtotal * rule.pct / 100 : 0;
    return { items, subtotal, discount, code: rule ? code : null, total: Math.max(0, subtotal - discount) };
  },

  orders()      { return ZKStore.read("zk_orders", []); },
  addOrder(o)   { const os = ZKStore.orders(); os.unshift(o); ZKStore.write("zk_orders", os); },
  purchasedIds(){ return [...new Set(ZKStore.orders().flatMap(o => o.items))]; },
  owns(id)      { return ZKStore.purchasedIds().includes(id); },

  user()     { return ZKStore.read("zk_user", null); },
  setUser(u) { ZKStore.write("zk_user", u); },

  progress()          { return ZKStore.read("zk_progress", {}); },
  setProgress(id, v)  { const p = ZKStore.progress(); p[id] = v; ZKStore.write("zk_progress", p); },
  bookmarks(id)       { return ZKStore.read("zk_bm_" + id, []); },
  setBookmarks(id, b) { ZKStore.write("zk_bm_" + id, b); },

  badge() {
    const n = ZKStore.cart().length;
    document.querySelectorAll(".cart-count").forEach(el => {
      el.textContent = n;
      el.classList.toggle("show", n > 0);
    });
  }
};

/* ---------- Cover motifs (inline SVG, stroke = currentColor) ---------- */
const ZK_MOTIFS = {
  ledger:    '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M18 22h44M18 34h44M18 46h30M18 58h38"/><circle cx="58" cy="46" r="7"/></svg>',
  focus:     '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="40" cy="40" r="26" opacity=".45"/><circle cx="40" cy="40" r="15" opacity=".7"/><circle cx="40" cy="40" r="4" fill="currentColor" stroke="none"/></svg>',
  morning:   '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 52a26 26 0 0 1 52 0"/><path d="M40 14v8M16 26l6 6M64 26l-6 6M10 60h60"/></svg>',
  fuel:      '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M40 14c10 12 18 20 18 30a18 18 0 1 1-36 0c0-10 8-18 18-30Z"/><path d="M33 46a8 8 0 0 0 8 8" opacity=".7"/></svg>',
  lighthouse:'<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M34 64l3-34h6l3 34M32 30h16M35 22h10l-2-8h-6l-2 8Z"/><path d="M28 20 14 14M52 20l14-6M26 64h28" opacity=".7"/></svg>',
  arch:      '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M18 62V38a22 22 0 0 1 44 0v24"/><path d="M28 62V40a12 12 0 0 1 24 0v22" opacity=".6"/><path d="M12 62h56"/></svg>',
  nodes:     '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="24" cy="24" r="5"/><circle cx="58" cy="30" r="5"/><circle cx="30" cy="56" r="5"/><circle cx="56" cy="56" r="5"/><path d="M28 27l25 2M27 51l4-22M34 57l17-1M54 34l3 17" opacity=".7"/></svg>',
  rings:     '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="32" cy="40" r="16"/><circle cx="48" cy="40" r="16" opacity=".7"/></svg>',
  moon:      '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M52 16a26 26 0 1 0 12 34 22 22 0 0 1-12-34Z"/><circle cx="56" cy="22" r="2" fill="currentColor" stroke="none"/><circle cx="64" cy="34" r="1.4" fill="currentColor" stroke="none"/></svg>',
  steps:     '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 62h14V48h14V34h14V20h10"/><path d="M14 62V50m52-30v-6" opacity=".5"/></svg>',
  compass:   '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="40" cy="40" r="26"/><path d="M52 28 44 44l-16 8 8-16 16-8Z"/><circle cx="40" cy="40" r="2.4" fill="currentColor" stroke="none"/></svg>',
  grid:      '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="16" y="16" width="20" height="20" rx="2"/><rect x="44" y="16" width="20" height="20" rx="2" opacity=".6"/><rect x="16" y="44" width="20" height="20" rx="2" opacity=".6"/><rect x="44" y="44" width="20" height="20" rx="2"/></svg>',
  spokes:    '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="40" cy="40" r="8"/><path d="M40 12v14M40 54v14M12 40h14M54 40h14M20 20l10 10M50 50l10 10M60 20 50 30M30 50 20 60" opacity=".75"/></svg>',
  vault:     '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="16" y="14" width="48" height="52" rx="4"/><circle cx="40" cy="38" r="10"/><path d="M40 38v14M35 33l10 10M45 33 35 43" opacity=".7"/></svg>',
  check:     '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="40" cy="40" r="26"/><path d="M28 41l8 8 16-18"/></svg>',
  bookmark:  '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M26 14h28v52L40 54 26 66V14Z"/><path d="M32 26h16" opacity=".7"/></svg>',
  quarter:   '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="40" cy="40" r="26"/><path d="M40 40V14A26 26 0 0 1 66 40H40Z" fill="currentColor" opacity=".28" stroke="none"/><path d="M40 40V14M40 40h26"/></svg>'
};

/* ---------- Rendering helpers ---------- */
function zkEsc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function zkCoverVars(p) {
  return `--c1:${p.cover.c1};--c2:${p.cover.c2};--acc:${p.cover.acc}`;
}

function zkCoverFace(p) {
  const typeLabel = p.type === "book" ? "Zokario Editions" : p.type === "template" ? "Zokario Systems" : "Zokario Paper";
  return `<div class="cover-face" style="${zkCoverVars(p)}">
    <span class="cover-pub">Zokario</span>
    <span class="cover-motif">${ZK_MOTIFS[p.cover.motif] || ""}</span>
    <span class="cover-title">${zkEsc(p.title)}</span>
    <span class="cover-sub">${zkEsc(typeLabel)}</span>
  </div>`;
}

function zkBook3d(p, cls) {
  return `<div class="book3d ${cls || ""}" style="${zkCoverVars(p)}">
    <div class="b3-front">${zkCoverFace(p)}</div>
    <div class="b3-back"></div>
    <div class="b3-spine"><span>${zkEsc(p.title)}</span></div>
    <div class="b3-pages"></div>
    <div class="b3-top"></div>
  </div>`;
}

function zkStars(p) {
  const full = Math.round(p.rating);
  return `<span class="stars" aria-label="Rated ${p.rating} out of 5">${"★".repeat(full)}${"☆".repeat(5 - full)} <small>${p.rating} (${p.ratings})</small></span>`;
}

function zkPrice(p) {
  return `${p.oldPrice ? `<span class="price-old">${ZK.fmt(p.oldPrice)}</span>` : ""}<span class="price">${ZK.fmt(p.price)}</span>`;
}

function zkBadge(p) {
  if (p.badges?.includes("bestseller")) return `<span class="pcard-badge">${ZKT("c.bestseller")}</span>`;
  if (p.badges?.includes("new")) return `<span class="pcard-badge">${ZKT("c.new")}</span>`;
  return "";
}

function zkCard(p, delay) {
  return `<article class="pcard reveal ${delay ? "reveal-d" + delay : ""}">
    ${zkBadge(p)}
    <a class="pcard-stage" href="product.html?id=${p.id}" aria-label="${zkEsc(p.title)}">${zkBook3d(p)}</a>
    <div class="pcard-cat">${zkEsc(zkCat(p.category))}</div>
    <h3><a href="product.html?id=${p.id}">${zkEsc(p.title)}</a></h3>
    <p class="pcard-hook">${zkEsc(p.hook)}</p>
    <div class="pcard-meta">${zkStars(p)}<span>${zkPrice(p)}</span></div>
    <div class="pcard-actions">
      <a class="btn btn-ghost btn-sm" href="product.html?id=${p.id}#preview">${ZKT("c.preview")}</a>
      <button class="btn btn-gold btn-sm" data-add="${p.id}">${ZKT("c.addcart")}</button>
    </div>
  </article>`;
}

/* ---------- Toast ---------- */
function zkToast(msg) {
  let wrap = document.querySelector(".toast-wrap");
  if (!wrap) { wrap = document.createElement("div"); wrap.className = "toast-wrap"; document.body.appendChild(wrap); }
  const t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span>${zkEsc(msg)}</span>`;
  wrap.appendChild(t);
  setTimeout(() => { t.classList.add("out"); setTimeout(() => t.remove(), 450); }, 2600);
}

/* ---------- Global behaviours ---------- */
document.addEventListener("DOMContentLoaded", () => {
  ZKStore.badge();

  /* header scroll state */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", scrollY > 12);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
  }

  /* mobile nav */
  const mnav = document.querySelector(".mobile-nav");
  document.querySelector(".menu-toggle")?.addEventListener("click", () => mnav?.classList.add("open"));
  mnav?.addEventListener("click", e => {
    if (e.target.closest("a") || e.target.closest(".close-nav")) mnav.classList.remove("open");
  });

  /* active nav link */
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a, .mobile-nav a").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });

  /* reveal on scroll */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  new MutationObserver(() => {
    document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
  }).observe(document.body, { childList: true, subtree: true });

  /* delegated add-to-cart */
  document.body.addEventListener("click", e => {
    const btn = e.target.closest("[data-add]");
    if (!btn) return;
    const p = ZK.byId(btn.dataset.add);
    if (!p) return;
    if (ZKStore.add(p.id)) zkToast(ZKT("c.toastAdded", { t: p.title }));
    else zkToast(ZKT("c.toastInCart", { t: p.title }));
  });

  /* 3D tilt on cards — lerped via rAF so it glides instead of fighting CSS transitions */
  if (matchMedia("(pointer:fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const tilts = new WeakMap(); /* book -> {x,y,tx,ty,raf,off} */
    const tick = book => {
      const t = tilts.get(book);
      if (!t) return;
      t.x += (t.tx - t.x) * 0.16;
      t.y += (t.ty - t.y) * 0.16;
      book.style.transform = `rotateY(${-22 + t.x * 26}deg) rotateX(${4 - t.y * 14}deg)`;
      if (t.off && Math.abs(t.tx - t.x) < 0.002 && Math.abs(t.ty - t.y) < 0.002) {
        book.style.transition = ""; book.style.transform = ""; tilts.delete(book); return;
      }
      t.raf = requestAnimationFrame(() => tick(book));
    };
    document.body.addEventListener("pointermove", e => {
      const stage = e.target.closest(".pcard-stage, .product-stage, .tilt-book");
      if (!stage) return;
      const book = stage.querySelector(".book3d");
      if (!book) return;
      const r = stage.getBoundingClientRect();
      let t = tilts.get(book);
      if (!t) {
        t = { x: 0, y: 0, tx: 0, ty: 0, raf: 0, off: false };
        tilts.set(book, t);
        book.style.transition = "none";
        t.raf = requestAnimationFrame(() => tick(book));
      }
      t.off = false;
      t.tx = (e.clientX - r.left) / r.width - 0.5;
      t.ty = (e.clientY - r.top) / r.height - 0.5;
    });
    document.body.addEventListener("pointerout", e => {
      const stage = e.target.closest(".pcard-stage, .product-stage, .tilt-book");
      if (!stage) return;
      const book = stage.querySelector(".book3d");
      const t = book && tilts.get(book);
      if (t) { t.off = true; t.tx = 0; t.ty = 0; }
    });
  }

  /* newsletter forms */
  document.querySelectorAll("[data-newsletter]").forEach(f => {
    f.addEventListener("submit", e => {
      e.preventDefault();
      const email = f.querySelector("input[type=email]")?.value.trim();
      if (!email) return;
      const list = ZKStore.read("zk_newsletter", []);
      if (!list.includes(email)) { list.push(email); ZKStore.write("zk_newsletter", list); }
      f.reset();
      zkToast(ZKT("c.toastNews"));
    });
  });

  /* accordions */
  document.body.addEventListener("click", e => {
    const head = e.target.closest(".acc-head");
    if (!head) return;
    const item = head.parentElement;
    const body = item.querySelector(".acc-body");
    const open = item.classList.toggle("open");
    head.setAttribute("aria-expanded", open);
    body.style.maxHeight = open ? body.scrollHeight + "px" : "0px";
  });

  /* footer year */
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  /* lazy videos: start playback only when visible */
  const vids = document.querySelectorAll("video[data-lazy]");
  if (vids.length) {
    const vio = new IntersectionObserver(entries => {
      entries.forEach(en => {
        const v = en.target;
        if (en.isIntersecting) {
          if (!v.dataset.loaded) {
            v.querySelectorAll("source[data-src]").forEach(s => s.src = s.dataset.src);
            v.load(); v.dataset.loaded = "1";
          }
          v.play().catch(() => {});
        } else v.pause();
      });
    }, { rootMargin: "160px" });
    vids.forEach(v => vio.observe(v));
  }
});

/* ---------- Dust particles canvas ---------- */
function zkDust(canvasId) {
  const c = document.getElementById(canvasId);
  if (!c || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = c.getContext("2d");
  let w, h, parts = [], raf;
  const resize = () => {
    w = c.width = c.offsetWidth * devicePixelRatio;
    h = c.height = c.offsetHeight * devicePixelRatio;
  };
  const spawn = () => {
    parts = Array.from({ length: Math.min(70, innerWidth / 18) }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: (Math.random() * 1.6 + .4) * devicePixelRatio,
      vx: (Math.random() - .5) * .12 * devicePixelRatio,
      vy: (-Math.random() * .18 - .04) * devicePixelRatio,
      a: Math.random() * .5 + .1,
      tw: Math.random() * Math.PI * 2
    }));
  };
  const tick = () => {
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.x += p.vx; p.y += p.vy; p.tw += .02;
      if (p.y < -10 || p.x < -10 || p.x > w + 10) { p.x = Math.random() * w; p.y = h + 10; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(228,207,163,${p.a * (0.6 + 0.4 * Math.sin(p.tw))})`;
      ctx.fill();
    }
    raf = requestAnimationFrame(tick);
  };
  resize(); spawn(); tick();
  addEventListener("resize", () => { resize(); spawn(); });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf); else tick();
  });
}

/* ---------- Demo download (styled HTML edition as a real file) ---------- */
function zkDownload(id) {
  const p = ZK.byId(id);
  if (!p) return;
  const chapters = p.chapters.map(ch =>
    `<section><p class="k">${zkEsc(ch.kicker)}</p><h2>${zkEsc(ch.t)}</h2>${ch.paras.map(x => `<p>${zkEsc(x)}</p>`).join("")}</section>`
  ).join("");
  const doc = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${zkEsc(p.title)} — Zokario Edition</title>
<style>body{background:#171210;color:#E9DFC8;font-family:Georgia,serif;max-width:680px;margin:0 auto;padding:60px 24px;line-height:1.85}
h1{font-size:2.2rem;color:#F1E9D8}h2{color:#E4CFA3;margin:2.4em 0 .8em}.k{letter-spacing:.3em;text-transform:uppercase;font-size:.7rem;color:#C8A96A;font-family:sans-serif}
.cover{text-align:center;padding:80px 0;border-bottom:1px solid #3a2f22;margin-bottom:60px}.cover .k{margin-bottom:24px;display:block}
p{margin:0 0 1.1em}.note{margin-top:80px;padding-top:24px;border-top:1px solid #3a2f22;font-size:.85rem;color:#A89B86;font-style:italic}</style></head>
<body><div class="cover"><span class="k">Zokario Editions</span><h1>${zkEsc(p.title)}</h1><p>${zkEsc(p.subtitle)}</p></div>
${chapters}<p class="note">This is your Zokario digital edition preview file. In the production store, this download is replaced by the complete typeset PDF and ePub, delivered securely after purchase.</p></body></html>`;
  const blob = new Blob([doc], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = p.id + "-zokario-edition.html";
  a.click();
  URL.revokeObjectURL(a.href);
  zkToast("Your edition is downloading");
}

/* =========================================================
   Margin notes — literary quotes met on the way
   ========================================================= */
const ZK_QUOTES = {
  en: [
    { q: "I have always imagined that Paradise will be a kind of library.", a: "Jorge Luis Borges" },
    { q: "A room without books is like a body without a soul.", a: "Cicero" },
    { q: "A book must be the axe for the frozen sea within us.", a: "Franz Kafka" },
    { q: "The reading of all good books is like a conversation with the finest minds of past centuries.", a: "René Descartes" },
    { q: "Books are a uniquely portable magic.", a: "Stephen King" },
    { q: "There is no friend as loyal as a book.", a: "Ernest Hemingway" },
    { q: "We read to know we are not alone.", a: "William Nicholson" },
    { q: "A reader lives a thousand lives before he dies.", a: "George R. R. Martin" }
  ],
  ar: [
    { q: "الكتابُ هو الجليس الذي لا يُطريك، والصديق الذي لا يُغريك.", a: "الجاحظ" },
    { q: "أعزُّ مكانٍ في الدُّنى سرجُ سابحٍ، وخيرُ جليسٍ في الزمانِ كتابُ.", a: "المتنبي" },
    { q: "العلمُ صيدٌ والكتابةُ قيدُه؛ قيِّد صيودَك بالحبال الواثقة.", a: "الإمام الشافعي" },
    { q: "القراءة وحدها هي التي تعطي الإنسان أكثر من حياةٍ واحدة.", a: "عباس محمود العقاد" },
    { q: "الكتابُ وعاءٌ مُلئ علماً، وظرفٌ حُشي ظَرفاً.", a: "الجاحظ" },
    { q: "لم أرَ واعظاً أبلغَ من كتاب.", a: "من حكم العرب" },
    { q: "الكتب هي الحياة التي لم نعشها بعد.", a: "طه حسين" },
    { q: "نِعم الأنيسُ إذا خلوتَ كتابُ.", a: "من الشعر العربي" }
  ],
  fr: [
    { q: "Une heure de lecture est le souverain remède contre les dégoûts de la vie.", a: "Montesquieu" },
    { q: "La lecture est une amitié.", a: "Marcel Proust" },
    { q: "Lisez pour vivre.", a: "Gustave Flaubert" },
    { q: "Le paradis, je l’ai toujours imaginé comme une bibliothèque.", a: "Jorge Luis Borges" },
    { q: "On ne lit jamais un livre : on se lit à travers les livres.", a: "Romain Rolland" },
    { q: "Un livre est un ami qui ne trompe jamais.", a: "Guilbert de Pixérécourt" },
    { q: "La lecture agrandit l’âme.", a: "Voltaire" },
    { q: "Chaque lecture est une seconde vie.", a: "Proverbe de lecteur" }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  /* quote bands: each slot gets its own quote, never twice the same on one page */
  const slots = document.querySelectorAll("[data-quote]");
  if (slots.length) {
    const lang = typeof ZKLang !== "undefined" ? ZKLang.code() : "en";
    const pool = [...(ZK_QUOTES[lang] || ZK_QUOTES.en)];
    slots.forEach(slot => {
      if (!pool.length) return;
      const pick = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
      slot.innerHTML = `<div class="container quote-inner reveal">
        <span class="q-orn" aria-hidden="true">✦</span>
        <blockquote>${zkEsc(pick.q)}</blockquote>
        <cite>— ${zkEsc(pick.a)}</cite>
      </div>`;
    });
  }

  /* fly-to-cart: a little gilded book arcs into the bag */
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.body.addEventListener("click", e => {
      const btn = e.target.closest("[data-add]");
      const cart = document.querySelector('.icon-btn[href="cart.html"]');
      if (!btn || !cart) return;
      const b = btn.getBoundingClientRect(), c = cart.getBoundingClientRect();
      const fly = document.createElement("span");
      fly.className = "fly-book";
      fly.style.left = b.left + b.width / 2 + "px";
      fly.style.top = b.top + b.height / 2 + "px";
      document.body.appendChild(fly);
      fly._gc = setTimeout(() => fly.remove(), 1400); /* safety if animation is cancelled */
      const dx = c.left + c.width / 2 - (b.left + b.width / 2);
      const dy = c.top + c.height / 2 - (b.top + b.height / 2);
      fly.animate([
        { transform: "translate(-50%,-50%) rotate(0deg) scale(1)", opacity: 1, offset: 0 },
        { transform: `translate(calc(-50% + ${dx * 0.5}px), calc(-50% + ${dy - 90}px)) rotate(-14deg) scale(.85)`, opacity: 1, offset: 0.55 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(8deg) scale(.15)`, opacity: 0.2, offset: 1 }
      ], { duration: 750, easing: "cubic-bezier(.3,.7,.25,1)" }).onfinish = () => {
        fly.remove();
        clearTimeout(fly._gc);
        const badge = cart.querySelector(".cart-count");
        if (badge) {
          badge.animate([
            { transform: "scale(1)" }, { transform: "scale(1.5)" }, { transform: "scale(1)" }
          ], { duration: 380, easing: "cubic-bezier(.34,1.56,.64,1)" });
        }
      };
    });
  }
});
