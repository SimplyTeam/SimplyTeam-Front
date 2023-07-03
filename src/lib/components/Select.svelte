<script lang="ts">
	import { twMerge } from 'tailwind-merge'
	import { createEventDispatcher } from 'svelte'

	export let items: { value: string; name: string }[] = []
	export let value: any = undefined
	export let placeholder: string = ''
	export let underline: boolean = false
	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let defaultClass: string = ''

	const dispatch = createEventDispatcher()

	function handleSelect(event: Event) {
		const input = event.target as HTMLInputElement
		dispatch('input', input.value)
	}
	const common =
		'block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm border'
	const sizes = {
		sm: 'text-sm p-2',
		md: 'text-sm p-2.5',
		lg: 'text-base py-3 px-4'
	}

	let selectClass: string
	$: selectClass = twMerge(
		common,
		underline ? defaultClass : defaultClass,
		sizes[size],
		underline && '!px-0'
	)
</script>

<div class=" {$$props.class} flex w-full flex-col">
	{#if placeholder}
		<span class="text-gray-500">{placeholder}</span>
	{/if}
	<select
		on:change={(e) => handleSelect(e)}
		{...$$restProps}
		bind:value
		class={selectClass}
		on:change
		on:contextmenu
		on:input
	>
		{#each items as { value, name }}
			<option {value}>{name}</option>
		{:else}
			<slot />
		{/each}
	</select>
</div>
