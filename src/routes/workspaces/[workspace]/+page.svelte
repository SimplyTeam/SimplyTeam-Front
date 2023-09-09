<script>
	import { goto } from '$app/navigation'
	import SimpleLayout from '$lib/components/layouts/SimpleLayout.svelte'
	import AddProjectCard from '$lib/features/sidebar/molecules/AddProjectCard.svelte'
	import { currentWorkspace } from '$lib/stores/workspace'
	import { onMount } from 'svelte'

	let showModalAddUser = false

	onMount(() => {
		console.log($currentWorkspace)
		if ($currentWorkspace && $currentWorkspace.projects.length === 0) {
			showModalAddUser = true
		} else {
			goto(`/workspaces/${currentWorkspace[0].id}/${currentWorkspace[0].projects[0].id}}/sprints`)
		}
	})
</script>

<SimpleLayout>
	<AddProjectCard bind:showModalAddUser on:closeModal={() => (showModalAddUser = false)} />
</SimpleLayout>
