$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/asos/Resources/search.feature");
formatter.feature({
  "line": 1,
  "name": "Search Feature- Asos",
  "description": "As an user\r\nI Want to search a product\r\nSo that I can view that product successully",
  "id": "search-feature--asos",
  "keyword": "Feature"
});
formatter.before({
  "duration": 16339506109,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Search product -Valid Data",
  "description": "",
  "id": "search-feature--asos;search-product--valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sc1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I search a product",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I can view that respective product",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.i_am_in_home_page()"
});
formatter.result({
  "duration": 636638101,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.i_search_a_product()"
});
formatter.result({
  "duration": 1191030487,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.i_can_view_that_respective_product()"
});
formatter.result({
  "duration": 144779711,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d60.0.3112.101)\n  (Driver info: chromedriver\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 12 milliseconds\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027sasi\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8), userDataDir\u003dC:\\Users\\SASIKU~1\\AppData\\Local\\Temp\\scoped_dir8504_6814}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.101, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 756c57a4b2c284190beafc2c28063046\n*** Element info: {Using\u003dcss selector, value\u003d.search-term}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:441)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:425)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.asos.SearchPage.searchResult(SearchPage.java:13)\r\n\tat com.asos.Stepdef.i_can_view_that_respective_product(Stepdef.java:34)\r\n\tat ✽.Then I can view that respective product(src/test/java/com/asos/Resources/search.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1366304032,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "search product with multiple values- valid data",
  "description": "",
  "id": "search-feature--asos;search-product-with-multiple-values--valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@sc1"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I search a \"\u003cproduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "can view that \"\u003cproduct\u003e\" successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "search-feature--asos;search-product-with-multiple-values--valid-data;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 19,
      "id": "search-feature--asos;search-product-with-multiple-values--valid-data;;1"
    },
    {
      "cells": [
        "adidas"
      ],
      "line": 20,
      "id": "search-feature--asos;search-product-with-multiple-values--valid-data;;2"
    },
    {
      "cells": [
        "puma"
      ],
      "line": 21,
      "id": "search-feature--asos;search-product-with-multiple-values--valid-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4742203064,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "search product with multiple values- valid data",
  "description": "",
  "id": "search-feature--asos;search-product-with-multiple-values--valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@sc1"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I search a \"adidas\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "can view that \"adidas\" successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.i_am_in_home_page()"
});
formatter.result({
  "duration": 8076039,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d60.0.3112.101)\n  (Driver info: chromedriver\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027sasi\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8), userDataDir\u003dC:\\Users\\SASIKU~1\\AppData\\Local\\Temp\\scoped_dir1064_13189}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.101, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ba8db10a8dcddc20bdbd60185652b373\n*** Element info: {Using\u003dxpath, value\u003d.//*[@id\u003d\u0027BodyTag\u0027]/div[4]/div/section/section/div/div/article[1]/div[1]/h2/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.asos.Home.verifyHomePage(Home.java:24)\r\n\tat com.asos.Stepdef.i_am_in_home_page(Stepdef.java:21)\r\n\tat ✽.Given I am in home page(src/test/java/com/asos/Resources/search.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "adidas",
      "offset": 12
    }
  ],
  "location": "Stepdef.i_search_a(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "adidas",
      "offset": 15
    }
  ],
  "location": "Stepdef.can_view_that_successfully(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1279876042,
  "status": "passed"
});
formatter.before({
  "duration": 10178418661,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "search product with multiple values- valid data",
  "description": "",
  "id": "search-feature--asos;search-product-with-multiple-values--valid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@sc1"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I search a \"puma\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "can view that \"puma\" successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.i_am_in_home_page()"
});
formatter.result({
  "duration": 758055798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "puma",
      "offset": 12
    }
  ],
  "location": "Stepdef.i_search_a(String)"
});
formatter.result({
  "duration": 6521350415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "puma",
      "offset": 15
    }
  ],
  "location": "Stepdef.can_view_that_successfully(String)"
});
formatter.result({
  "duration": 518989298,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[puma]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.asos.Stepdef.can_view_that_successfully(Stepdef.java:47)\r\n\tat ✽.Then can view that \"puma\" successfully(src/test/java/com/asos/Resources/search.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2136265203,
  "status": "passed"
});
});