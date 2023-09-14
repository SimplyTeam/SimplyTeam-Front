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
		getProjectById: async (workspaceId: number | string, projectId: number | string) => {
			const { data } = await api.get(`/workspaces/${workspaceId}/project/${projectId}`)
			update((store) => ({
				...store,
				selectedProject: data.data
			}))
		},
		deleteProjectById: async (workspaceId: number | string, projectId: number | string) => {
			await api.delete(`/workspaces/${workspaceId}/project/${projectId}`)
		},
		addProjectByWorkspaceId: async (workspaceId: number | string, projectName: string) => {
			await api.post(`/workspaces/${workspaceId}/projects`, {
				name: projectName
			})
		},
		updateProjectById: async ( workspaceId: number | string, projectId: number | string, payload: Partial<IProject>) => {
			const {data} = await api.put(`/workspaces/${workspaceId}/projects/${projectId}`, payload)
			update((store) => ({
				...store,
				selectedProject: data.data
			}))
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
