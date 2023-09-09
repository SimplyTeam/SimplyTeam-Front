import type { IUser } from '$lib/models/auth'
import type { IProject } from './project'
export interface IWorkspace {
	id: number
	name: string
	description: string
	created_by: IUser
	users: Array<IUser>
	created_at?: Date
	updated_at?: Date,
	projects?: Array<IProject>
}
