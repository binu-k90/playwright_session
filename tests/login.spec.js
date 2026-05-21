import {test,expect} from '@playwright/test'
const valid_credentials = require('../utils/testcredetial.json')//.. means different folder . means same folder
//
test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
})

test('login using valid credentials', async ({page}) =>{
    const username_value = valid_credentials.username
    const password_value = valid_credentials.password
    const username =  page.locator('#user-name')
    const password = page.locator('#password')
    const loginButton = page.locator('#login-button')
    // await username.fill('standard_user')
    // await password.fill('secret_sauce')
    await username.fill(username_value)
    await password.fill(password_value)
    await loginButton.click()
    const title = await page.title()
    console.log(title)
    //await expect(page).toHaveTitle("Swag Labs")
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test('login using invalid credentials', async ({page}) =>{
    const username =  page.locator('#user-name')
    const password = page.locator('#password')
    const loginButton = page.locator('#login-button')
    await username.fill('standard_user')
    await password.fill('secret_sauce12')
    await loginButton.click()
    //const title = await page.title()
    //console.log(title)
    //await expect(page).toHaveTitle("Swag Labs")
    await expect(page).toHaveURL("https://www.saucedemo.com/")
})

