<script lang="ts">
import { authStore, type IUser } from '$lib/store/login'
  import { derived } from 'svelte/store'

	export let value: string
	export let placeholder: string
	export let type: string
	export let name: string
	export let errorMessage = ""

	function typeAction(node: { type: any }) {
		node.type = type;
	}
</script>

<div class="relative w-full max-w-sm">
	<input
		use:typeAction
		bind:value
		class="{$$props.class} w-full max-w-sm px-8 py-4 rounded-lg font-medium bg-indigo-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
		{name}
		{placeholder}
	/>
	{#if errorMessage}
	<small class=" text-xs text-error h-4 block">{errorMessage}</small>
	{/if}
</div>
