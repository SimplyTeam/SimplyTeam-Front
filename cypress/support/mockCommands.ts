/// <reference types="cypress" />

import type { MockedPostEndpoint, PostEndpoint } from '../mock/post'
import { mockedPostEndpoints } from '../mock/post'
import type { GetEndpoint, MockedGetEndpoint } from '../mock/get'
import { mockedGetEndpoints } from '../mock/get'

type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>
	  }
	: T

declare global {
	namespace Cypress {
		interface Chainable {
			mockAll: () => Chainable<null>
			mockGet: <Endpoint extends GetEndpoint>(
				endpoint: GetEndpoint,
				mock: DeepPartial<MockedGetEndpoint[Endpoint]>
			) => Chainable<null>
			mockPost: <Endpoint extends PostEndpoint>(
				endpoint: PostEndpoint,
				mock: DeepPartial<MockedPostEndpoint[Endpoint]>
			) => Chainable<null>
		}
	}
}

const apiUrl = 'http://localhost/api/'

Cypress.Commands.add('mockGet', (endpoint, mock) => {
	cy.intercept('GET', apiUrl + endpoint, (req) => {
		req.reply({
			body: {
				data: mock
			}
		})
	})
})

Cypress.Commands.add('mockPost', (endpoint, mock) => {
	console.log(apiUrl + endpoint)
	cy.intercept('POST', apiUrl + endpoint, (req) => {
		req.reply({
			body: {
				data: mock
			}
		})
	})
})

Cypress.Commands.add('mockAll', () => {
	Object.entries(mockedGetEndpoints).forEach(([endpoint, mock]) => {
		cy.mockGet(endpoint as GetEndpoint, mock)
	})

	Object.entries(mockedPostEndpoints).forEach(([endpoint, mock]) => {
		cy.mockPost(endpoint as PostEndpoint, mock)
	})
})
