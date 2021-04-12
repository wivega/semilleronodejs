'use strict'
const BasePage = require('./basePage')
var basePage = require('./basePage')

const PAGE_IDENTIFIER = '#login-container'
const PAGE_USEREMAIL_TEXTBOX = '#emailId'
const PAGE_USERPASSWORD_TEXTBOX = '#passwordId'
const PAGE_LOGIN_BUTTON = '#signInButtonId'
const PAGE_LOGIN_HEADER = '#login-header'
const PAGE_EMAIL_LABEL = '#email-label'
const PAGE_PASSWORD_LABEL = '#password-label'

class LoginPage extends BasePage {

    constructor(pageLoaded){
        super(driver, PAGE_IDENTIFIER)
    }

    async isPageLoaded(){
        return await this.exists();
    }

    async getUserPasswordTextBox() {
        let passwordText = await this.findElement(PAGE_USERPASSWORD_TEXTBOX);
        return passwordText;
    }

    async getUserEmailTextBox() {
        let emailText = await this.findElement(PAGE_USEREMAIL_TEXTBOX);
        return emailText;
    }

    async getLoginButton() {
        let loginButton = await this.findElement(PAGE_LOGIN_BUTTON);
        return loginButton;
    }

    async getEmailLabel() {
        let emailLabel = await this.findElement(PAGE_EMAIL_LABEL);
        return emailLabel;
    }

    async getLoginHeader() {
        let loginHeader = await this.findElement(PAGE_LOGIN_HEADER);
        return loginHeader;
    }

    async getPasswordLabel() {
        let passwordLabel = await this.findElement(PAGE_PASSWORD_LABEL);
        return passwordLabel;
    }

    async signIn(){
        let loginButton = await this.findElementByCss(PAGE_LOGIN_BUTTON);
        loginButton.click();
    }

    async enterUserEmail(emailText){
        const emailTextBox = await this.getUserEmailTextBox();
        emailTextBox.sendKeys(emailText);
    }

    async enterUserPassword(passwordText){
        const emailTextBox = await this.getUserPasswordTextBox();
        emailTextBox.sendKeys(passwordText);
    }

}

module.exports = LoginPage;