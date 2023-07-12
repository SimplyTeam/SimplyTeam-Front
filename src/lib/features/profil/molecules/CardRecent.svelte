<script lang="ts">
	export let title = ''
	export let badge: {
		name: string
		dateObtention: string
		image: string
	} | null = null
</script>

<div class="flex w-full rounded-md {$$props.class} bg-gradient-to-r from-primary to-secondary">
	<div class="m-2">
		<img src={badge?.image} alt={badge?.name} class="w-20 h-20" />
	</div>
	<div class="flex-col m-2 flex">
		<span class="text-2xl sm:text-xl text-white font-bold">{title}</span>
		<span class="text-sm sm:text-xs text-white">{badge?.name}</span>
		<span class="text-sm sm:text-sm text-white opacity-70">{badge?.dateObtention}</span>
	</div>
	<div class="flex-1 flex justify-end mx-5 items-center">
		<div class="flex justify-end">
			<button class="text-black font-bold min-w-24 p-2 rounded-xl bg-white">voir plus</button>
		</div>
	</div>
</div>
