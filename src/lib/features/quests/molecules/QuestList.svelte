<script lang="ts">
	import type { IQuest } from '$lib/models/quest'
	import Quest from '$lib/features/quests/molecules/Quest.svelte'
	import QuestSkeleton from './QuestSkeleton.svelte'
	export let questList: Array<IQuest>
</script>

<div class="flex flex-1 flex-wrap">
	{#each questList as quest}
		<Quest {quest} />
	{/each}
</div>
