# ZOKARIO — zokario.com

Zokario is a trilingual (English / Arabic / French) luxury digital bookstore:
27 public pages, 31 digital editions (books, Notion templates, notebooks, bedtime
tales, vintage art books), an online reader, member accounts, a community majlis
(forums, chat, memberships), and a private Publisher's Desk for the owner.

**This repository IS the live website.** What is on the `main` branch is what
visitors at https://zokario.com see, minus a small exclusion list (see Deploying).

**Current state: preview commerce.** The whole purchase loop works end to end
(cart, checkout, thank-you, library, reader, download), but no money moves, no
emails are sent, and orders live only in each visitor's browser. Every point
where a real backend plugs in is marked in the code with an `/* @API */` comment.
See `docs/INTEGRATION-CHECKLIST.md` for exactly what turns the preview into a
real store, and `docs/LAUNCH-CHECKLIST.md` for the launch runbook.

---

## Tech approach

- **Static-first, no build step.** Plain HTML + one CSS file + six JS files.
  Nothing to compile; what you edit is what ships. Runs on Hostinger shared
  hosting (or any static host).
- **Demo commerce on localStorage.** Orders, accounts, reviews, forum posts and
  the newsletter list are stored in the visitor's own browser so the full UX is
  testable without a server.
- **`/* @API */` markers.** Every place where a real backend must replace the
  demo rail is marked in the code (about 60 markers across `js/` and the page
  scripts): payments, email, contact delivery, file delivery, sessions, roles,
  newsletter, chat, consent log. Grep `@API` to see them all.
- **Stripe-ready scaffold.** `stripe-backend/` holds Hostinger-compatible PHP
  endpoints (create-checkout-session + webhook) with `getenv()` placeholders —
  no secrets in the repo. See `stripe-backend/README.md`.
- **Trilingual by dictionary.** `js/i18n.js` holds identical EN/AR/FR key sets
  (~910 keys per language) plus the engine (RTL flip, `?lang=` handling).

## Run locally

From this folder:

```bash
node .claude/serve.mjs
# → http://localhost:8123
```

