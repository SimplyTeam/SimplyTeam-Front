<script lang="ts">
	import ExpandedContent from '$lib/components/atoms/ExpandedContent.svelte'
	import ProjectItemLink from '$lib/features/sidebar/atoms/ProjectItemLink.svelte'
	import { projectPagesStore } from '$lib/stores/nav'
	import type { IProject } from '$lib/stores/projects'

	export let project: IProject
	export let isExpanded = false
</script>

<ExpandedContent expanded={isExpanded}>
	<span slot="header">
		<div class="text-ellipsis overflow-hidden text-base">{project.name}</div>
	</span>
	<span slot="content">
		<div class="flex flex-col gap-1">
			{#each $projectPagesStore as page}
				{#if page.path}
					<ProjectItemLink label={page.label} href={page.path(project.id)} />
				{/if}
			{/each}
		</div>
	</span>
</ExpandedContent>
