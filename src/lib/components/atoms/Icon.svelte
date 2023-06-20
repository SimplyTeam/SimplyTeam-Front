<script context="module" lang="ts">
	export interface IconProps {
		size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
		icon: string
		color?:
			| 'primary'
			| 'secondary'
			| 'accent'
			| 'base'
			| 'success'
			| 'warning'
			| 'error'
			| 'info'
			| 'neutral'
			| 'white'
	}
</script>

<script lang="ts">
	export let icon: IconProps['icon']
	export let color: IconProps['color'] = 'primary'
	export let size: IconProps['size'] = 'xl'
</script>

<i on:click class="la la-{icon} icon text-{size} text-{color} {$$props.class ?? ''}" />
