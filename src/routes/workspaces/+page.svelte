<script lang="ts">
	import { page } from '$app/stores'
	import { goto } from '$app/navigation'
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
	let workspaceNameSearch = ''
	async function getWorkspaces() {
		try {
			const res = await axios.get('workspaces')
			workspace = res.data.workspaces
		} catch (error) {
			console.log(error)
		}
	}
	$: workspaceFiltered = workspace.filter((workspace) => {
		return workspace.name.toLowerCase().includes(workspaceNameSearch.toLowerCase())
	})
	onMount(async () => {
		const inviteToken = new URL($page.url).searchParams.get('token')

		if (inviteToken) {
			let success = false
			let workspaceId: number

			const res = await axios.post('workspaces/invitations/accept', {
				token: inviteToken
			})
			workspaceId = res.data.id
			success = true

			if (success) throw goto(`/workspaces/${workspaceId}`)
		}

		await getWorkspaces()
	})
</script>

<div class="pl-[max(3vw,3rem)] h-screen">
	<Sidebar withWorkspace={false} />
	<WithHeaderLayout
		illustration={workspacesIllustration}
		title="Espace de travail"
		subtitle="Optimisez votre productivité avec nos espaces de travail adaptés à vos besoins en gestion de projet."
	>
		<SearchBar on:input={(e) => (workspaceNameSearch = e.detail)} />
		<div class="flex flex-wrap">
			<WorkspaceAddCard
				on:refresh={async () => {
					await getWorkspaces()
				}}
			/>
			{#if workspace.length > 0}
				{#each workspaceFiltered as workspace}
					<WorkspaceCard {workspace} />
				{/each}
			{/if}
		</div>
	</WithHeaderLayout>
</div>
