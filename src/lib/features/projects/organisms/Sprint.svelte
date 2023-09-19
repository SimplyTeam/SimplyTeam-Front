<script lang="ts">
	import ExpandedContent from '$lib/components/atoms/ExpandedContent.svelte'
	import type { ISprint } from '$lib/models/sprint'
	import { taskForm } from '$lib/stores/taskForm'
	import Task from '../molecules/Task.svelte'
	import Icon from '$lib/components/atoms/Icon.svelte'
	import { authStore } from '$lib/stores/auth'
	import { page } from '$app/stores'
	import { currentWorkspace } from '$lib/stores/workspace'
	import { sprintsStore } from '$lib/stores/sprintsStore'
	import SprintFormPopIn from '$lib/features/sprints/SprintFormPopIn.svelte'

	import moment from 'moment-with-locales-es6'
	export let sprint: ISprint
	export let isOpen = false
	export let sprintEnCours = false

	const { workspace, project } = $page.params
	let isEditModalOpen = false
	let textBadge: string = ''
	$: colorBadgeByDate = () => {
		const now = moment()
		const endDate = moment(sprint.endAt)
		const diff = endDate.diff(now, 'days')
		if (sprintEnCours && endDate.isAfter(sprintEnCours.endAt)) {
			textBadge = 'A venir'
			return 'badge-primary text-white'
		} else if (!sprintEnCours && endDate.isAfter(now)) {
			textBadge = 'A venir'
			return 'badge-primary text-white'
		}
		if (diff < 0) {
			textBadge = 'Terminé'
			return 'badge-error'
		}
		if (diff < 3) {
			textBadge = `Il reste ${diff} jours`
			return 'badge-warning'
		}
		textBadge = 'En cours'
		return 'badge-success'
	}
</script>

<ExpandedContent arrowPosition="right" hoverable={false} expanded={isOpen}>
	<div slot="header" class="flex rounded-md items-center w-full gap-2">
		<div class="h-10 w-2.5 rounded-l-md bg-primary" />
		<div class="flex flex-col">
			<h2 class="text-3xl">{sprint.name}</h2>
		</div>
		<div class="dropdown" on:click|stopPropagation>
			<div tabindex="0" role="button" class="m-1">
				<Icon icon="ellipsis-h" color="base" />
			</div>
			<ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-sm z-10">
				<li><a href="#" on:click={() => (isEditModalOpen = true)}>Modifier</a></li>
				<li>
					<a
						on:click={() => sprintsStore.deleteSprintById($currentWorkspace.id, project, sprint.id)}
						href="#"
					>
						Supprimer
					</a>
				</li>
			</ul>
		</div>
		<div class="badge {colorBadgeByDate()}">{textBadge}</div>
	</div>
	<div slot="content">
		<div class="flex flex-col gap-1 my-3">
			{#each sprint.tasks as task}
				<Task
					{task}
					onTaskClick={(task) => taskForm.openEditTaskForm(workspace, project, sprint.id, task)}
				/>
			{/each}
		</div>
		<button
			class="text-primary ml-8 rounded-lg flex gap-2 justify-center items-center mt-2"
			on:click={() =>
				taskForm.openCreateTaskForm(workspace, project, sprint.id, {
					createdBy: $authStore.user,
					sprintId: sprint.id
				})}
		>
			<Icon icon="plus-circle" />
			Ajouter une tâche
		</button>
	</div>
</ExpandedContent>
<SprintFormPopIn bind:isOpen={isEditModalOpen} mode="edit" sprintData={{ ...sprint }} />
