import type { IProject } from '$lib/models/project'
import api from '$lib/utils/axios'
import { writable } from 'svelte/store'

export interface IProjectsState {
	projects: IProject[]
	selectedProject?: IProject
}

function createProjectStore() {
	const { subscribe, set, update } = writable<IProjectsState>({
		projects: [],
		selectedProject: undefined
	})
	return {
		subscribe,
		set,
		update,
		addProjectByWorkspaceId: async (workspaceId: number | string, projectName: string) => {
			await api.post(`/workspaces/${workspaceId}/projects`, {
				name: projectName
			})
		},
		getProjectsByWorkspaceId: async (workspaceId: number | string) => {
			const { data } = await api.get(`/workspaces/${workspaceId}/projects`)
			update((store) => ({
				...store,
				projects: data.projects
			}))
		}
	}
}

export const projectsStore = createProjectStore()
