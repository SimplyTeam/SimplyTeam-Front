import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from '../$types'

export const load = (({ locals }) => {
	if (!locals.accessToken) throw redirect(302, '/')
}) satisfies LayoutServerLoad
