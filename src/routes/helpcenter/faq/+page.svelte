<script lang="ts">
	import Expand from '$lib/features/contact/atoms/expand.svelte'
	import { faqContent } from './content'
	import { goto } from '$app/navigation'
</script>

<div class="flex flex-col items-center h-screen">
	<div
		class="w-full flex flex-col items-center bg-primary mt-10 pt-10 flex justify-center items-center"
	>
		<img class="w-32 h-32" src="/faq.png" alt="Illustration FAQ" />
		<h1 class="text-4xl font-bold text-white">Centre d'aide</h1>
		<h2 class="text-lg text-gray-300 w-1/2 text-center break-words mb-10">
			Vous trouverez ici les questions les plus fréquemment posées. <br />Si vous ne trouvez pas la
			réponse à votre question, n'hésitez pas à nous contacter.
		</h2>
	</div>
	<div class="flex-col flex w-[90%]">
		{#each faqContent as question}
			<Expand>
				<svelte:fragment slot="header">
					<div class="text-xl font-medium">{question.question}</div>
				</svelte:fragment>
				<svelte:fragment slot="content">
					{@html question.answer}
				</svelte:fragment>
			</Expand>
		{/each}
	</div>
</div>
