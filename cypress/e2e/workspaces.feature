Feature: A user can create and manage a list of workspaces

  Scenario: I create a workspace
    Given I am logged in
    And I have "0" workspaces
    When I visit the workspaces page
    And I create a workspace

  Scenario: I visit a workspace and am prompted to create a project
    Given I am logged in
    And I have "1" workspaces
    When I visit the workspaces page
    And I click on a workspace
    Then I should see the workspace page
