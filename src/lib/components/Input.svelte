<script lang="ts">
import Icon from '$lib/components/Icon.svelte'

	export let value: string
	export let placeholder: string
	export let type: string
	export let name: string
	export let errorMessage = ''

	function typeAction(node: { type: any }) {
		node.type = type;
	}
</script>

<div class="relative w-full max-w-sm">
	{#if errorMessage}
	<div class="tooltip tooltip-error absolute right-2 top-1/2 -translate-y-1/2" data-tip={errorMessage}>
		<Icon color="error" icon="info-circle"></Icon>
	  </div>
	{/if}
	<input
		use:typeAction
		bind:value
		class:border-error={errorMessage}
		class:border-gray-200= {!errorMessage}
		class="{$$props.class} w-full max-w-sm px-8 py-4 rounded-lg font-medium bg-indigo-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
		{name}
		{placeholder}
	/>
</div>
