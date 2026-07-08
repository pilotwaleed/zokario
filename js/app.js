/* =========================================================
   ZOKARIO shared engine
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
  grant(id)     { ZKStore.addOrder({ id: "GIFT-" + Math.random().toString(36).slice(2, 8).toUpperCase(), items: [id], total: 0, at: Date.now(), gift: true }); }, /* @API */

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
  quarter:   '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="40" cy="40" r="26"/><path d="M40 40V14A26 26 0 0 1 66 40H40Z" fill="currentColor" opacity=".28" stroke="none"/><path d="M40 40V14M40 40h26"/></svg>',
  boat:      '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M40 18v26M40 20l16 22H40zM40 26 28 44h12"/><path d="M18 52h44l-6 10H24z"/><path d="M14 66c4-3 8-3 12 0s8 3 12 0 8-3 12 0 8 3 12 0" opacity=".6"/></svg>',
  fox:       '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 20l6 12 12-4 12 4 6-12M22 20c-2 14 2 30 18 40 16-10 20-26 18-40M28 32l-6-12M52 32l6-12"/><path d="M34 44l6 6 6-6M40 50v6" opacity=".8"/><circle cx="33" cy="38" r="1.4" fill="currentColor" stroke="none"/><circle cx="47" cy="38" r="1.4" fill="currentColor" stroke="none"/></svg>',
  star:      '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M40 14c2 12 8 18 20 20-12 2-18 8-20 20-2-12-8-18-20-20 12-2 18-8 20-20Z"/><circle cx="20" cy="20" r="1.6" fill="currentColor" stroke="none"/><circle cx="62" cy="24" r="1.2" fill="currentColor" stroke="none"/><circle cx="58" cy="60" r="1.6" fill="currentColor" stroke="none"/><circle cx="22" cy="58" r="1.2" fill="currentColor" stroke="none"/></svg>',
  frame:     '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="16" y="12" width="48" height="56" rx="2"/><rect x="24" y="20" width="32" height="40" opacity=".7"/><path d="M16 12l8 8M64 12l-8 8M16 68l8-8M64 68l-8-8" opacity=".5"/><circle cx="40" cy="40" r="6" opacity=".8"/></svg>',
  eye:       '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 40c8-13 18-19 28-19s20 6 28 19c-8 13-18 19-28 19s-20-6-28-19Z"/><circle cx="40" cy="40" r="9"/><circle cx="40" cy="40" r="2.6" fill="currentColor" stroke="none"/><path d="M40 12v6M40 62v6" opacity=".45"/></svg>',
  quillpen:  '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M58 14c-16 4-28 14-34 30l-4 18 18-4c16-6 26-18 30-34z"/><path d="M24 58 50 30" opacity=".7"/><path d="M18 66h22" opacity=".5"/></svg>',
  rose:      '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="40" cy="32" r="6"/><path d="M40 20a12 12 0 0 1 11 17 12 12 0 0 1-22 0 12 12 0 0 1 11-17Z" opacity=".75"/><path d="M40 12a20 20 0 0 1 17 29 20 20 0 0 1-34 0 20 20 0 0 1 17-29Z" opacity=".45"/><path d="M40 52v16M40 60c-4-2-8-2-12-1M40 56c4-2 8-2 12-1" opacity=".7"/></svg>'
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
  /* only real, earned ratings are shown */
  const rv = (typeof ZKReviews !== "undefined") ? ZKReviews.list(p.id) : [];
  if (!rv.length) return "";
  const avg = rv.reduce((a, r) => a + r.stars, 0) / rv.length;
  const full = Math.round(avg);
  return `<span class="stars" aria-label="Rated ${avg.toFixed(1)} out of 5">${"★".repeat(full)}${"☆".repeat(5 - full)} <small>${avg.toFixed(1)} (${rv.length})</small></span>`;
}

function zkPrice(p) {
  return `${p.oldPrice ? `<span class="price-old">${ZK.fmt(p.oldPrice)}</span>` : ""}<span class="price">${ZK.fmt(p.price)}</span>`;
}

function zkBadge(p) {
  if (p.wonder) return `<span class="pcard-badge badge-bedtime">✶ ${ZKT("c.bedtime")}</span>`;
  if (p.badges?.includes("new")) return `<span class="pcard-badge">${ZKT("c.new")}</span>`;
  return "";
}

