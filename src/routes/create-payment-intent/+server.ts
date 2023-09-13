import Stripe from 'stripe'
import { SECRET_STRIPE_KEY } from '$env/static/private'
import { json } from "@sveltejs/kit"

// initialize Stripe
const stripe = new Stripe(SECRET_STRIPE_KEY)

// handle POST /create-payment-intent
export async function POST() {
  // create the payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    // amount in cents
    amount: 1000,
    currency: 'EUR',
    payment_method_types: ['card']
  })

  return json(paymentIntent)
}