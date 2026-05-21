import {test,expect} from '@playwright/test'

test('Update Customer Info', async ({page}) => {
    //Login to the application
    await page.goto('https://groceryapp.uniqassosiates.com/admin')
    await page.locator("//input[@name='username']").fill('admin')
    await page.locator("//input[@name='password']").fill('admin')
    await page.locator("//button[@type='submit']").click()
    //Click on More Info in Manage Contact
    await page.locator("//a[contains(@href,'list-contact')][@class='small-box-footer']").click()
    //Edit the contact 
    await page.locator("//a[contains(@href,'edit_contact')]").click()
    //Update the details
    await page.locator('#phone').fill('9123456789')
    await page.locator('#email').fill('test@obsqura.com')
    await page.locator("//textarea[@name='address']").fill('Trivandrum')
    await page.locator("//textarea[@name='del_time']").fill('10 AM')
    await page.locator('#del_limit').fill('20')
    // Click on Update button
    await page.locator("//button[@name='Update']").click()
    //Verify if success message is displayed
    await expect(page.locator('.alert-success')).toContainText('Contact Updated Successfully')
    //Logout of the application
    await page.locator("//a[@class='nav-link' and normalize-space() = 'Admin']").click()
    await page.locator("//a[contains(@href,'logout')][@class='dropdown-item']").click()

})