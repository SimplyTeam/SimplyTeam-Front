<script lang="ts">
	import addSprintIllu from '$lib/assets/add_sprint_illu.png'
	import Button from '$lib/components/atoms/Button.svelte'
	import Input from '$lib/components/atoms/Input.svelte'
	import Modal from '$lib/components/atoms/Modal.svelte'
	import { showToast } from '$lib/utils/Toast'
	import type { SprintForm } from "$lib/stores/sprintsStore"
	import { sprintsStore } from "$lib/stores/sprintsStore"
 	import { page } from '$app/stores'
	import DatePicker from "$lib/components/DatePicker.svelte"

	export let isOpen = false

	let sprintForm: SprintForm = {
		name: '',
		beginAt: new Date(),
		endAt: new Date()
	}

	const { workspace, project } = $page.params

	async function handleAddSprint() {
		try {
			await sprintsStore.addSprintToProject(workspace, project, sprintForm)
			await sprintsStore.fetchSprintsByProjectId(workspace, project)
			isOpen = false
		} catch ({ response }) {
			if (response && response.status === 422) {
				showToast('Une erreur est survenue : ' + response.data.errors.name, 'error')
			}
		}
	}
</script>

<Modal showModal={isOpen}>
	<svelte:fragment slot="header">
		<div class="w-full flex-col justify-center items-center">
			<img src={addSprintIllu} class="w-1/2 mr-auto ml-auto items-center" />
			<h1 class="text-center text-2xl font-bold mt-5">Créer un projet</h1>
			<span class="text-xs text-gray-400" />
		</div>
	</svelte:fragment>
	<svelte:fragment slot="message">
		<div class="flex mb-10 mt-5 flex-col items-center gap-2">
			<Input
				labelInput="Nom du sprint"
				name="text"
				placeholder="Entrer un nom de sprint"
				bind:value={sprintForm.name}
			/>
			<div class="flex justify-between gap-4">
				<DatePicker
					label="Date de début"
					class="h-12"
					bind:date={sprintForm.beginAt}
				/>
				<DatePicker
					label="Date de fin"
					class="h-12"
					bind:date={sprintForm.endAt}
				/>
			</div>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="action">
		<div class="flex w-full h-full justify-center">
			<Button
				class="btn-sm mr-10 bg-gray-400 hover:scale-105 text-white border-none mr-2"
				on:click={() => isOpen = false}
			>
				Annuler
			</Button>
			<Button
				class="btn-sm !btn-error hover:scale-105 !text-white"
				on:click={handleAddSprint}
			>
				Confirmer
			</Button>
		</div></svelte:fragment
	>
</Modal>
