import{test,expect} from '@playwright/test'
test('Radio Button In Playwright', async({page}) => {
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const radioButton1 = page.locator("//input[@value='blue']")
//clicks radiobutton using click
await radioButton1.click()
//clicks radio button using check
await radioButton1.check()
//isChecked method is used to verify whether a radio button is selected or not
const status = await radioButton1.isChecked()
console.log("If Selected returns True else False : " + status)
})