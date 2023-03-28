import type { LayoutServerLoad } from './$types'

export const load = (async ({ locals: {accessToken}, fetch }) => {
	return {
        accessToken
	}
}) satisfies LayoutServerLoad
