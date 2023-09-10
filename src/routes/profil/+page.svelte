<script lang="ts">
	import WithActionsLayout from '$lib/components/layouts/WithActionsLayout.svelte'
	import { authStore } from '$lib/stores/auth'
	import ProfilLayout from '$lib/features/profil/molecules/ProfilLayout.svelte'
	import Button from '$lib/components/atoms/Button.svelte'
	import { onMount } from 'svelte'
	import NavigationBarProfil from '$lib/features/sidebar/molecules/navigationBarProfil.svelte'
	import ProfilContent from '$lib/features/profil/organisms/ProfilContent.svelte'
	import QuestProfilContent from '$lib/features/profil/organisms/QuestProfilContent.svelte'
	import Icon from "$lib/components/atoms/Icon.svelte"

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
			{#if !authStore.userHasPremium($authStore.user)}
				<a href="profil/plan" class="lg:-mb-6 hover:scale-105 ease-in z-10">
					<Button class="text-xs">
						Plan premium
						<Icon class="text-white" icon="crown" />
					</Button>
				</a>
			{/if}

			<Button class="lg:-mb-6 btn-error hover:scale-105 hover:bg-red-800 ease-in text-xs z-10"
				>Supprimer votre compte <Icon class="text-white" icon="trash" /></Button
			>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<ProfilLayout user={$authStore.user} />
			<NavigationBarProfil {currentTab} on:changeTab={(e) => (currentTab = e.detail)} />
			<svelte:component this={tabComponents[currentTab]} />
		</svelte:fragment>
	</WithActionsLayout>
{/if}
