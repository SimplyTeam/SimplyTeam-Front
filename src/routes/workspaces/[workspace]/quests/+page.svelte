<script lang="ts">
	import badgeIllustration from '$lib/assets/badge.png'
	import WithHeaderLayout from '$lib/components/layouts/WithHeaderLayout.svelte'
	import Quest from '$lib/features/quests/atoms/quest.svelte'
	import type { IQuest } from '$lib/models/quest'

	const quest: IQuest = {
		name: 'Sprint Parfait',
		description: "Terminer toutes les tâches assignées lors d'un sprint sans aucun retard.",
		badge: badgeIllustration
	}
	const listZob: Array<IQuest> = [quest, quest, quest, quest, quest, quest, quest]
</script>

<WithHeaderLayout
	illustration={badgeIllustration}
	title="Quêtes"
	subtitle="Accomplissez des quêtes de gestion de projet pour débloquer des récompenses et des niveaux de quête, et boostez votre productivité !"
>
	<div class="flex flex-1 flex-wrap">
		{#each listZob as quest}
			<Quest {quest} />
		{/each}
	</div>
</WithHeaderLayout>
