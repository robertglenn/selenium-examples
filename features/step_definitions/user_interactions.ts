import { expect } from 'chai';
import { By, until, Key } from 'selenium-webdriver';

const SELENIUM_TIMEOUT = 5 * 1000;

export class User {

  public goToURL (url, driver) {
    return driver.get(url).then(() => {
      return driver.wait(until.elementLocated(By.css('body')), SELENIUM_TIMEOUT);
    });
  }

  public sendKeysToElementByID (elementId, keysToSend, driver) {
    return driver.wait(until.elementLocated(By.id(elementId)), SELENIUM_TIMEOUT).then((elementToFill) => {
      return elementToFill.sendKeys(keysToSend);
    });
  }

  public clickElementByCSS (elementSelector, driver) {
    return driver.wait(until.elementLocated(By.css(elementSelector)), SELENIUM_TIMEOUT).then((elementToClick) => {
      return elementToClick.click();
    });
  }

  public verifyAllTextOnElementByCSS (elementSelector, arrayOfTextToCheck, driver) {
    return driver.wait(until.elementLocated(By.css(elementSelector)), SELENIUM_TIMEOUT).then((element) => {
      return element.getText().then((elementText) => {
        const cleanElementText = elementText.toLocaleLowerCase();
        arrayOfTextToCheck.forEach((textToCheck) => {
          expect(cleanElementText).to.have.string(textToCheck);
        });
      });
    });
  }

  public hitReturnOnElementByID (elementId, driver) {
    return driver.wait(until.elementLocated(By.id('lst-ib')), SELENIUM_TIMEOUT).then((element) => {
      return element.sendKeys(Key.ENTER);
    });
  }

}