function zkCard(p, delay) {
  return `<article class="pcard reveal ${delay ? "reveal-d" + delay : ""}">
    ${zkBadge(p)}
    ${zkWishBtn(p.id)}
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

  /* 3D tilt on cards, lerped via rAF so it glides instead of fighting CSS transitions */
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
  /* 1. uploaded file in the browser vault (owner-added products) */
  if (typeof ZKFiles !== "undefined") {
    ZKFiles.get(p.id + ":pdf").then(blob => {
      if (blob) {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = p.id + ".pdf";
        a.click();
      } else if (p.pdf) {
        window.open(p.pdf, "_blank"); /* real hosted PDF */
      }
    });
    return;
  }
  if (p.pdf) window.open(p.pdf, "_blank");
}

/* =========================================================
   Margin notes: literary quotes met on the way
   ========================================================= */
const ZK_QUOTES = {
  en: [
    { q: "I have always imagined that Paradise will be a kind of library.", a: "Jorge Luis Borges" },
    { q: "A room without books is like a body without a soul.", a: "Cicero" },
    { q: "A book must be the axe for the frozen sea within us.", a: "Franz Kafka" },
    { q: "There is no frigate like a book to take us lands away.", a: "Emily Dickinson" },
    { q: "Books are a uniquely portable magic.", a: "Stephen King" },
    { q: "There is no friend as loyal as a book.", a: "Ernest Hemingway" },
    { q: "We read to know we are not alone.", a: "William Nicholson" },
    { q: "If there is a book that you want to read, but it has not been written yet, then you must write it.", a: "Toni Morrison" }
  ],
  ar: [
    { q: "الكتاب هو الجليس الذي لا يطريك، والصديق الذي لا يغريك.", a: "الجاحظ" },
    { q: "أعز مكان في الدنى سرج سابح، وخير جليس في الزمان كتاب.", a: "المتنبي" },
    { q: "انا من بدل بالكتب الصحابا، لم اجد لي وافيا الا الكتابا.", a: "من عيون الشعر العربي" },
    { q: "القراءة وحدها هي التي تعطي الإنسان أكثر من حياة واحدة.", a: "عباس محمود العقاد" },
    { q: "خير جليس في الزمان كتاب، تصحبه فيصحبك الصواب.", a: "من حكم القراء" },
    { q: "لم أر واعظا أبلغ من كتاب.", a: "من حكم العرب" },
    { q: "الكتب هي الحياة التي لم نعشها بعد.", a: "طه حسين" },
    { q: "نعم الأنيس إذا خلوت كتاب.", a: "من الشعر العربي" }
  ],
  fr: [
    { q: "Une heure de lecture est le souverain remède contre les dégoûts de la vie.", a: "Montesquieu" },
    { q: "La lecture est une amitié.", a: "Marcel Proust" },
    { q: "Lisez pour vivre.", a: "Gustave Flaubert" },
    { q: "Lire, c’est boire et manger. L’esprit qui ne lit pas maigrit comme le corps qui ne mange pas.", a: "Victor Hugo" },
    { q: "On ne lit jamais un livre : on se lit à travers les livres.", a: "Romain Rolland" },
    { q: "Un livre est un ami qui ne trompe jamais.", a: "Guilbert de Pixérécourt" },
    { q: "La lecture agrandit l’âme.", a: "Voltaire" },
    { q: "Le temps de lire, comme le temps d’aimer, dilate le temps de vivre.", a: "Daniel Pennac" }
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
        <cite>${zkEsc(pick.a)}</cite>
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

/* =========================================================
   Global instant search: every page, every language
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const actions = document.querySelector(".header-actions");
  if (!actions || typeof ZK === "undefined") return;

  /* header icon (before the account icon) */
  const btn = document.createElement("button");
  btn.className = "icon-btn search-open";
  btn.setAttribute("aria-label", ZKT("sr.label"));
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
  const anchor = actions.querySelector('.icon-btn[href="account.html"]');
  actions.insertBefore(btn, anchor || actions.firstChild);

  /* overlay */
  const veil = document.createElement("div");
  veil.className = "search-veil";
  veil.innerHTML = `
    <div class="search-box" role="dialog" aria-label="${zkEsc(ZKT("sr.label"))}">
      <div class="search-head">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input class="search-input" type="search" autocomplete="off" spellcheck="false" placeholder="${zkEsc(ZKT("sr.placeholder"))}">
        <span class="search-kbd"><i>↑↓</i><i>⏎</i><i>ESC</i></span>
      </div>
      <div class="search-results" id="srResults"><p class="search-hint">${zkEsc(ZKT("sr.hint"))}</p></div>
    </div>`;
  document.body.appendChild(veil);
  const input = veil.querySelector(".search-input");
  const results = veil.querySelector("#srResults");
  let sel = -1, rows = [];

  const open = () => {
    veil.classList.add("open");
    document.body.style.overflow = "hidden";
    input.value = ""; render("");
    setTimeout(() => input.focus(), 40);
  };
  const close = () => {
    veil.classList.remove("open");
    document.body.style.overflow = "";
  };
  btn.addEventListener("click", open);
  veil.addEventListener("click", e => { if (e.target === veil) close(); });
  addEventListener("keydown", e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); veil.classList.contains("open") ? close() : open(); }
    if (!veil.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
    if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
    if (e.key === "Enter" && rows[sel]) { e.preventDefault(); location.href = rows[sel].dataset.href; }
  });
  const move = d => {
    if (!rows.length) return;
    sel = (sel + d + rows.length) % rows.length;
    rows.forEach((r, i) => r.classList.toggle("sel", i === sel));
    rows[sel].scrollIntoView({ block: "nearest" });
  };

  const norm = s => String(s || "").toLowerCase()
    .replace(/[-ـ]/g, "")             /* Arabic diacritics + tatweel */
    .replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي")
    .normalize("NFD").replace(/[̀-ͯ]/g, "");  /* Latin accents */

  const TYPE_WORDS = { book: "book livre كتاب", template: "template notion modele قالب نظام", notebook: "notebook planner carnet دفتر مفكرة" };
  const score = (p, q) => {
    const t = norm(p.title);
    if (t.startsWith(q)) return 100;
    if (t.includes(q)) return 80;
    const hay = norm([p.subtitle, p.category, zkCat(p.category), p.hook, TYPE_WORDS[p.type], p.lang].join(" "));
    if (hay.includes(q)) return 40;
    /* every word must appear somewhere */
    const words = q.split(/\s+/).filter(Boolean);
    if (words.length > 1 && words.every(w => (t + " " + hay).includes(w))) return 30;
    return 0;
  };

  function render(qRaw) {
    const q = norm(qRaw.trim());
    sel = -1; rows = [];
    if (!q) { results.innerHTML = `<p class="search-hint">${zkEsc(ZKT("sr.hint"))}</p>`; return; }
    const hits = ZK.products
      .map(p => ({ p, s: score(p, q) }))
      .filter(x => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8);
    if (!hits.length) {
      results.innerHTML = `<p class="sr-empty">${zkEsc(ZKT("sr.empty", { q: qRaw.trim() }))}</p>`;
      return;
    }
    results.innerHTML = hits.map(({ p }) => `
      <a class="sr-row" data-href="product.html?id=${p.id}" href="product.html?id=${p.id}">
        <span class="sr-cover">${zkCoverFace(p)}</span>
        <span class="sr-main">
          <span class="sr-title">${zkEsc(p.title)}</span>
          <span class="sr-meta">${zkEsc(zkCat(p.category))} · ${zkEsc(ZKT("s.fLang" + (p.lang || "en").charAt(0).toUpperCase() + (p.lang || "en").slice(1)) || "")}</span>
        </span>
        <span class="sr-price">${ZK.fmt(p.price)}</span>
      </a>`).join("")
      + `<a class="sr-all" href="shop.html?q=${encodeURIComponent(qRaw.trim())}">${zkEsc(ZKT("sr.all"))}</a>`;
    rows = [...results.querySelectorAll(".sr-row")];
  }
  let deb;
  input.addEventListener("input", () => { clearTimeout(deb); deb = setTimeout(() => render(input.value), 120); });
});


/* =========================================================
   Wishlist, recently-viewed, back-to-top, share
   ========================================================= */
const ZKWish = {
  list() { return ZKStore.read("zk_wish", []); },
  has(id) { return this.list().includes(id); },
  toggle(id) {
    let l = this.list();
    const on = !l.includes(id);
    l = on ? [...l, id] : l.filter(x => x !== id);
    ZKStore.write("zk_wish", l);
    return on;
  }
};

function zkWishBtn(id, big) {
  const on = ZKWish.has(id);
  return `<button class="wish-btn ${big ? "wish-big" : ""} ${on ? "on" : ""}" data-wish="${id}" aria-label="${zkEsc(ZKT("wl.save"))}" aria-pressed="${on}">
    <svg viewBox="0 0 24 24" fill="${on ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.7"><path d="M12 20s-7-4.6-9.2-9A5.2 5.2 0 0 1 12 6.4 5.2 5.2 0 0 1 21.2 11C19 15.4 12 20 12 20Z"/></svg>
  </button>`;
}

const ZKRecent = {
  list() { return ZKStore.read("zk_recent", []); },
  push(id) {
    const l = [id, ...this.list().filter(x => x !== id)].slice(0, 8);
    ZKStore.write("zk_recent", l);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  /* wishlist toggles (delegated, works on injected cards too) */
  document.body.addEventListener("click", e => {
    const b = e.target.closest("[data-wish]");
    if (!b) return;
    e.preventDefault(); e.stopPropagation();
    const on = ZKWish.toggle(b.dataset.wish);
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", on);
    b.querySelector("svg").setAttribute("fill", on ? "currentColor" : "none");
    zkToast(ZKT(on ? "wl.saved" : "wl.removed"));
  });

  /* back to top */
  const tt = document.createElement("button");
  tt.className = "to-top";
  tt.setAttribute("aria-label", ZKT("tt.top"));
  tt.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 19V5m0 0-6 6m6-6 6 6"/></svg>';
  document.body.appendChild(tt);
  tt.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  const ttWatch = () => tt.classList.toggle("show", scrollY > 1100);
  addEventListener("scroll", ttWatch, { passive: true });
  ttWatch();
});

/* share the current edition (native sheet on mobile, copy elsewhere) */
async function zkShare(title) {
  const data = { title: title + " | Zokario", url: location.href };
  if (navigator.share) { try { await navigator.share(data); return; } catch {} }
  try { await navigator.clipboard.writeText(location.href); zkToast(ZKT("p.shareCopied")); }
  catch { zkToast(location.href); }
}
