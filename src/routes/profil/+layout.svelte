<script lang="ts">
	import SearchBar from '$lib/features/sidebar/SearchBar.svelte'
	import Sidebar from '$lib/features/sidebar/Sidebar.svelte'
	import { authStore } from '$lib/stores/auth'
	import { onMount } from 'svelte'

	onMount(async () => {
		await authStore.fetchSession()
	})
</script>

<div class="pl-[max(3vw,3rem)] h-screen">
	<Sidebar withWorkspace={false} />
	<slot />
</div>
