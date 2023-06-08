<script lang="ts">
	import Icon from '$lib/components/atoms/Icon.svelte'
	export let project: any
</script>

<div class="flex hover:bg-slate-100 hover:cursor-pointer gap-4">
	<div>
		<div class="w-10 rounded-full">
			<Icon icon="columns" size="3xl" />
		</div>
	</div>
	<div class="flex-1 flex flex-col justify-center">
		<div class="flex">
			<h2 class="text-lg font-bold text-black">{project?.name}</h2>
		</div>
	</div>
</div>
