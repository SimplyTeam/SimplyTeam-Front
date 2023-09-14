<script lang="ts">
	import SimpleLayout from '$lib/components/layouts/SimpleLayout.svelte'
	import WithHeaderLayout from '$lib/components/layouts/WithHeaderLayout.svelte'
	import ProjectHeader from '$lib/features/projects/molecules/ProjectHeader.svelte'
	import Backlog from '$lib/features/projects/organisms/Backlog.svelte'
	import { backlogStore } from '$lib/stores/backlogStore'
	import { projectsStore } from '$lib/stores/projects'
</script>

<SimpleLayout>
	{#if $projectsStore.selectedProject}
		<WithHeaderLayout
			class="h-32 -ml-3 self-center"
			illustration={'/quest/travail-dur-gold.svg'}
			title="Backlog"
			subtitle="Gérer les tâches futures de votre projet."
		>
			<ProjectHeader />
			<div class="divider my-0" />
			<Backlog tasks={$backlogStore.tasks} />
		</WithHeaderLayout>
	{/if}
</SimpleLayout>
