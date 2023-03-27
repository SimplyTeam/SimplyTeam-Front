// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			accessToken?: string
			refreshToken?: string
			user?: {
				id: string
				email: string
				name: string
				email_verified_at: Date,
			}
		}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module '@fortawesome/pro-solid-svg-icons/index.es' {
	export * from '@fortawesome/pro-solid-svg-icons';
}

export {};
