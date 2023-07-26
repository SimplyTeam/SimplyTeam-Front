<script lang="ts">
  import { slide } from 'svelte/transition'

  import Icon from "$lib/components/atoms/Icon.svelte"
  import { clickOutside } from "$lib/utils/clickOutside"
  import AvatarChip from "$lib/components/AvatarChip.svelte"
  import type { IUser } from "$lib/models/auth"

  let userNameSearch: string = ""

  export let usersList: IUser[] = []
  export let onAdd: (user: IUser) => void

  let selectIsOpen = false

  $: filteredUserList = usersList.filter(
    suggestion => suggestion.name.toLowerCase().includes(userNameSearch.toLowerCase())
  )

  function onAddUser(user: IUser) {
    onAdd(user)
    resetInput()
  }

  function resetInput() {
    selectIsOpen = false
    userNameSearch = ""
  }
</script>

<div
  class="relative rounded-full h-8 bg-base-300 pr-4 inline-flex gap-2 items-center w-fit cursor-pointer"
  use:clickOutside on:click-outside={resetInput}
>
  <div class="rounded-full w-8 flex justify-center items-center">
    <Icon icon="plus"/>
  </div>
  <input
    type="text"
    class="text-xs bg-transparent w-28"
    on:focus={() => selectIsOpen = true}
    placeholder="Ajouter un assignee"
    bind:value={userNameSearch}
  />

  {#if selectIsOpen}
    <div class="absolute h-32 p-2 bg-base-400 overflow-auto top-full w-full flex flex-col gap-1 mt-1 z-10"
         transition:slide>
      {#each filteredUserList as user}
        <div class="h-8" on:click={() => onAddUser(user)}>
          <AvatarChip name={user.name} isFullwidth/>
        </div>
      {/each}
    </div>
  {/if}
</div>