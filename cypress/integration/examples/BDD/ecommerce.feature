Feature: End to end Ecommerce vallidation

    //Application Regation
    @Regation
    Scenario: Ecommerce product devlivery
    Given I open Ecommerce Page
    When I add  items to cart
    # And Validate the total prices
    # Then Select the county submit and verify ThankYou
    
        
#    @Smoke
#    Scenario: Filling the form to shop
#    Given I open Ecommerce Page
#    When I fill the form details
#    |name | gender |
#    |Bobze| Male   |
#    Then validate the forms behaviour
#    And select the Shop Page  
    