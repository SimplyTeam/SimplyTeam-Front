<script lang="ts">
	import { twMerge } from 'tailwind-merge'

	export let items: { value: string | boolean; name: string }[] = []
	export let placeholder = ''
	export let value: string | boolean = ''
	export let underline = false
	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let defaultClass = ''

	const common =
		'block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm border'
	const sizes = {
		sm: 'text-sm p-2',
		md: 'text-sm p-2.5',
		lg: 'text-base py-3 px-4'
	}

	$: selectClass = twMerge(common, defaultClass, sizes[size], underline && '!px-0')
</script>

<div class=" {$$props.class} flex w-full flex-col">
	{#if placeholder}
		<span class="text-gray-500">{placeholder}</span>
	{/if}
	<select {...$$restProps} bind:value class={selectClass} on:change on:contextmenu on:input>
		{#each items as { value, name }}
			<option {value}>{name}</option>
		{:else}
			<slot />
		{/each}
	</select>
</div>