That is a tiny zero-dependency static server (with the site's 404 wired up).
Any other static server also works, e.g. `python3 -m http.server 8000`.
Don't open `index.html` via `file://` — query-string pages like
`product.html?id=...` need a server to behave like production.

## Run the smoke tests

```bash
node tools/smoke-test.mjs
```

Zero dependencies, exits `0` on green / `1` on any failure (CI-friendly).
Eight sections: JS syntax, inline-script syntax + JSON-LD validity, i18n
parity across EN/AR/FR, i18n key usage, internal links + orphan pages,
cache-bust version consistency, sitemap/robots sanity, and "honesty greps"
(banned claims like "256-bit" or "ePub" can never sneak back in). The harness
was mutation-tested (10 planted faults, all caught) — details in
`docs/QA-REPORT.md`. Current status: **8/8 sections, 2550/2550 checks pass.**

**Run this before every push.** Pushing to `main` deploys to production.

## Repo map

| Path | What it is |
|---|---|
| `*.html` (27 files) | Every page of the site. `index`, `shop`, category rooms (`books`, `templates`, `notebooks`, `wonder`, `monaliza`), `product`, `cart`/`checkout`/`thank-you`, `account` (My Shelf), `reader`, community (`forums`, `topic`, `support`, `custom`), info/legal (`about`, `how-it-works`, `faq`, `contact`, `privacy`, `terms`, `refunds`, `accessibility`), `admin` (Publisher's Desk, deliberately unlinked), `404` |
| `js/data.js` | **The catalog.** All 31 products, preview chapters, coupons. Single source of truth — edit here to add/change products (see `docs/OWNERS-MANUAL.md`) |
| `js/i18n.js` | EN/AR/FR dictionaries + language engine (RTL, `?lang=`) |
| `js/app.js` | Store layer (`ZKStore`), cards, cart/wishlist, search, cookies/consent, toasts, receipts |
| `js/auth.js` | Accounts (salted+hashed passwords via WebCrypto), reviews |
| `js/community.js` | Forums, roles, memberships, moderation, wheel, flash deals, Desk logic |
| `js/seeds.js` | Forum seed content + moderation wordlists |
| `css/main.css` | The single stylesheet (design tokens at the top) |
| `assets/` | Images + ambient videos. `assets/.masters/` and `assets/source-1080p/` are offline originals — never deployed |
| `files/` | The paid PDFs, renamed to unguessable hashed filenames, with a hardening `.htaccess` (no listing, noindex). **Interim protection only — see the launch blockers** |
| `docs/` | All reports and owner docs (list below) |
| `tools/smoke-test.mjs` | The automated smoke-test harness |
| `stripe-backend/` | PHP scaffold for real payments (not yet connected) |
| `.htaccess` | HTTPS redirect, security headers, caching, 404 wiring |
| `.github/workflows/deploy.yml` | **The production deploy** (FTP to Hostinger on push to main) |
| `.claude/serve.mjs` | Local preview server (never deployed) |

## Deploying

### This repo (the live site): GitHub Actions → Hostinger FTP

> ### ⚠️ PUSHING TO `main` DEPLOYS TO PRODUCTION
> Every push to the `main` branch triggers `.github/workflows/deploy.yml`,
> which FTP-uploads the working tree to the live webroot
> (`domains/zokario.com/public_html/`) within a minute or two. There is no
> staging step and no confirmation prompt. Before any push:
> 1. `node tools/smoke-test.mjs` must be green.
> 2. Preview the change locally (`node .claude/serve.mjs`).
> 3. If CSS/JS changed, bump the cache version (next section).

The workflow authenticates with three GitHub repo secrets: `FTP_SERVER`,
`FTP_USER`, `FTP_PASS` (Settings → Secrets and variables → Actions). It
**excludes** from upload: `.git/`, `.github/`, `.claude/`, `node_modules/`,
`assets/source-1080p/`, `assets/.masters/`, `.gitignore`, and `*.md`.
Check a deploy's result under the repo's **Actions** tab on GitHub.

> **⚠️ Before committing the `docs/` folder:** the `*.md` exclude pattern
> matches only root-level markdown (README, CHANGELOG). It does **not** cover
> `docs/*.md` or `stripe-backend/README.md` — so committing `docs/` as-is
> would upload the internal audit/security reports to the public webserver.
> First add two lines to the `exclude:` list in
> `.github/workflows/deploy.yml`:
> `docs/**` and `**/*.md` (a developer or the workflow editor on GitHub can
> do this in one minute). Same for `.env.example` if you prefer it private —
> it contains only placeholders, but there is no reason to publish it.

### Any other copy of this site: manual Hostinger upload

1. hPanel → File Manager (or FTP) → open `public_html`.
2. Upload everything **including the hidden `.htaccess`** and `files/.htaccess`,
   **except**: `assets/source-1080p/`, `assets/.masters/`, `.git/`, `.github/`,
   `.claude/`, `docs/`, `tools/`, and `*.md` files.
3. Enable SSL (hPanel → Security → SSL). The HTTPS redirect in `.htaccess`
   is already active.
4. Swap `https://zokario.com` for your domain in canonicals, `sitemap.xml`,
   `robots.txt` (not needed on this repo — zokario.com is the real domain).

## Cache-bust version bumping

Every CSS/JS reference carries `?v=44`. HTML is served `no-cache` while CSS/JS
are cached for 6 months as immutable — so **changing the version number is the
only way readers receive updated CSS/JS**. Whenever you change `css/main.css`
or any `js/*.js` file:

1. Replace the version in every page (189 references):
   `perl -pi -e 's/\?v=44/\?v=45/g' *.html`
2. Update `EXPECTED_VERSION` in `tools/smoke-test.mjs` (line ~34) to `"v=45"`.
3. Run `node tools/smoke-test.mjs` — section 6 verifies all references match.
4. Commit and push (which deploys).

## Documentation index

| Doc | Contents |
|---|---|
| `docs/OWNERS-MANUAL.md` | **Start here.** Non-technical how-to: products, prices, coupons, copy in 3 languages, moderation, orders, what not to touch |
| `docs/LAUNCH-CHECKLIST.md` | Everything between today and real commerce: placeholders, credentials, launch-day steps, post-launch care |
| `docs/INTEGRATION-CHECKLIST.md` | The master table of every `@API` swap point → service needed → files → effort → blocking or not |
| `docs/AUDIT-REPORT.md` | The definitive 56-finding audit (2026-07-13) with fix status; Section 0 lists the open owner decisions |
| `docs/QA-REPORT.md` | Smoke-test harness spec + clean run + live-browser E2E results |
| `docs/ACCESSIBILITY-REPORT.md` | WCAG 2.2 AA sweep: contrast table, fixes, remaining live-AT test items |
| `docs/PERFORMANCE-REPORT.md` | Script loading, CLS, caching, localStorage profiling + fixes |
| `docs/SEO-REPORT.md` | Page-by-page meta, JSON-LD, sitemap/robots, hreflang verification |
| `docs/MEDIA-MANIFEST.md` | Every image/video/PDF with size, dimensions, references |
| `stripe-backend/README.md` | Step-by-step Stripe hookup for when payments go live |
| `.env.example` | Every backend credential the integrations will need, as placeholders |
| `CHANGELOG.md` | Dated history of what changed and when |
