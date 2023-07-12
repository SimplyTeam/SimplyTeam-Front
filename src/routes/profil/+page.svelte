<script lang="ts">
	import WithActionsLayout from '$lib/components/layouts/WithActionsLayout.svelte'
	import { authStore } from '$lib/stores/auth'
	import ProfilLayout from '$lib/features/profil/organisms/ProfilLayout.svelte'
	import Button from '$lib/components/atoms/Button.svelte'
	import ProgressBarContent from '$lib/features/profil/molecules/ProgressBarContent.svelte'
	import LevelContent from '$lib/features/profil/molecules/LevelContent.svelte'
	import CardRecent from '$lib/features/profil/molecules/CardRecent.svelte'
	import Badge from '$lib/assets/badge.png'
	import Fnac from '$lib/assets/badge/Fnac_Logo.svg'
	const user = $authStore.user ?? null
	let badge: {
		name: string
		dateObtention: string
		image: string
	} | null = {
		name: 'Badge 1',
		dateObtention: '12/12/2021',
		image: Badge
	}

	let reward: {
		name: string
		dateObtention: string
		image: string
	} | null = {
		name: 'FNAC',
		dateObtention: '12/12/2021',
		image: Fnac
	}
</script>

<WithActionsLayout>
	<svelte:fragment slot="actions">
		<Button class="-mb-5 btn-error hover:scale-105 hover:bg-red-800 ease-in text-xs mr-10 z-10"
			>Suppression de votre compte</Button
		>
	</svelte:fragment>
	<svelte:fragment slot="content">
		<ProfilLayout {user} />
		<ProgressBarContent class="mt-5" progress={50} progressMax={100} />
		<LevelContent class="mt-5" />
		<div class="flex mt-5 justify-between">
			<CardRecent {badge} title="Derniers badges obtenues" class="mr-5" />
			<CardRecent badge={reward} title="Derniers récompenses obtenues" />
		</div>
	</svelte:fragment>
</WithActionsLayout>
