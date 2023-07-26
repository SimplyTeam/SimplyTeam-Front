<script lang="ts">
  import { DateInput, localeFromDateFnsLocale } from 'date-picker-svelte'
  import Icon from "$lib/components/atoms/Icon.svelte"
  import { fr } from 'date-fns/locale'

  export let date: Date = new Date()
  const locale = localeFromDateFnsLocale(fr)
</script>

<div class="date-picker">
  <Icon icon="calendar"/>
  <DateInput bind:value={date} {locale} format="dd/MM/yyyy"/>
</div>


<style lang="scss" global>
  .date-picker {
    display: flex;
    height: 2rem;
    align-items: center;
    border-radius: 0.25rem;
    gap: 0.25rem;
    padding: 0.25rem;
    background: #DED4F0;

    :global(input) {
      background: #DED4F0;
      border: 0;
    }
  }
</style>
