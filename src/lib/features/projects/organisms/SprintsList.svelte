<script lang="ts">
	import Sprint from './Sprint.svelte'
	import type { ISprint } from '$lib/stores/projects'
	import TaskFormDialog from "$lib/features/tasks/TaskFormDialog.svelte"

	export let sprints: ISprint[] = []
	$: console.log(sprints)
</script>

{#each sprints as sprint, index}
	<div class="my-4">
		<Sprint {sprint} isOpen={index === 0} />
	</div>
{/each}
<TaskFormDialog />
