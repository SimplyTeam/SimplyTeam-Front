<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import Icon from '$lib/components/atoms/Icon.svelte'
	import ProjectFormPopIn from '$lib/features/sidebar/organisms/ProjectFormPopIn.svelte'
	import { projectsStore } from '$lib/stores/projects'
	let isEditModalOpen: boolean = false

	async function handleDelete() {
		await projectsStore.deleteProjectById($page.params.workspace, $page.params.project)
		await projectsStore.getProjectsByWorkspaceId($page.params.workspace)
		const latestProject = $projectsStore.projects[0]
		if (latestProject) goto(`/workspaces/${$page.params.workspace}/${latestProject.id}/sprints`)
		else {
			goto(`/workspaces/${$page.params.workspace}`)
		}
	}
</script>

<div class="flex">
	<h1 class="font-bold text-3xl mr-3">{$projectsStore.selectedProject.name}</h1>
	<div class="dropdown" on:click|stopPropagation>
		<div tabindex="0" role="button" class="m-1">
			<Icon icon="ellipsis-h" color="base" />
		</div>
		<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-sm z-10">
			<li><a href="#" on:click={() => (isEditModalOpen = true)}>Modifier</a></li>
			<li>
				<a on:click={() => handleDelete()} href="#"> Supprimer </a>
			</li>
		</ul>
	</div>
</div>
<ProjectFormPopIn on:closeModal={() => (isEditModalOpen = false)} {isEditModalOpen} />
