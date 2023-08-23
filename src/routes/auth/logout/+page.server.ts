import axios from '$lib/utils/axios'
import { fail, type Actions } from '@sveltejs/kit'

export const actions: Actions = {
	default: async ({ cookies, locals }) => {
		try {
			await axios(locals.accessToken).post('/logout')

			cookies.delete('access_token', {
				path: '/'
			})
		} catch (err: any) {
			return fail(500, { message: 'Une erreur est survenue' })
		}
	}
}
