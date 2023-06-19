<script>
	import '../app.css'
	import { onMount } from 'svelte'
	import { authStore } from '$lib/stores/auth.ts'

	onMount(() => {
		authStore.fetchSession()
	})
</script>

<svelte:head>
	<title>SimplyTeam</title>
</svelte:head>

{#if !$authStore.triedFetchingUser}
	...loading
{:else}
	<slot />
{/if}
