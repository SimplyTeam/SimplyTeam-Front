<script lang="ts">
	import Icon, { type IconProps } from '$lib/components/atoms/Icon.svelte'

	export let icon: IconProps['icon'] | undefined = undefined
	export let iconColor: IconProps['color'] = 'primary'
</script>

<div
	class="rounded px-2 flex items-center gap-1 w-28 h-full {$$props.class}"
	class:justify-center={icon === undefined}
>
	{#if icon} <Icon {icon} color={iconColor} size="2xl" /> {/if}
	<span class="text-xs"><slot /></span>
</div>
