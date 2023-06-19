import { redirect } from '@sveltejs/kit'
import type { LayoutLoad } from './$types'
import axios from '$lib/utils/axios'
import { getWorkspace } from '$lib/stores/workspace'
import { goto } from '$app/navigation'
export const load = (async ({ params }) => {
	if (params.workspace !== 'undefined') {
		try {
			getWorkspace(params.workspace)
		} catch (err: any) {
			goto('/workspaces')
		}
	} else goto('/workspaces')
}) satisfies LayoutLoad
