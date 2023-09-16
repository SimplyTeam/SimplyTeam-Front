Feature: Authentication with email and password

  Scenario: User can sign up with email and password
    Given I am on the sign up page
    When I fill in "email" with "email@test.fr"
    And I fill in "name" with "john doe"
    And I press the button "Continuer"
    And I fill in "password" with "password"
    And I fill in "confirmPassword" with "password"
    And I press the submit button "S'Inscrire"
    Then I should see be on the workspaces page

  Scenario: User can sign in with email and password
    Given I am on the sign in page
    When I fill in "email" with "email@test.fr"
    And I fill in "password" with "password"
    And I press the submit button "Se connecter"
    Then I should see be on the workspaces page
