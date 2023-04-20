import type { IUser } from './user'

export interface IWorkspace {
	id: number
	name: string
	description: string
	created_by: IUser
	users: Array<IUser>
	created_at?: Date
	updated_at?: Date
}
