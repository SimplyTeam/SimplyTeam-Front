<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
	export let icon: string = ''
	export let href: string = ''
	export let isActive = false
	export let logout: () => void | null = null
</script>

{#if logout}
	<button
		on:click={logout}
		class="w-full relative block after:content-[''] after:block after:pb-[100%] rounded hover:nav-item-active"
		class:nav-item-active={isActive}
	>
		<Icon
			{icon}
			color="neutral"
			class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
		/>
	</button>
{:else}
	<a
		{href}
		class="w-full relative block after:content-[''] after:block after:pb-[100%] rounded hover:nav-item-active"
		class:nav-item-active={isActive}
	>
		<Icon
			{icon}
			color="neutral"
			class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
		/>
	</a>
{/if}
