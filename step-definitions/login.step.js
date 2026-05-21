import { Given,When,Then,setDefaultTimeout } from "@cucumber/cucumber"; // Importing the necessary functions from the Cucumber library
//setDefaultTimeout is used to set the default timeout for all steps in Cucumber. It ensures that if any step takes longer than the specified time, it will be marked as failed. In this case, the timeout is set to 60 seconds (60000 milliseconds).
import { chromium } from "@playwright/test"; // Importing the Chromium browser from the Playwright library
import  assert  from 'assert';

let browser; //stores the instance of the browser that will be launched
let page; //stores the instance of the page that will be created in the browser. It allows us to interact with the web page, such as navigating to URLs, clicking elements, and extracting information.
//browser and page are declared at the top level so that they can be accessed throughout the step definitions.
Given('User is on login page', async function () {//step definition syntax

    browser = await chromium.launch({ headless: false })  //to launch the Chromium browser in non-headless mode, which means the browser window will be visible during test execution and store for further user interations
    const context = await browser.newContext(); //creates a new browser context, which is an isolated environment within the browser. It allows you to have multiple independent sessions, cookies, and cache. Each context can have its own set of pages and can be used to simulate different users or scenarios.
    page = await context.newPage(); //creates a new page within the browser context. This page will be used to interact with the web application during the test execution. It allows you to navigate to URLs, perform actions, and extract information from the web page.
    await page.goto('https://www.saucedemo.com/')

})

When ('User enters valid username and valid password', async function () {
    await page.fill('#user-name', 'standard_user') 
    await page.fill('#password', 'secret_sauce')

})

When ('User enters valid username {string} and invalid password {string}', async function (username,password) {
    await page.fill('#user-name', username) 
    await page.fill('#password', password)

})

When ('User clicks on login button', async function () {
    await page.click('#login-button')
})

Then ('User should be redirected to the Inventory page', async function () {
    const currentURL = page.url(); 
    assert.strictEqual(currentURL, 'https://www.saucedemo.com/inventory.html');
    await browser.close();
})

Then ('User should see an error message', async function () {
    const currentURL = page.url(); 
    assert.strictEqual(currentURL, 'https://www.saucedemo.com/');
    const errorMessage = await page.locator("//h3[@data-test='error']").textContent();
    const expectedErrorMessage = "Epic sadface: Username and password do not match any user in this service";
    assert.ok(errorMessage.includes(expectedErrorMessage), 'Error message is not visible');
    assert.ok(await page.isVisible('h3[data-test="error"]'), 'Error message is not visible');
    await browser.close();
})