import type { IQuestType } from './questType'
import type { IUserQuest } from './userQuest'

export interface IQuest {
	name: string
	description: string
	badge: string
	reward_points: number
	completed_points: number
	user_quests: IUserQuest
	quest_types: IQuestType
}
