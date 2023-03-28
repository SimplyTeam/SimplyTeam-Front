import type { LayoutServerLoad } from './$types'

export const load = (async ({ locals: {accessToken, user}, fetch }) => {
	return {
        accessToken,
		user
	}
}) satisfies LayoutServerLoad
