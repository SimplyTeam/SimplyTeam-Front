<script lang="ts">
	import { questStore } from '$lib/stores/quest'
	import CardAward from '../molecules/CardAward.svelte'
</script>

<div class="flex flex-1 mx-5 flex-wrap w-full">
	{#each $questStore.quests as award}
		<CardAward {award} />
	{/each}
</div>
