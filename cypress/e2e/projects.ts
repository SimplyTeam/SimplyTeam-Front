import { Then, When } from "@badeball/cypress-cucumber-preprocessor"

When(/^I visit the workspaces page$/, function () {
  cy.visit("/workspaces")
  cy.wait('@getWorkspaces')
})

Then(/^I should see the workspace page$/, function () {
  cy.url().should("eq", "http://localhost:3000/workspaces/3")
  cy.get("h1").should("contain", "Créer un projet")
})


When(/^I visit the workspace page$/, function () {
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
  }).as('getWorkspace')

  cy.intercept({
    method: 'GET',
    url: 'api/workspaces/3/projects',
    hostname: 'localhost',
  }, {
    statusCode: 200,
    body: {
      projects: []
    }
  }).as('getProjects')

  cy.visit("/workspaces/3")
  cy.wait('@getWorkspace')
  cy.wait('@getProjects')

  cy.get("h1").should("contain", "Créer un projet")

})
When(/^I create a project$/, function () {
  cy.intercept({
      method: 'POST',
      url: 'api/workspaces/3/projects',
      hostname: 'localhost',
    }, {
      statusCode: 200,
      body: {
        project: {
          created_at: "2023-09-13T17:45:34.000000Z",
          description: "description",
          id: 3,
          name: "mon projet 1",
        }
      }
    }
  ).as('afterCreateProject')
  cy.intercept({
    method: 'GET',
    url: 'api/workspaces/3/projects',
    hostname: 'localhost',
  }, {
    statusCode: 200,
    body: {
      projects: [ {
        created_at: "2023-09-13T17:45:34.000000Z",
        description: "description",
        id: 3,
        name: "mon projet 1",
      } ]
    }
  }).as('getProjectsAfterCreateProject')
  cy.get("input[name='text']").type("mon projet 1")
  cy.get("button:contains('Confirmer')").click()
})

Then(/^I should see the project$/, function () {
  cy.intercept({
    method: 'GET',
    url: 'api/workspaces/3/projects/3/sprints',
    hostname: 'localhost',
  }, {
    statusCode: 200,
    body: [
      {
        begin_date: "2023-09-14", closing_date: null,
        created_at: "2023-09-14T18:37:27.000000Z",
        end_date: "2023-09-14",
        id: 5,
        name: "Feature 1",
        project_id: 2,
        tasks: [],
        updated_at: "2023-09-14T18:37:27.000000Z",
      }
    ],
  })

  cy.intercept({
    method: 'GET',
    url: 'api/workspaces/3/projects/3/tasks/backlog',
    hostname: 'localhost',
  }, {
    statusCode: 200,
    body: {
      tasks: []
    }
  })

  cy.get("button:contains('mon projet 1')").should("exist").click()
  cy.get("a[href='/workspaces/3/3/sprints']").should("exist").click()
  cy.get("h2").should("contain", "Sprints")
  cy.get("h2").should("contain", "Feature 1")
})