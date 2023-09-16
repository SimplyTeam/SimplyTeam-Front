import { Given } from "@badeball/cypress-cucumber-preprocessor"

Given(/^I have "([^"]*)" workspaces$/, function (numberOfWorkspaces: number) {
  const workspaces = []
  for (let i = 0; i < numberOfWorkspaces; i++) {
    workspaces.push({
      created_at: "2023-09-13T17:45:34.000000Z",
      created_by: { id: 1, name: "Luca", email: "test@test.fr", level: { id: 1, max_point: 100, min_point: 0 } },
      description: "description",
      id: 3,
      name: "mon espace de travail 1",
      projects: [],
      updated_at: "2023-09-13T17:45:34.000000Z",
      users: [ { id: 1, name: "Luca", email: "test@test.fr", level: { id: 1, max_point: 100, min_point: 0 } } ],
    })
  }
  cy.intercept({
      method: 'GET',
      url: 'api/workspaces',
      hostname: 'localhost',
    }, {
      statusCode: 200,
      body: {
        workspaces
      }
    },
  ).as('getWorkspaces')
})
