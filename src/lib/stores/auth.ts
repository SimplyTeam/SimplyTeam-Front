import { writable } from 'svelte/store'
import type { IRegisterInput, IUser } from '$lib/models/auth'
import api from '$lib/utils/axios'

interface AuthStore {
	accessToken: string
	user?: IUser
	triedFetchingUser?: boolean
}

function createAuthStore() {
	const { subscribe, set, update } = writable<AuthStore>({
		accessToken: localStorage.getItem('accessToken') || '',
		user: undefined,
		triedFetchingUser: false
	})

	return {
		subscribe,
		fetchSession: async () => {
			if (!localStorage.getItem('accessToken')) {
				set({
					accessToken: '',
					user: undefined,
					triedFetchingUser: true
				})
				return
			}

			try {
				const { data } = await api.get('/me')

				update((store) => ({
					...store,
					user: data.user,
					triedFetchingUser: true
				}))
			} catch (err) {
				set({
					accessToken: '',
					user: undefined,
					triedFetchingUser: true
				})
			}
		},
		register: async ({ email, name, password, confirmedPassword }: IRegisterInput) => {
			const payload = {
				email,
				name,
				password,
				password_confirmation: confirmedPassword
			}

			const { data } = await api.post<{ access_token: string; user: IUser }>('register', payload)
			set({
				triedFetchingUser: true,
				accessToken: data.access_token,
				user: data.user
			})
		},
		login: async ({ email, password }: { email: string; password: string }) => {
			const { data } = await api.post<{ access_token: string; user: IUser }>('login', {
				email,
				password
			})

			set({
				triedFetchingUser: true,
				accessToken: data.access_token,
				user: data.user
			})
		},
		logout: async () => {
			await api.post('logout')

			set({
				accessToken: '',
				user: undefined,
				triedFetchingUser: true
			})
		}
	}
}

export const authStore = createAuthStore()

authStore.subscribe((store) => {
	localStorage.setItem('accessToken', store.accessToken)
})
