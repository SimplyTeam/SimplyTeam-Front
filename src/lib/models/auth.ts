export interface IUser {
	level_id: number
	id: number
	name: string
	email: string
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
