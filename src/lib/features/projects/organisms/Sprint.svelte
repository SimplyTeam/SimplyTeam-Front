<script lang="ts">
  import ExpandedContent from '$lib/components/atoms/ExpandedContent.svelte'
  import type { ISprint } from '$lib/stores/projects'
  import { taskForm } from "$lib/stores/taskForm"
  import Task from '../molecules/Task.svelte'
  import Icon from "$lib/components/atoms/Icon.svelte"
  import { authStore } from "$lib/stores/auth"
  import { page } from '$app/stores'
  import { taskFromRequest } from "$lib/models/task"

  export let sprint: ISprint
  export let isOpen = false
  const { workspace, project } = $page.params
</script>

<ExpandedContent arrowPosition="right" hoverable={false} expanded={isOpen}>
	<span slot="header">
		<h2 class="text-xl">{sprint.name}</h2>
	</span>
  <span slot="content">
		<div class="flex flex-col gap-1 bg-white py-1">
			{#each sprint.tasks as task}
				<Task
          task={taskFromRequest(task)}
          onTaskClick={(task) => taskForm.openEditTaskForm(workspace, project, sprint.id, task)}
        />
			{/each}
		</div>
		<button
      class="text-primary flex gap-2 justify-center items-center mt-2"
      on:click={() => taskForm.openCreateTaskForm(workspace, project, sprint.id, {
				createdBy: $authStore.user,
				sprintId: sprint.id,
			})}
    >
			<Icon icon="plus-circle"/>
			Ajouter une tâche
		</button>
	</span>
</ExpandedContent>
