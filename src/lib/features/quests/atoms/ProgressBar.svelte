<script lang="ts">
	import { twMerge, twJoin } from 'tailwind-merge'

	export let progress = '45'
	export let size = 'h-2.5'
	export let labelInside = false
	export let labelOutside = ''
	export let color: 'primary' | 'blue' | 'gray' | 'red' | 'green' | 'yellow' | 'purple' | 'indigo' =
		'primary'
	export let labelInsideClass =
		'text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full'
	export let divClass = 'w-full bg-gray-200 rounded-full'

	// let barColor: string;
	const barColors = {
		primary: 'bg-gradient-to-r from-primary to-secondary',
		blue: 'bg-blue-600',
		gray: 'bg-gray-600 dark:bg-gray-300',
		red: 'bg-red-600 dark:bg-red-500',
		green: 'bg-green-600 dark:bg-green-500',
		yellow: 'bg-yellow-400',
		purple: 'bg-purple-600 dark:bg-purple-500',
		indigo: 'bg-indigo-600 dark:bg-indigo-500'
	}
</script>

{#if labelOutside}
	<div {...$$restProps} class={twMerge('flex justify-between mb-1', $$props.classLabelOutside)}>
		<span class="text-base font-medium text-blue-700">{labelOutside}</span>
		<span class="text-sm font-medium text-blue-700">{progress}%</span>
	</div>
{/if}
<div class={twMerge(divClass, size, $$props.class)}>
	{#if labelInside}
		<div class={twJoin(labelInsideClass, barColors[color])} style="width: {progress}%">
			{progress}%
		</div>
	{:else}
		<div class={twJoin(barColors[color], size, 'rounded-full')} style="width: {progress}%" />
	{/if}
</div>
