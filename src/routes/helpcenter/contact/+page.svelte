<script lang="ts">
	import Expand from '$lib/features/contact/atoms/expand.svelte'
	import CardContactUs from '$lib/features/contact/molecule/cardContactUs.svelte'
	import CardFeedback from '$lib/features/contact/molecule/CardFeedback.svelte'
</script>

<div class="flex flex-col items-center h-screen">
	<h1 class="text-4xl font-bold text-primary mt-10 pt-10">Nous contacter</h1>
	<h2 class="text-xl mb-10">
		Contactez notre équipe et obtenez des réponses rapides à vos questions.
	</h2>
	<div class="flex justify-center">
		<CardContactUs />
		<CardFeedback />
	</div>
	<div class="flex flex-col items-center mt-10">
		<h1 class="text-4xl font-bold text-primary">FAQ</h1>
		<h2 class="text-xl mb-10">Consultez notre FAQ pour obtenir des réponses à vos questions.</h2>
	</div>
	<div class="flex-col flex w-[90%]">
		<Expand>
			<svelte:fragment slot="header">
				<div class="text-xl font-medium">Démarrer sur SimplyTeam</div>
			</svelte:fragment>
			<svelte:fragment slot="content">
				Vous avez des soucis au démarrage? Pas de panique! Consultez notre guide
				<span class="text-secondary font-bold">Getting Started </span>
				pour vous aider. Il vous guide rapidement à travers les premières étapes sur SimplyTeam. Cliquez
				<span class="text-primary font-bold">ici </span> pour y accéder directement.
			</svelte:fragment>
		</Expand>
		<Expand>
			<svelte:fragment slot="header">
				<div class="text-xl font-medium">Pourquoi choisir SimplyTeam ?</div>
			</svelte:fragment>
			<svelte:fragment slot="content">
				SimplyTeam se distingue comme une plateforme tout-en-un conçue pour répondre aux besoins des
				équipes modernes. Que vous soyez une startup en croissance, une PME ou une grande
				entreprise, notre solution offre des outils adaptés à chaque étape de votre projet. Grâce à
				une interface intuitive, SimplyTeam facilite la collaboration entre les membres, la gestion
				des tâches, le suivi des progrès et la communication en temps réel. De plus, notre
				plateforme s'adapte à votre manière de travailler, offrant des intégrations avec vos outils
				préférés et des personnalisations pour s'ajuster à vos workflows spécifiques. Avec
				SimplyTeam, vous bénéficiez d'une vue d'ensemble claire de vos projets, permettant à votre
				équipe de rester alignée, d'atteindre plus rapidement vos objectifs et d'obtenir des
				résultats exceptionnels. Rejoignez-nous et découvrez comment SimplyTeam peut transformer la
				manière dont vous travaillez.
			</svelte:fragment>
		</Expand>
		<Expand>
			<svelte:fragment slot="header">
				<div class="text-xl font-medium">Comment puis-je mettre à niveau mon plan ?</div>
			</svelte:fragment>
			<svelte:fragment slot="content">
				Vous pouvez mettre à niveau votre plan à tout moment en cliquant sur le bouton "Tarifs" dans
				le menu.
			</svelte:fragment>
		</Expand>
	</div>
</div>
