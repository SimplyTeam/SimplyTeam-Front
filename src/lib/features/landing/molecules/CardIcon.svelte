<script lang="ts" context="module">
	export interface CardIconProps {
		title: string
		description: string
		icon: string
	}
</script>

<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
	import classNames from 'classnames'

	export let title: string
	export let description: string
	export let icon: string
</script>

<div class={classNames('flex flex-col justify-center items-center', $$props.class)}>
	<div class="semi-circle">
		<div class="icon">
			<Icon {icon} />
		</div>
	</div>
	<h3 class="text-2xl font-bold">{title}</h3>
	<p class="text-sm text-base-300 leading-6 text-center">
		{description}
	</p>
</div>

<style lang="scss">
	.semi-circle {
		width: 10em;
		height: 6em;
		margin-bottom: 2rem;
		position: relative;
		border-radius: 10em 10em 0 0;
		border-style: solid;
		border-width: 0.2em;
		border-color: theme('colors.secondary');
		border-bottom: none;

		&::before,
		&::after {
			content: '';
			display: block;
			position: absolute;
			width: 0.8em;
			height: 0.8em;
			border-radius: 50%;
			background: theme('colors.secondary');
		}

		&::before {
			transform: translate(-50%, 50%);
			bottom: 0;
			left: 0;
		}

		&::after {
			transform: translate(50%, 50%);
			bottom: 0;
			right: 0;
		}
	}

	.icon {
		position: absolute;
		bottom: 0;
		left: 50%;
		padding: 1rem;
		border-radius: 50%;
		transform: translate(-50%, 50%);
		background: theme('colors.base-100');
	}
</style>
