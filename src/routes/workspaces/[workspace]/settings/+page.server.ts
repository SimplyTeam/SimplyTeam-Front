import axios from '$lib/utils/axios'
import { fail } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load = (async ({ locals, params }) => {
	return {}
}) satisfies PageServerLoad

export const actions: Actions = {
	deleteUser: async ({ cookies, locals }) => {
		try {
			await axios(locals.accessToken).post('/logout')

			cookies.delete('access_token', {
				path: '/'
			})
		} catch (err: any) {
			return fail(500, { message: 'Une erreur est survenue' })
		}
	},
	updateworkspace: async ({ locals, request }) => {
		const data = await request.formData()
		const payload = {
			title: data.get('title'),
			description: data.get('description')
		}
		try {
			const { data } = await axios(locals.accessToken).put('/workspaces', payload)
			return {
				workspace: data.data
			}
		} catch (err: any) {
			return fail(500, { message: 'Une erreur est survenue' })
		}
	},
}
