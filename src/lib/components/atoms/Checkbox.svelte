<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let checked = false
	export let name: string

	const dispatch = createEventDispatcher()

	function handleInput(checked: boolean) {
		dispatch('change', { checked, name })
	}
</script>

<label
	for={name}
	class="rounded-xl border-secondary border-2 h-4 w-4 flex items-center justify-center"
>
	<input
		type="checkbox"
		class="hidden peer"
		{checked}
		on:change={handleInput(checked)}
		{name}
		id={name}
	/>
	<div class="bg-secondary h-2 w-2 rounded-xl hidden peer-checked:block" />
</label>
