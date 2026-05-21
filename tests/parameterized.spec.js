import {test,expect} from '@playwright/test'
const dataset = require('../utils/parameterscreds.json')

test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
})
for(const data of dataset) {
test(`login using invalid credentials ${data.username} ${data.password}`, async ({page}) =>{
    const username =  page.locator('#user-name')
    const password = page.locator('#password')
    const loginButton = page.locator('#login-button')
    await username.fill(data.username)
    await password.fill(data.password)
    await loginButton.click()
})
}