<script lang="ts">
	import ExpandedContent from '$lib/components/atoms/ExpandedContent.svelte'
	import type { ISprint } from '$lib/stores/projects'
	import Task from '../molecules/Task.svelte'

	export let sprint: ISprint
	export let isOpen = false
</script>

<ExpandedContent arrowPosition="right" hoverable={false} expanded={isOpen}>
	<span slot="header">
		<h2 class="text-xl">{sprint.name}</h2>
	</span>
	<span slot="content">
		<div class="flex flex-col gap-1 bg-white py-1">
			{#each sprint.tasks as task}
				<Task {task} />
			{/each}
		</div>
	</span>
</ExpandedContent>
