import api from '$lib/utils/axios'
import { writable } from 'svelte/store'
import type { ISprint } from '$lib/models/sprint'
import { sprintFromRequest } from '$lib/models/sprint'

export interface SprintForm {
	id?: string
	name: string
	beginAt: Date
	endAt: Date
}

export interface ISprintsState {
	sprints: ISprint[]
}

function createSprintsStore() {
	const { subscribe, set, update } = writable<ISprintsState>({
		sprints: []
	})

	return {
		subscribe,
		set,
		update,
		addSprintToProject: async (workspaceId: string, projectId: string, sprint: SprintForm) => {
			return await api.post(`/workspaces/${workspaceId}/projects/${projectId}/sprints`, {
				name: sprint.name,
				begin_date: sprint.beginAt,
				end_date: sprint.endAt
			})
		},
		fetchSprintsByProjectId: async (workspaceId: string, projectId: string) => {
			const { data: sprints } = await api.get(
				`/workspaces/${workspaceId}/projects/${projectId}/sprints`
			)

			update((store) => ({
				...store,
				sprints: sprints.map(sprintFromRequest)
			}))
		},
		editSprintById: async (
			workspaceId: string,
			projectId: string,
			sprintId: string,
			payload: Partial<ISprint>
		) => {
			return api.put(
				`/workspaces/${workspaceId}/projects/${projectId}/sprints/${sprintId}`,
				payload
			)
		},
		deleteSprintById: async (workspaceId: string, projectId: string, sprintId: string) => {
			await api.delete(`/workspaces/${workspaceId}/projects/${projectId}/sprints/${sprintId}`)

			update((store) => {
				const sprints = [...store.sprints]
				const sprintIndexToDelete = store.sprints.findIndex((sprint) => sprint.id === sprintId)
				sprints.splice(sprintIndexToDelete, 1)

				return {
					...store,
					sprints
				}
			})
		}
	}
}

export const sprintsStore = createSprintsStore()
