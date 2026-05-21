import{test,expect} from '@playwright/test'
test('Simple Alert Test', async({page}) => {
await page.goto('https://selenium.qabible.in/javascript-alert.php')
page.on('dialog',async dialog => { //on is used to listen for the event. singlequotes dialog is an event  . dialog in oragne is object. Used to handle or control the alert
    expect(dialog.message()).toBe('I am a Javascript alert box!')   // verifies the alert box, only actions only if this message is displayed. toBe is used to compare 2 values
    await dialog.accept()
})
const simpleAlert_clickme = page.locator("//button[@onclick='jsAlert()']") 
simpleAlert_clickme.click()
})
//----------------------------------------------------------
test('Confirmation Alert', async({page}) => {
await page.goto('https://selenium.qabible.in/javascript-alert.php')
page.on('dialog',async dialog => { //on is used to listen for the event. singlequotes dialog is an event  . dialog in oragne is object. Used to handle or control the alert
    expect(dialog.message()).toBe('Press a button!')   // verifies the alert box, only actions only if this message is displayed. toBe is used to compare 2 values
    //await dialog.accept()  //accept and dismiss methods are provided by dialog class
    await dialog.dismiss()
})
const confirmationAlert_clickme = page.locator("//button[@onclick='jsConfirm()']") 
confirmationAlert_clickme.click()
})
//----------------------------------------------------------
test.only('Prompt Alert', async({page}) => {
await page.goto('https://selenium.qabible.in/javascript-alert.php')
page.on('dialog',async dialog => { //on is used to listen for the event. singlequotes dialog is an event  . dialog in oragne is object. Used to handle or control the alert
    expect(dialog.message()).toBe('Please enter your name')   // verifies the alert box, only actions only if this message is displayed. toBe is used to compare 2 values
    await dialog.accept('Binu')  //accept and dismiss methods are provided by dialog class
    //await dialog.dismiss()
})
const promptAlert_clickme = page.locator("//button[@onclick='jsPrompt()']") 
promptAlert_clickme.click()
})

