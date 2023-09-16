<script lang="ts">
  import { loadStripe } from '@stripe/stripe-js'
  import { Address, Elements, LinkAuthenticationElement, PaymentElement } from 'svelte-stripe'
  import { onMount } from 'svelte'
  import { PUBLIC_STRIPE_KEY } from '$env/static/public'
  import Button from "$lib/components/atoms/Button.svelte"
  import { authStore } from "$lib/stores/auth"
  import premiumPlanIllustration from '$lib/assets/premium_plan.svg'
  import { Confetti } from "svelte-confetti"
  import Icon from "$lib/components/atoms/Icon.svelte"
  import { fade } from "svelte/transition"
  import Spinner from "$lib/components/Spinner.svelte"
  import type { Stripe, StripeElements, StripeError } from "@stripe/stripe-js"

  let stripe: Stripe | null = null
  let clientSecret: string | null = null
  let error: StripeError | null = null
  let elements: StripeElements
  let processing = false

  onMount(async () => {
    stripe = await loadStripe(PUBLIC_STRIPE_KEY)
    clientSecret = await createPaymentIntent()
  })

  async function createPaymentIntent() {
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({})
    })
    const { client_secret } = await response.json()

    return client_secret
  }

  async function submit() {
    // avoid processing duplicates
    if (processing || !stripe || !elements) return

    processing = true

    // confirm payment with stripe
    const result = await stripe?.confirmPayment({
      elements,
      redirect: 'if_required'
    })

    if (result.error) {
      error = result.error
      console.log(error.message)
      processing = false
    } else {
      await authStore.grantPremiumPlan()
    }
  }

</script>
<div class="p-8 h-[calc(100vh-4rem)] bg-base-200 rounded-tl-md">
  <div class="flex max-w-[80rem] m-auto h-full shadow-2xl rounded-md overflow-hidden bg-white">
    <div class="w-1/2 p-8 flex flex-col gap-4">
      <h1 class="text-4xl text-primary font-semibold">Passer au premium</h1>
      <p class="text-xl">Accéder à toutes nos fonctionnalités pour <span
        class="text-4xl text-primary font-bold">10€</span> par mois seulement.</p>
      <p class="text-2xl"></p>
      <img class="w-[36rem]" src={premiumPlanIllustration} alt="">
    </div>

    <div class="relative w-1/2 bg-primary p-8">
      <div class="h-full">
        {#if $authStore.user?.premium_expiration_date === null}
          {#if stripe && clientSecret}
            <Elements
              {stripe}
              {clientSecret}
              theme="stripe"
              labels="floating"
              variables={{
                colorPrimary: '#0570de',
                colorBackground: '#ffffff',
                colorText: '#30313d',
                colorDanger: '#df1b41',
                fontFamily: 'Ideal Sans, system-ui, sans-serif',
                spacingUnit: '2px',
                borderRadius: '4px',
              }}
              bind:elements
            >
              <form on:submit|preventDefault={submit} class="flex flex-col gap-3">
                <LinkAuthenticationElement/>
                <PaymentElement/>
                <Address mode="billing"/>

                <Button class="mt-3" type="submit" disabled={processing}>
                  {#if processing}
                    En cours...
                  {:else}
                    S'abonner !
                  {/if}
                </Button>
              </form>
            </Elements>
          {:else}
            <div class="w-full h-full flex items-center justify-center">
              <Spinner/>
            </div>
          {/if}

        {:else}
          <div class="h-full flex items-center justify-center">
            <div class="h-full flex flex-col items-center justify-between p-2">
              <div transition:fade class="flex-1 flex items-center">
                <div class="flex justify-center items-center bg-white h-[12rem] w-[12rem] rounded-full">
									<img class="w-[10rem]" src='/check.png' alt="" />
                </div>
              </div>

              <p class="text-2xl text-center text-white flex-1">
                Merci pour votre achat, vous avez désormais accès à toutes les fonctionnalités que propose SymplyTeam !
              </p>

              <a href="/workspaces">
                <Button>C'est parti !</Button>
              </a>
            </div>
            <div class="absolute tes bottom-0 left-0">
              <Confetti amount=200 fallDistance=30px cone x={[0.25, 1]} y={[0, 2.5]}/>
            </div>
            <div class="absolute bottom-0 left-1/2">
              <Confetti amount=200 fallDistance=30px cone x={[-1, 1]} delay={[500, 500]} y={[0, 2.5]}/>
            </div>
            <div class="absolute bottom-0 right-0">
              <Confetti amount=200 fallDistance=30px cone x={[-1, -0.25]} y={[0, 2.5]}/>
            </div>
          </div>
        {/if}
      </div>
    </div>

  </div>
</div>

