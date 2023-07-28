<script lang="ts">
  import TaskFormDialog from "$lib/features/tasks/TaskFormDialog.svelte"
	import ExpandedContent from '$lib/components/atoms/ExpandedContent.svelte'
	import Task from "$lib/features/projects/molecules/Task.svelte"
	import Icon from "$lib/components/atoms/Icon.svelte"
	import { taskFromRequest } from "$lib/models/task"
	import { authStore } from "$lib/stores/auth"
	import { taskForm } from "$lib/stores/taskForm"
	import { page } from "$app/stores"
	import type { ITask } from "$lib/models/task"

  export let tasks: ITask[] = []
  const { workspace, project } = $page.params
</script>

<ExpandedContent arrowPosition="right" hoverable={false} expanded={true}>
	<span slot="header">
		<h2 class="text-xl">Backlog</h2>
	</span>
  <span slot="content">
		<div class="flex flex-col gap-1 bg-white py-1">
			{#each tasks as task}
				<Task
          task={taskFromRequest(task)}
          onTaskClick={(task) => taskForm.openEditTaskForm(workspace, project, 0, task)}
        />
			{/each}
		</div>
		<button
      class="text-primary flex gap-2 justify-center items-center mt-2"
      on:click={() => taskForm.openCreateTaskForm(workspace, project, 0, {
				createdBy: $authStore.user,
				sprintId: 0,
			})}
    >
			<Icon icon="plus-circle"/>
			Ajouter une tâche
		</button>
	</span>
</ExpandedContent>
<TaskFormDialog/>
