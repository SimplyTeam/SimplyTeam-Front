<script lang="ts">
	import Level from '$lib/features/profil/atoms/Level.svelte'
	import type { ILevel } from '$lib/models/level'
	export let arrayOfIllustrationLevel: Array<ILevel> = []
</script>

<div class="w-full min-h-20 py-3 bg-white flex justify-between {$$props.class}">
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
</div>
