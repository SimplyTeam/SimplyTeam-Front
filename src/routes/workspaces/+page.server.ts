import axios from '$lib/utils/axios'
import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = (async ({ locals, url }) => {
	const inviteToken = new URL(url).searchParams.get('token')
	const accessToken = locals.accessToken
	if (inviteToken && accessToken) {
		let success = false
		let workspaceId: number
		try {
			const res = await axios(accessToken).post('api/workspaces/invitations/accept', {
				token: inviteToken
			})
			workspaceId = res.data.id
			success = true
		} catch (err: any) {
			return { message: "Une erreur est survenue lors de l'acceptation de l'invitation" }
		}
		if (success) throw redirect(302, `/workspaces/${workspaceId}`)
	}
}) satisfies PageServerLoad
