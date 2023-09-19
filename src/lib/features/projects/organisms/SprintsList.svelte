<script lang="ts">
	import Sprint from './Sprint.svelte'
	import type { ISprint } from '$lib/stores/projects'
	import TaskFormDialog from '$lib/features/tasks/TaskFormDialog.svelte'
	import moment from 'moment'

	export let sprints: ISprint[] = []

	$: sprintsEnCoursCompareByCurrentDate = sprints.filter((sprint) =>
		moment().isBetween(sprint.beginAt, sprint.endAt)
	)
</script>

{#each sprints as sprint, index}
	<div class="my-4">
		<Sprint {sprint} sprintEnCours={sprintsEnCoursCompareByCurrentDate[0]} isOpen={index === 0} />
	</div>
{/each}
<TaskFormDialog />
