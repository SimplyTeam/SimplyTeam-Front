<script lang="ts" context="module">
  export interface Price {
    name: string,
    price?: number,
    description: string,
    featuresTitle: string,
    features: string[],
    ctaWording: string,
    ctaLink: string,
  }

</script>

<script lang="ts">
  import Icon from "$lib/components/atoms/Icon.svelte"
  import Button from "$lib/components/atoms/Button.svelte"

  export let prices: Price[] = []
</script>

<div class="flex flex-col md:flex-row px-16 m-auto max-w-5xl">
  {#each prices as price}
    <div
      class="flex md:w-1/3 flex-col gap-4 border-2 p-2"
      class:border-primary={price.name === "Premium"}
      class:border-4={price.name === "Premium"}
    >
      <h3 class="text-xl font-bold mt-2">{price.name}</h3>
      {#if price.name === "Entreprise"}
        <div class="text-xl h-12 font-bold text-primary">Disponible à partir de 50 utilisateurs ou plus.</div>
      {:else}
        <div class="text-3xl h-12 font-bold">{price.price}<span class="text-sm">€</span></div>
      {/if}
      <p class="h-24">{price.description}</p>
      <div>
        <p class="font-bold text-center">{price.featuresTitle}</p>
        <ul>
          {#each price.features as feature}
            <li class="flex gap-2 m-2"><Icon icon="check" size="2xl"  />{feature}</li>
          {/each}
        </ul>
      </div>
      <a class="mt-auto" href={price.ctaLink}>
        <Button class="w-full" >{price.ctaWording}</Button>
      </a>
    </div>

  {/each}
</div>