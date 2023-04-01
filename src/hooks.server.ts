import type { Handle } from '@sveltejs/kit'

// Import client credentials from json file
import axios from '$lib/utils/axios'

export const handle: Handle = async ({ event, resolve }) => {
	const url = new URL(event.url)
	// Check if the "access-token" parameter is present in the URL
	const accessTokenGoogle = url.searchParams.get('access_token')
	if (accessTokenGoogle) {
		// If it is, set the "access_token" cookie to the value of the parameter
		event.cookies.set('access_token', accessTokenGoogle)
	}
	const accessToken = event.cookies.get('access_token')

	if (!accessToken) return await resolve(event)

	try {
		// get user from me request with accessToken when ready
		const user = await axios(accessToken).get('api/me')
		event.locals = {
			...event.locals,
			accessToken,
			user: user.data
		}
	} catch (error) {
		event.cookies.delete('access_token')
	} finally {
		return await resolve(event)
	}
}
