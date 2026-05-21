import { AddInventory } from "./AddInventory"

export class LoginPage{ 
    constructor(page){
        this.page = page
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginButton = page.locator('#login-button')
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/')
        return this
    }

    async login(validUsername,validPassword){
        await this.username.fill(validUsername)
        await this.password.fill(validPassword)
        await this.loginButton.click()
        return new AddInventory(this.page)
    }
}