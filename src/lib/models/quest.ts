export interface IQuest {
	name: string
	description: string
	reward_points: number,
	level: number,
	previous_quest_id: number,
	count: number,
	created_at: Date,
	updated_at: string,
	quest_types_id: number,
	image: string,
	grade: string,
	completed_count: number,
	in_progress: boolean,
	is_completed: boolean,
	date_completed: Date,
	completion_ratio: number
}

export interface IFilterObject {
	quest_type?: string
	in_progress_only: string
	default_order: string
}