<script lang="ts">
	import NavItem from '$lib/features/sidebar/atoms/NavItem.svelte'
	import { corePagesStore } from '$lib/stores/nav'
</script>

<nav>
	{#each $corePagesStore.filter(page => !page.isHidden) as page}
		{#if page.function}
		<NavItem icon={page.icon} logout={page.function} ></NavItem>
		{:else}
		<NavItem icon={page.icon} href={page?.path} isActive={corePagesStore.isActivePath(page?.path)} />
		{/if}
	{/each}
</nav>
