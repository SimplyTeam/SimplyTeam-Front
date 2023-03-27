import { SvelteGoogleAuthHook } from 'svelte-google-auth/server'
import type { Handle } from '@sveltejs/kit'

// Import client credentials from json file
import { env } from '$env/dynamic/private'
const auth = new SvelteGoogleAuthHook(JSON.parse(env.GOOGLE_ID))

export const handle: Handle = async ({ event, resolve }) => {
  const accessToken = event.cookies.get('access_token')
  const refreshToken = event.cookies.get('refresh_token')

  if(!accessToken) return await resolve(event)

    try {
        // get user from me request with accessToken when ready
				event.locals = {
					...event.locals,
          accessToken,
          refreshToken,
					user: {
            id: "1",
            email: "toto@toto.fr",
            name: "toto",
            email_verified_at: new Date(),
          }
				}
        console.log(event.locals);
        
        return await resolve(event)
    }
    catch (error) {
        console.log(error);
    }  
}