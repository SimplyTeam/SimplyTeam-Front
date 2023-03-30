<script lang="ts">
	import workspacesIllustration from '$lib/assets/workspaces.svg'
	import Card from '$lib/components/cards/Card.svelte'
	import SearchBar from '$lib/features/sidebar/SearchBar.svelte'
	import CardWorkspace from '$lib/components/cards/CardWorkspace.svelte'
	import WithHeaderLayout from '$lib/components/layouts/WithHeaderLayout.svelte'
	import Sidebar from '$lib/features/sidebar/Sidebar.svelte'
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
			<Card />
			<CardWorkspace />
			<CardWorkspace />
			<CardWorkspace />
		</div>
	</WithHeaderLayout>
</div>
