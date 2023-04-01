<script lang="ts">
	import { page } from '$app/stores'
	import { projects } from '$lib/stores/projects'
	import Project from './Project.svelte'
</script>

<div class="project-list overflow-auto pr-1">
	{#each $projects as project}
		<Project {project} isExpanded={$page.data.project?.id === project.id} />
	{/each}
</div>

<style lang="scss">
	.project-list::-webkit-scrollbar {
		width: 2px;
	}

	.project-list::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		border-radius: 10px;
	}

	.project-list::-webkit-scrollbar-thumb {
		border-radius: 10px;
		box-shadow: inset 0 0 6px theme('colors.primary');
	}
</style>
