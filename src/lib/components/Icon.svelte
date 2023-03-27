<script lang="ts">
	export let icon: string
  	export let color: 'primary' | 'secondary' | 'accent' | 'base' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'white' = 'primary'
</script>

<i class="la la-{icon} icon text-xl text-{color} {$$props.class ?? ""}"></i>
