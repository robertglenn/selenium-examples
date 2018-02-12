const { defineSupportCode } = require('cucumber');
const { expect } = require('chai');
const { By, until, Key } = require('selenium-webdriver');


const SELENIUM_TIMEOUT = 5 * 1000;

defineSupportCode(function ({ Given, When, Then }) {

  Given('I am on the google home page - one', function () {
    const world = this;
    return world.driver.get('http://www.google.com').then(function () {
      return world.driver.wait(until.elementLocated(By.css('body')), SELENIUM_TIMEOUT);
    });
  });

  When('I enter selenium string into the search element', function () {
    const world = this;
    return world.driver.wait(until.elementLocated(By.id('lst-ib')), SELENIUM_TIMEOUT).then(function (searchElement) {
      return searchElement.sendKeys('selenium');
    });
  });

  When('I click Google Search button', function () {
    const world = this;
    world.driver.wait(until.elementLocated(By.css('#tsf > div.tsf-p')), SELENIUM_TIMEOUT).then(function (randomDivToHideSuggestions) {
      return randomDivToHideSuggestions.click().then(function () {
        return world.driver.wait(until.elementLocated(By.css('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)')), SELENIUM_TIMEOUT).then(function (searchSubmit) {
          return searchSubmit.click();
        });
      });
    });
  });

  Then('I should see results including the seleniumhq website', function () {
    const world = this;
    return world.driver.wait(until.elementLocated(By.css('div:nth-child(1) > div > div > div > div > h3 > a')), SELENIUM_TIMEOUT).then(function (link) {
      return link.getText().then(function (linkText) {
        expect(linkText.toLocaleLowerCase()).to.have.string('selenium');
      });
    });
  });
});

defineSupportCode(function ({ Given, When, Then }) {

  Given('I am on the google home page - two', function () {
    const world = this;
    return world.driver.get('http://www.google.com').then(function () {
      return world.driver.wait(until.elementLocated(By.css('body')), SELENIUM_TIMEOUT);
    });
  });

  When('I enter cucumber string into the search element', function () {
    const world = this;
    return world.driver.wait(until.elementLocated(By.id('lst-ib')), SELENIUM_TIMEOUT).then(function (searchElement) {
      return searchElement.sendKeys('cucumberjs');
    });
  });

  When('I hit the RETURN key', function () {
    const world = this;
    return world.driver.wait(until.elementLocated(By.id('lst-ib')), SELENIUM_TIMEOUT).then(function (searchElement) {
      return searchElement.sendKeys(Key.ENTER);
    });
  });

  Then('I should see results including the strings cucumber and javascript', function () {
    const world = this;
    return world.driver.wait(until.elementLocated(By.css('#rso > div > div > div:nth-child(1) > div > div > h3 > a')), SELENIUM_TIMEOUT).then(function (link) {
      return link.getText().then(function (linkText) {
        expect(linkText.toLocaleLowerCase()).to.have.string('cucumber');
        expect(linkText.toLocaleLowerCase()).to.have.string('javascript');
      });
    });
  });
});