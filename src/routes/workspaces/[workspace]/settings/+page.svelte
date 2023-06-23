<script lang="ts">
	import WithActionsLayout from '$lib/components/layouts/WithActionsLayout.svelte'
	import Button from '$lib/components/atoms/Button.svelte'
	import Input from '$lib/components/atoms/Input.svelte'
	import ModalDeleteWorkspace from '$lib/features/settings/molecules/ModalDeleteWorkspace.svelte'
	import ProjectList from '$lib/features/settings/organims/ProjectsList.svelte'
	import UsersList from '$lib/features/settings/organims/UsersList.svelte'
	import type { IWorkspace } from '$lib/models/workspace'
	import { currentWorkspace, updateWorkspace } from '$lib/stores/workspace'
	import { onMount } from 'svelte'

	let currentTab: 'users' | 'projects' = 'users'
	let timeout: NodeJS.Timeout
	const tabComponents = {
		users: UsersList,
		projects: ProjectList
	}
	let workspace: IWorkspace | null = $currentWorkspace ?? null
	let showModaldeleteWorkspace = false

	function handleNomInput(e: CustomEvent<any>) {
		if (!e.detail || !workspace) return
		workspace = { ...workspace, name: e.detail }
		resetTimeout()
	}
	function handleDescriptionInput(e: CustomEvent<any>) {
		if (!e.detail || !workspace) return
		workspace = { ...workspace, description: e.detail }
		resetTimeout()
	}
	async function callAPI() {
		if (!workspace) return
		updateWorkspace(workspace)
	}
	function resetTimeout() {
		clearTimeout(timeout)
		timeout = setTimeout(callAPI, 500)
	}

	onMount(() => {
		return () => {
			clearTimeout(timeout)
		}
	})
</script>

<WithActionsLayout class="overflow-hidden">
	<svelte:fragment slot="actions">
		<Button
			on:click={() => {
				showModaldeleteWorkspace = true
			}}
			class="-mb-5 btn-error hover:scale-105 hover:bg-red-800 ease-in text-xs mr-10 z-10"
			>Suppression de votre espace</Button
		>
	</svelte:fragment>
	{#if showModaldeleteWorkspace}
		<ModalDeleteWorkspace
			bind:showModal={showModaldeleteWorkspace}
			on:closeModal={() => {
				showModaldeleteWorkspace = false
			}}
		/>
	{/if}
	<div class="w-full flex justify-center bg-white" slot="content">
		<div class="w-1/2 flex mt-10 m-5 flex-col justify-center items-center">
			<form class="flex flex-col gap-2">
				<Input
					label="Nom de l'espace"
					type="text"
					name="name"
					value={workspace?.name}
					on:input={handleNomInput}
					fontSize="text-lg"
					fontWeight="font-bold"
					class="w-full !text-lg border-none hover:border-dotted !font-bold bg-transparent h-8"
				/>
				<Input
					label="Description de l'espace"
					type="text"
					name="name"
					fontSize="text-lg"
					fontWeight="font-bold"
					value={workspace?.description}
					on:input={handleDescriptionInput}
					class="w-full bg-transparent border-none hover:border-dotted h-8"
				/>
			</form>
		</div>
	</div>
	<div class="divider w-full my-0 py-0 h-0 bg-black after:opacity-100 !opacity-100" />
	<div class="w-full pl-5 flex-1 flex-col bg-white">
		<div class="text-xl font-bold mt-5">Paramètres d'espace de travail</div>
		<div class="tabs mt-5">
			<p
				on:keydown
				on:click={() => (currentTab = 'projects')}
				class:tab-active={currentTab === 'projects'}
				class:!border-primary={currentTab === 'projects'}
				class="tab w-1/4 tab-bordered text-xl text-bold"
			>
				Mes projets
			</p>
			<p
				on:keydown
				on:click={() => (currentTab = 'users')}
				class:tab-active={currentTab === 'users'}
				class:!border-primary={currentTab === 'users'}
				class="tab w-1/4 tab-bordered text-primary text-xl tab-active"
			>
				Mon équipes
			</p>
		</div>
		<svelte:component this={tabComponents[currentTab]} />
	</div>
</WithActionsLayout>
