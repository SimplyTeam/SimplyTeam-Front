import { writable } from 'svelte/store'

export interface ITask {
	name: string
	id: string
	description: string
	status: string
	assignee: string
	priority: string
	estimate: number
	timeSpent: number
}

export interface ISprint {
	name: string
	id: string
	tasks: ITask[]
}

export interface IProject {
	name: string
	id: string
	sprints: ISprint[];
	backlog: ITask[];
}

export interface IProjectsState {
	projects: IProject[];
	selectedProject?: IProject;
}

const defaultState: IProjectsState = {
	projects: [
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
	],
	selectedProject: undefined
};

const createProjectStore = () => {
	const { subscribe } = writable<IProjectsState>(defaultState);

	return {
		subscribe
	};
};

export const projectsStore = createProjectStore();
