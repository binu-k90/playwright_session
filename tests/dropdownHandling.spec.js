import{test,expect} from '@playwright/test'
test('Dropdown In Playwright', async({page}) => {
    await page.goto('https://selenium.qabible.in/select-input.php')
    const dropdown1 = page.locator("//select[@id='single-input-field']")
    //await dropdown1.selectOption({label:'Red'})//select by Visible text
    await dropdown1.selectOption({value:'Red'})//select by Value
    await dropdown1.selectOption({index:1})//select by index
    console.log("Test")
})
