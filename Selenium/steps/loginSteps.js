const assert = require('chai').assert
const Then = require('cucumber')
const And = Then
const loginPage = require('../pages/loginPage')
const timeouts = require('../utils/constants')

Then(' yo debería ver una caja de texto para ingresar mi email',async ()=> {
    const loginPage = new LoginPage(this.driver);
    await this.driver.wait(async ()=> await loginPage.getUserEmailTextBox(), timeouts.STEP_TIMEOUT.TIMEOUT);
});
And(' yo debería ver una caja de texto para ingresar la password',async ()=> {
    const loginPage = new LoginPage(this.driver);
    await this.driver.wait(async ()=> await loginPage.getUserPasswordTextBox(), timeouts.STEP_TIMEOUT.TIMEOUT);
});
And(' yo debería ver un botón sign',async ()=> {
    const loginPage = new LoginPage(this.driver);
    await this.driver.wait(async ()=> await loginPage.getLoginButton(), timeouts.STEP_TIMEOUT.TIMEOUT);
});
And(' yo debería ver un login header con el texto {string}',async expectedText => {
    const loginPage = new LoginPage(this.driver);
    const header = await loginPage.getLoginHeader();
    const headerText =await header.getText();
    assert.strictEqual(headerText, expectedText);
}, timeouts.STEP_TIMEOUT.TIMEOUT);
And('yo debería ver un label de dirección email con el texto',async expectedText => {
    const loginPage = new LoginPage(this.driver);
    const emailLabel = await loginPage.getEmailLabel();
    const emailLabelText =await header.getText();
    assert.strictEqual(emailLabelText, expectedText);
}, timeouts.STEP_TIMEOUT.TIMEOUT);
