<script lang="ts">
	import addProject from '$lib/assets/add_project.svg'
	import Button from '$lib/components/atoms/Button.svelte'
	import Input from '$lib/components/atoms/Input.svelte'
	import Modal from '$lib/components/atoms/Modal.svelte'
	import Icon from '$lib/components/atoms/Icon.svelte'
	import { projectsStore } from '$lib/stores/projects'
	import { currentWorkspace } from '$lib/stores/workspace'
	import { showToast } from '$lib/utils/Toast'
	import { createEventDispatcher } from 'svelte'
	import { authStore } from '$lib/stores/auth'
	import { page } from '$app/stores'
	export let isEditModalOpen = false
	const dispatch = createEventDispatcher()
	let project = $projectsStore.selectedProject
	let projectNameError = ''
	function closeModal() {
		dispatch('closeModal')
	}

	async function handleUpdateProject() {
		try {
			await projectsStore.updateProjectById($page.params.workspace, $page.params.project, project)
			await projectsStore.getProjectsByWorkspaceId($page.params.workspace, $page.params.project)
			showToast('Le nom du projet a bien été modifié', 'success')
			closeModal()
		} catch (response) {
			if (response && response.status === 422) {
				projectNameError = response.data.errors.name
				showToast('Une erreur est survenue : ' + response.data.errors.name, 'error')
			}
		}
	}
</script>

<Modal class="w-1/3" showModal={isEditModalOpen}>
	<svelte:fragment slot="header">
		<div class="w-full flex-col justify-center items-center">
			<div class="bg-primary h-5/6 mb-5 rounded-t-lg w-full">
				<div class="w-1/2 mr-auto  ml-auto items-center">
					<img src={addProject} class="w-full" />
				</div>
			</div>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="message">
		<div class="flex mb-10 flex-col items-center w-5/6">
			<h1 class="text-center text-2xl font-bold">Modifier votre projet</h1>
			<div class="label w-full font-bold flex" />
			<Input
				labelInput="Nom du projet"
				name="text"
				errorMessage={projectNameError}
				placeholder="Entrer un nom de projet"
				bind:value={project.name}
			/>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="action">
		<div class="flex w-full h-full justify-center gap-2">
			<Button
				class="btn-sm bg-gray-400 hover:scale-105 text-white border-none"
				on:click={() => closeModal()}
			>
				Annuler
			</Button>
			<Button
				class="btn-sm !btn-error hover:scale-105 !text-white"
				on:click={() => handleUpdateProject()}
			>
				Confirmer
			</Button>
		</div>
	</svelte:fragment>
</Modal>
