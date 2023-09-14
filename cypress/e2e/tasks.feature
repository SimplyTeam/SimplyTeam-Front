Feature: A user can add a task to a project and assign it to a sprint

    Scenario: I create a task
    Given I am logged in
    And I have a project with a sprint
    When I visit the project page
    And I create a task
    Then I should see the task
