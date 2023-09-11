<script lang="ts">
	import { authStore } from '$lib/stores/auth'
	import { onMount } from 'svelte'
	import CardReward from '../molecules/CardReward.svelte'

	onMount(async () => {
		await authStore.getRewards()
	})
	$: rewards = $authStore.rewards || []
</script>

<div class="flex flex-1 mx-5 flex-wrap w-full">
	{#if rewards.length === 0}
		<div class="flex flex-1 flex-col items-center justify-center w-full">
			<h1 class="text-center text-2xl text-gray-400 mt-10">
				Vous n'avez pas encore de récompenses
			</h1>
		</div>
	{:else}
		{#each $authStore.rewards as reward}
			<CardReward {reward} />
		{/each}
	{/if}
</div>
