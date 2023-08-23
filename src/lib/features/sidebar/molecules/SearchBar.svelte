<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
	import { createEventDispatcher } from 'svelte'

	let value: string

	const dispatch = createEventDispatcher()
	let inputRef: HTMLInputElement
	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement
		dispatch('input', input.value)
	}
	function clearValue() {
		value = ''
		dispatch('input', value)
	}
</script>

<div class="flex items-center justify-between text-[.5em] font-medium p-2">
	<input
		bind:value
		on:input={handleInput}
		type="text"
		bind:this={inputRef}
		placeholder="Recherche"
		class="w-4/5 placeholder-base-content focus:placeholder-transparent outline-none"
	/>
	{#if value}
		<Icon
			on:click={() => clearValue()}
			icon="times"
			class="text-[2em] mr-3 hover:scale-125 transition-all ease-in"
		/>
	{/if}
	<Icon icon="search" class="text-[2em]" on:click={() => inputRef.focus()} />
</div>
