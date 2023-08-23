<script lang="ts">
	import WithActionsLayout from '$lib/components/layouts/WithActionsLayout.svelte'
	import { authStore } from '$lib/stores/auth'
	import ProfilLayout from '$lib/features/profil/molecules/ProfilLayout.svelte'
	import Button from '$lib/components/atoms/Button.svelte'
	import { onMount } from 'svelte'
	import NavigationBarProfil from '$lib/features/sidebar/molecules/navigationBarProfil.svelte'
	import ProfilContent from '$lib/features/profil/organisms/ProfilContent.svelte'
	import QuestProfilContent from '$lib/features/profil/organisms/QuestProfilContent.svelte'

	onMount(async () => {
		if (!$authStore.user) return
		await authStore.info()
	})
	let currentTab: 'users' | 'projects' = 'users'

	const tabComponents = {
		users: ProfilContent,
		projects: QuestProfilContent
	}
</script>

{#if $authStore.info && $authStore.user}
	<WithActionsLayout name={$authStore.user.name}>
		<svelte:fragment slot="actions">
			<Button class="-mb-5 btn-error hover:scale-105 hover:bg-red-800 ease-in text-xs mr-10 z-10"
				>Suppression de votre compte</Button
			>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<ProfilLayout user={$authStore.user} />
			<NavigationBarProfil {currentTab} on:changeTab={(e) => (currentTab = e.detail)} />
			<svelte:component this={tabComponents[currentTab]} />
		</svelte:fragment>
	</WithActionsLayout>
{/if}
