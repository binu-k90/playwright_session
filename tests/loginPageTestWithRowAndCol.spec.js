import {test,expect} from '@playwright/test'
import {getCellData} from '../utils/excelReader2'

test('Login using row and cell', async({page}) => {

    const user = getCellData(2,1)
    const pass = getCellData(2,2)
    await page.goto('https://www.saucedemo.com')
    const username = page.locator("//input[@id='user-name']")
    const password = page.locator("//input[@id='password']")
    const loginButton = page.locator("//input[@id='login-button']")
    await username.fill(user)
    await password.fill(pass)
    await loginButton.click()
})