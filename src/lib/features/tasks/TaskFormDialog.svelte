<script lang="ts">
  import { taskFormIsOpen, taskForm } from "$lib/stores/taskForm"
  import StatusSelect from "$lib/components/StatusSelect.svelte"
  import PrioritySelect from "$lib/components/PrioritySelect.svelte"
  import AssigneesSelect from "$lib/components/AssignesSelect.svelte"
  import AvatarChip from "$lib/components/AvatarChip.svelte"
  import DatePicker from "$lib/components/DatePicker.svelte"
  import Button from "$lib/components/atoms/Button.svelte"
  import { sprintsStore } from "$lib/stores/sprintsStore"
  import api from "$lib/utils/axios"
  import Input from "$lib/components/atoms/Input.svelte"
  import { currentWorkspace } from "$lib/stores/workspace"
  import Toast from "$lib/components/atoms/Toast.svelte"
  import Select from "$lib/components/Select.svelte"

  let activeTab: "description" | "comments" = "description"
  $: formIsOpen = $taskFormIsOpen
  $: sprintsOptions = [
    { name: "Backlog", value: 0},
    ...$sprintsStore.sprints.map((sprint) => ({ name: sprint.name, value: sprint.id }))
  ]

  async function onSubmit(event) {
    event.preventDefault()

    const task = { ...$taskForm.task }

    const payload = {
      label: task.name,
      description: task.description,
      priority_id: task.priority.id,
      status_id: task.status.id,
      estimated_timestamp: task.estimatedTime,
      realized_timestamp: task.completedTime,
      deadline: task.dueDate,
      assigned_to: task.assignedTo.map((user) => user.email),
      is_finish: false,
    }

    if (task.sprintId !== undefined) payload.sprint_id = task.sprintId === 0 ? null : task.sprintId

    try {
      if ($taskForm.mode === "create") {
        await api.post(
          `/workspaces/${$taskForm.workspaceId}/projects/${$taskForm.projectId}/tasks`,
          payload
        )
        showToast("La tâche a bien été créer", "success")
      }
      else {
        await api.put(
          `/workspaces/${$taskForm.workspaceId}/projects/${$taskForm.projectId}/tasks/${task.id}`,
          payload
        )
        showToast("La tâche a bien été modifiée", "success")
      }

      sprintsStore.fetchSprintsByProjectId($taskForm.workspaceId, $taskForm.projectId)
      taskForm.close()
    }
    catch (error) {
      showToast(error.response.data.message, "error")
    }
  }

  const showToast = (messageToast: string, themeToast: string) => {
    const message = messageToast
    const duration = 3000
    const theme = themeToast
    const position = 'top-right'

    new Toast({
      target: document.body,
      props: { message, duration, theme, position }
    })
  }


</script>

<div class="drawer drawer-end">
  <!-- hidden input to toggle the drawer -->
  <input type="checkbox" id="task-form-drawer" bind:checked={formIsOpen} on:change={taskForm.close}
         class="drawer-toggle">

  <div class="drawer-side">
    <!--    drawer overlay-->
    <label for="task-form-drawer" class="drawer-overlay"></label>

    <form on:submit={onSubmit}
          class="menu p-4 w-1/3 min-w-[25rem] h-full bg-base-200 text-base-content flex flex-col gap-3">
      <input
        class="input w-full bg-base-200 text-base-content text-lg"
        bind:value={$taskForm.task.name}
        placeholder="Nom de la tâche"
      />

      <div class="flex gap-2 ml-4 items-center">
        <label class="text-lg">Priorité</label>
        <PrioritySelect bind:selectedPriority={$taskForm.task.priority}/>
      </div>

      <div class="flex gap-2 ml-4 items-center">
        <label class="text-lg">Sprint</label>
        <Select bind:value={$taskForm.task.sprintId} items={sprintsOptions}/>
      </div>

      <div class="divider m-0"></div>

      <div class="flex gap-2 ml-4 items-center">
        <label class="text-lg">Assignées</label>
        <AssigneesSelect
          bind:selectedAssignees={$taskForm.task.assignedTo}
          assignees={$currentWorkspace.users}
        />
      </div>
      <div class="flex gap-2 ml-4 items-center">
        <label class="text-lg">Status</label>
        <StatusSelect bind:selectedStatus={$taskForm.task.status}/>
      </div>

      <div class="flex gap-2 ml-4 items-center h-8">
        <label class="text-lg">Date de fin</label>
        <DatePicker date={$taskForm.task.dueDate}/>
      </div>

      <div class="flex gap-2 ml-4 items-center">
        <label class="text-lg">Créer par</label>
        <AvatarChip name={$taskForm.task.createdBy?.name}/>
      </div>

      <div class="flex gap-2 ml-4 items-center">
        <label class="text-lg">Temps estimé</label>
        <Input bind:value={$taskForm.task.estimatedTime}/>
      </div>

      <div class="flex gap-2 ml-4 items-center">
        <label class="text-lg">Temps accompli</label>
        <Input bind:value={$taskForm.task.completedTime}/>
      </div>


      <div class="tabs">
        <a
          class="tab tab-bordered tab-active text-lg" class:tab-active={activeTab === "description"}
          on:click={() => activeTab = "description"}
        >
          Description
        </a>
        <a class="tab tab-bordered text-lg"
           class:tab-active={activeTab === "comments"}
           on:click={() => activeTab = "comments"}
        >
          Commentaires
        </a>
      </div>
      {#if activeTab === "description"}
            <textarea
              class="textarea h-32 textarea-bordered textarea-primary max-h-64"
              placeholder="Description de la tâche"
              bind:value={$taskForm.task.description}
            ></textarea>
      {:else}
        Commentaires
      {/if}
      <Button type="submit" class="mt-auto">{$taskForm.mode === "create" ? "Enregister" : "Modifier"}</Button>
    </form>
  </div>

</div>