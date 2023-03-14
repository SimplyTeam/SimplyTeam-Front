
<script lang="ts">
  export let type: "button" | "submit" = 'button';
</script>
<button
  on:click
  {type}
  class="btn btn-secondary text-white {$$props.class}"
>
  <slot/>
</button>
