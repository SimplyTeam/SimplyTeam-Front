import axios from '$lib/utils/axios'
import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load = (async ({ locals, params }) => {
	if (params.workspace !== 'undefined') {
		try {
			const res = await axios(locals.accessToken).get(`workspaces/${params.workspace}`)
			return {
				workspace: res.data
			}
		} catch (err: any) {
			console.log(err)
			throw redirect(303, '/workspaces')
		}
	} else throw redirect(303, '/workspaces')
}) satisfies LayoutServerLoad
