<script lang="ts">
	import Checkbox from '$lib/components/Checkbox.svelte'
	import Icon from '$lib/components/Icon.svelte'
	import type { ITask } from '$lib/stores/projects'
	import TaskLabel from '../atoms/TaskLabel.svelte'

	export let task: Omit<ITask, 'subtasks'>

	const assignees = task.assignees.slice(0, 3)
</script>

<div class="task-content-grid px-1">
	<Checkbox name={task.id} />
	<div class="text-base">{task.name}</div>
	<div class="flex justify-start items-center h-full py-1 ml-auto gap-4">
		<TaskLabel icon="clock" class="bg-task-estimation">test</TaskLabel>
		<TaskLabel icon="calendar" class="bg-task-date">test</TaskLabel>
		<TaskLabel class="bg-task-ongoing">en cours</TaskLabel>
	</div>
	<div class="w-24 flex justify-end">
		{#if assignees.length > 0}
			<div class="avatar-group -space-x-6 justify-end">
				{#each assignees as assignee}
					<div class="avatar">
						<div class="w-8">
							<img src={assignee.avatarUrl} alt="user avatar" />
						</div>
					</div>
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
