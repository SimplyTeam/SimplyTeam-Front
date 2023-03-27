<script>
	import Logo from '$lib/features/sidebar/atoms/Logo.svelte'
	import Avatar from '$lib/features/sidebar/atoms/Avatar.svelte'
	import LevelProgress from '$lib/features/sidebar/atoms/LevelProgress.svelte'
	import Nav from '$lib/features/sidebar/molecules/Nav.svelte'
</script>

<div class="h-full flex flex-col align-center p-1 min-w-[3rem] w-[3vw] gap-2">
	<Logo />
	<Avatar src='https://i.pravatar.cc/300' />
	<LevelProgress progress={50} level={45} />
	<Nav />
</div>
