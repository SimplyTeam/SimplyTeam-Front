<script lang="ts">
	import Sidebar from '$lib/features/sidebar/Sidebar.svelte'
	import workspacesIllustration from '$lib/assets/workspaces.svg'
</script>

<div class="pl-[max(3vw,3rem)] h-screen">
	<Sidebar withWorkspace={false} />
	<WithHeaderLayout
		illustration={workspacesIllustration}
		title="Espace de travail"
		subtitle="Optimisez votre productivité avec nos espaces de travail adaptés à vos besoins en gestion de projet."
	>
		test
	</WithHeaderLayout>
</div>
