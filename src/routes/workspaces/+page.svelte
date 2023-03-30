<script lang="ts">
	import { page } from '$app/stores'
	import workspacesIllustration from '$lib/assets/workspaces.svg'
	import Card from '$lib/components/cards/Card.svelte'
	import SearchBar from '$lib/features/sidebar/SearchBar.svelte'
	import CardWorkspace from '$lib/components/cards/CardWorkspace.svelte'
	import WithHeaderLayout from '$lib/components/layouts/WithHeaderLayout.svelte'
	import Sidebar from '$lib/features/sidebar/Sidebar.svelte'
	import axios from '$lib/utils/axios'
	import { onMount } from 'svelte'
	interface user {
		id: number
		name: string
		email: string
		created_at: Date
		updated_at: Date
	}
	interface IWorkspace {
		id: number
		name: string
		description: number
		created_by: user
		users: Array<user>
		created_at: Date
		updated_at: Date
	}
	let workspace: Array<IWorkspace> = []
	async function getWorkspaces() {
		try {
			const res = await axios($page.data.accessToken).get('api/workspaces')
			workspace = res.data.data.workspaces
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
			<Card
				on:refresh={async () => {
					await getWorkspaces()
				}}
			/>
			{#if workspace.length > 0}
				{#each workspace as workspace}
					<CardWorkspace {workspace} />
				{/each}
			{/if}
		</div>
	</WithHeaderLayout>
</div>
