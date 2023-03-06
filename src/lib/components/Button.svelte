<script lang="ts">
	import classNames from 'classnames';
</script>

<button
	on:click
	class={classNames('btn btn-secondary text-white', $$props.class)}
>
	<slot />
</button>
