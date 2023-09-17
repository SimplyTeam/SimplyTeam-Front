<script lang="ts">
	import StatusSelect from '$lib/components/StatusSelect.svelte'
	import PrioritySelect from '$lib/components/PrioritySelect.svelte'
	import AssigneesSelect from '$lib/components/AssignesSelect.svelte'
	import AvatarChip from '$lib/components/AvatarChip.svelte'
	import DatePicker from '$lib/components/DatePicker.svelte'
	import Button from '$lib/components/atoms/Button.svelte'
	import Toast from '$lib/components/atoms/Toast.svelte'
	import Input from '$lib/components/atoms/Input.svelte'
	import Select from 'svelte-select'
	import { taskFormIsOpen, taskForm } from '$lib/stores/taskForm'
	import { sprintsStore } from '$lib/stores/sprintsStore'
	import { backlogStore } from '$lib/stores/backlogStore'
	import { currentWorkspace } from '$lib/stores/workspace'
	import api from '$lib/utils/axios'

	let activeTab: 'description' | 'comments' = 'description'
	let tasksOptions = []
	$: sprintsOptions = [
		{ label: 'Backlog', value: 0 },
		...$sprintsStore.sprints.map((sprint) => ({ label: sprint.name, value: +sprint.id }))
	]
	$: taskHasParent = !!$taskForm.task.parentTaskOption

	$: formIsOpen = $taskFormIsOpen
	$: if (formIsOpen) {
		queryTasksOptions()
	}
	async function onSubmit(event) {
		event.preventDefault()

		const task = { ...$taskForm.task }

		const payload = {
			label: task.name,
			description: task.description,
			priority_id: task.priority.id,
			status_id: task.status.id,
			estimated_timestamp: task.estimatedTime,
			realized_timestamp: task.completedTime,
			deadline: task.dueDate,
			assigned_to: task.assignedTo.map((user) => user.email),
			is_finish: false,
			sprint_id: task.sprintOption.value,
			parent_id: task.parentTaskOption?.value ?? null
		}
		try {
			if ($taskForm.mode === 'create') {
				await api.post(
					`/workspaces/${$taskForm.workspaceId}/projects/${$taskForm.projectId}/tasks`,
					payload
				)
				showToast('La tâche a bien été créer', 'success')
			} else {
				if (task.status.id === 3) {
					payload.is_finish = true
				}
				await api.put(
					`/workspaces/${$taskForm.workspaceId}/projects/${$taskForm.projectId}/tasks/${task.id}`,
					payload
				)
				showToast('La tâche a bien été modifiée', 'success')
			}

			sprintsStore.fetchSprintsByProjectId($taskForm.workspaceId, $taskForm.projectId)
			backlogStore.fetchBacklogTasksByProjectId($taskForm.workspaceId, $taskForm.projectId)
			taskForm.close()
		} catch (error) {
			showToast(error.response.data.message, 'error')
		}
	}

	async function onDelete() {
		try {
			await api.delete(
				`/workspaces/${$taskForm.workspaceId}/projects/${$taskForm.projectId}/tasks/${$taskForm.task.id}`
			)

			showToast('La tâche a bien été supprimée', 'success')
			sprintsStore.fetchSprintsByProjectId(params.workspace, params.project)
			backlogStore.fetchBacklogTasksByProjectId(params.workspace, params.project)
			taskForm.close()
		} catch (error) {
			showToast(error.response.data.message, 'error')
		}
	}

	async function queryTasksOptions() {
		if (!formIsOpen) return []

		const { data } = await api.get(
			`/workspaces/${$taskForm.workspaceId}/projects/${$taskForm.projectId}/tasks`
		)

		tasksOptions = data.map((task) => ({ label: task.label, value: +task.id }))
		return tasksOptions
	}

	const showToast = (messageToast: string, themeToast: string) => {
		const message = messageToast
		const duration = 3000
		const theme = themeToast
		const position = 'top-right'

		new Toast({
			target: document.body,
			props: { message, duration, theme, position }
		})
	}
