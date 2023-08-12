import type { IQuest } from '$lib/models/quest'
import { writable } from 'svelte/store'
import api from '$lib/utils/axios'

export interface IQuestState {
	quests: IQuest[]
}
function createQuestStore() {
	const { subscribe, set, update } = writable<IQuestState>({
		quests: []
	})
	return {
		subscribe,
		set,
		update,
		getQuests: async (payload?: {} ) => {
			try {
				const { data } = await api.get(`/quests`,{
					params: payload
				})
				update((store) => ({
					...store,
					quests: data
				}))
			} catch (error) {
				console.error(error)
			}
		}
	}
}
export const questStore = createQuestStore()
