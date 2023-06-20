<script>
	import { page } from '$app/stores'
	import { authStore } from '$lib/stores/auth.ts'
	import { onMount } from 'svelte'
	import '../app.css'

	onMount(async () => {
		const url = new URL($page.url)
		const accessTokenGoogle = url.searchParams.get('access_token')
		if (accessTokenGoogle) {
			$authStore.accessToken = accessTokenGoogle
		}
		await authStore.fetchSession()
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
