<script lang="ts">
	import classNames from 'classnames'
	export let icon: string
	export let size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md'
</script>

<i class={classNames(`la la-${icon} icon icon-${size}`, $$props.class)}></i>

<style lang='scss'>
	.icon {
    color: theme('colors.primary');

		&-sm {
			font-size: 1rem;
		}
		&-md {
			font-size: 1.5rem;
		}
		&-lg {
			font-size: 2rem;
		}
		&-xl {
			font-size: 2.5rem;
		}
		&-2xl {
			font-size: 3rem;
		}
	}
</style>
