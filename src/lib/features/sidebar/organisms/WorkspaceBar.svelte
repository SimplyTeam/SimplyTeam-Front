<script>
	import WorkspaceTitle from '$lib/features/sidebar/molecules/WorkspaceTitle.svelte'
	import AddProject from '$lib/features/sidebar/molecules/AddProject.svelte'
	import SearchBar from '$lib/features/sidebar/molecules/SearchBar.svelte'
	import ProjectList from '../molecules/ProjectList.svelte'
</script>

<div class="h-full flex flex-col align-center p-4 min-w-[12rem] w-[12vw] gap-2">
	<WorkspaceTitle />
	<AddProject />
	<SearchBar on:submit={() => console.log('submitted')} />
	<ProjectList />
</div>
