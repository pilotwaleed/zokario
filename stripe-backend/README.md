# Zokario — Stripe backend hookup

The storefront ships **Stripe-ready, not Stripe-live**. Checkout currently runs in
demo mode (orders are stored in the browser so the whole flow — thank-you page,
library, reader, downloads — works end-to-end without a server).

To take real payments you connect three pieces:

## 1. Keys (never commit these)

| Variable | Where used | Example |
|---|---|---|
| `STRIPE_PUBLISHABLE_KEY` | Browser (checkout.html) | `pk_live_...` |
| `STRIPE_SECRET_KEY` | Server only | `sk_live_...` |
| `STRIPE_WEBHOOK_SECRET` | Server only | `whsec_...` |

On Hostinger, put server keys in an `.env` file **above** `public_html`, or in
hPanel → Advanced → environment configuration if using their Node hosting.

## 2. Create Checkout Session endpoint

`create-checkout-session.php` (included here) is a minimal Hostinger-compatible
PHP endpoint. Flow:

1. `checkout.html` POSTs the cart (product ids + coupon) to this endpoint.
2. The endpoint validates prices **server-side** against `catalog.php`
   (never trust client prices), creates a Stripe Checkout Session, and returns its URL.
3. The browser redirects to Stripe's hosted payment page.
   - `success_url: https://YOURDOMAIN.com/thank-you.html?order={CHECKOUT_SESSION_ID}`
   - `cancel_url:  https://YOURDOMAIN.com/checkout.html`

## 3. Webhook → fulfil the order

`webhook.php` (included) listens for `checkout.session.completed`:

1. Verify the signature with `STRIPE_WEBHOOK_SECRET`.
2. Record the order (database or flat file) keyed by customer email.
3. Email the receipt + download links (Hostinger PHP `mail()` or an SMTP service).
4. Grant library access: replace the browser's localStorage demo store with a
   `/api/my-library?email=...` lookup once real accounts exist.

Register the webhook in the Stripe dashboard:
`https://YOURDOMAIN.com/stripe-backend/webhook.php`

## What stays exactly as-is

The entire frontend: cart totals, coupon handling, the checkout form, thank-you
page, account library, and reader all read from a single store layer
(`ZKStore` in `js/app.js`). Swapping localStorage for API calls is intentionally
the only change needed.

## Test cards

Use Stripe test keys first (`pk_test_` / `sk_test_`), then card `4242 4242 4242 4242`,
any future expiry, any CVC.
