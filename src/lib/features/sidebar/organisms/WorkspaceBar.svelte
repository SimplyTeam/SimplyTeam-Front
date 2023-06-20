<script lang="ts">
	import SearchBar from '$lib/features/sidebar/molecules/SearchBar.svelte'
	import WorkspaceTitle from '$lib/features/sidebar/molecules/WorkspaceTitle.svelte'
	import AddProject from '$lib/features/sidebar/organisms/AddProject.svelte'
	import ProjectList from './ProjectList.svelte'

	let projectName = ''
</script>

<div class="h-full flex flex-col align-center p-4 min-w-[12rem] w-[12vw] gap-2">
	<WorkspaceTitle />
	<AddProject />
	<SearchBar on:input={(event) => (projectName = event.detail)} />
	<ProjectList projectNameSearch={projectName} />
</div>
