<script lang="ts">
	import { slide } from 'svelte/transition'
	import type { IProject } from '$lib/stores/projects'
	import ProjectItemLink from '$lib/features/sidebar/atoms/ProjectItemLink.svelte'
	import { projectPagesStore } from '$lib/stores/nav'

	export let project: IProject
	let expanded = false
</script>

<div>
	<button
		on:click={() => (expanded = !expanded)}
		class="w-full h-6 p-5 pl-4 flex rounded justify-between items-center hover:project-expanded group"
		class:project-expanded={expanded}
	>
		<div class="text-base">{project.name}</div>
		<span class="flex transition-all origin-center" class:rotate={expanded}>
			<Icon icon="angle-up" color={expanded ? "white" : "primary"} class="group-hover:text-white" />
		</span>
	</button>
	{#if expanded}
		<div transition:slide class="pt-1">
			<div class="flex flex-col gap-1">
				{#each $projectPagesStore as page}
					<ProjectItemLink label={page.label} href={page.path(project.id)} />
				{/each}
			</div>
		</div>
	{/if}
</div>

<style lang="css">
	.rotate {
		transform: rotate(180deg)
	}
</style>
