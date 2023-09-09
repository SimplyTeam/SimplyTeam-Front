<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let rows: number = 3
	export let placeholder: string = 'Your message'
	export let value = ''
	export let labelInput = ''
	const dispatch = createEventDispatcher()

	function handleInput(event: InputEvent) {
		const input = event.target as HTMLInputElement
		console.log(input.value)
		dispatch('input', input.value)
	}
</script>

{#if labelInput}
	<label for="input" class="label font-bold">
		<span class="label-text">{labelInput}</span>
	</label>
{/if}
<textarea
	bind:value
	on:input={handleInput}
	class="{$$props.class} peer border border-gray-200 rounded-lg block min-h-[auto] w-full border-1 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
	{rows}
	{placeholder}
/>
