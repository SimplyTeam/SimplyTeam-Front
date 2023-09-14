import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I am a visitor", () => {
  localStorage.setItem("accessToken", "test")
  cy.intercept({
    method: 'GET',
    url: 'api/me',
    hostname: 'localhost',
  }, {
    statusCode: 200,
    body: {
      id: 1,
    }
  })
})

When("I visit the landing page", () => {
  cy.visit("/");
})

Then("I see the header of the page", () => {

})
Then(/^The title should be (.*)$/, function (title: string) {
  cy.title().should("eq", title)
})

Then(/^The heading should be (.*)$/, function (heading: string) {
  cy.get("h1").should("contain", heading)
})