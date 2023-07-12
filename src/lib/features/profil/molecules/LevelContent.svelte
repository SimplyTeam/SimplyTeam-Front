<script lang="ts">
	import Level from '$lib/features/profil/atoms/Level.svelte'
	export let arrayOfIllustrationLevel = [
		{
			level: 1,
			isPassed: true,
			isCurrentLevel: false,
			isNextLevel: false,
			voucherCode: null
		},
		{
			level: 2,
			isPassed: true,
			isCurrentLevel: false,
			isNextLevel: false,
			voucherCode: null
		},
		{
			level: 3,
			isCurrentLevel: true,
			isPassed: true,
			isNextLevel: false,
			voucherCode: null
		},
		{
			level: 4,
			isCurrentLevel: false,
			isPassed: false,
			isNextLevel: true,
			voucherCode: null
		},
		{
			level: 5,
			isCurrentLevel: false,
			isPassed: false,
			isNextLevel: true,
			voucherCode: null
		},
		{
			level: 6,
			isCurrentLevel: false,
			isPassed: false,
			isNextLevel: true,
			voucherCode: null
		},
		{
			level: 7,
			isCurrentLevel: false,
			isPassed: false,
			isNextLevel: true,
			voucherCode: null
		},
		{
			level: 8,
			isCurrentLevel: false,
			isPassed: false,
			isNextLevel: true,
			voucherCode: {
				code: '123456789',
				expiredDate: '12/12/2021'
			}
		}
	]
</script>

<div class="w-full min-h-20 py-3 bg-white flex justify-between {$$props.class}">
	{#each arrayOfIllustrationLevel as level, i (level.level)}
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
