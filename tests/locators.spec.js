import{test,expect} from '@playwright/test'
test('Locators TestCase', async({page}) => {

    await page.goto('https://selenium.qabible.in/simple-form-demo.php')
    const messagebox = page.locator('#single-input-field') //if id is the locator use #
    // const second_messagebox = page.locator('.form=control') //if class is the locator use .
    // const getTotal = page.locator("//button[@id='button-two']") // this is for xpath
    // const text_getTotal = page.locator("//button[text()='Get Total']") //locator using text
    const show_message = page.locator('#button-one')
    await messagebox.fill("Hello") //fill method is to input data
    await show_message.click()
})

//------------------------------------------------SPECIAL LOCATORS----------------------------

test.only('Special Locators Testcase', async({page}) => {
    await page.goto('https://groceryapp.uniqassosiates.com/admin/login')
    const username = page.locator("//input[@name='username']")
    const password = page.locator("//input[@name='password']")
    const signin = page.locator("//button[@type='submit']")
    await username.fill("admin")
    await password.fill("admin")
    await signin.click()
    await page.goto('https://groceryapp.uniqassosiates.com/admin/list-admin')
    //get by role - special locator . located by aria role and accessible name 
    //page.getByRole(role,{name:'text'})
    //getByRole is a playwright locator used to find elements based on their role and visible name, making test more stable and userfriendly
    await page.getByRole('button',{name:'Active'}).nth(0).click()
    //------------------------
    //get By Visible Test
    //page.getByText('Text')  - used to find elements only with the text
    await page.getByText('Active').nth(1).click()
    //clicks the first one
    await page.getByText('Active').first().click()
    //clicks the last one
    await page.getByText('Active').last().click()
})