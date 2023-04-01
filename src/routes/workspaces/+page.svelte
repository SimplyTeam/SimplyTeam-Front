<script lang="ts">
	import Sidebar from '$lib/features/sidebar/Sidebar.svelte'
	import WithHeaderLayout from '$lib/components/layouts/WithHeaderLayout.svelte'
	import workspacesIllustration from '$lib/assets/workspaces.svg'
	import SearchBar from '$lib/features/sidebar/SearchBar.svelte'
  import WithHeaderLayout from '$lib/components/layouts/WithHeaderLayout.svelte'
</script>

<div class="pl-[max(3vw,3rem)] h-screen">
	<Sidebar withWorkspace={false} />
	<SearchBar />
	<WithHeaderLayout
		illustration={workspacesIllustration}
		title="Espace de travail"
		subtitle="Optimisez votre productivité avec nos espaces de travail adaptés à vos besoins en gestion de projet."
	>
		test
	</WithHeaderLayout>
</div>
