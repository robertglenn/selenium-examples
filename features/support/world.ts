import { setWorldConstructor } from 'cucumber';
import { Builder } from 'selenium-webdriver';

const World = function () {

  this.driver = new Builder().forBrowser('chrome').build();

};

setWorldConstructor(World);
