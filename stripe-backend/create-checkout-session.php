<?php
/**
 * Zokario — Stripe Checkout Session (Hostinger-compatible skeleton)
 *
 * POST JSON: { "items": ["the-quiet-ledger", ...], "coupon": "WELCOME10"|null, "email": "..." }
 *
 * Requires: composer require stripe/stripe-php
 * Env:      STRIPE_SECRET_KEY  (never hard-code; load from .env above public_html)
 */

declare(strict_types=1);
header('Content-Type: application/json');

// --- CONFIG ----------------------------------------------------------------
$STRIPE_SECRET_KEY = getenv('STRIPE_SECRET_KEY') ?: 'sk_test_REPLACE_ME';   // ← env placeholder
$DOMAIN            = 'https://YOURDOMAIN.com';                              // ← your domain

// Server-side price list — MUST mirror js/data.js (never trust client prices)
$CATALOG = [
  'the-quiet-ledger' => 1900, 'deep-focus' => 1700, 'the-morning-architecture' => 1500,
  'fuel' => 1600, 'the-last-lighthouse' => 1200, 'slow-cities' => 1400,
  'thinking-with-machines' => 2100, 'the-honest-table' => 1500, 'night-pages' => 1100,
  'the-compound-path' => 1800, 'the-atlas-of-small-habits' => 1600,
  'founders-operating-system' => 2900, 'content-engine' => 2400, 'job-search-vault' => 1900,
  'the-daily-review' => 1300, 'the-reading-log' => 900, 'ninety-day-focus-planner' => 1500,
];
$COUPONS = ['WELCOME10' => 10, 'READERS15' => 15]; // percent off

// --- HANDLER ---------------------------------------------------------------
// require __DIR__ . '/vendor/autoload.php';
// \Stripe\Stripe::setApiKey($STRIPE_SECRET_KEY);

$input = json_decode(file_get_contents('php://input'), true) ?: [];
$items = array_values(array_intersect(array_keys($CATALOG), $input['items'] ?? []));
if (!$items) { http_response_code(400); echo json_encode(['error' => 'Empty cart']); exit; }

$line_items = array_map(fn($id) => [
  'price_data' => [
    'currency' => 'usd',
    'unit_amount' => $CATALOG[$id],
    'product_data' => ['name' => $id],
  ],
  'quantity' => 1,
], $items);

/* Uncomment once stripe/stripe-php is installed and keys are set:

$session = \Stripe\Checkout\Session::create([
  'mode' => 'payment',
  'line_items' => $line_items,
  'customer_email' => $input['email'] ?? null,
  'metadata' => ['items' => implode(',', $items)],
  'success_url' => $DOMAIN . '/thank-you.html?order={CHECKOUT_SESSION_ID}',
  'cancel_url'  => $DOMAIN . '/checkout.html',
  // Coupons: create matching Coupons in the Stripe dashboard and attach here.
]);

echo json_encode(['url' => $session->url]);
*/

echo json_encode(['error' => 'Stripe not configured yet — see stripe-backend/README.md']);
