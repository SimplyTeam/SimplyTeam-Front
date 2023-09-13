import { goto } from '$app/navigation'
import { projectsStore } from '$lib/stores/projects'
import { getWorkspace } from '$lib/stores/workspace'
import type { LayoutLoad } from './$types'
import { currentWorkspace } from "$lib/stores/workspace"
export const load = (async ({ params }) => {
	if (params.workspace !== 'undefined') {
		try {
			await getWorkspace(params.workspace)
			await projectsStore.getProjectsByWorkspaceId(params.workspace)
		} catch (err: any) {
			goto('/workspaces')
		}
	} else goto('/workspaces')
}) satisfies LayoutLoad
