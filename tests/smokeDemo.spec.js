import {test,expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
})

test('@smoke login using valid credentials', async ({page}) =>{
    const username =  page.locator('#user-name')
    const password = page.locator('#password')
    const loginButton = page.locator('#login-button')
    await username.fill('standard_user')
    await password.fill('secret_sauce')
    await loginButton.click()
    const title = await page.title()
    console.log(title)
    //await expect(page).toHaveTitle("Swag Labs")
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test('@smoke login using valid username and invalid password', async ({page}) =>{
    const username =  page.locator('#user-name')
    const password = page.locator('#password')
    const loginButton = page.locator('#login-button')
    await username.fill('standard_user')
    await password.fill('secret_sauce12')
    await loginButton.click()
    await expect(page).toHaveURL("https://www.saucedemo.com/")
})

test('@sanity login using invalid username and valid password', async ({page}) =>{
    const username =  page.locator('#user-name')
    const password = page.locator('#password')
    const loginButton = page.locator('#login-button')
    await username.fill('standard_user1')
    await password.fill('secret_sauce')
    await loginButton.click()
    await expect(page).toHaveURL("https://www.saucedemo.com/")
})

test('@sanity login using invalid username and invalid password', async ({page}) =>{
    const username =  page.locator('#user-name')
    const password = page.locator('#password')
    const loginButton = page.locator('#login-button')
    await username.fill('standard_user1')
    await password.fill('secret_sauce12')
    await loginButton.click()
    await expect(page).toHaveURL("https://www.saucedemo.com/")
})

//tags >> tags are used to group or filter the testcases and starts with @ symbol
