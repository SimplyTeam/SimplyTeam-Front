<script lang="ts">
	import type { IQuest } from '$lib/models/quest'
	export let award: IQuest
</script>

<div class="flex bg-white w-1/3 xl:w-[30%] min-h-12 mr-5 px-5 py-5 my-5 rounded-lg shadow-md">
	<img src={award.badge} alt={award.name} class="w-20 h-20 mx-3" />
	<div class="flex flex-col">
		<p class="text-md mb-2 font-bold">{award.name}</p>
		<p class="text-xs mb-2 text-start text-gray-400">{award.description}</p>
		<p class="text-xs text-start text-gray-300">Débloqué le {award.completed_at}</p>
	</div>
</div>
