import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHING_KEY}`
    );
  }

  return stripePromise;
};

export default getStripe;

// `${process.env.NEXT_STRIPE_PUBLISH_KEY}`
