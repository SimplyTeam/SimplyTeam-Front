<script lang="ts">
	import SearchBar from '$lib/features/sidebar/SearchBar.svelte'
	import Sidebar from '$lib/features/sidebar/Sidebar.svelte'
</script>

<div class="pl-[max(3vw,3rem)] h-screen">
	<Sidebar withWorkspace={false} />
	<SearchBar />
	<slot />
</div>
