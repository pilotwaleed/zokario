# ZOKARIO — Premium Digital Bookstore

A cinematic, luxury, static-first storefront for digital books, templates and notebooks.
No build step, no framework, no database required to run — perfect for Hostinger shared hosting.

---

## Run locally

Any static server works. From this folder:

```bash
# Python (preinstalled on macOS)
python3 -m http.server 8000
# then open http://localhost:8000
```

or `npx serve .` if you prefer Node.

> Opening `index.html` directly with `file://` also mostly works, but use a server
> so fonts, videos and query-string pages (`product.html?id=...`) behave exactly like production.

## Pages

| Page | File |
|---|---|
| Home (cinematic hero, featured, categories, quality, testimonials, newsletter) | `index.html` |
| Shop / Library (search, filters, sort, tabs, price range, mobile drawer) | `shop.html` |
| Product (dynamic per title: `product.html?id=deep-focus`) + preview reader modal | `product.html` |
| Cart (coupon, totals, digital-delivery note) | `cart.html` |
| Checkout (Stripe-ready, demo mode) | `checkout.html` |
| Thank You / order confirmation | `thank-you.html` |
| My Shelf (account, library, downloads, continue reading, order history) | `account.html` |
| Online reader (themes, font size, bookmarks, progress, chapters) | `reader.html?id=...` |
| About / How It Works / FAQ / Contact | `about.html`, `how-it-works.html`, `faq.html`, `contact.html` |
| Privacy / Terms / Refund Policy | `privacy.html`, `terms.html`, `refunds.html` |
| Custom 404 | `404.html` (wired via `.htaccess`) |

**Demo commerce:** the full purchase loop works out of the box — add to cart → checkout
(demo mode) → thank-you → My Shelf → full reader + download. Orders/library live in
browser localStorage until Stripe + backend are connected.
**Coupons:** `WELCOME10` (10%), `READERS15` (15%).

## Catalogue

All products and preview chapters live in **`js/data.js`** — one file, heavily commented
by structure. Add a product there and it automatically appears in shop, homepage,
related rails, cart, checkout, reader and sitemap-worthy URLs. Covers are generated
by CSS (colors + motif per product) — no cover images to produce.

## Deploy to Hostinger

1. hPanel → **File Manager** (or FTP) → open `public_html`.
2. Upload **everything in this folder** (including the hidden `.htaccess`).
3. Enable SSL (hPanel → Security → SSL), then uncomment the HTTPS redirect in `.htaccess`.
4. Replace `https://zokario.com` with your real domain in: all `<link rel="canonical">`,
   `sitemap.xml`, `robots.txt`.
5. Replace `support@zokario.com` with your real inbox (contact + legal pages).
6. Done — the site is fully functional in demo-commerce mode.

## Going live with payments (what remains)

1. **Stripe** — see `stripe-backend/README.md`. Keys are env placeholders
   (`STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`);
   PHP endpoint + webhook skeletons are included and Hostinger-compatible.
2. **Real book files** — the demo "Download" generates a styled HTML edition from
   `js/data.js`. Replace with your typeset PDF/ePub files served after webhook fulfilment.
3. **Accounts** — My Shelf currently uses a browser-local email sign-in. Swap
   `ZKStore` reads (js/app.js) for API calls when you add real auth; the UI is done.
4. **Contact form + newsletter** — wire to your email provider or a form endpoint.

## Brand assets (generated with Higgsfield)

| Asset | File |
|---|---|
| Master hero image (floating book, champagne light) | `assets/hero-book.jpg` (+ `.png` master) |
| Logo mark (Z of fanned book pages) | `assets/logo-mark.jpg` (+ `.png` master), `assets/favicon.svg` (hand-drawn SVG) |
| Hero 3D book orbit (8s, Seedance 2.0) | `assets/hero-orbit.mp4` |
| Futuristic library dolly (7s) | `assets/library.mp4` |
| Page macro detail (6s) | `assets/pages-macro.mp4` |
| Collection reveal (7s) | `assets/collection.mp4` |
| 1080p masters | `assets/source-1080p/` (not referenced by the site — safe to keep offline) |

Videos are served at 720p, muted, lazy-loaded (except the hero, which streams with a
poster fallback). If a video is missing or fails, pages fall back to the hero image.

## SEO

Per-page titles + meta descriptions + canonical + Open Graph, JSON-LD
(Organization, Product on product pages, FAQPage on FAQ), semantic headings,
alt text, `sitemap.xml`, `robots.txt`, custom 404.
