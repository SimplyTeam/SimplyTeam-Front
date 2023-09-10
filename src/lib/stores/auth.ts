import type { IRegisterInput, IUser } from '$lib/models/auth'
import api from '$lib/utils/axios'
import { writable } from 'svelte/store'
import moment from "moment"

interface AuthStore {
	accessToken: string
	user?: IUser
	info?: any
	triedFetchingUser?: boolean
}

function createAuthStore() {
	const { subscribe, set, update } = writable<AuthStore>({
		accessToken: localStorage.getItem('accessToken') || '',
		user: undefined,
		info: undefined,
		triedFetchingUser: false
	})

	async function fetchSession()  {
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
	}

	return {
		subscribe,
		set,
		fetchSession,
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
		info: async () => {
			try {
				const { data } = await api.get('/info')
				update((store) => ({
					...store,
					info: data
				}))
			} catch (err) {
				set({
					accessToken: '',
					user: undefined,
					triedFetchingUser: true
				})
			}
		},
		grantPremiumPlan: async () => {
			try {
				await api.post('/validatePayment', {
					premium_expiration_date: moment().add(1, 'month').toDate()
				})
				await fetchSession()
			}
			catch (err) {
				set({
					accessToken: '',
					user: undefined,
					triedFetchingUser: true
				})
			}
		},
		userHasPremium: (user?: IUser) => user?.premium_expiration_date && new Date(user.premium_expiration_date) > new Date(),
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
