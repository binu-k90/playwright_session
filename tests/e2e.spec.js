//A e2e testing check the complete flow of the application from start to finish like a real user

import {test,expect} from '@playwright/test'

test('End to end flow', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/')
    const username =  page.locator('#user-name')
    const password = page.locator('#password')
    const loginButton = page.locator('#login-button')
    await username.fill('standard_user')
    await password.fill('secret_sauce')
    await loginButton.click()
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

    const backpackAddtoCartBtn = page.locator('#add-to-cart-sauce-labs-backpack')
    await backpackAddtoCartBtn.click()

    const addtoCartLink = page.locator("//a[@class='shopping_cart_link']")
    await addtoCartLink.click()

    const checkOutButton = page.locator('#checkout')
    await checkOutButton.click()

    const firstName = page.locator('#first-name')
    await firstName.fill("Binu")
    const lastName = page.locator('#last-name')
    await lastName.fill("K")
    const postalcode = page.locator('#postal-code')
    await postalcode.fill("695009")
    const clickOnContinue = page.locator('#continue')
    await clickOnContinue.click()

    const finishButton = page.locator('#finish')
    await finishButton.click()
    
    const orderCompleteMessage = page.locator('.complete-header')
    await expect(orderCompleteMessage).toHaveText('Thank you for your order!')
})