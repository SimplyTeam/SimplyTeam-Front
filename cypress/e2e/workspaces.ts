import { Then, When } from "@badeball/cypress-cucumber-preprocessor"

When(/^I create a workspace$/, function () {
  cy.intercept({
      method: 'POST',
      url: 'api/workspaces',
      hostname: 'localhost',
    }, {
      statusCode: 200,
    },
  ).as('createWorkspace')
  cy.intercept({
      method: 'GET',
      url: 'api/workspaces',
      hostname: 'localhost',
    }, {
      statusCode: 200,
      body: {
       workspaces: [{
         created_at: "2023-09-13T17:45:34.000000Z",
         created_by: { id: 1, name: "Luca", email: "test@test.fr", level: { id: 1, max_point: 100, min_point: 0 } },
         description: "description",
         id: 3,
         name: "mon espace de travail 1",
         projects: [],
         updated_at: "2023-09-13T17:45:34.000000Z",
         users: [ { id: 1, name: "Luca", email: "test@test.fr", level: { id: 1, max_point: 100, min_point: 0 } } ],
       }]
      }
    },
  ).as('afterCreateWorkspace')


  cy.get("div[aria-label='Créer un espace de travail']").click()

  cy.get("input[name='name']").type("mon espace de travail 1")
  cy.get("input[name='description']").type("Description")

  cy.get("button:contains('parti !')").click()
  cy.wait('@afterCreateWorkspace')
})

Then(/^I click on a workspace$/, function () {
  cy.intercept({
    method: 'GET',
    url: 'api/workspaces/3',
    hostname: 'localhost',
  }, {
    statusCode: 200,
    body: {
      created_at: "2023-09-13T17:45:34.000000Z",
      created_by: { id: 1, name: "Luca", email: "test@test.fr", level: { id: 1, max_point: 100, min_point: 0 } },
      description: "description",
      id: 3,
      name: "mon espace de travail 1",
      projects: [],
      updated_at: "2023-09-13T17:45:34.000000Z",
      users: [ { id: 1, name: "Luca", email: "test@test.fr", level: { id: 1, max_point: 100, min_point: 0 } } ],
    }
  })
  cy.intercept({
    method: 'GET',
    url: 'api/workspaces/3/projects',
    hostname: 'localhost',
  }, {
    statusCode: 200,
    body: {
      projects: []
    }
  })
  cy.get("[aria-label='mon espace de travail 1']").click()
})

Then(/^I should see the workspace page$/, function () {
    cy.url().should("eq", "http://localhost:3000/workspaces/3")
  cy.get("h1").should("contain", "Créer un projet")
});
