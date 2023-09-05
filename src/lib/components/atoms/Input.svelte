<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
	import { createEventDispatcher } from 'svelte'
	export let value: string
	export let placeholder: string
	export let type: string
	export let name: string
	export let labelInput = ''
	export let errorMessage = ''
	const dispatch = createEventDispatcher()

	function handleInput(event: InputEvent) {
		const input = event.target as HTMLInputElement
		dispatch('input', input.value)
	}
	function typeAction(node: { type: any }) {
		node.type = type
	}
</script>

<div class="{$$props.class} w-full">
	{#if labelInput}
		<label for="input" class="label font-bold">
			<span class="label-text">{labelInput}</span>
		</label>
	{/if}
	<div class="relative form-control">
		{#if errorMessage}
			<div
				class="tooltip tooltip-error absolute right-2 z-20 top-1/2 -translate-y-1/2"
				data-tip={errorMessage}
			>
				<Icon color="error" icon="info-circle" />
			</div>
		{/if}
		<input
			id="input"
			use:typeAction
			bind:value
			class:border-error={errorMessage}
			class:border-gray-200={!errorMessage}
			class="{$$props.class} w-full px-8 py-4 bg-gray-50 rounded-lg font-medium border border-gray-200 placeholder-gray-500 text-xs focus:outline-none focus:border-gray-400 focus:bg-white"
			{name}
			on:input={handleInput}
			{placeholder}
		/>
	</div>
</div>
