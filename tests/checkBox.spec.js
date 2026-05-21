import{test,expect} from '@playwright/test'
test('Check Box In Playwright', async({page}) => {
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const checkBox4 = page.locator("//input[@value='option-4']")
//await checkBox4.click()
const checkBox3 = page.locator("//input[@value='option-3']")
//await checkBox3.click()
await checkBox4.check()
await checkBox3.check()
//to uncheck/deselect
await checkBox3.uncheck()
const status = await checkBox4.isChecked()
console.log(status)
})