import type { IProject } from '$lib/models/project'
import type { IUser } from './auth'

export interface IWorkspace {
	id: number
	name: string
	description?: string
	created_by: IUser
	users?: Array<IUser>
	created_at?: Date
	updated_at?: Date
	projects: Array<IProject>
	invitations?: Array<string>
}
