import api from '$lib/utils/axios'
import { writable } from 'svelte/store'
import type { ISprint } from "$lib/models/sprint"

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
