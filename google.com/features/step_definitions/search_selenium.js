const { defineSupportCode } = require('cucumber');
const { expect } = require('chai');
const { By, until } = require('selenium-webdriver');


const SELENIUM_TIMEOUT = 5 * 1000;

defineSupportCode(function ({ Given, When, Then }) {

  Given('I am on the google home page - one', function () {
    const world = this;
    return world.driver.get('http://www.google.com').then(function () {
      return world.driver.wait(until.elementLocated(By.css('body')), SELENIUM_TIMEOUT);
    });
  });

  When('I enter selenium string into the search element - one', function () {
    const world = this;
    return world.driver.wait(until.elementLocated(By.id('lst-ib')), SELENIUM_TIMEOUT).then(function (searchElement) {
      return searchElement.sendKeys('selenium');
    });
  });

  When('I click Google Search button', function () {
    
  });

  Then('I should see results including the seleinumhq website - one', function () {
    
  });
});

defineSupportCode(function ({ Given, When, Then }) {

  Given('I am on the google home page - two', function () {
    const world = this;
    return world.driver.get('http://www.google.com').then(function () {
      return world.driver.wait(until.elementLocated(By.css('body')), SELENIUM_TIMEOUT);
    });
  });

  When('I enter selenium string into the search element - two', function () {
    const world = this;
    return world.driver.wait(until.elementLocated(By.id('lst-ib')), SELENIUM_TIMEOUT).then(function (searchElement) {
      return searchElement.sendKeys('selenium');
    });
  });

  When('I hit the RETURN key', function () {
    
  });

  Then('I should see results including the seleinumhq website - two', function () {
    
  });
});