<script lang="ts">
	import addProject from '$lib/assets/add_project.svg'
	import Button from '$lib/components/atoms/Button.svelte'
	import Input from '$lib/components/atoms/Input.svelte'
	import Modal from '$lib/components/atoms/Modal.svelte'
  import Icon from "$lib/components/atoms/Icon.svelte"
  import { projectsStore } from '$lib/stores/projects'
  import { currentWorkspace } from '$lib/stores/workspace'
  import { showToast } from '$lib/utils/Toast'
  import { createEventDispatcher } from 'svelte'
  import { authStore } from "$lib/stores/auth"

	export let showModalAddUser = false
	const dispatch = createEventDispatcher()

	let projectName = ''
	let projectNameError = ''

  $: userCanAddProject = $projectsStore.projects.length < 1 || authStore.userHasPremium($authStore.user)

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
</script>

<Modal class="w-1/3" showModal={showModalAddUser}>
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
			{#if userCanAddProject}
        <h1 class="text-center text-2xl font-bold">Créer un projet</h1>
        <div class="label w-full font-bold flex" />
        <Input
          labelInput="Nom du projet"
          name="text"
          errorMessage={projectNameError}
          placeholder="Entrer un nom de projet"
          bind:value={projectName}
        />
			{:else}
				<p class="text-[1rem] text-center">
          Vous avez atteins votre limite de projet, veuillez passer au plan premium pour en créer plus.
        </p>
			{/if}
		</div>
	</svelte:fragment>
	<svelte:fragment slot="action">
		<div class="flex w-full h-full justify-center gap-2">
      {#if userCanAddProject}
        <Button
          class="btn-sm bg-gray-400 hover:scale-105 text-white border-none"
          on:click={() => closeModal()}
        >
          Annuler
        </Button>
        <Button
          class="btn-sm !btn-error hover:scale-105 !text-white"
          on:click={() => handleAddProject()}
        >
          Confirmer
        </Button>
      {:else}
        <Button
          class="btn-sm bg-gray-400 hover:scale-105 text-white border-none"
          on:click={() => closeModal()}
        >
          Annuler
        </Button>
        <a href="/profil/plan" class="flex">
          <Button
            icon="crown"
            class="btn-sm btn-secondary hover:scale-105 !text-white"
          >
            Passer au plan premium
            <Icon class="text-white" icon="crown" />
          </Button>
        </a>

      {/if}
		</div>
  </svelte:fragment>
</Modal>
