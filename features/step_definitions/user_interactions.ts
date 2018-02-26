import { expect } from 'chai';
import { By, until, Key, WebDriver } from 'selenium-webdriver';

const SELENIUM_TIMEOUT = 5 * 1000;

export class User {

  public goToURL (url: string, driver: WebDriver): Promise<any> {
    return driver.get(url).then(() => {
      return driver.wait(until.elementLocated(By.css('body')), SELENIUM_TIMEOUT);
    });
  }

  public sendKeysToElementByID (elementId: string, keysToSend: string, driver: WebDriver): Promise<any> {
    return driver.wait(until.elementLocated(By.id(elementId)), SELENIUM_TIMEOUT).then((elementToFill) => {
      return elementToFill.sendKeys(keysToSend);
    });
  }

  public clickElementByCSS (elementSelector: string, driver: WebDriver): Promise<any> {
    return driver.wait(until.elementLocated(By.css(elementSelector)), SELENIUM_TIMEOUT).then((elementToClick) => {
      return elementToClick.click();
    });
  }

  public verifyAllTextOnElementByCSS (elementSelector: string, arrayOfTextToCheck: string[], driver: WebDriver): Promise<any> {
    return driver.wait(until.elementLocated(By.css(elementSelector)), SELENIUM_TIMEOUT).then((element) => {
      return element.getText().then((elementText) => {
        const cleanElementText = elementText.toLocaleLowerCase();
        arrayOfTextToCheck.forEach((textToCheck) => {
          expect(cleanElementText).to.have.string(textToCheck);
        });
      });
    });
  }

  public hitReturnOnElementByID (elementId: string, driver: WebDriver): Promise<any> {
    return driver.wait(until.elementLocated(By.id('lst-ib')), SELENIUM_TIMEOUT).then((element) => {
      return element.sendKeys(Key.ENTER);
    });
  }

}
