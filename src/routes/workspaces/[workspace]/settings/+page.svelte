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
	<div class="w-full bg-white mt-10">
		<div class="tabs">
			<p
				on:click={() => (currentTab = 'projects')}
				class:tab-active={currentTab === 'projects'}
				class="tab tab-bordered text-md"
			>
				Mes projets
			</p>
			<p
				on:click={() => (currentTab = 'users')}
				class:tab-active={currentTab === 'users'}
				class="tab tab-bordered text-primary text-md tab-active"
			>
				Mon équipes
			</p>
		</div>
		<svelte:component this={tabComponents[currentTab]} />
	</div>
</WithActionsLayout>
