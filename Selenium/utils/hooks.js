'use strict';
const fs = require('fs');
const webDriver = require('selenium-webdriver');
const CONSTANTS = require('../utils/constants');
const {before, After, setDefaultTimeout, Status, Before} = require('cucumber');

const RESULT_FOLDER_PATH = './tests/results';
const APP_URL = 'http://localhost:9294/login'; 

const EVENTS = {
    EXIT: 'exit',
    EXCEPTION: 'exception'
};

let driver ;

process.on(EVENTS.EXIT, exitHandler);
process.on(EVENTS.EXCEPTION, exitHandler);

createTestResultFolderIfNeeded();

Before({
    timeout: CONSTANTS.HOOK_TIMEOUTS.BEFORE
}, async scenario => {
    setDefaultTimeout(CONSTANTS.STEP_TIMEOUT.TIMEOUT);
    const browserName = this.parameters.browserName;
    const scenarioName = scenario.pickle.name;
    const builder = new webDriver.Builder();
    this.appUrl = APP_URL;
    driver = await builder.forBrowser(browserName).build();
    this.driver=driver;
    await this.driver.get(this.appUrl);
});

After({
    timeout: CONSTANTS.HOOK_TIMEOUTS.AFTER
},
async scenario => {
    if(!this.driver){
        return;
    }
    if(!scenario.result.status === Status.FAILED){
        await tryAttachScreenShot(this);
        console.log(`Scenario - ${scenario.pickle.name} - FAILED`);
    }
    await deInitWebDriver();
    delete this.driver;
});

async function deInitWebDriver(){
    if(!driver){
        return;
    }

    try {
        await driver.quit();
    } catch (e) {
    
    }
    driver = undefined;
}

async function exitHandler(){
    await deInitWebDriver();
    process.exit();
}

 function createTestResultFolderIfNeeded(){
     if(!fs.existsSync(RESULT_FOLDER_PATH)){
         fs.mkdirSync(RESULT_FOLDER_PATH);
     }
}

async function tryAttachScreenShot(word){
    try {
        const screenshot = await world.driver.takeScreenshoot();
        world.attach(screenshot, 'image-png')
    } catch (e) {
        console.log('No esta disponible la captura de pantalla: '+e);
    }
}