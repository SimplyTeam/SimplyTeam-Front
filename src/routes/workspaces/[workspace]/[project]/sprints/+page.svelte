<script lang="ts">
	import SimpleLayout from '$lib/components/layouts/SimpleLayout.svelte'
	import WithHeaderLayout from '$lib/components/layouts/WithHeaderLayout.svelte'
	import AddSprintSection from '$lib/features/projects/atoms/AddSprintSection.svelte'
	import SprintsList from '$lib/features/projects/organisms/SprintsList.svelte'
	import { sprintsStore } from '$lib/stores/sprintsStore'
	import { projectsStore } from '$lib/stores/projects'
	import ProjectHeader from '$lib/features/projects/molecules/ProjectHeader.svelte'

	import { page } from '$app/stores'
	import { authStore } from '$lib/stores/auth'

	$: SprintByMyTask = $page.url.search
		? $sprintsStore.sprints.map((element) => {
				return {
					...element,
					tasks: element.tasks.filter((task) =>
						task.assignees.some((user) => {
							return user.id === $authStore.user.id
						})
					)
				}
		  })
		: $sprintsStore.sprints
</script>

<SimpleLayout>
	<WithHeaderLayout
		class="h-32 -ml-3 self-center"
		illustration={'/quest/travail-dur-gold.svg'}
		title="Sprints"
		subtitle="Créez des sprints pour organiser votre projet et gérer vos tâches."
	>
		{#if $projectsStore.selectedProject}
			<ProjectHeader />
			<div class="divider my-0" />
			<AddSprintSection />
			<SprintsList sprints={SprintByMyTask} />
		{/if}
	</WithHeaderLayout>
</SimpleLayout>
