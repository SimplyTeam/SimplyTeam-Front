import { fakeSession } from './data'

export const enum PostEndpoint {
	Login = 'login',
	Register = 'register'
}

export const mockedPostEndpoints = {
	[PostEndpoint.Login]: fakeSession,
	[PostEndpoint.Register]: fakeSession
}

export type MockedPostEndpoint = typeof mockedPostEndpoints
