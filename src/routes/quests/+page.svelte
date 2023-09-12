<script lang="ts">
	import WithHeaderLayout from '$lib/components/layouts/WithHeaderLayout.svelte'
	import QuestFilter from '$lib/features/quests/molecules/QuestFilter.svelte'
	import QuestList from '$lib/features/quests/molecules/QuestList.svelte'
	import { questStore } from '$lib/stores/quest'
	import type { IFilterObject } from '$lib/models/quest'
	import Sidebar from '$lib/features/sidebar/Sidebar.svelte'
	import { onMount } from 'svelte'
	import QuestSkeleton from '$lib/features/quests/molecules/QuestSkeleton.svelte'

	let loading = true
	const updateQuestsByFilter = async (filter: IFilterObject) => {
		const filterForQuests = { ...filter }
		if (filterForQuests.quest_type === '4') delete filterForQuests.quest_type
		loading = true
		await questStore.getQuests(filterForQuests)
		loading = false
	}

	onMount(async () => {
		await questStore.getQuests()
		loading = false
	})
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
		{#if $questStore.quests.length > 0 && !loading}
			<QuestList questList={$questStore?.quests} />
		{:else}
			<div class="flex flex-1 flex-wrap">
				{#each { length: 3 } as _, i}
					<QuestSkeleton />
				{/each}
			</div>
		{/if}
	</WithHeaderLayout>
</div>
```
