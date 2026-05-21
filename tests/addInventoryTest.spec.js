import { LoginPage } from '../pages/LoginPage'
import { AddInventory } from '../pages/AddInventory'
import {test,expect} from '@playwright/test'

test('Add BackPack Inventory to Cart', async ({page}) => {
    //Login to the application
    const loginpage = new LoginPage(page)
    await loginpage.goto()
    await loginpage.login('standard_user','secret_sauce')
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

    //adding Inventory to cart 
    const addInventoryToCart = new AddInventory(page)
    await addInventoryToCart.addBackPactToCart()
    await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible()
})