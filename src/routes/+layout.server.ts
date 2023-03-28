import type { LayoutServerLoad } from './$types'

export const load = (async ({ locals: {accessToken, user} }) => {
	return {
        accessToken,
		user
	}
}) satisfies LayoutServerLoad
