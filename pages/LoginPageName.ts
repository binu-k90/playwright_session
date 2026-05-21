import { AddInventory } from "./AddInventory"
import {Page, Locator} from '@playwright/test'

export class LoginPage{ 
    page : Page
    username : Locator
    password : Locator
    loginButton : Locator


    constructor(page : Page){
        this.page = page
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginButton = page.locator('#login-button')
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/')
        return this
    }

    async login(validUsername: string ,validPassword : string){
        await this.username.fill(validUsername)
        await this.password.fill(validPassword)
        await this.loginButton.click()
        return new AddInventory(this.page)
    }
}