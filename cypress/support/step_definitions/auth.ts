import { Given } from "@badeball/cypress-cucumber-preprocessor"

Given(/^I am logged in$/, function () {
  localStorage.setItem('accessToken', 'token')
  cy.intercept({
    method: 'GET',
    url: 'api/me',
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
        updated_at: "2023-09-13T17:14:40.000000Z",
        premium_expiration_date: "2024-09-13T17:14:40.000000Z"
      }
    }
  })
})