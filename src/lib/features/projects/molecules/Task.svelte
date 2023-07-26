<script lang="ts">
	import ExpandedContent from '$lib/components/atoms/ExpandedContent.svelte'
	import type { ITask } from '$lib/stores/projects'
	import TaskContent from './TaskContent.svelte'

	export let task: ITask
	export let onTaskClick: (task: ITask) => void
</script>

{#if task.subtasks.length > 0}
	<ExpandedContent arrowPosition="right" hoverable={false} expandSelector="arrow">
		<svelte:fragment slot="header">
			<div class="text-base w-full"><TaskContent {task} on:click={() => onTaskClick(task)} /></div>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<div class="flex flex-col gap-1 bg-white ml-[36px]">
				{#each task.subtasks as subtask}
					<div class="pr-2">
						<TaskContent task={subtask} on:click={() => onTaskClick(subtask)} />
					</div>
				{/each}
			</div>
		</svelte:fragment>
	</ExpandedContent>
{:else}
	<div class="ml-[36px] pr-2">
		<TaskContent {task} on:click={() => onTaskClick(task)} />
	</div>
{/if}
