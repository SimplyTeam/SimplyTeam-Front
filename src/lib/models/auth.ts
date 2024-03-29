export interface IUser {
	level_id: number
	earned_points: number
	id: number
	name: string
	email: string
	premium_expiration_date: string,
	is_PO: boolean
}

export interface IRegisterInput {
	email: string
	name: string
	password: string
	confirmedPassword: string
}

export interface IRegisterErrors {
	email?: string[]
	name?: string[]
	password?: string[]
	password_confirmation?: string[]
}

export interface ILoginInput {
	email: string
	password: string
}

export interface ILoginErrors {
	email?: string[]
	password?: string[]
}
