<script lang="ts">
	import addSprintIllu from '$lib/assets/add_sprint.svg'
	import Button from '$lib/components/atoms/Button.svelte'
	import Input from '$lib/components/atoms/Input.svelte'
	import Modal from '$lib/components/atoms/Modal.svelte'
	import { showToast } from '$lib/utils/Toast'
	import type { SprintForm } from '$lib/stores/sprintsStore'
	import { sprintsStore } from '$lib/stores/sprintsStore'
	import { page } from '$app/stores'
	import DatePicker from '$lib/components/DatePicker.svelte'

	export let isOpen = false
	export let mode: 'create' | 'edit'

	export let sprintData: SprintForm = {
		id: '',
		name: '',
		beginAt: new Date(),
		endAt: new Date()
	}

	const { workspace, project } = $page.params

	async function handleAddSprint() {
		try {
			await sprintsStore.addSprintToProject(workspace, project, sprintData)
			await sprintsStore.fetchSprintsByProjectId(workspace, project)
			isOpen = false
		} catch ({ response }) {
			if (response && response.status === 422) {
				showToast('Une erreur est survenue : ' + response.data.errors.name, 'error')
			}
		}
	}

	async function handleEditSprint() {
		try {
			await sprintsStore.editSprintById(workspace, project, sprintData.id, sprintData)
			await sprintsStore.fetchSprintsByProjectId(workspace, project)
			isOpen = false
		} catch (error) {
			console.log(error)
			if (error.response && error.response.status === 422) {
				showToast('Une erreur est survenue : ' + response.data.errors.name, 'error')
			}
		}
	}
</script>

<Modal showModal={isOpen}>
	<svelte:fragment slot="header">
		<div class="w-full flex-col justify-center items-center">
			<div class="bg-primary rounded-t-lg w-full">
				<img src={addSprintIllu} class="w-1/2 mr-auto ml-auto items-center" />
			</div>
			<h1 class="text-center text-2xl font-bold mt-5">
				{mode === 'create' ? 'Créer un sprint' : 'Modifier le sprint'}
			</h1>
			<span class="text-xs text-gray-400" />
		</div>
	</svelte:fragment>
	<svelte:fragment slot="message">
		<div class="flex mb-10 mt-5 mx-5 flex-col items-center gap-2">
			<Input
				type="text"
				labelInput="Nom du sprint"
				name="text"
				placeholder="Entrer un nom de sprint"
				bind:value={sprintData.name}
			/>
			<div class="flex justify-between gap-4">
				<DatePicker label="Date de début" class="h-12" bind:date={sprintData.beginAt} />
				<DatePicker label="Date de fin" class="h-12" bind:date={sprintData.endAt} />
			</div>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="action">
		<div class="flex w-full h-full justify-center">
			<Button
				class="btn-sm mr-10 bg-gray-400 hover:scale-105 text-white border-none"
				on:click={() => (isOpen = false)}
			>
				Annuler
			</Button>
			<Button
				class="btn-sm !btn-error hover:scale-105 !text-white"
				on:click={mode === 'create' ? handleAddSprint : handleEditSprint}
			>
				Confirmer
			</Button>
		</div>
	</svelte:fragment>
</Modal>
