import { When } from "@badeball/cypress-cucumber-preprocessor"

When(/^I fill in "([^"]*)" with "([^"]*)"$/, function (inputName: string, inputValue: string) {
  cy.get(`input[name='${inputName}']`).type(inputValue)
})

When(/^I press the button "([^"]*)"$/, function (buttonWording: string) {
  cy.get(`button:contains('${buttonWording}')`).click()
})

When(/^I press the submit button "([^"]*)"$/, function () {
  cy.get(`button[type='submit']`).click()
})