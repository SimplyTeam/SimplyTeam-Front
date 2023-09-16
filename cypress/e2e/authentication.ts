import { Given, Then } from "@badeball/cypress-cucumber-preprocessor"

Given(/^I am on the sign up page$/, function () {
  cy.intercept({
    method: 'POST',
    url: 'api/register',
    hostname: 'localhost',
  }, {
    statusCode: 200,
    body: {
      access_token: "token",
      user: {
        created_at: "2023-09-13T17:14:40.000000Z",
        email: "test@est.fr",
        id: 3,
        name: "test",
        updated_at: "2023-09-13T17:14:40.000000Z"
      }
    }
  })
  cy.visit("/auth/register")
})

Given(/^I am on the sign in page$/, function () {
  cy.intercept({
    method: 'POST',
    url: 'api/login',
    hostname: 'localhost',
  }, {
    statusCode: 200,
    body: {
      access_token: "token",
      user: {
        created_at: "2023-09-13T17:14:40.000000Z",
        email: "test@est.fr",
        id: 3,
        name: "test",
        updated_at: "2023-09-13T17:14:40.000000Z"
      }
    }
  })
  cy.visit("/auth/login")
});



Then(/^I should see be on the workspaces page$/, function () {
  cy.url().should("eq", "http://localhost:3000/workspaces")
})