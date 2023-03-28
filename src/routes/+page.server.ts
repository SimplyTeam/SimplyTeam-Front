import type { PageServerLoad } from './$types'
import {redirect} from '@sveltejs/kit'

export const load = (async ({locals}) => {
    if (locals.accessToken) throw redirect(302, '/workspaces')
}) satisfies PageServerLoad;
