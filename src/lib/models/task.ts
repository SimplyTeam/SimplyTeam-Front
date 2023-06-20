export interface ITask {
	name: string
	id: string
	description: string
	status: string
	// TODO - Change this to an array of users
	assignees: Array<{
		name: string
		id: string
		avatarUrl: string
	}>
	priority: string
	estimate: number
	timeSpent: number
	subtasks: Omit<ITask, 'subtasks'>[]
}
