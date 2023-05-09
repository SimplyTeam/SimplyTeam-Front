<script lang="ts">
	import WithActionsLayout from '$lib/components/layouts/WithActionsLayout.svelte'
	import type { LayoutData } from './$types'
	import Button from '$lib/components/Button.svelte'
	export let data: LayoutData
	import { currentWorkspace } from '$lib/stores/workspace'
	import UsersList from '$lib/features/settings/organims/UsersList.svelte'
	import ProjectList from '$lib/features/settings/organims/ProjectsList.svelte'

	let currentTab: 'users' | 'projects' = 'users'
	const tabComponents = {
		users: UsersList,
		projects: ProjectList
	}
</script>

<WithActionsLayout>
	<svelte:fragment slot="actions">
		<Button class="-mb-5 btn-error w-1/6 text-xs mr-10 absolute z-10"
			>Suppression de votre espace</Button
		>
	</svelte:fragment>
	<div class="w-full h-28 flex justify-center bg-white" slot="content">
		<div class="w-1/2 flex flex-col justify-center items-center">
			<h2 class="text-2xl mb-1 font-bold text-black">{$currentWorkspace?.name}</h2>
			<p class="text-sm max-w-lg text-black">{$currentWorkspace?.description}</p>
		</div>
	</div>
	<div class="divider w-full my-0 py-0 h-0 bg-black after:opacity-100 !opacity-100" />
	<div class="w-full pl-5 flex-1 flex-col bg-white">
		<div class="text-xl font-bold mt-5">Paramètres d'espace de travail</div>
		<div class="tabs mt-5">
			<p
				on:click={() => (currentTab = 'projects')}
				class:tab-active={currentTab === 'projects'}
				class:!border-primary={currentTab === 'projects'}
				class="tab w-1/4 tab-bordered text-xl text-bold"
			>
				Mes projets
			</p>
			<p
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
