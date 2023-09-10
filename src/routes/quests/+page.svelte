<script lang="ts">
	import WithHeaderLayout from '$lib/components/layouts/WithHeaderLayout.svelte'
	import QuestFilter from '$lib/features/quests/molecules/QuestFilter.svelte'
	import QuestList from '$lib/features/quests/molecules/QuestList.svelte'
	import { questStore } from '$lib/stores/quest'
	import type { IFilterObject } from '$lib/models/quest'
	import Sidebar from '$lib/features/sidebar/Sidebar.svelte'
	import SearchBar from '$lib/features/sidebar/SearchBar.svelte'

	questStore.getQuests()

	const updateQuestsByFilter = (filter: IFilterObject) => {
		const filterForQuests = { ...filter }
		if (filterForQuests.quest_type === '4') delete filterForQuests.quest_type
		questStore.getQuests(filterForQuests)
	}
</script>

<div class="pl-[max(3vw,3rem)] h-screen">
	<Sidebar withWorkspace={false} />
	<WithHeaderLayout
		class="h-32 -ml-3 self-center"
		illustration={'/quest/maitre-temps-silver.svg'}
		title="Quêtes"
		subtitle="Accomplissez des quêtes de gestion de projet pour débloquer des récompenses et des niveaux de quête, et boostez votre productivité !"
	>
		<QuestFilter on:filter={(e) => updateQuestsByFilter(e.detail)} />
		{#if $questStore.quests.length === 0}
			<p class="text-center text-gray-400 text-lg">Aucune quête ne correspond à votre recherche.</p>
		{:else}
			<QuestList questList={$questStore?.quests} />
		{/if}
	</WithHeaderLayout>
</div>
```
