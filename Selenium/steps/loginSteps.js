const assert = require('chai').assert;
const Then = require('cucumber').Then;
const And = Then;
const LoginPage = require('../pages/loginPage');
const timeOut = require('../utils/constans');
const { Builder, Bay, Key } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();

Then('yo deberia ver una caja de texto para ingresar a mi email', async () => {
    //console.log(driver);
    const loginPage = new LoginPage(driver);
    await driver.wait(async () => await loginPage.getUserEmailTextBox(), timeOut.STEP_TIMEOUTS.TIMEOUT);
});

And('yo deberia ver una caja de texto para ingresar el password', async () => {
    const loginPage = new LoginPage(driver);
    await driver.wait(async () => await loginPage.getUserPasswordTextBox(), timeOut.STEP_TIMEOUTS.TIMEOUT);
});

And('yo deberia ver un boton para sign', async () => {
    const loginPage = new LoginPage(driver);
    await driver.wait(async () => await loginPage.getSignInButton(), timeOut.STEP_TIMEOUTS.TIMEOUT);
});

And('yo deberia ver un login header con el texto {string}', async expectedText => {
    const loginPage = new LoginPage(driver);
    const header = await loginPage.getLoginHead();
    const headerText = await header.getText();
    assert.strictEqual(headerText, expectedText);
}, timeOut.STEP_TIMEOUTS.TIMEOUT);

And('yo deberia ver un label de direccion email con el texto {string}', async expectedText => {
    const loginPage = new LoginPage(driver);
    const emailLabel = await loginPage.getEmailLabel();
    const emailLabelText = await emailLabel.getText();
    assert.strictEqual(emailLabelText, expectedText);
}, timeOut.STEP_TIMEOUTS.TIMEOUT);