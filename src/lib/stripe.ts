import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export async function createCheckoutSession(items: any[]) {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to load');

    const { error } = await stripe.redirectToCheckout({
      lineItems: items.map(item => ({
        quantity: item.quantity || 1,
        price_data: {
          currency: 'gbp',
          unit_amount: Math.round(item.price * 100), // Convert to pence
          product_data: {
            name: item.name,
            description: item.description || undefined,
          },
        },
      })),
      mode: 'payment',
      cancelUrl: `${window.location.origin}/cart`,
      successUrl: `${window.location.origin}/success`,
    });

    if (error) throw error;
  } catch (error) {
    console.error('Error in createCheckoutSession:', error);
    throw error;
  }
}