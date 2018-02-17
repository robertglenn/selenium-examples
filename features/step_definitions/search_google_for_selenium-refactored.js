const { Given, When, Then } = require('cucumber');
const User = require('./user_interactions.js');

Given('I am on the google home page - one REFACTORED', function () {
  return User.goToURL('http://www.google.com', this.driver);
});

When('I enter selenium string into the search element REFACTORED', function () {
  return User.sendKeysToElementByID('lst-ib', 'selenium', this.driver);
});

When('I click Google Search button REFACTORED', function () {
  return User.clickElementByCSS('#tsf > div.tsf-p', this.driver).then(() => {
    return User.clickElementByCSS('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)', this.driver);
  });
});

Then('I should see results including the seleniumhq website REFACTORED', function () {
  return User.verifyAllTextOnElementByCSS('div:nth-child(1) > div > div > div > div > h3 > a', ['selenium'], this.driver);
});

Given('I am on the google home page - two REFACTORED', function () {
  return User.goToURL('http://www.google.com', this.driver);
});

When('I enter cucumber string into the search element REFACTORED', function () {
  return User.sendKeysToElementByID('lst-ib', 'cucumberjs', this.driver);
});

When('I hit the RETURN key REFACTORED', function () {
  return User.hitReturnOnElementByID('lst-ib', this.driver);
});

Then('I should see results including the strings cucumber and javascript REFACTORED', function () {
  return User.verifyAllTextOnElementByCSS('#rso > div > div > div:nth-child(1) > div > div > h3 > a', ['cucumber', 'javascript'], this.driver);
});
