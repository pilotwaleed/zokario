# Zokario — Changelog

Newest first. Commit hashes reference this repository's git history; the top
section covers the audit-and-hardening session whose work is in the working
tree (dated by the reports in `docs/`).

---

## [Unreleased] — 2026-07-13 → 2026-07-14 (audit, hardening, QA, docs session)

### Honesty & trust (Critical/High audit fixes — see docs/AUDIT-REPORT.md)
- Payment sheet made truthful in EN/AR/FR: renamed "Card payment preview",
  removed false "256-bit SSL" / "Powered by Stripe" claims, added "Preview: no
  charge yet" chip; footer chip reworded to "Encrypted HTTPS connection" (C2).
- All page/reading-time claims reconciled with the real PDFs (5–12 pages,
  measured); prose length claims corrected across the catalog (C3).
- Every ePub promise removed (21 product FAQs, 33 i18n strings ×3 languages,
  10 pages) — the site now honestly sells PDF + online reader only (C4).
- Thank-you page no longer claims a receipt email was sent; FAQ and contact
  copy describe the preview state truthfully (H1, contact honesty fix).
- All 7 permanent fake-sale `oldPrice` fields deleted; strikethroughs now come
  only from genuine time-boxed deals (H2).
- Wheel-of-Wonders coupon prizes are now actually redeemable at cart/checkout
  and consumed on purchase (H3).
- "Bestselling" tab and books-page "Start with these" now compute from real
  purchase counts and hide entirely when no data exists (H4).
- Invalid-coupon message no longer gives away a working code (L7).

### Security & delivery
- All 31 paid PDFs renamed to unguessable hashed filenames; `files/.htaccess`
  added (no directory listing, noindex, no-referrer); `robots.txt` disallows
  `/files/`. Interim speed bump only — signed URLs remain the top launch
  blocker (C1 interim).
- Owner role no longer granted by first name; gated solely on the email
  allowlist (H5).
- Signup can no longer dead-end after email verification: validation runs
  before the code step and failures surface a visible error (H6).
- Checkout double-submit guard added (M7).
- Orders now store an immutable per-item price snapshot plus coupon code;
  receipts and thank-you render from the snapshot (H7).

### Internationalization
- ~42 new keys ×3 languages: the hardcoded-English sweep across thank-you,
  checkout, cart, shop, topic, product, account and the JS surfaces (H9);
  moderation toasts localized; spin-chip aria-label localized.

### Accessibility (docs/ACCESSIBILITY-REPORT.md)
- New trilingual `accessibility.html` statement page, linked from every footer
  and added to the sitemap.
- Skip-to-content link + `main` landmark on all 27 pages; focus traps
  (Tab/Escape/restore) on every overlay incl. mobile nav, search, preview
  modal, filter drawer, reader TOC, cookie panel (H8 + sweep).
- Contrast fixes across the token palette (`--muted-2`, new `--bronze-2` /
  `--bronze-paper`, admin badge, paper focus ring); all text now ≥ 4.5:1.
- All custom error lines are `role="alert"` with `aria-invalid`/`describedby`;
  toggles carry `aria-pressed`; toast/status live regions; ≥44px touch targets
  on compact controls; reduced-motion now also stops ambient videos.

### Performance (docs/PERFORMANCE-REPORT.md)
- `defer` on all six scripts on all 27 pages; hero-poster preloads with
  `fetchpriority=high` on the 7 hero pages; intrinsic sizes on static images
  (CLS ≈ 0); below-fold room doors lazy-loaded (~1.2 MB off index).
- Hot localStorage paths memoized (language code, wishlist, reviews, owned
  set) — shop filtering dropped from ~60 store parses per keystroke to ~0.
- `.htaccess` caching aligned with versioned assets: CSS/JS 6 months
  immutable, HTML no-cache.

### SEO (docs/SEO-REPORT.md)
- og:url on all indexable pages; hreflang removed from noindex pages;
  WebSite + SearchAction JSON-LD; per-product OG updates and Product/Book
  JSON-LD with clean canonicals; product not-found state now noindexed;
  sitemap lastmod on all 49 URLs; robots.txt hardened.

### Media (docs/MEDIA-MANIFEST.md)
- Full media manifest (every image/video/PDF, sizes, references); hero and
  logo re-encoded to serve sizes with originals kept in `assets/.masters/`;
  index majlis video made lazy.

### Testing & QA (docs/QA-REPORT.md)
- Permanent zero-dependency smoke harness `tools/smoke-test.mjs` (8 sections,
  2550 checks), mutation-tested against 10 planted faults. Current run: green.
- Live-browser E2E: consent, welcome gift, coupons, product honesty, checkout
  validation, order snapshot, hashed-PDF delivery, Arabic RTL — all pass.

### Documentation (this package)
- README rewritten (deploy warning, repo map, version-bump procedure, docs
  index); this CHANGELOG; `.env.example` covering every `@API` credential;
  `docs/INTEGRATION-CHECKLIST.md` (demo → production master table);
  `docs/OWNERS-MANUAL.md` (non-technical operations guide);
  `docs/LAUNCH-CHECKLIST.md` (pre-launch / launch-day / post-launch).

---

## 2026-07-09

- `7f33878` — Round two: real PDFs for every edition, zero demo content,
  richer majlis, the Publisher No 1.
- `e891755` — The community build: Monaliza salon (vintage art books), family
  majlis (forums, fireside chat), memberships (Gilded Circle), the Publisher's
  Desk (admin surface).

## 2026-07-08

- `3564e37` — Founder nationality corrected (Bahrain, not Kuwait) + 7-agent
  spelling audit across all three languages.

## 2026-07-07

- `3da5c60` — All copy humanized: zero em-dashes, zero Arabic diacritics,
  founder story added.
- `4248bc6` — Full-coverage polish: reader/product i18n, SEO meta, sitemap,
  cache version v37.
- `0c18ea0` — The Wonder Room (Room IV, bedtime tales) + wishlist, recently
  viewed, share, back-to-top.
- `b98b4d6`, `d492ff8` — 3D bookshelf rendering fixes for Safari (isolated
  paint layers, no shared perspective), v35.
- `96abcf5` — Global instant search: header icon on every page, live
  trilingual results.
- `863174e` — Progressive-fade glass header (desktop + mobile).
- `85b18ae` — Currency handling upgrades from stack audit.
- `bbd7610`, `cfb6a33` — HTTP cache tuning during iteration.
- `d28ae8b` — CI: FTP control-socket timeout raised to 120s.
- `5a71edc` — v3.1: cross-browser + mobile hardening.
- `dc36064` — Zokario v3: trilingual store (EN/AR/FR), accounts + reviews,
  three Rooms, seamless loop videos.

## 2026-07-06

- `2006fe3`, `3bd7e88`, `01d0e4f` — Deploy path/format fixes (target the
  zokario.com domain webroot).
- `1515a82` — GitHub Actions deployment workflow for Hostinger FTP added
  (push to main = deploy).

## 2026-07-05

- `34dbda6` — Local preview server configuration.
- `1b0a054` — Initial commit: complete static site (HTML/CSS/JS), 17-product
  catalog, full e-commerce flow, cinematic Higgsfield assets, Stripe-ready
  checkout skeleton.
