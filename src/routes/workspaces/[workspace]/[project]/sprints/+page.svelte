<script lang="ts">
	import SimpleLayout from '$lib/components/layouts/SimpleLayout.svelte'
	import WithHeaderLayout from '$lib/components/layouts/WithHeaderLayout.svelte'
	import AddSprintSection from '$lib/features/projects/atoms/AddSprintSection.svelte'
	import SprintsList from '$lib/features/projects/organisms/SprintsList.svelte'
	import { sprintsStore } from '$lib/stores/sprintsStore'
</script>

<SimpleLayout>
	<WithHeaderLayout
		class="h-32 -ml-3 self-center"
		illustration={'/quest/travail-dur-gold.svg'}
		title="Sprints"
		subtitle="Créez des sprints pour organiser votre projet et gérer vos tâches."
	>
		<AddSprintSection />
		<SprintsList sprints={$sprintsStore.sprints} />
	</WithHeaderLayout>
</SimpleLayout>
