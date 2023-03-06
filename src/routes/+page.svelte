<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import HeroIllustration from '$lib/components/HeroIllustration.svelte';
	import CardIcon from '$lib/components/CardIcon.svelte';
	import type { CardIconProps } from '$lib/components/CardIcon.svelte';

	const sections: CardIconProps[] = [
		{
			title: 'Gestion des tâches',
			description: 'Gérez efficacement vos projets avec notre méthode de gestion de tâches par sprint, afin d\'accomplir vos objectifs pour atteindre votre objectif final.',
			icon: "th-list"
		},
		{
			title: 'Gamification',
			description: 'Grâce à des fonctionnalités de gamification, atteignez vos objectifs et dépassez vos limites pour gagner des récompenses.',
			icon: "award"
		},
		{
			title: 'Partenariat',
			description: 'Accumulez des points et des badges en complétant des tâches importantes et utilisez-les pour accéder à des offres spéciales de nos partenaires.',
			icon: 'percentage'
		}
	];
</script>

<header class='bg-primary h-screen'>
	<nav class='grid grid-cols-[1fr_auto_1fr] px-12 py-4'>
		<a><img src='' alt='SimplyTeam logo'></a>
		<div class='flex gap-8 text-white text-xl'>
			<a href=''>Pricing</a>
			<a href=''>Teams</a>
			<a href=''>Teams</a>
		</div>
		<Button class='ml-auto'>Se connecter</Button>
	</nav>
	<div class='hero relative min-h-[60vh]'>
		<div class='hero-content flex-col lg:flex-row-reverse'>
			<div class='h-[20rem] md:w-2/3'>
				<HeroIllustration class='absolute top-[-15vh] right-0 w-[100vh]' />
			</div>
			<div class='text-white'>
				<h1 class='text-5xl font-bold'>Gérez vos projets avec plaisir et simplement !</h1>
				<p class='py-6'>
					Notre application de gestionnaire de projet est conçue pour vous aider à rester productif tout en vous amusant.
				</p>
				<Button class='ml-auto'>Se connecter</Button>
			</div>
		</div>
	</div>
</header>
<section class='flex flex-wrap rounded-xl w-3/4 h-[60vh] items-start mx-auto -translate-y-20 bg-white p-4'>
	<h2 class='w-full text-center text-3xl font-bold'>Pourquoi <span class='text-primary'>nous choisir ?</span></h2>
	{#each sections as section}
		<CardIcon class='w-1/3 p-8 px-16' {...section} />
	{/each}
</section>
