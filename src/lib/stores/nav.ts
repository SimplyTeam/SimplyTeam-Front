import { derived, writable } from 'svelte/store'
import { page } from '$app/stores'

interface IPage {
	label: string
}

interface ICorePage extends IPage {
	path: string
	icon: string
}

interface IProjectPage extends IPage {
	path: (projectName: string) => string
}

enum Page {
	Workspaces = 'Workspaces',
	Dashboard = 'Dashboard',
	Sprints = 'Sprints',
	MyTasks = 'MyTasks',
	Backlog = 'Backlog',
	Quests = 'Quests',
	Notifications = 'Notifications',
	Awards = 'Awards',
	Settings = 'Settings'
}

type CorePages = Partial<Record<Page, ICorePage>>
type ProjectPages = Partial<Record<Page, IProjectPage>>

const createWorkspaceStore = () => {
	const { subscribe, set } = writable<string>(undefined)

	function setWorkspaceFromUrl(url: string): void {
		const match = url.match(/workspaces\/(\w+)\//)
    console.log("match", match)
    
		set(match ? match[1] : '')
	}

	return {
		set,
		subscribe,
		setWorkspaceFromUrl
	};
};

export const workspace = createWorkspaceStore();

// Pages that are shown in the core navigation
export const corePages = derived<typeof workspace, CorePages>(workspace, ($workspace) => ({
	[Page.Workspaces]: {
		icon: 'building',
		path: `/workspaces`,
		label: 'Workspaces'
	},
	[Page.Dashboard]: {
		icon: 'dashboard',
		path: `/workspaces/${$workspace}`,
		label: 'Dashboard'
	},
	[Page.Quests]: {
		path: `/workspaces/${$workspace}/quests`,
		label: 'Les quêtes',
		icon: 'award'
	},
	[Page.Notifications]: {
		icon: 'bell',
		path: '/notifications',
		label: 'Notifications'
	},
	[Page.Settings]: {
		icon: 'cog',
		path: '/settings',
		label: 'Paramètres'
	}
}));

// Pages that are shown in all projects dropdown navigation
export const projectPages = derived<typeof workspace, ProjectPages>(workspace, ($workspace) => ({
	[Page.Sprints]: {
		path: (projectName: string) => `/workspaces/${$workspace}/${projectName}/sprints`,
		label: 'Les sprints'
	},
	[Page.MyTasks]: {
		path: (projectName: string) => `/workspaces/${$workspace}/${projectName}/sprints`,
		label: 'Mes tâches'
	},
	[Page.Backlog]: {
		path: (projectName: string) => `/workspaces/${$workspace}/${projectName}/backlog`,
		label: 'Backlog'
	}
}));

const createCorePagesStore = () => {
	const { subscribe } = derived<typeof corePages, ICorePage[]>(corePages, ($corePages) =>
		Object.values($corePages)
	);

	function isActivePath(path: string) {
		let isActive = false

		page.subscribe((value) => {
      console.log("value", value.url, path);
      
			isActive = value.url.pathname === path
		})

		return isActive;
	}

	return {
		subscribe,
		isActivePath
	}
}

const createProjectPageStore = () => {
	const { subscribe } = derived<typeof projectPages, IProjectPage[]>(
		projectPages,
		($projectPages) => Object.values($projectPages)
	)

	return {
		subscribe
	}
}

export const corePagesStore = createCorePagesStore()
export const projectPagesStore = createProjectPageStore()
