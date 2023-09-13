import { page } from '$app/stores'
import { derived } from 'svelte/store'
import { currentWorkspace } from './workspace'

interface IPage {
	label: string
	isHidden?: boolean
}

export interface ICorePage extends IPage {
	path: string
	icon: string
}

export interface IProjectPage extends IPage {
	path?: (projectName: string) => string
}

export interface IGlobalPage extends IPage {
	path: string
}

export enum Page {
	Workspaces = 'Workspaces',
	WorkspaceSettings = 'WorkpaceSettings',
	User = 'User',
	Sprints = 'Sprints',
	MyTasks = 'MyTasks',
	Backlog = 'Backlog',
	Quests = 'Quests',
	Notifications = 'Notifications',
	Awards = 'Awards',
	Settings = 'Settings',
	Logout = 'Logout'
}

type CorePages = Partial<Record<Page, ICorePage>>
type ProjectPages = Partial<Record<Page, IProjectPage>>
type GlobalPages = Partial<Record<Page, IGlobalPage>>

// Pages that are shown in the core navigation
export const corePages = derived<typeof currentWorkspace, CorePages>(
	currentWorkspace,
	($currentWorkspace) => ({
		[Page.Workspaces]: {
			icon: 'building',
			path: `/workspaces`,
			label: 'Workspaces'
		},
		[Page.Quests]: {
			path: `/quests`,
			label: 'Les quêtes',
			icon: 'award'
		},
		[Page.User]: {
			icon: 'user',
			path: '/profil',
			label: 'Profil'
		},
		[Page.Settings]: {
			icon: 'cog',
			path: '/settings',
			label: 'Paramètres'
		}
	})
)

// Pages that are shown in all projects dropdown navigation
export const projectPages = derived<typeof currentWorkspace, ProjectPages>(
	currentWorkspace,
	($currentWorkspace) => ({
		[Page.Sprints]: {
			path: (projectName: string) => `/workspaces/${$currentWorkspace?.id}/${projectName}/sprints`,
			label: 'Les sprints'
		},
		[Page.MyTasks]: {
			path: (projectName: string) =>
				`/workspaces/${$currentWorkspace?.id}/${projectName}/sprints?filter=me`,
			label: 'Mes tâches'
		},
		[Page.Backlog]: {
			path: (projectName: string) => `/workspaces/${$currentWorkspace?.id}/${projectName}/backlog`,
			label: 'Backlog'
		}
	})
)
export const globalPages = derived<typeof currentWorkspace, GlobalPages>(
	currentWorkspace,
	($currentWorkspace) => ({
		[Page.WorkspaceSettings]: {
			path: `/workspaces/${$currentWorkspace?.id}/settings`,
			label: 'Paramètres du workspace'
		}
	})
)
const createCorePagesStore = () => {
	const { subscribe } = derived<typeof corePages, ICorePage[]>(corePages, ($corePages) =>
		Object.values($corePages)
	)

	function isActivePath(path: string) {
		let isActive = false

		page.subscribe((value) => {
			isActive = value.url.pathname === path
		})

		return isActive
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
