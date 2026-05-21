import {test,expect} from '@playwright/test'

test('Calendar Validation', async ({page}) => {
    await page.goto('https://selenium.qabible.in/date-picker.php')
    const datePickerInput = page.locator('#single-input-field')
    await datePickerInput.click()
    const targetYear = 1997
    await expect(page.locator('.datepicker-dropdown')).toBeVisible() //wait until the calendar popup element is visible on the page and verify that is displayed
    const calendarYearTitleSwitch = page.locator('.datepicker-switch:visible') //visible is used to select only the visible element and to filter
    await calendarYearTitleSwitch.click()
    await calendarYearTitleSwitch.click()
    let attempts = 10
    while(attempts--){
        const decades = await calendarYearTitleSwitch.innerText() //get the text visible on the screen
        const startYear = parseInt(decades.split('-')[0].trim()) //2020-2029
        if(targetYear>=startYear && targetYear <= startYear+9)
            break
        await page.locator('.prev:visible').click()
    }

    await page.locator('.year:visible').filter({hasText:'1997'}).click()//used to filter elements on the visible text
    await page.locator('.month:visible').filter({hasText:'Feb'}).click()
    await page.locator('.day:not(.old):not(.new)').filter({ hasText: /^8$/ }).click()

    await page.locator('#button-one').click()

})