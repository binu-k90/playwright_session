//@playwright/test - only when this imported test scripts can be executed. Official test runner of Playwright Package or Library.
//expect function is used for validation and test is for testcase
import{test,expect} from '@playwright/test'
//test is a function provided by playwright denotes test case and within single quotes Browser Context Playwright Test is the test name  
//browser is fixture - represents the actual broswer
test('Browser Context Playwright Test', async({browser}) => {
    // creates a new browser session
    const context = await browser.newContext()
    //creates a new tab inside that session
    const page = await context.newPage()
    //to load the url - page.goto - launch the url
    await page.goto('https://selenium.qabible.in')
})

//1. start browser
//2. session gets created
//3. Creates a new tab
//4. Launch the url
//--------------------------------------------------------------------------------------------------------------------

//test.only is provided only this testcase will get executed

test.only('Page Playwright Test', async({page}) => {

    await page.goto('https://selenium.qabible.in')
    const title = await page.title()
    console.log(title)
    await expect(page).toHaveTitle("Obsqura Testing")
})
