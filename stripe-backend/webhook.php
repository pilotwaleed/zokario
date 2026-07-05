<?php
/**
 * Zokario — Stripe webhook (fulfilment skeleton)
 * Register in Stripe dashboard: https://YOURDOMAIN.com/stripe-backend/webhook.php
 * Listens for: checkout.session.completed
 */

declare(strict_types=1);

$STRIPE_WEBHOOK_SECRET = getenv('STRIPE_WEBHOOK_SECRET') ?: 'whsec_REPLACE_ME'; // ← env placeholder

// require __DIR__ . '/vendor/autoload.php';

$payload   = file_get_contents('php://input');
$signature = $_SERVER['HTTP_STRIPE_SIGNATURE'] ?? '';

/* Uncomment once stripe/stripe-php is installed:

try {
  $event = \Stripe\Webhook::constructEvent($payload, $signature, $STRIPE_WEBHOOK_SECRET);
} catch (\Exception $e) {
  http_response_code(400);
  exit('Invalid signature');
}

if ($event->type === 'checkout.session.completed') {
  $session = $event->data->object;
  $email   = $session->customer_details->email;
  $items   = explode(',', $session->metadata->items ?? '');

  // 1) Record the order (DB or flat file) keyed by $email
  // 2) Email receipt + download links (PHP mail() or SMTP service)
  // 3) Grant library access for the account with this email
}
*/

http_response_code(200);
echo 'ok';
