Feature: The landing page of SimplyTeam

  Scenario: I see the header of the page
    Given I am a visitor
    When I visit the landing page
    Then The title should be SimplyTeam
    And The heading should be Gérez vos projets avec plaisir et simplement !
