<script>
	import UserBar from '$lib/features/sidebar/organisms/UserBar.svelte'
	import WorkspaceBar from '$lib/features/sidebar/organisms/WorkspaceBar.svelte'

	export let withWorkspace = true
</script>

<div class="h-screen bg-white fixed flex left-0 text-2xl 2xl:text-[1.5vw]">
	<UserBar />
	{#if withWorkspace}
		<WorkspaceBar />
	{/if}
</div>
