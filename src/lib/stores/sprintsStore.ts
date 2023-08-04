import api from '$lib/utils/axios'
import { writable } from 'svelte/store'
import type { ISprint } from "$lib/models/sprint"

export interface SprintForm {
	name: string
	beginAt: Date,
	endAt: Date,
}

export interface ISprintsState {
	sprints: ISprint[]
}

function createSprintsStore() {
	const { subscribe, set, update } = writable<ISprintsState>({
		sprints: [],
	})

	return {
		subscribe,
		set,
		update,
		addSprintToProject: async (workspaceId: string, projectId: string, sprint: SprintForm) => {
			return await api.post(`/workspaces/${workspaceId}/projects/${projectId}/sprints`, {
				name: sprint.name,
				begin_date: sprint.beginAt,
				end_date: sprint.endAt,
			})
		},
		fetchSprintsByProjectId: async (workspaceId: string, projectId: string) => {
			const { data: sprints } = await api.get(`/workspaces/${workspaceId}/projects/${projectId}/sprints`)

			update((store) => ({
				...store,
				sprints
			}))
		},
	}
}

export const sprintsStore = createSprintsStore()
