$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/asos/Resources/register.feature");
formatter.feature({
  "line": 1,
  "name": "Register to the ASOS page",
  "description": "As a user\r\nI want to register the asos site\r\nSo that I can register successfully.",
  "id": "register-to-the-asos-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "email address validation",
  "description": "",
  "id": "register-to-the-asos-page;email-address-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@reg1"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is on Asos Join/registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enter the invalid emailaddress \"\u003cemailaddress\u003e\" \"\u003cfirstname\u003e\" \"\u003clastname\u003e\" \"\u003cpassword\u003e\" \"\u003cdateofbirth\u003e\"\"\u003cgender\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user clicks  join ASOS button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "\"Email fail! Please type in your correct email address\"  message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "register-to-the-asos-page;email-address-validation;",
  "rows": [
    {
      "cells": [
        "emailaddress",
        "firstname",
        "lastname",
        "password",
        "dateofbirth",
        "gender"
      ],
      "line": 23,
      "id": "register-to-the-asos-page;email-address-validation;;1"
    },
    {
      "cells": [
        "365676787899890",
        "janci",
        "rani",
        "paranisara25",
        "17/04/1984",
        "female"
      ],
      "line": 24,
      "id": "register-to-the-asos-page;email-address-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12584672359,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "email address validation",
  "description": "",
  "id": "register-to-the-asos-page;email-address-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@reg1"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is on Asos Join/registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enter the invalid emailaddress \"365676787899890\" \"janci\" \"rani\" \"paranisara25\" \"17/04/1984\"\"female\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user clicks  join ASOS button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "\"Email fail! Please type in your correct email address\"  message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.userIsOnAsosJoinRegistrationPage()"
});
formatter.result({
  "duration": 3541751885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "365676787899890",
      "offset": 37
    },
    {
      "val": "janci",
      "offset": 55
    },
    {
      "val": "rani",
      "offset": 63
    },
    {
      "val": "paranisara25",
      "offset": 70
    },
    {
      "val": "17/04/1984",
      "offset": 85
    },
    {
      "val": "female",
      "offset": 97
    }
  ],
  "location": "Stepdef.user_enter_the_invalid_emailaddress(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2299558964,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_clicks_join_ASOS_button()"
});
formatter.result({
  "duration": 54811056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email fail! Please type in your correct email address",
      "offset": 1
    }
  ],
  "location": "Stepdef.messageIsDisplayed(String)"
});
formatter.result({
  "duration": 86837627,
  "status": "passed"
});
formatter.after({
  "duration": 1510581729,
  "status": "passed"
});
});