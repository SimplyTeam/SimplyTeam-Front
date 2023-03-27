import type { LayoutLoad } from './$types'
import { workspace } from '$lib/stores/nav'
import { redirect } from '@sveltejs/kit'

export const load = (({ params }) => {
	if (params.workspace !== 'undefined') workspace.set(params.workspace)
	else throw redirect(303, '/workspaces')
}) satisfies LayoutLoad
