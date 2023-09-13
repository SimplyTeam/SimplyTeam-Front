<script lang="ts">
	import Level from '$lib/features/profil/atoms/Level.svelte'
	import type { ILevel } from '$lib/models/level'
	export let arrayOfIllustrationLevel: Array<ILevel> = []
	export let loading = false
</script>

<div class="w-full min-h-20 py-3 bg-white flex justify-between {$$props.class}">
	{#if !loading}
		{#each arrayOfIllustrationLevel as level, i (level.id)}
			<div class="flex">
				<Level {level} />
				{#if i < arrayOfIllustrationLevel.length - 1}
					<div
						class=" flex mt-10 border-4 border-l-0 border-r-0 border-b-0 border-secondary h-3 w-[calc(100%/2)]"
					/>
				{:else}
					<div
						class=" flex mt-10 border-2 border-l-0 border-r-0 border-b-0 border-white h-3 w-[calc(100%/2)]"
					/>
				{/if}
			</div>
		{/each}
	{:else}
		<div class="flex flex-col animate-pulse w-full">
			<div class="w-full h-32 bg-gray-300 rounded-lg mb-5" />
			<div class="w-full h-32 bg-gray-300 rounded-lg mb-5" />
			<div class="flex w-full justify-between">
				<div class="w-full h-32 bg-gray-300 mr-10 rounded-lg" />
				<div class="w-full h-32 bg-gray-300 rounded-lg" />
			</div>
		</div>
	{/if}
</div>
