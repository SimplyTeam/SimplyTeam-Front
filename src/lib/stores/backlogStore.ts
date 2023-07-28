import api from '$lib/utils/axios'
import { writable } from 'svelte/store'
import type { ITask } from "$lib/models/task"

export interface IBacklogState {
	tasks: ITask[]
}

function createBacklogStore() {
	const { subscribe, set, update } = writable<IBacklogState>({
		tasks: [],
	})

	return {
		subscribe,
		set,
		update,
		fetchBacklogTasksByProjectId: async (workspaceId: string, projectId: string) => {
			const { data: tasks } = await api.get(`/workspaces/${workspaceId}/projects/${projectId}/tasks/backlog`)

			update((store) => ({
				...store,
				tasks
			}))
		},
	}
}

export const backlogStore = createBacklogStore()
