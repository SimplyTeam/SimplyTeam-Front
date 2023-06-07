<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import Icon from '$lib/components/atoms/Icon.svelte'
	export let value: string
	export let placeholder: string
	export let type: string
	export let name: string
	export let labelInput = ''
	export let errorMessage = ''
	export let fontSize = 'text-sm'
	export let fontWeight = 'font-medium'
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
		<label class="label font-bold">
			<span class="label-text">{labelInput}</span>
		</label>
	{/if}
	<div class="relative form-control">
		{#if errorMessage}
			<div
				class="tooltip tooltip-error absolute right-2 top-1/2 -translate-y-1/2"
				data-tip={errorMessage}
			>
				<Icon color="error" icon="info-circle" />
			</div>
		{/if}
		<input
			use:typeAction
			bind:value
			class:border-error={errorMessage}
			class:border-gray-200={!errorMessage}
			class="{$$props.class} {fontSize} {fontWeight} w-full px-8 py-4 rounded-lg font-medium bg-indigo-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
			{name}
			on:input={handleInput}
			{placeholder}
		/>
	</div>
</div>
