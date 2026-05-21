import{test,expect} from '@playwright/test'

test('Visual Testing for dynamic page', async ({page}) =>{
    await page.goto('https://selenium.qabible.in/')
    await page.waitForLoadState('networkidle')
    await page.locator("//div[@id='carouselExampleIndicators']").evaluate((element) => {
        element.style.display = 'none'
    })
    await expect(page).toHaveScreenshot('obsqura.png',{threshold:0.02,maxDiffPixels:8000})
})