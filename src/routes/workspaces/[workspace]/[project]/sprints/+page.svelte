<script>
	import SimpleLayout from '$lib/components/layouts/SimpleLayout.svelte'
	import AddSprintButton from '$lib/features/projects/atoms/AddSprintButton.svelte'
	import ProjectHeader from '$lib/features/projects/organisms/ProjectHeader.svelte'
	import SprintsList from '$lib/features/projects/organisms/SprintsList.svelte'

	export let data

	const project = data.project
</script>

<SimpleLayout>
	<ProjectHeader />
	<div class="w-full h-[1px] my-2 bg-black" />
	<AddSprintButton />
	<SprintsList sprints={project.sprints} />
</SimpleLayout>
