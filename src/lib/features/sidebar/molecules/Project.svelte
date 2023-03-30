<script lang="ts">
	import type { IProject } from '$lib/stores/projects'
	import ProjectItemLink from '$lib/features/sidebar/atoms/ProjectItemLink.svelte'
	import { projectPagesStore } from '$lib/stores/nav'
	import ExpandedContent from '$lib/components/ExpandedContent.svelte'

	export let project: IProject
	export let isExpanded = false
</script>

<ExpandedContent expanded={isExpanded}>
	<span slot="header">
		<div class="text-base">{project.name}</div>
	</span>
	<span slot="content">
		<div class="flex flex-col gap-1">
			{#each $projectPagesStore as page}
				<ProjectItemLink label={page.label} href={page.path(project.id)} />
			{/each}
		</div>
	</span>
</ExpandedContent>
