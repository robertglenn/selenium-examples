const { Given, When, Then } = require('cucumber');
const User = require('./user_interactions.js');
// const { expect } = require('chai');
// const { By, until, Key } = require('selenium-webdriver');


// const SELENIUM_TIMEOUT = 5 * 1000;

Given('I am on the google home page - one REFACTORED', function () {
  return User.goToURL('http://www.google.com', this.driver);
  // return this.driver.get('http://www.google.com').then(() => {
  //   return this.driver.wait(until.elementLocated(By.css('body')), SELENIUM_TIMEOUT);
  // });
});

When('I enter selenium string into the search element REFACTORED', function () {
  return User.sendKeysToElementByID('lst-ib', 'selenium', this.driver);
  // return this.driver.wait(until.elementLocated(By.id('lst-ib')), SELENIUM_TIMEOUT).then((searchElement) => {
  //   return searchElement.sendKeys('selenium');
  // });
});

When('I click Google Search button REFACTORED', function () {
  return User.clickElementByCSS('#tsf > div.tsf-p', this.driver).then(() => {
    return User.clickElementByCSS('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)', this.driver);
  });
  // this.driver.wait(until.elementLocated(By.css('#tsf > div.tsf-p')), SELENIUM_TIMEOUT).then((randomDivToHideSuggestions) => {
  //   return randomDivToHideSuggestions.click();
  // }).then(() => {
  //   return this.driver.wait(until.elementLocated(By.css('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)')), SELENIUM_TIMEOUT).then((searchSubmit) => {
  //     return searchSubmit.click();
  //   });
  // });
});

Then('I should see results including the seleniumhq website REFACTORED', function () {
  return User.verifyAllTextOnElementByCSS('div:nth-child(1) > div > div > div > div > h3 > a', ['selenium'], this.driver);
  // return this.driver.wait(until.elementLocated(By.css('div:nth-child(1) > div > div > div > div > h3 > a')), SELENIUM_TIMEOUT).then((link) => {
  //   return link.getText().then((linkText) => {
  //     expect(linkText.toLocaleLowerCase()).to.have.string('selenium');
  //   });
  // });
});

Given('I am on the google home page - two REFACTORED', function () {
  return User.goToURL('http://www.google.com', this.driver);
  // return this.driver.get('http://www.google.com').then(() => {
  //   return this.driver.wait(until.elementLocated(By.css('body')), SELENIUM_TIMEOUT);
  // });
});

When('I enter cucumber string into the search element REFACTORED', function () {
  return User.sendKeysToElementByID('lst-ib', 'cucumberjs', this.driver);
  // return this.driver.wait(until.elementLocated(By.id('lst-ib')), SELENIUM_TIMEOUT).then((searchElement) => {
  //   return searchElement.sendKeys('cucumberjs');
  // });
});

When('I hit the RETURN key REFACTORED', function () {
  return User.hitReturnOnElementByID('lst-ib', this.driver);
  // return this.driver.wait(until.elementLocated(By.id('lst-ib')), SELENIUM_TIMEOUT).then((searchElement) => {
  //   return searchElement.sendKeys(Key.ENTER);
  // });
});

Then('I should see results including the strings cucumber and javascript REFACTORED', function () {
  return User.verifyAllTextOnElementByCSS('#rso > div > div > div:nth-child(1) > div > div > h3 > a', ['cucumber', 'javascript'], this.driver);
  // return this.driver.wait(until.elementLocated(By.css('#rso > div > div > div:nth-child(1) > div > div > h3 > a')), SELENIUM_TIMEOUT).then((link) => {
  //   return link.getText().then((linkText) => {
  //     expect(linkText.toLocaleLowerCase()).to.have.string('cucumber');
  //     expect(linkText.toLocaleLowerCase()).to.have.string('javascript');
  //   });
  // });
});