Feature: Register to the ASOS page
  As a user
  I want to register the asos site
  So that I can register successfully.

  Scenario Outline: user can register an account with valid data.
    Given user is on Asos Join/registration  page
    When  user should enter the "<emailaddress>" "<firstname>" "<lastname>" "<password>" "<dateofbirth>""<gender>"
    And   user clicks join ASOS button
    Then  user should navigate to home page with logged in state

    Examples:
      | emailaddress              | firstname |lastname  | password  | dateofbirth | gender |
      | jancilondon1@gmail.com    |janci      | sarasasi1   | sarasasi1 | 17/04/1984    |female|


  Scenario Outline: email address validation
    Given user is in asospage
    When  he should enter the invalid emailaddress "<emailaddress>" "<firstname>" "<lastname>" "<password>" "<dateofbirth>""<gender>"
    And   he clicks  join ASOS button
    Then  "Email fail! Please type in your correct email address"  message is displayed
    Examples:
      | emailaddress              | firstname |lastname  | password  | dateofbirth | gender |
      | 365676787899890            |yyuuiu    | hgfhghj  |5768798 | hghjjkh    |77778|

  Scenario Outline: password field validation.
    Given user is in asospage
    When he should enter the invaldpassword "<emailaddress>" "<firstname>" "<lastname>" "<password>" "<dateofbirth>""<gender>"
    And he clicks join ASOS button
    Then  "At least 6 letters and 1 number, please!" message is displayed
    Examples:
      | emailaddress              | firstname |lastname  | password  | dateofbirth | gender |
      | jancilondon1@gmail.com    | janci      | sarasasi1| 00000000  | 17/04/1984  |femal   |

Scenario Outline: emailaddress validation
  Given user is in registration page.
  When  he should enter the already exist eamiladdress"<emailaddress>" "<firstname>" "<lastname>" "<password>" "<dateofbirth>""<gender>"
  And   And he clicks join ASOS button
  And   navigate it in to already registerpage
  Then  "emailaddress is already registered" message is displayed.

  Scenario Outline: null data validation
    Given user is in registration page.
    When  he should not enter the data "<emailaddress>" "<firstname>" "<lastname>" "<password>" "<dateofbirth>""<gender>"
    And   he clicks join ASOS button
    Then  "enter all mandatory field" message is displayed.

 # Scenario Outline: emailaddress validation
   # Given user is in registration page.
   # When  he should enter the already exist eamiladdress and differrent password"<emailaddress>" "<firstname>" "<lastname>" "<password>" "<dateofbirth>""<gender>"
   # And   he clicks join ASOS button
   # And   navigate in to already registerpage
   # Then  "emailaddress is already registered" message is displayed.


