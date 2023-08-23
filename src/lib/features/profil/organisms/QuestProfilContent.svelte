<script lang="ts">
	import { questStore } from '$lib/stores/quest'
	import CardAward from '../molecules/CardAward.svelte'
	import type { IQuest } from '$lib/models/quest'

	questStore.getQuests()
	$: getQuestsByFinished = $questStore.quests.filter((quest: IQuest) => quest.is_completed)
</script>

<div class="flex flex-1 mx-5 flex-wrap w-full">
	{#if getQuestsByFinished.length === 0}
		<div class="flex flex-1 flex-col items-center justify-center w-full">
			<h1 class="text-center text-2xl text-gray-400 mt-10">
				Vous n'avez pas encore terminé de quêtes !
			</h1>
		</div>
	{:else}
		{#each getQuestsByFinished as award}
			<CardAward {award} />
		{/each}
	{/if}
</div>
