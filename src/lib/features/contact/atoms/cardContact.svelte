<script lang="ts">
	export let route: string
</script>

<div
	class=" w-2/6 mx-12 hover:shadow-primary transition-all hover:scale-105 ease-in scale-100 z-1 bg-white border border-gray-200 rounded-lg shadow"
	on:click={route}
>
	<div class="card-body py-0">
		<slot />
	</div>
</div>
