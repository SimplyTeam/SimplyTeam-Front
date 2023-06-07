<script lang="ts">
	import SearchBar from '$lib/features/sidebar/SearchBar.svelte'
	import Sidebar from '$lib/features/sidebar/Sidebar.svelte'
	import { currentWorkspace } from '$lib/stores/workspace'

	export let data: any
	$: currentWorkspace.set(data.workspace)
</script>

<div class="pl-[max(15vw,15rem)] h-screen">
	<Sidebar />
	<SearchBar />
	<slot />
</div>
