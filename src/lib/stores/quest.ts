import type { IQuest } from '$lib/models/quest'
import { writable } from 'svelte/store'
import api from '$lib/utils/axios'
import badgeIllustration from '$lib/assets/badge.png'
import type { IQuestType } from '$lib/models/questType'

export interface IQuestState {
	quests: IQuest[]
}
const questTypes: IQuestType = {
	id: 1,
	libelle: 'Par Sprint'
}
const questNotCompleted: IQuest = {
	name: 'Sprint Parfait',
	description: "Terminer toutes les tâches assignées lors d'un sprint sans aucun retard.",
	badge: badgeIllustration,
	reward_points: 25,
	completed_points: 300,
	quest_types: questTypes,
	completed_at: '10-10-2020',
	user_quests: {
		completed_counts: 200,
		is_completed: false
	}
}
const questCompleted: IQuest = {
	name: 'Sprint Parfait',
	description: 'Terminer toutes les tâches assignées.',
	badge: badgeIllustration,
	reward_points: 25,
	completed_points: 300,
	quest_types: questTypes,
	completed_at: '10-10-2020',
	user_quests: {
		completed_counts: 300,
		is_completed: true
	}
}
function createQuestStore() {
	const { subscribe, set, update } = writable<IQuestState>({
		quests: [questNotCompleted, questNotCompleted, questCompleted, questCompleted]
	})
	return {
		subscribe,
		set,
		update,
		getQuests: async (workspaceId: number) => {
			try {
				const { data } = await api.get(`/workspaces/${workspaceId}/quests`)
				update((store) => ({
					...store,
					quests: data.quests
				}))
			} catch (error) {
				console.error(error)
			}
		}
	}
}
export const questStore = createQuestStore()
