<script lang="ts" context="module">
  export interface Slide {
    title: string;
    description: string;
    illustration: string;
    color: string;
  }

</script>

<script lang="ts">
  export let slides: Slide[] = []

  let currentSlideIndex = 0
  $: currentSlide = slides[currentSlideIndex]
</script>

<div class="flex flex-col xl:flex-row gap-8 justify-center items-center">
  <div class="flex flex-col md:flex-row xl:flex-col gap-8 w-full xl:w-1/3 items-stretch">
    {#each slides as slide, index}
      <div
        class="p-8 rounded-lg bg-white border-{slide.color} transition-shadow duration-300 border-l-[2rem] border-solid"
        class:shadow={currentSlideIndex === index}
        on:keydown
        on:mouseenter={() => currentSlideIndex = index}
      >
        <h2 class="font-bold mb-2">{slide.title}</h2>
        <p>{slide.description}</p>
      </div>
    {/each}
  </div>
  <img class="hidden md:block h-full max-w-2xl flex-1" src={currentSlide.illustration} alt="Screenshot of SimplyTeam interface">
</div>

<style>
    .shadow {
        @apply shadow-primary;
    }
</style>