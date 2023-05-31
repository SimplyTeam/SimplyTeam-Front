import axios from '$lib/utils/axios'
import { fail, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = (({ cookies}) => {
	const accessToken = cookies.get('access_token')	?? null
	if (accessToken) throw redirect(302, '/workspaces')
}) satisfies PageServerLoad

export const actions = {
	google: async () => {
		try {
			/* empty */
		} catch (err: any) {
			return fail(422, { message: 'Une erreur est survenue' })
		}
	},
	login: async ({ request, cookies }) => {
		const data = await request.formData()
		const payload = {
			email: data.get('email'),
			password: data.get('password')
		}
		try {
			const res = await axios().post<{ access_token: string }>('login', payload)

			cookies.set('access_token', res.data.access_token, {
				// send cookie for every page
				path: '/',
				// server side only cookie so you can't use `document.cookie`
				httpOnly: true,
				// only requests from same site can send cookies
				// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 30
			})
		} catch (err: any) {
			return fail(422, err.response.data)
		}
	}
}
