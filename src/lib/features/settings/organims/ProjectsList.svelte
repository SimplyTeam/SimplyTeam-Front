<script lang="ts">
	import Project from '$lib/features/settings/molecules/Project.svelte'
	import { currentWorkspace } from '$lib/stores/workspace'
</script>

<div class="flex w-2/3 overflow-auto h-3/6 flex-col mt-5">
	{#if $currentWorkspace?.projects}
		{#each $currentWorkspace.projects as project}
			<Project {project} />
			<div class="divider w-full mt-0" />
		{/each}
	{/if}
</div>
