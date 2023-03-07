<script lang="ts">
	import { projectsStore } from '$lib/stores/projects'
	import Project from './Project.svelte'
</script>

<div class="project-list overflow-auto pr-1">
	{#each $projectsStore.projects as project}
		<Project {project} />
	{/each}
</div>

<style lang=scss>
.project-list::-webkit-scrollbar {
    width: 2px;
}

.project-list::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

.project-list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px theme('colors.primary'); 
}
</style>