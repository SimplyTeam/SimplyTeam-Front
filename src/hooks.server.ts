import { SvelteGoogleAuthHook } from 'svelte-google-auth/server';
import type { Handle } from '@sveltejs/kit';

// Import client credentials from json file
import {env} from '$env/dynamic/private';
const auth = new SvelteGoogleAuthHook(JSON.parse(env.GOOGLE_ID));

export const handle: Handle = async ({ event, resolve }) => {
  return await auth.handleAuth({ event, resolve });
};