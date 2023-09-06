<script lang="ts">
	import SimpleLayout from '$lib/components/layouts/SimpleLayout.svelte'
	import WithHeaderLayout from '$lib/components/layouts/WithHeaderLayout.svelte'
	import Backlog from '$lib/features/projects/organisms/Backlog.svelte'
	import { backlogStore } from '$lib/stores/backlogStore'
</script>

<SimpleLayout>
	<WithHeaderLayout
		class="h-32 -ml-3 self-center"
		illustration={'/quest/travail-dur-gold.svg'}
		title="Backlog"
		subtitle="Gérer les tâches futures de votre projet."
	>
		<Backlog tasks={$backlogStore.tasks} />
	</WithHeaderLayout>
</SimpleLayout>
