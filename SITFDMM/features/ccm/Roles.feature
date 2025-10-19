Feature: CCM Roles Management

  Scenario Outline: Enable training mode role for admin supervisor and cashier
    Given I launch ccm application
    When I navigate to the 'Roles' page
    And I select the user "<role>" on roles page
    And I select the role option "Training Mode"
    # Then I should see the new role listed in the roles table
    Examples:
        | role | 
        | Cashier | 

 
