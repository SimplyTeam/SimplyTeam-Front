<script>
	import { page } from '$app/stores'
	import { authStore } from '$lib/stores/auth.ts'
	import { onMount } from 'svelte'
	import logo from '$lib/assets/logo-white.svg'
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
	<div class="h-screen bg-primary flex flex-col justify-center items-center">
		<img src={logo} class="h-32" />
		<div class="text-white text-2xl animate-pulse font-bold mt-5">Chargement</div>
		<div class="flex items-center justify-center space-x-2 animate-pulse">
			<div class="w-4 h-4 bg-white rounded-full" />
			<div class="w-4 h-4 bg-white rounded-full" />
			<div class="w-4 h-4 bg-white rounded-full" />
		</div>
	</div>
{:else}
	<slot />
{/if}
