<script lang="ts">
	import type { IQuest } from '$lib/models/quest'
	import ProgressBar from './progressBar.svelte'

	export let quest: IQuest
</script>

<div class=" w-[30%] px-10 mx-3 mt-5 bg-white border border-gray-200 rounded-lg shadow">
	<div class="flex flex-col justify-center text-center items-center pb-10">
		<img class="mt-8 w-1/4" alt="" src={quest.badge} />
		<h5 class="mb-8 text-md font-medium text-gray-900">
			{quest.name}
		</h5>
		<span class="text-xs text-center mb-8 mx-auto font-bold text-gray-700">{quest.description}</span
		>
		<ProgressBar progress="50" size="h-1.5" />
		<div class="justify-center text-xs mt-5 text-center">600/700</div>
	</div>
</div>
