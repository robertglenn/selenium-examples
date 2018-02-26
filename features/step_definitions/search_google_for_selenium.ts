import { Given, When, Then } from 'cucumber';
import { User } from './user_interactions.js';

const user = new User();

Given('I am on the google home page - one REFACTORED', function () {
  return user.goToURL('http://www.google.com', this.driver);
});

When('I enter selenium string into the search element REFACTORED', function () {
  return user.sendKeysToElementByID('lst-ib', 'selenium', this.driver);
});

When('I click Google Search button REFACTORED', function () {
  return user.clickElementByCSS('#tsf > div.tsf-p', this.driver).then(() => {
    return user.clickElementByCSS('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)', this.driver);
  });
});

Then('I should see results including the seleniumhq website REFACTORED', function () {
  return user.verifyAllTextOnElementByCSS('div:nth-child(1) > div > div > div > div > h3 > a', ['selenium'], this.driver);
});

Given('I am on the google home page - two REFACTORED', function () {
  return user.goToURL('http://www.google.com', this.driver);
});

When('I enter cucumber string into the search element REFACTORED', function () {
  return user.sendKeysToElementByID('lst-ib', 'cucumberjs', this.driver);
});

When('I hit the RETURN key REFACTORED', function () {
  return user.hitReturnOnElementByID('lst-ib', this.driver);
});

Then('I should see results including the strings cucumber and javascript REFACTORED', function () {
  return user.verifyAllTextOnElementByCSS('#rso > div > div > div:nth-child(1) > div > div > h3 > a', ['cucumber', 'javascript'], this.driver);
});
