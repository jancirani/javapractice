@search
Feature: Search Feature- Asos
  As an user
  I Want to search a product
  So that I can view that product successully


  Scenario: Search product -Valid Data
    Given I am in home page
    When I search a product
    Then I can view that respective product


  Scenario Outline: search product with multiple values- valid data
   Given I am in home page
   When I search a "<product>"
   Then can view that "<product>" successfully

   Examples:
     | product |
     |  adidas|
    | puma     |
