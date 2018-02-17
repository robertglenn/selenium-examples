const { expect } = require('chai');
const { By, until, Key } = require('selenium-webdriver');

const SELENIUM_TIMEOUT = 5 * 1000;

exports.goToURL = (url, driver) => {
  return driver.get(url).then(() => {
    return driver.wait(until.elementLocated(By.css('body')), SELENIUM_TIMEOUT);
  });
};

exports.sendKeysToElementByID = (elementId, keysToSend, driver) => {
  return driver.wait(until.elementLocated(By.id(elementId)), SELENIUM_TIMEOUT).then((elementToFill) => {
    return elementToFill.sendKeys(keysToSend);
  });
};

exports.clickElementByCSS = (elementSelector, driver) => {
  return driver.wait(until.elementLocated(By.css(elementSelector)), SELENIUM_TIMEOUT).then((elementToClick) => {
    return elementToClick.click();
  });
};

exports.verifyAllTextOnElementByCSS = (elementSelector, arrayOfTextToCheck, driver) => {
  return driver.wait(until.elementLocated(By.css(elementSelector)), SELENIUM_TIMEOUT).then((element) => {
    return element.getText().then((elementText) => {
      const cleanElementText = elementText.toLocaleLowerCase();
      arrayOfTextToCheck.forEach((textToCheck) => {
        expect(cleanElementText).to.have.string(textToCheck);
      });
    });
  });
};

exports.hitReturnOnElementByID = (elementId, driver) => {
  return driver.wait(until.elementLocated(By.id('lst-ib')), SELENIUM_TIMEOUT).then((element) => {
    return element.sendKeys(Key.ENTER);
  });
};
