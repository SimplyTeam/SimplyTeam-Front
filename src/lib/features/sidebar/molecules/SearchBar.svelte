<script>
	import Icon from '$lib/components/Icon.svelte'
</script>

<form
	on:submit|preventDefault
	class="flex items-center justify-between text-[.5em] font-medium p-2"
>
	<input
		type="text"
		placeholder="Recherche"
		class="w-4/5 placeholder-base-content focus:placeholder-transparent outline-none"
	/>
	<button type="submit">
		<Icon icon="search" class="text-[2em]" />
	</button>
</form>
