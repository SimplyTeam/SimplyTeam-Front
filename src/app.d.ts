// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			accessToken?: string
			user?: {
				id: string
				name: string
				email: string
			}
			// interface PageData {}
			// interface Platform {}
		}
	}
}
declare module '@fortawesome/pro-solid-svg-icons/index.es' {
	export * from '@fortawesome/pro-solid-svg-icons'
}
declare module 'sveltekit-autoimport'
declare module 'svelecte'
declare const Button: typeof import('./lib/components/molecules/Button.svelte')['default']
declare const Icon: typeof import('./lib/components/atoms/Icon.svelte')['default']
declare const SimpleLayout: typeof import('./lib/components/layouts/SimpleLayout.svelte')['default']
declare const WithHeaderLayout: typeof import('./lib/components/layouts/WithHeaderLayout.svelte')['default']
export {}
