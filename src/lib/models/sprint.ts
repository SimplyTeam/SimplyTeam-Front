import type { IProject } from './project'
import type { IRequestTask, ITask } from './task'
import { taskFromRequest } from "./task"

export interface ISprint {
	name: string
	id: string
	beginAt: Date,
	endAt: Date,
	tasks: ITask[],
	project: IProject[]
}

export interface IRequestSprint {
	name: string
	id: string
	begin_date: Date,
	end_date: Date,
	tasks: IRequestTask[]
}

export function sprintFromRequest(sprint: IRequestSprint): ISprint {
	return {
		name: sprint.name,
		id: sprint.id,
		beginAt: new Date(sprint.begin_date),
		endAt: new Date(sprint.end_date),
		project: sprint.project ?? [],
		tasks: sprint.tasks ? sprint.tasks.map(taskFromRequest) : [],
	}
}