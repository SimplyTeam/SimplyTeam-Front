<script lang="ts">
	import { authStore } from '$lib/stores/auth'
	import CardRecent from '../molecules/CardRecent.svelte'
	import LevelContent from '../molecules/LevelContent.svelte'
	import ProgressBarContent from '../molecules/ProgressBarContent.svelte'
	import Badge from '$lib/assets/badge.png'
	import Fnac from '$lib/assets/badge/Fnac_Logo.svg'
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

{#if $authStore.info && $authStore.user}
	<ProgressBarContent
		class="mt-5"
		levelUser={$authStore.user.level_id}
		progress={50}
		progressMax={100}
	/>
	<LevelContent arrayOfIllustrationLevel={$authStore.info?.levels} class="mt-5" />
	<div class="flex mt-5 justify-between">
		<CardRecent {badge} title="Derniers badges obtenues" class="mr-5" />
		<CardRecent badge={reward} title="Dernieres récompenses obtenues" />
	</div>
{/if}
