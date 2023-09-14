<script lang="ts">
  import { slide } from 'svelte/transition'
  import TaskLabel from "$lib/features/projects/atoms/TaskLabel.svelte"
  import { Priority } from "$lib/features/tasks/models/Priority"
  import { clickOutside } from "$lib/utils/clickOutside"

  export let selectedPriority: Priority = Priority.Normal
  export let name: string
  let selectIsOpen = false
</script>

<div
  aria-label={name}
  class="cursor-pointer"
  use:clickOutside on:click-outside={() => selectIsOpen = false}
>
  <div class="relative h-8" on:click={() => selectIsOpen = !selectIsOpen}>
    <TaskLabel class="bg-task-{selectedPriority.code}">{selectedPriority.toString()}</TaskLabel>
  </div>
  {#if selectIsOpen}
    <div class="absolute h-32 flex flex-col gap-1 mt-1 z-10" transition:slide>
      {#each Priority.All as priority}
        <div class="h-8" on:click={() => {
          selectedPriority = priority
          selectIsOpen = false
      }}>
          <TaskLabel class="h-8 bg-task-{priority.code}">{priority.toString()}</TaskLabel>
        </div>
      {/each}
    </div>
  {/if}
</div>