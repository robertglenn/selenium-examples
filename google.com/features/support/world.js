const { setWorldConstructor } = require('cucumber');
const { Builder } = require('selenium-webdriver');

var World = function World() {

  this.driver = new Builder().forBrowser('chrome').build();

};

setWorldConstructor(World);
