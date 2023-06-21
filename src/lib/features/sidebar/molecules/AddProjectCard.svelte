<script lang="ts">
	import animationData from '$lib/assets/lottie/addUser.json'
	import Button from '$lib/components/atoms/Button.svelte'
	import Input from '$lib/components/atoms/Input.svelte'
	import Modal from '$lib/components/atoms/Modal.svelte'
	import { projectsStore } from '$lib/stores/projects'
	import { currentWorkspace } from '$lib/stores/workspace'
	import { showToast } from '$lib/utils/Toast'
	import lottie from 'lottie-web'
	import { createEventDispatcher, onMount } from 'svelte'
	export let showModalAddUser = false
	const dispatch = createEventDispatcher()

	let container: HTMLDivElement
	let projectName = ''
	let projectNameError = ''
	function closeModal() {
		dispatch('closeModal')
	}

	async function handleAddProject() {
		try {
			await projectsStore.addProjectByWorkspaceId($currentWorkspace.id, projectName)
			await projectsStore.getProjectsByWorkspaceId($currentWorkspace.id)
			closeModal()
		} catch ({ response }) {
			if (response && response.status === 422) {
				projectNameError = response.data.errors.name
				showToast('Une erreur est survenue : ' + response.data.errors.name, 'error')
			}
		}
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
			<h1 class="text-center text-2xl font-bold mt-5">Créer un projet</h1>
			<span class="text-xs text-gray-400" />
		</div>
	</svelte:fragment>
	<svelte:fragment slot="message">
		<div class="flex mb-10 mt-5 flex-col items-center w-5/6">
			<div class="label w-full font-bold flex" />
			<Input
				labelInput="Nom du projet"
				name="text"
				errorMessage={projectNameError}
				placeholder="Entrer un nom de projet"
				bind:value={projectName}
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
					handleAddProject()
				}}
			>
				Confirmer
			</Button>
		</div></svelte:fragment
	>
</Modal>
