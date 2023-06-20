import type { ISprint } from './sprint'
import type { ITask } from './task'

export interface IProject {
	name: string
	id: string
	sprints: ISprint[]
	backlog: ITask[]
}
