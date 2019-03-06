$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/automation.feature");
formatter.feature({
  "line": 1,
  "name": "bright talk test",
  "description": "",
  "id": "bright-talk-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "buying women items",
  "description": "",
  "id": "bright-talk-test;buying-women-items",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on WOMEN tabs and select Size \"\u003csize\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I set the price range between \"\u003cPriceFrom\u003e\" - \"\u003cPriceTo\u003e\" using the slider",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the displayed items are within the price range \"\u003cPriceFrom\u003e\" - \"\u003cPriceTo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I add any \"\u003cNo\u003e\" items to shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Cart on the top right side",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I cick on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the \"\u003cNo\u003e\" added items should match the total price",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "bright-talk-test;buying-women-items;",
  "rows": [
    {
      "cells": [
        "size",
        "PriceFrom",
        "PriceTo",
        "No"
      ],
      "line": 18,
      "id": "bright-talk-test;buying-women-items;;1"
    },
    {
      "cells": [
        "L",
        "$16",
        "$30.06",
        "2"
      ],
      "line": 19,
      "id": "bright-talk-test;buying-women-items;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6717635557,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 102224975,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "buying women items",
  "description": "",
  "id": "bright-talk-test;buying-women-items;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on WOMEN tabs and select Size \"L\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I set the price range between \"$16\" - \"$30.06\" using the slider",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the displayed items are within the price range \"$16\" - \"$30.06\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I add any \"2\" items to shopping cart",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Cart on the top right side",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I cick on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the \"2\" added items should match the total price",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 39
    }
  ],
  "location": "StepDefinition.i_click_on_WOMEN_tabs_and_select_Size(String)"
});
formatter.result({
  "duration": 2377269958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$16",
      "offset": 31
    },
    {
      "val": "$30.06",
      "offset": 39
    }
  ],
  "location": "StepDefinition.i_set_the_price_range_between_using_the_slider(String,String)"
});
formatter.result({
  "duration": 467298494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$16",
      "offset": 48
    },
    {
      "val": "$30.06",
      "offset": 56
    }
  ],
  "location": "StepDefinition.the_displayed_items_are_within_the_price_range(String,String)"
});
formatter.result({
  "duration": 64434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 11
    }
  ],
  "location": "StepDefinition.i_add_any_items_to_shopping_cart(String)"
});
formatter.result({
  "duration": 352328540,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: Element \u003cspan class\u003d\"cross\"\u003e could not be scrolled into view\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ERSGHAIG\u0027, ip: \u0027192.168.42.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_192\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 65.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.23.0, moz:headless: false, moz:processID: 17984, moz:profile: C:\\Users\\BharatP\\AppData\\Lo..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e0699b67-e330-4bf4-ae3f-970c7492358c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat AutomationTest.BrightTalkTest.Utils.clickOnElement(Utils.java:21)\r\n\tat AutomationTest.BrightTalkTest.WomenTabs.layercartclose(WomenTabs.java:58)\r\n\tat AutomationTest.BrightTalkTest.StepDefinition.i_add_any_items_to_shopping_cart(StepDefinition.java:33)\r\n\tat ✽.And I add any \"2\" items to shopping cart(src/test/java/automation.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_Cart_on_the_top_right_side()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.i_cick_on_checkout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    }
  ],
  "location": "StepDefinition.the_added_items_should_match_the_total_price(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 174791496,
  "status": "passed"
});
});