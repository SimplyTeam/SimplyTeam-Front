<script lang="ts" context="module">
	export interface CardIconProps {
		title: string
		description: string
		icon: string
	}
</script>

<script lang="ts">
	import classNames from 'classnames'

	export let title: string
	export let description: string
	export let icon: string
</script>

<div class={classNames('flex flex-col items-start shadow rounded-lg p-4', $$props.class)}>
	<img src={icon} class="h-24" alt="icon for ${title}" />
	<h3 class="text-2xl font-bold text-primary mb-4">{title}</h3>
	<p class="text-sm text-neutral leading-6">
		{description}
	</p>
</div>
