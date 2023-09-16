Feature: A user can a project to a workspace and tasks

  Scenario: I create a project
    Given I am logged in
    And I have "1" workspaces
    When I visit the workspace page
    And I create a project
    Then I should see the project

