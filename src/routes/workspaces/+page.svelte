<script lang="ts">
	import { page } from '$app/stores'
	import workspacesIllustration from '$lib/assets/workspaces.svg'
	import SearchBar from '$lib/features/sidebar/SearchBar.svelte'
	import WithHeaderLayout from '$lib/components/layouts/WithHeaderLayout.svelte'
	import Sidebar from '$lib/features/sidebar/Sidebar.svelte'
	import WorkspaceCard from '$lib/features/workspace/molecules/WorkspaceCard.svelte'
	import WorkspaceAddCard from '$lib/features/workspace/organisms/WorkspaceAddCard.svelte'
	import type { IWorkspace } from '$lib/models/workspaces'
	import axios from '$lib/utils/axios'
	import { onMount } from 'svelte'

	let workspace: Array<IWorkspace> = []
	async function getWorkspaces() {
		try {
			const res = await axios($page.data.accessToken).get('workspaces')
			workspace = res.data.workspaces
		} catch (error) {
			console.log(error)
		}
	}
	onMount(async () => {
		await getWorkspaces()
	})
</script>

<div class="pl-[max(3vw,3rem)] h-screen">
	<Sidebar withWorkspace={false} />
	<SearchBar />
	<WithHeaderLayout
		illustration={workspacesIllustration}
		title="Espace de travail"
		subtitle="Optimisez votre productivité avec nos espaces de travail adaptés à vos besoins en gestion de projet."
	>
		<div class="flex flex-wrap">
			<WorkspaceAddCard
				on:refresh={async () => {
					await getWorkspaces()
				}}
			/>
			{#if workspace.length > 0}
				{#each workspace as workspace}
					<WorkspaceCard {workspace} />
				{/each}
			{/if}
		</div>
	</WithHeaderLayout>
</div>
