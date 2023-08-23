<script>
	import Avatar from '$lib/features/settings/atoms/Avatar.svelte'
	import LevelProgress from '$lib/features/sidebar/atoms/LevelProgress.svelte'
	import Logo from '$lib/features/sidebar/atoms/Logo.svelte'
	import Nav from '$lib/features/sidebar/molecules/Nav.svelte'
	import { authStore } from '$lib/stores/auth'
</script>

<div class="h-full flex flex-col align-center p-1 min-w-[3rem] w-[3vw] gap-2">
	<Logo />
	{#if $authStore.user}
		<Avatar sizeText="text-sm" name={$authStore.user.name} />
		<LevelProgress progress={50} level={$authStore.user.level_id} />
	{/if}
	<Nav />
</div>
