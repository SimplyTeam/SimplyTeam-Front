
<script lang="ts">
  export let type: "button" | "submit" = 'button'
  export let loading = false
</script>
<button
	on:click
	{type}
	class:loading={loading}
	class="btn btn-secondary text-white {$$props.class}"
>
  <slot/>
</button>
