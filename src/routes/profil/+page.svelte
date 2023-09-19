<script lang="ts">
	import WithActionsLayout from '$lib/components/layouts/WithActionsLayout.svelte'
	import { authStore } from '$lib/stores/auth'
	import ProfilLayout from '$lib/features/profil/molecules/ProfilLayout.svelte'
	import Button from '$lib/components/atoms/Button.svelte'
	import { onMount } from 'svelte'
	import NavigationBarProfil from '$lib/features/sidebar/molecules/navigationBarProfil.svelte'
	import ProfilContent from '$lib/features/profil/organisms/ProfilContent.svelte'
	import QuestProfilContent from '$lib/features/profil/organisms/QuestProfilContent.svelte'
	import RewardProfilContent from '$lib/features/profil/organisms/RewardProfilContent.svelte'
	import Icon from '$lib/components/atoms/Icon.svelte'

	let loading = true
	onMount(async () => {
		if (!$authStore.user) return
		await authStore.info()
		loading = false
	})
	let currentTab: 'users' | 'projects' | 'rewards' = 'users'

	const tabComponents = {
		users: ProfilContent,
		projects: QuestProfilContent,
		rewards: RewardProfilContent
	}
</script>

{#if $authStore.info && $authStore.user && !loading}
	<WithActionsLayout name={$authStore?.user?.name}>
		<svelte:fragment slot="actions">
			{#if !authStore.userHasPremium($authStore.user)}
				<a href="profil/plan" class="lg:-mb-6 hover:scale-105 ease-in z-10">
					<Button class="text-xs">
						Plan premium
						<Icon class="text-white" icon="crown" />
					</Button>
				</a>
			{/if}
		</svelte:fragment>
		<svelte:fragment slot="content">
			<ProfilLayout user={$authStore.user} />
			<NavigationBarProfil {currentTab} on:changeTab={(e) => (currentTab = e.detail)} />
			<svelte:component this={tabComponents[currentTab]} />
		</svelte:fragment>
	</WithActionsLayout>
{:else}
	<WithActionsLayout>
		<svelte:fragment slot="actions">
			<Button
				class="lg:-mb-6 btn-error w-52 hover:scale-105 hover:bg-red-800 ease-in text-xs z-10"
			/>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<ProfilLayout {loading} />
			<NavigationBarProfil />
			<LevelContent {loading} />
		</svelte:fragment>
	</WithActionsLayout>
{/if}
