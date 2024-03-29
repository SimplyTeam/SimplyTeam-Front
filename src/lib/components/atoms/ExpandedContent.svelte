<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
	import { slide } from 'svelte/transition'
	import { page } from '$app/stores'
	import type { IProject } from '$lib/models/project'
	export let project: IProject | null = null
	export let expanded = false
	export let arrowPosition: 'left' | 'right' = 'left'
	export let hoverable = true
	export let expandSelector: 'full' | 'arrow' = 'full'

	$: projectIdSameParams = parseInt(project?.id) === parseInt($page.params.project)
</script>

<div>
	<button
		on:click={() => (expandSelector === 'full' ? (expanded = !expanded) : null)}
		class="w-full h-6 py-5 px-2 flex rounded items-center {hoverable &&
			'hover:project-expanded'} group"
		class:project-expanded={projectIdSameParams}
		class:arrow-left={arrowPosition === 'left'}
		class:arrow-right={arrowPosition === 'right'}
	>
		<slot name="header" />
		<span
			on:click={() => (expandSelector === 'arrow' ? (expanded = !expanded) : null)}
			on:keyup={(e) =>
				e.key === 'Enter' && expandSelector === 'arrow' ? (expanded = !expanded) : null}
			class="flex transition-all"
			class:rotate={expanded}
		>
			<Icon
				icon="angle-down"
				color={projectIdSameParams && hoverable ? 'white' : 'primary'}
				class={hoverable && 'group-hover:project-expanded'}
			/>
		</span>
	</button>
	{#if expanded}
		<div transition:slide|local class="pt-1">
			<slot name="content" />
		</div>
	{/if}
</div>

<style>
	.rotate {
		transform: rotate(180deg);
	}

	.arrow-left {
		flex-direction: row;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.arrow-right {
		flex-direction: row-reverse;
		justify-content: flex-end;
		gap: 0.5rem;
	}
</style>
