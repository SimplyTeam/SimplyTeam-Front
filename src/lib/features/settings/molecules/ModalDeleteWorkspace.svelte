<script lang="ts">
	import animationData from '$lib/assets/lottie/trash.json'
	import Button from '$lib/components/atoms/Button.svelte'
	import Modal from '$lib/components/atoms/Modal.svelte'
	import { currentWorkspace, deleteWorkspace } from '$lib/stores/workspace'
	import lottie from 'lottie-web'
	import { createEventDispatcher, onMount } from 'svelte'
	const dispatch = createEventDispatcher()

	let container: HTMLDivElement
	export let showModal = false
	function handleDeleteWorkspace() {
		if (!$currentWorkspace) return
		try {
			deleteWorkspace($currentWorkspace.id)
		} catch (error: any) {
			console.log(error)
		}
	}
	function closeModal() {
		dispatch('closeModal')
	}

	onMount(() => {
		lottie.loadAnimation({
			container: container, // the DOM element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: animationData // the path to the animation json
		})
	})
</script>

<Modal class="w-1/3" bind:showModal>
	<svelte:fragment slot="header">
		<div class="w-full flex-col justify-center items-center">
			<div class="w-1/3 mr-auto ml-auto items-center" bind:this={container} />
			<h3 class="items-center text-center">Etes vous sûre ?</h3>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="message">
		<div class="w-full flex-col justify-center items-center">
			<p class="text-center mb-5 mt-5 font-bold text-gray-800">
				Vous êtes sur le point de supprimer votre espace de travail.
			</p>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="action">
		<div class="flex w-full h-full justify-center">
			<Button
				class="btn-sm mr-10 bg-gray-400 hover:scale-105 text-white border-none mr-2"
				on:click={() => {
					closeModal()
				}}
			>
				Annuler
			</Button>
			<Button
				class="btn-sm !btn-error hover:scale-105 !text-white"
				on:click={() => {
					handleDeleteWorkspace()
				}}
			>
				Confirmer
			</Button>
		</div></svelte:fragment
	>
</Modal>