</script>

<div class="drawer drawer-end">
	<!-- hidden input to toggle the drawer -->
	<input
		type="checkbox"
		id="task-form-drawer"
		bind:checked={formIsOpen}
		on:change={taskForm.close}
		class="drawer-toggle"
	/>

	<div class="drawer-side">
		<!--    drawer overlay-->
		<label for="task-form-drawer" class="drawer-overlay" />

		<form
			on:submit={onSubmit}
			class="menu p-4 w-1/3 min-w-[25rem] h-full bg-white text-base-content grid grid-rows-[1fr_min-content] gap-3 min-h-0"
		>
			<div class="flex flex-col gap-3 flex-grow overflow-auto">
				<input
					name="name"
					class="input w-full border border-1 border-x-0 border-t-0 border-gray-200 text-base-content text-lg"
					bind:value={$taskForm.task.name}
					placeholder="Nom de la tâche"
				/>

				<div class="flex gap-2 ml-4 items-center">
					<label class="text-lg">Priorité</label>
					<PrioritySelect name="priority" bind:selectedPriority={$taskForm.task.priority} />
				</div>

				<div class="ml-4">
					<div class="flex gap-2 items-center">
						<label class="text-lg">Sprint</label>
						<Select
							name="sprint"
							bind:value={$taskForm.task.sprintOption}
							items={sprintsOptions}
							disabled={taskHasParent}
						/>
					</div>
					<div class="divider">OU</div>
					<div class="flex gap-2 items-center">
						<label class="text-lg">Parenté</label>
						<Select
							name="parent"
							bind:value={$taskForm.task.parentTaskOption}
							items={tasksOptions}
							placeholder="Sélectionner une tâche"
						/>
					</div>
				</div>

				<div class="divider m-0" />

				<div class="flex gap-2 ml-4 items-center">
					<label class="text-lg">Assignées</label>
					<AssigneesSelect
						name="assignees"
						bind:selectedAssignees={$taskForm.task.assignedTo}
						assignees={$currentWorkspace.users}
					/>
				</div>
				<div class="flex gap-2 ml-4 items-center">
					<label class="text-lg">Status</label>
					<StatusSelect bind:selectedStatus={$taskForm.task.status} />
				</div>

				<div class="flex gap-2 ml-4 items-center h-8">
					<label class="text-lg">Date de fin</label>
					<DatePicker bind:date={$taskForm.task.dueDate} />
				</div>

				<div class="flex gap-2 ml-4 items-center">
					<label class="text-lg">Créer par</label>
					<AvatarChip name={$taskForm.task.createdBy?.name} />
				</div>

				<div class="flex gap-2 ml-4 items-center">
					<label class="text-lg">Temps estimé</label>
					<Input name="estimatedTime" bind:value={$taskForm.task.estimatedTime} />
				</div>

				<div class="flex gap-2 ml-4 items-center">
					<label class="text-lg">Temps accompli</label>
					<Input name="completedTime" bind:value={$taskForm.task.completedTime} />
				</div>

				<div class="tabs">
					<a
						class="tab tab-bordered tab-active text-lg"
						class:tab-active={activeTab === 'description'}
						on:click={() => (activeTab = 'description')}
					>
						Description
					</a>
				</div>
				{#if activeTab === 'description'}
					<textarea
						name="description"
						class="textarea h-32 textarea-bordered textarea-primary max-h-64"
						placeholder="Description de la tâche"
						bind:value={$taskForm.task.description}
					/>
				{:else}{/if}
			</div>
			<div class="mt-auto self-end">
				<Button type="submit" class="w-32"
					>{$taskForm.mode === 'create' ? 'Enregister' : 'Modifier'}</Button
				>
				{#if $taskForm.mode === 'edit'}
					<Button type="button" class="mt-2 w-32 btn-error" on:click={onDelete}>Supprimer</Button>
				{/if}
			</div>
		</form>
	</div>
</div>
