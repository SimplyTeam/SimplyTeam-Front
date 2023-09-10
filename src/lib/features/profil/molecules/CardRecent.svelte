<script lang="ts">
	import moment from 'moment-with-locales-es6'

	export let title = ''
	export let description = ''
	export let dateObtention = ''
	export let image = ''
	export let link = ''
</script>

<div class="flex w-full rounded-md {$$props.class} bg-gradient-to-r from-primary to-secondary">
	<div class="m-2">
		{#if image}
			<img src={image} class="w-20 h-20" />
		{/if}
	</div>
	<div class="flex-col m-2 flex">
		<span class="text-xl text-white font-bold">{title}</span>
		<span class="text-sm sm:text-xs text-white">{description}</span>
		{#if dateObtention}
			<span class="text-sm sm:text-sm text-white opacity-70"
				>{moment(dateObtention).locale('fr').format('LL')}</span
			>
		{/if}
	</div>
	<div class="flex-1 flex justify-end mx-5 items-center">
		<div class="flex justify-end" />
	</div>
</div>
