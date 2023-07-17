<script>
	import ProgressBar from '$lib/features/quests/atoms/progressBar.svelte'
	export let progress = 0
	export let progressMax = 0
	export let levelUser = 0

	$: progressCalcul = ((progress / progressMax) * 100).toString()
</script>

<div
	class="w-full flex {$$props.class} my-auto flex-col bg-white h-[7rem] justify-center items-center px-10"
>
	<div class="flex flex-col items-center">
		<span class="text-2xl mb-3 text-primary font-bold">Level {levelUser}</span>
	</div>
	<ProgressBar divClass="w-5/6 bg-gray-200" progress={progressCalcul} />
	<span class="text-md mt-3"> {progress} / {progressMax}</span>
</div>
