import { fakeUser } from './data'

export const enum GetEndpoint {
	Me = 'me',
	Workspaces = 'workspaces'
}

export const mockedGetEndpoints = {
	[GetEndpoint.Me]: fakeUser,
	[GetEndpoint.Workspaces]: []
}

export type MockedGetEndpoint = typeof mockedGetEndpoints
