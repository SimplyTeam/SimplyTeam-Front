<script lang="ts">
	import SearchBar from '$lib/features/sidebar/SearchBar.svelte'
	import Sidebar from '$lib/features/sidebar/Sidebar.svelte'
</script>

<div class="pl-[max(15vw,15rem)] bg-background h-screen">
	<Sidebar />
	<slot />
</div>
