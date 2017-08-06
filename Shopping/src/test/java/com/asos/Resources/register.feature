Feature: Register to the ASOS page
  As a user
  I want to register the asos site
  So that I can register successfully.

  Scenario Outline: user can register an account with valid data.
    Given user is on Asos Join/registration page
    When  user should enter the "<emailaddress>" "<firstname>" "<lastname>" "<password>" "<dateofbirth>""<gender>"
    And   user clicks join ASOS button
    Then  user should navigate to home page with logged in state

    Examples:
      | emailaddress              | firstname |lastname  | password  | dateofbirth | gender |
      | jancilondon1@gmail.com    |janci      | sarasasi1   | sarasasi1 | 17/04/1984    |female|


  Scenario Outline: email address validation
    Given user is on Asos Join/registration page
    When  user should enter tuser invalid emailaddress "<emailaddress>" "<firstname>" "<lastname>" "<password>" "<dateofbirth>""<gender>"
    And   user clicks  join ASOS button
    Then  "Email fail! Please type in your correct email address"  message is displayed
    Examples:
      | emailaddress              | firstname |lastname  | password    | dateofbirth | gender |
      | 365676787899890            |janci     | rani     |paranisara25 | 17/04/1984  | female |

  Scenario Outline: password field validation.
    Given user is on Asos Join/registration page
    When user enter the invaldpassword "<emailaddress>" "<firstname>" "<lastname>" "<password>" "<dateofbirth>""<gender>"
    And user clicks join ASOS button
    Then  "At least 6 letters and 1 number, please!" message is displayed
    Examples:
      | emailaddress              | firstname |lastname  | password  | dateofbirth | gender |
      | jancilondon1@gmail.com    | janci      | sarasasi1| 00000000  | 17/04/1984  |femal   |

Scenario Outline: existing email address
  Given user is in registration page.
  When  user enter existing email address"<emailaddress>" "<firstname>" "<lastname>" "<password>" "<dateofbirth>""<gender>"
  And   user clicks join ASOS button
  Then  user should navigate to already register page
  And   it should display "emailaddress is already registered"
  Examples:
    | emailaddress              | firstname |lastname  | password  | dateofbirth | gender |
    | jancilondon1@gmail.com    | janci      | sarasasi1| 00000000  | 17/04/1984  |femal   |


  Scenario:User submitting registration form without entering any data in the fields
    Given user is in registration page.
    And   userclicks join ASOS button
    Then  it should display an error message "enter all mandatory field"


