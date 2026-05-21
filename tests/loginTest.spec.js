import {getData} from '../utils/excelReader'
import { LoginPage } from '../pages/LoginPage'
import {test,expect} from '@playwright/test'

const credentials = getData()

test('Login to the application using valid credentials',async ({page}) => {
    for(const data of credentials){
    const loginpage = new LoginPage(page) //passed fixture to constructor
    await loginpage.goto()
    await loginpage.login(data.Username,data.Password)
    //await loginpage.login('standard_user','secret_sauce')
   // const inventoryPage = await (await loginpage.goto()).login('standard_user','secret_sauce')// using chain of methods
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
}

})