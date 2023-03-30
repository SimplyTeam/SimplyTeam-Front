import { sveltekit } from '@sveltejs/kit/vite'
import autoImport from 'sveltekit-autoimport'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		autoImport({
			components: [{ name: './src/lib', flat: true }]
		}),
		sveltekit()
	]
})
