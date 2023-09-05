<script lang="ts">
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import CardIcon, { type CardIconProps } from '$lib/features/landing/molecules/CardIcon.svelte'
  import HeroIllustration from '$lib/features/landing/organisms/HeroIllustration.svelte'
  import type { Slide } from "$lib/features/landing/organisms/Carousel.svelte"
  import PricesTable from "$lib/features/landing/organisms/PricesTable.svelte"
  import Carousel from "$lib/features/landing/organisms/Carousel.svelte"
  import Button from '$lib/components/atoms/Button.svelte'
  import { authStore } from '$lib/stores/auth'
  import whiteLogo from '$lib/assets/logo-white.svg'
  import profileIllustration from "$lib/assets/landing-slides/profile.png"
  import projectIllustration from "$lib/assets/landing-slides/project.png"
  import questsIllustration from "$lib/assets/landing-slides/quest.png"
  import calendarIcon from "$lib/assets/calendar.png"
  import successIcon from "$lib/assets/success.png"
  import promoIcon from "$lib/assets/promo.png"

  onMount(async () => {
    if ($authStore.user) {
      goto('workspaces')
    }
  })

  const sections: CardIconProps[] = [
    {
      title: 'Gestion des tâches',
      description:
        "Gérez efficacement vos projets avec notre méthode de gestion de tâches par sprint, afin d'accomplir vos objectifs pour atteindre votre objectif final.",
      icon: calendarIcon
    },
    {
      title: 'Gamification',
      description:
        'Grâce à des fonctionnalités de gamification, atteignez vos objectifs et dépassez vos limites pour gagner des récompenses.',
      icon: successIcon
    },
    {
      title: 'Partenariat',
      description:
        'Accumulez des points et des badges en complétant des tâches importantes et utilisez-les pour accéder à des offres spéciales de nos partenaires.',
      icon: promoIcon
    }
  ]

  const slides: Slide[] = [
    {
      title: "Tableaux de sprints",
      description: "Organisez votre travail en sprints pour une concentration maximale sur des périodes définies.",
      illustration: projectIllustration,
      color: "secondary"
    },
    {
      title: "Objectifs à atteindre",
      description: "Gagnez des points à chaque étape accomplie, montez en niveau et recevez des récompenses virtuelles",
      illustration: questsIllustration,
      color: "success"
    },
    {
      title: "Gestion des niveaux",
      description: "Atteignez des jalons spécifiques pour débloquer des codes promo exclusifs sur des produits et services sélectionnés",
      illustration: profileIllustration,
      color: "primary"
    }
  ]

  const prices = [
    {
      name: "Basique",
      price: 0,
      description: "Conçu pour les petites équipes en quête d'organisation efficace pour divers projets.",
      featuresTitle: "TOUTES LES FONCTIONNALITÉS DE L'OFFRE GRATUITE :",
      features: [
        "1 espace de travail",
        "Jusqu’a 2 projets par espace de travail",
        "Jusqu’a 8 utilisateurs par espace de travail",
        "Débloquage des quêtes et niveau"
      ],
      ctaWording: "Démarrer",
      ctaLink: "/auth/register"
    },
    {
      name: "Premium",
      price: 10,
      description: "Conçu pour offrir une solution abordable et puissante aux équipes en quête d'une gestion de tâches optimale.",
      featuresTitle: "TOUTES LES FONCTIONNALITÉS DE L'OFFRE GRATUITE AINSI QUE :",
      features: [
        "Espaces de travail illimitées",
        "Projets illimités",
        "Utilisateurs illimités",
        "Accès aux codes promo"
      ],
      ctaWording: "Essayer gratuitement",
      ctaLink: "/auth/register"
    },
    {
      name: "Entreprise",
      description: "Des tarifs adaptés aux besoins de votre entreprise.",
      featuresTitle: "TOUTES LES FONCTIONNALITÉS DE L'OFFRE PREMIUM",
      features: [],
      ctaWording: "Contactez le service commercial",
      ctaLink: "/contact"
    }
  ]
</script>

<header class="bg-primary h-screen">
  <nav class="relative z-10 flex flex-col gap-2 items-center justify-center md:grid grid-cols-[1fr_auto_1fr] px-4 md:px-12 py-4">
    <a href="/"><img src={whiteLogo} class="h-8 md:h-16" alt="SimplyTeam logo"/></a>
    <div class="flex gap-8 text-white text-md md:text-xl">
      <a href="#pricing-section">Tarifs</a>
      <a href="#features-section">Fonctionnalités</a>
      <a href="/">Contact</a>
    </div>
    {#if $authStore.user}
      <Button type="submit" class="btn-sm md:btn-md md:ml-auto" on:click={authStore.logout}>Déconnexion</Button>
    {:else}
      <a href="/auth/login" class="md:ml-auto">
        <Button class="btn-sm md:btn-md">Se connecter</Button>
      </a>
    {/if}
  </nav>
  <div class="hero min-h-[60vh]">
    <div class="hero-content flex-col xl:flex-row-reverse">
      <div class="relative h-[20vh] md:h-[40vh] xl:h-[60vh] w-full md:w-1/3 xl:w-2/3">
        <HeroIllustration class="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] md:w-[32rem] xl:w-[48rem]"/>
      </div>
      <div class="text-white">
        <h1 class="text-3xl md:text-5xl font-bold">Gérez vos projets avec plaisir et simplement !</h1>
        <p class="py-6">
          Notre application de gestionnaire de projet est conçue pour vous aider à rester productif
          tout en vous amusant.
        </p>
        <a href="/auth/login" class="ml-auto">
          <Button class="ml-auto">Se connecter</Button>
        </a>
      </div>
    </div>
  </div>
</header>

<section
  class=" rounded-xl w-3/4  mx-auto -translate-y-[15vh] bg-white px-4 py-6"
>
  <h2 class="w-full text-center text-2xl font-bold my-8">
    Pourquoi <span class="text-primary">nous choisir ?</span>
  </h2>
  <div class="flex flex-wrap items-start justify-center gap-4">
    {#each sections as section}
      <CardIcon class="min-w-[12rem] max-w-sm" {...section}/>
    {/each}
  </div>
</section>

<section
  id="features-section"
  class="flex flex-col gap-24 bg-gradient-to-b from-white to-secondary-gradient px-8 py-4 xl:px-32 xl:py-16"
>
  <h2 class="m-auto text-center text-2xl font-bold">
    Gestion Agile des <span class="text-primary">Tâches Gamifiée</span>
    <br/>
    avec <span class="text-primary">Sprints et Objectifs</span>
  </h2>
  <Carousel {slides}/>
</section>

<section class="py-16" id="pricing-section">
  <h2 class="mx-auto my-8 text-center text-2xl font-bold">
    Nos <span class="text-primary">tarifs</span> flexibles pour <span class="text-primary">tous</span>
  </h2>
 <PricesTable {prices} />

</section>
