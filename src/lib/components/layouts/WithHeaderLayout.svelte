<script lang="ts">
	export let illustration: string
	export let title: string
	export let subtitle: string
</script>

<div class="flex flex-col w-full">
	<div class="flex h-28 bg-gradient-to-r from-primary to-secondary">
		<img src={illustration} alt="header illustration" class="{$$props.class} px-10" />
		<div class="h-full py-1 flex-col flex justify-center">
			<h2 class="text-4xl mb-1 font-bold text-white">{title}</h2>
			<p class="text-sm max-w-lg text-white">{subtitle}</p>
		</div>
	</div>
	<div class="bg-base-400 h-full flex-1 p-8">
		<slot />
	</div>
</div>
