<script lang="ts">
	import badgeIllustration from '$lib/assets/badge.png'
	import WithHeaderLayout from '$lib/components/layouts/WithHeaderLayout.svelte'
	import QuestFilter from '$lib/features/quests/molecules/QuestFilter.svelte'
	import QuestList from '$lib/features/quests/molecules/QuestList.svelte'
	import { questStore } from '$lib/stores/quest'
</script>

<WithHeaderLayout
	illustration={badgeIllustration}
	title="Quêtes"
	subtitle="Accomplissez des quêtes de gestion de projet pour débloquer des récompenses et des niveaux de quête, et boostez votre productivité !"
>
	<QuestFilter />
	<QuestList questList={$questStore?.quests} />
</WithHeaderLayout>
