<script lang="ts">
  import { slide } from 'svelte/transition'
  import TaskLabel from "$lib/features/projects/atoms/TaskLabel.svelte"
  import { Status } from "$lib/features/tasks/models/Status"
  import { clickOutside } from "$lib/utils/clickOutside"

  export let selectedStatus: Status = Status.Todo
  let selectIsOpen = false
</script>

<div
  class="cursor-pointer"
  use:clickOutside on:click-outside={() => selectIsOpen = false}
>
  <div class="relative h-8" on:click={() => selectIsOpen = !selectIsOpen}>
    <TaskLabel class="bg-task-{selectedStatus.code}">{selectedStatus.toString()}</TaskLabel>
  </div>
  {#if selectIsOpen}
    <div class="absolute h-32 flex flex-col gap-1 mt-1 z-10" transition:slide>
      {#each Status.All as status}
        <div class="h-8" on:click={() => {
          selectedStatus = status
          selectIsOpen = false
      }}>
          <TaskLabel class="h-8 bg-task-{status.code}">{status.toString()}</TaskLabel>
        </div>
      {/each}
    </div>
  {/if}
</div>