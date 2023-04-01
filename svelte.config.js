import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'
import autoImport from 'sveltekit-autoimport'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		autoImport({
			components: [{ name: './src/lib', flat: true }]
		}),
		vitePreprocess()
	],

	kit: {
		adapter: adapter()
	}
}

export default config
