<script lang="ts">
	import Checkbox from '$lib/components/atoms/Checkbox.svelte'
	import Icon from '$lib/components/atoms/Icon.svelte'
	import Avatar from '$lib/features/settings/atoms/Avatar.svelte'
	import type { ITask } from '$lib/stores/projects'
	import TaskLabel from '../atoms/TaskLabel.svelte'

	export let task: Omit<ITask, 'subtasks'>

	$: assignees = task.assignees.slice(0, 3)
	$: dueDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString() : null
</script>

<div class="task-content-grid px-1 cursor-pointer" on:click|stopPropagation>
	<Checkbox name={task.id} />
	<div class="text-base">{task.name}</div>
	<div class="flex justify-start items-center h-full py-1 ml-auto gap-4">
		<TaskLabel icon="clock" class="bg-task-estimation">{task.estimatedTime}</TaskLabel>
		<TaskLabel icon="calendar" class="bg-task-date">{dueDate}</TaskLabel>
		<TaskLabel class={`bg-task-${task.status.code}`}>{task.status}</TaskLabel>
		<TaskLabel class={`bg-task-${task.priority.code}`}>{task.priority}</TaskLabel>
	</div>
	<div class="w-24 flex justify-end">
		{#if assignees.length > 0}
			<div class="avatar-group -space-x-3 justify-end">
				{#each assignees as assignee}
					<Avatar name={assignee.name} sizeText="text-sm" class="w-11" />
				{/each}
				{#if task.assignees.length > 3}
					<div class="avatar placeholder">
						<div class="w-8 bg-neutral-focus text-neutral-content">
							<span>+{task.assignees.length - 3}</span>
						</div>
					</div>
				{/if}
			</div>
		{:else}
			<Icon icon="user-plus" size="2xl" />
		{/if}
	</div>
</div>

<style>
	.task-content-grid {
		display: flex;
		height: 42px;
		column-gap: 0.25rem;
		justify-items: flex-start;
		align-items: center;
	}
</style>
