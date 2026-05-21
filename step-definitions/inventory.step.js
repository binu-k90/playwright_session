import {Given,When,Then,BeforeAll,AfterAll,Before,After,BeforeStep,AfterStep,Status,setDefaultTimeout} from '@cucumber/cucumber'
import { chromium } from 'playwright' 
import assert from 'assert'
setDefaultTimeout(30000)

let browser;
let context
let page

BeforeAll(async function() {
    browser = await chromium.launch({headless:false})
})

AfterAll(async function() {
    if(browser){
        await browser.close()
    }  
})

Before(async function() {
    context = await browser.newContext()
    page = await context.newPage()
})

After(async function(scenario) {
    try{
        if(scenario.result.status == Status.FAILED){
            //const screenshot = await page.screenshot()
            await page.screenshot({path:`screenshot/${Date.now()}.png`})
           // this.attach(screenshot,'image/png')
        }

    }catch(error){
        console.log('after hook error:' , error.message)
    }
    finally{
        if(context){
            await context.close()
        }
    }
})

BeforeStep(async function(step) {
    console.log(`${step.pickleStep.text}`)
})

AfterStep(async function(step) {
    console.log(`${step.pickleStep.text}`)
})

Given('User is on application loginpage', async function () {
    await page.goto('https://www.saucedemo.com/') 
})

When('User logs in with username {string} and password {string}',async function (username, password) {
      await page.fill('#user-name', username) 
      await page.fill('#password', password)
      await page.click('#login-button')
})

Then('User should see {string}', async function(result) {
    if(result === 'Inventory Page'){
        await page.waitForSelector("//span[@data-test='title']")
    }
    else if(result === 'Error Message'){
        await page.waitForSelector("//h3[@data-test='error']")
    }
    
})

Then('Inventory item count should be {string}', async function (count) {
    if(count === '0'){
        return
    }
    const items = await page.locator("//div[@class='inventory_item_name ']").count()
    assert.strictEqual(items,Number(count))
})