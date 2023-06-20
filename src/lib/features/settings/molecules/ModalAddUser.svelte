<script lang="ts">
	import animationData from '$lib/assets/lottie/addUser.json'
	import Button from '$lib/components/molecules/Button.svelte'
	import Modal from '$lib/components/molecules/Modal.svelte'
	import type { IWorkspace } from '$lib/models/workspace'
	import { currentWorkspace, updateWorkspace } from '$lib/stores/workspace'
	import lottie from 'lottie-web'
	import Svelecte from 'svelecte'
	import { createEventDispatcher, onMount } from 'svelte'
	export let showModalAddUser = false
	const dispatch = createEventDispatcher()
	const myI18n = {
		empty: `Ajouter un email`
	}
	let container: HTMLDivElement
	let workspace: IWorkspace = { ...$currentWorkspace, invitations: [] as string[] }
	function handleAddUser() {
		if (!$currentWorkspace) return
		try {
			updateWorkspace(workspace)
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

<Modal class="w-1/3" showModal={showModalAddUser}>
	<svelte:fragment slot="header">
		<div class="w-full flex-col justify-center items-center">
			<div class="w-1/2 mr-auto ml-auto items-center" bind:this={container} />
			<h1 class="text-center text-2xl font-bold mt-5">Ajouter des membres</h1>
			<span class="text-xs text-gray-400"
				>Une invitation par email sera envoyé aux membres ajoutés</span
			>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="message">
		<div class="flex mb-10 mt-5 flex-col items-center w-5/6">
			<div class="label w-full font-bold flex">
				<span class="label-text">Ajouter des membres</span>
			</div>
			<Svelecte
				i18n={myI18n}
				searchable
				creatable
				options={[]}
				class="svelecte-control text-red-700 w-full px-8 py-2 rounded-lg font-medium bg-indigo-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
				multiple
				bind:value={workspace.invitations}
			/>
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
					handleAddUser()
				}}
			>
				Confirmer
			</Button>
		</div></svelte:fragment
	>
</Modal>
