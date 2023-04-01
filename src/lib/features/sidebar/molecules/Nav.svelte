<script lang="ts">
	import NavItem from '$lib/features/sidebar/atoms/NavItem.svelte'
	import { corePagesStore } from '$lib/stores/nav'
</script>

<nav>
	{#each $corePagesStore as page}
		<NavItem icon={page.icon} href={page.path} isActive={corePagesStore.isActivePath(page.path)} />
	{/each}
</nav>
