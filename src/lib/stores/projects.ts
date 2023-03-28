import { derived, writable } from 'svelte/store'

export interface ITask {
	name: string
	id: string
	description: string
	status: string
	// TODO - Change this to an array of users
	assignees: Array<{
		name: string
		id: string
		avatarUrl: string
	}>
	priority: string
	estimate: number
	timeSpent: number
	subtasks: Omit<ITask, 'subtasks'>[]
}

export interface ISprint {
	name: string
	id: string
	tasks: ITask[]
}

export interface IProject {
	name: string
	id: string
	sprints: ISprint[]
	backlog: ITask[]
}

export interface IProjectsState {
	projects: IProject[]
	selectedProject?: IProject
}

const defaultState: IProject[] = [
	{
		name: 'Project 1',
		id: '1',
		sprints: [],
		backlog: []
	},
	{
		name: 'Project 2',
		id: '2',
		sprints: [],
		backlog: []
	},
	{
		name: 'Project 3',
		id: '3',
		sprints: [],
		backlog: []
	},
	{
		name: 'Project 4',
		id: '4',
		sprints: [],
		backlog: []
	}
]

export const projects = writable<IProject[]>(defaultState)

export const projectById = (id: string) => {
	return derived(projects, ($projects) => $projects.find((project) => project.id === id))
}
