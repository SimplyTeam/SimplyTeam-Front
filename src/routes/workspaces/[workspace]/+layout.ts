import type { LayoutLoad } from './$types'
import { redirect } from '@sveltejs/kit'
import type { IWorkspace } from '$lib/models/workspace'
import type { IUser } from '$lib/models/user'
import { currentWorkspace } from '$lib/stores/workspace'

const user: IUser = {
	created_at: new Date(),
	updated_at: new Date(),
	email: 'test@test.fr',
	name: 'test',
	id: 1
}

export const load = (({ params }) => {
	const workspace: IWorkspace = {
		created_by: user,
		users: [user],
		description: 'description',
		id: +params.workspace,
		name: 'Mon espace'
	}

	// TODO Query directly from api
	if (params.workspace !== 'undefined') {
		currentWorkspace.set(workspace)
	} else throw redirect(303, '/workspaces')
}) satisfies LayoutLoad
