<script lang="ts">
  import AvatarChip from "$lib/components/AvatarChip.svelte"
  import type { IUser } from "$lib/models/auth.js"
  import InputChip from "$lib/components/InputChip.svelte"

  export let selectedAssignees: IUser[] = []
  export let assignees: IUser[] = []

  function addAssignee(assigneeToAdd: IUser) {
    selectedAssignees = [ ...selectedAssignees, assigneeToAdd ]
  }

  function removeAssignee(assigneeToDelete: IUser) {
    selectedAssignees = selectedAssignees.filter(assignee => assignee.id !== assigneeToDelete.id)
  }
</script>

<div class="cursor-pointer">
  <div class="flex flex-wrap gap-2">
    {#each selectedAssignees as assignee}
      <AvatarChip name={assignee.name} onRemove={() => removeAssignee(assignee)}/>
    {/each}
    <InputChip onAdd={(assignee) => addAssignee(assignee)} usersList={assignees}/>
  </div>
</div>
