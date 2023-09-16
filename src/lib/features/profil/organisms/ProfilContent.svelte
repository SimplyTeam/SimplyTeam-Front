<script lang="ts">
	import { authStore } from '$lib/stores/auth'
	import CardRecent from '../molecules/CardRecent.svelte'
	import LevelContent from '../molecules/LevelContent.svelte'
	import ProgressBarContent from '../molecules/ProgressBarContent.svelte'
	import type { IQuest } from '$lib/models/quest'
	import { questStore } from '$lib/stores/quest'
	import { onMount } from 'svelte'

	let getQuestsByFinishedLatest = {}

	onMount(async () => {
		await questStore.getQuests()
		await authStore.getRewards()
	})
	$: getQuestsByFinishedLatest = $questStore.quests.filter((quest: IQuest) => quest.is_completed)[0]
	$: rewardLatest = $authStore.info.rewards[0] ?? null

	function getMaxProgress(level: number): number {
		const levelInfo = $authStore.info.levels.find((levelInfo) => levelInfo.id === level)
		return levelInfo?.max_point ?? 0
	}

	function badgeIllustration(image: string, grade: string): string {
		const badge = image.split('.')[0]
		return `/quest/${badge}-${grade}.svg`
	}
</script>

{#if $authStore.info && $authStore.user}
	<ProgressBarContent
		class="mt-5 shadow-md"
		levelUser={$authStore.user.level_id}
		progress={$authStore.user.earned_points}
		progressMax={getMaxProgress($authStore.user.level_id)}
	/>
	<LevelContent arrayOfIllustrationLevel={$authStore.info?.levels} class="mt-5" />
	<div class="flex mt-5 justify-between">
		{#if getQuestsByFinishedLatest}
			<CardRecent
				title="Derniers badges obtenues"
				description={getQuestsByFinishedLatest.name}
				image={badgeIllustration(getQuestsByFinishedLatest.image, getQuestsByFinishedLatest.grade)}
				dateObtention={getQuestsByFinishedLatest.date_completed}
				link="/profil/quests"
				class="mr-5"
			/>
		{:else}
			<CardRecent title="Derniers badges obtenues" description="Aucun badge obtenue" class="mr-5" />
		{/if}
		{#if rewardLatest}
			<CardRecent
				title="Dernières récompenses obtenues"
				description={rewardLatest.description}
				image={rewardLatest.image}
				dateObtention={rewardLatest.dateObtention}
			/>
		{:else}
			<CardRecent title="Dernières récompenses obtenues" description="Aucune récompense obtenue" />
		{/if}
	</div>
{/if}
