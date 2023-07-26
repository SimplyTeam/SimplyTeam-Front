<script lang="ts">
  import Icon from "$lib/components/atoms/Icon.svelte"

  export let name: string
  export let isFullwidth: boolean = false
  export let onRemove: (() => void) | undefined = undefined
</script>

<div
  class="rounded-full h-8 bg-base-300 pr-2 flex gap-2 items-center"
  class:w-fit={!isFullwidth}
>
  <div class="avatar">
    <div class="w-8 rounded-full">
      <img src="https://i.pravatar.cc/300"/>
    </div>
  </div>
  <div class="text-xs mr-2 text-ellipsis overflow-hidden whitespace-nowrap">{name}</div>
  {#if onRemove}
    <Icon icon="times" size="sm" on:click={onRemove}/>
  {/if}
</div>