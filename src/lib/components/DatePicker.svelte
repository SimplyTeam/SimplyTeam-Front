<script lang="ts">
  import { DateInput, localeFromDateFnsLocale } from 'date-picker-svelte'
  import { twMerge } from "tailwind-merge"
  import Icon from "$lib/components/atoms/Icon.svelte"
  import { fr } from 'date-fns/locale' 
  export let date: Date = new Date()
  export let format: string = 'dd/MM/yyyy'
  export let label: string | undefined

  const locale = localeFromDateFnsLocale(fr)
</script>

<div class="date-picker">
  {#if label}
    <label class="label font-bold">
      <span class="label-text">{label}</span>
    </label>
  {/if}
  <div class={twMerge("h-8 flex items-center rounded-md gap-0.5 p-2 bg-task-date", $$props.class)}>
    <Icon icon="calendar"/>
    <DateInput bind:value={date} {locale} {format} />
  </div>
</div>


<style lang="scss" global>
  .date-picker {
      :global(input) {
        background: #DED4F0;
        border: 0;
      }
  }
</style>
