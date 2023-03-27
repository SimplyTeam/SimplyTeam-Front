import type { LayoutServerLoad } from './$types'

export const load = (async ({ locals: {  accessToken, refreshToken, user}, fetch }) => {
	return {
        accessToken,
        refreshToken,
		user
	}
}) satisfies LayoutServerLoad
