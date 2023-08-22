<script lang="ts">
	import Badge from '$lib/components/atoms/Badge.svelte'
	import type { IQuest } from '$lib/models/quest'
	import ProgressBar from '$lib/features/quests/atoms/ProgressBar.svelte'
	export let quest: IQuest

	function badgeIllustration(image: string, grade: string): string {
		const badge = image.split('.')[0]
		return `/quest/${badge}-${grade}.svg`
	}
	$: progressCalcul = ((quest.completed_count / quest.count) * 100).toString()
</script>

<div
	class=" w-full sm:w-2/5 lg:w-[30%] hover:shadow-primary transition-all hover:scale-105 ease-in scale-100 px-10 mx-3 mt-5 relative bg-white border border-gray-200 rounded-lg shadow"
>
	<div class="w-full pr-8 flex absolute justify-end">
		<Badge class="w-2/6">
			+ {quest.reward_points}EXP
		</Badge>
	</div>
	<div class="flex flex-col justify-center text-center items-center pb-10">
		<img class="mt-8 w-3/5 mx-auto" alt="" src={badgeIllustration(quest.image, quest.grade)} />
		<h5 class="mb-8 mt-5 text-md font-medium text-gray-900">
			{quest.name}
		</h5>
		<span class="text-xs text-center mb-8 mx-auto font-bold text-gray-700"
			>{quest?.description}</span
		>
		<ProgressBar progress={progressCalcul} size="h-1.5" />
		{#if quest.is_completed}
			<div class="justify-center text-xs mt-5 text-center font-bold">Completé</div>
		{:else}
			<div class="justify-center text-xs mt-5 text-center">
				{quest.completed_count}/{quest.count}
			</div>
		{/if}
	</div>
</div>
