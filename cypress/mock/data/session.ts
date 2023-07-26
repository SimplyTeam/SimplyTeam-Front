import type { IUser } from '$lib/models/auth'
import { faker } from '@faker-js/faker'

export const fakeUser: IUser = {
	name: faker.internet.userName(),
	email: faker.internet.email(),
	id: 1
}

export const fakeToken = 'fakeToken'

export const fakeSession = {
	user: fakeUser,
	access_token: fakeToken
}
