import { When } from "@badeball/cypress-cucumber-preprocessor"

When(/^I visit the workspaces page$/, function () {
  cy.visit("/workspaces")
  cy.wait('@getWorkspaces')
})

When(/^I visit the project page$/, function () {
 cy.visit("/workspaces/3/3/sprints")
})