<script lang="ts">
	import animationData from '$lib/assets/lottie/deleteUser.json'
	import Button from '$lib/components/atoms/Button.svelte'
	import Modal from '$lib/components/atoms/Modal.svelte'
	import { currentWorkspace, deleteUserFromWorkspace } from '$lib/stores/workspace'
	import lottie from 'lottie-web'
	import { createEventDispatcher, onMount } from 'svelte'

	export let showModal = false
	export let userIdToDelete: number
	const dispatch = createEventDispatcher()
	let container: HTMLDivElement

	function handleDeleteUser() {
		if (!$currentWorkspace) return
		try {
			deleteUserFromWorkspace($currentWorkspace, userIdToDelete)
			closeModal()
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
			loop: 1,
			autoplay: true,
			animationData: animationData // the path to the animation json
		})
	})
</script>

<Modal class="w-1/3" bind:showModal>
	<svelte:fragment slot="header">
		<div class="w-full flex-col justify-center items-center">
			<div class="w-1/2 mr-auto ml-auto items-center" bind:this={container} />
			<h3 class="items-center text-center">Etes vous sûre ?</h3>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="message">
		<p class="text-center mb-5 mt-5 font-bold text-gray-800">
			Vous êtes sur le point de supprimer un utilisateur de votre espace de travail.
		</p>
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
					handleDeleteUser()
				}}
			>
				Confirmer
			</Button>
		</div></svelte:fragment
	>
</Modal>
