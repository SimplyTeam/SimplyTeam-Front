<script lang="ts">
	import CardModal from '$lib/components/cards/ModalCard.svelte'
	import { createEventDispatcher } from 'svelte'
	import Icon from '../Icon.svelte'
	let showModal = false
	const dispatch = createEventDispatcher()
</script>

<div
	on:click={() => (showModal = true)}
	aria-hidden="true"
	class="card flex justify-center text-center mr-6 my-6 w-1/4 card-workspace bg-white border-primary border-2 shadow-md text-neutral-content"
>
	<div class="card-body">
		<Icon icon="plus-circle" color="accent" size="4xl" />
		<p class="text-primary font-bold text-xl whitespace-pre-wrap">Créer un espace de travail</p>
	</div>
</div>
<CardModal
	bind:showModal
	on:refresh={() => {
		dispatch('refresh')
	}}
	on:showModal={() => {
		showModal = false
	}}
/>

<style>
	.card-workspace {
		transform: scale(1);
		transition: all 0.2s ease-out;
	}

	.card-workspace:hover {
		box-shadow: 0px 4px 4px rgba(142, 110, 202, 0.36);
		transform: scale(1.025);
		cursor: pointer;
	}
</style>
