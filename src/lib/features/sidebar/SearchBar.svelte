<script lang="ts">
	import { enhance } from '$app/forms'
	import Icon from '$lib/components/atoms/Icon.svelte'
	import { createEventDispatcher } from 'svelte'
	export let placeholder = 'Rechercher'
	export let action = '/search'
	export let value = ''
	const dispatch = createEventDispatcher()

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement
		dispatch('input', input.value)
	}
</script>

<div class="bg-white w-1/2">
	<div class="relative">
		<form method="POST" {action} use:enhance>
			<input
				on:input={handleInput}
				bind:value
				type="text"
				{placeholder}
				class="input w-full border border-1 border-gray-300 text-base-content"
			/>
		</form>
		<Icon icon="search" class="absolute right-2 top-1/2 -translate-y-1/2" />
	</div>
</div>
