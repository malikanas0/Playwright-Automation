import { test, expect } from '@playwright/test';
test.describe('tc01 with playwright',()=>{
    test('basic test', async({ page })=>{
        await (page.goto('https://demoqa.com/'))
        await expect(page).toHaveURL('https://demoqa.com')
        await page.getByRole('heading',{name: 'Elements'}).click()
        await page.getByText('Web Tables').click()
        await page.getByRole('button', { name: 'Add' }).click()
        await page.getByPlaceholder('First Name').fill('Alden')
        expect('Alden').toBeTruthy()
        await page.getByPlaceholder('Last Name').fill('Cantrell')
        expect('Cantrell').toBeTruthy()
        await page.getByPlaceholder('name@example.com').fill('test@test.com')
        expect('test@test.com').toBeTruthy()
        await page.getByPlaceholder('Age').fill('30')
        expect('30').toBeTruthy()
        await page.getByPlaceholder('Salary').fill('12345')
        expect('12345').toBeTruthy()
        await page.getByPlaceholder('Department').fill('QA')
        expect('QA').toBeTruthy()
        await page.getByRole('button', { name: 'Submit' }).click()
        expect('Submit').toBeTruthy()
})
test('tc02',async({page})=>{
    await (page.goto('https://demoqa.com/'))
    await page.getByRole('heading',{name: 'Elements'}).click()
    await page.getByText('Web Tables').click()
    await page.locator('#edit-record-2').click()
    await page.getByPlaceholder('First Name').fill('')
    expect('First Name').toBeTruthy()
    await page.getByPlaceholder('First Name').fill('Gerimedica')
    expect('Gerimedica').toBeTruthy()
    await page.getByPlaceholder('Last Name').fill('')
    expect('Last Name').toBeTruthy()
    await page.getByPlaceholder('Last Name').fill('BV')
    expect('BV').toBeTruthy()
    await page.getByRole('button', { name: 'Submit' }).click()
    expect('Submit').toBeTruthy()
})
test('tc03',async({page})=>{
    await (page.goto('https://demoqa.com/'))
    await page.getByRole('heading',{name: 'Elements'}).click()
    await page.getByText('Broken Links - Images').click()
    await expect (page.locator('img').nth(3)).toBeVisible()
})
test('tc04', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.getByRole('heading', { name: 'Forms' }).click();
    await page.getByText('Practice Form').click();
    await page.getByPlaceholder('First Name').fill('Gerimedica');
    await page.getByPlaceholder('Last Name').fill('BV');
    await page.getByPlaceholder('name@example.com').fill('testa@test.com');
    await page.getByText('Male', { exact: true }).click();
    await page.getByPlaceholder('Mobile Number').fill('0123456789');
    await page.locator('#dateOfBirthInput').click();
    await page.locator('.react-datepicker__month-select').selectOption('January');
    await page.locator('.react-datepicker__year-select').selectOption('1990');
    await page.getByLabel('Choose Monday, January 15th,').click();
    const subjectsInput = page.locator('input[id="subjectsInput"]')
    await subjectsInput.type('Maths', { delay: 100 });
    await page.locator('#react-select-2-option-0').click()
    await page.getByText('Reading').click()
    await page.locator('input[type="file"]').setInputFiles('C:/Users/owner/OneDrive/Desktop/zaaa.PNG')
    await page.getByPlaceholder('Current Address').fill('Netherlands');
    await page.locator('#state svg').click();
    await page.getByText('NCR', { exact: true }).click();
    await page.locator('#city svg').click()
    await page.getByText('Delhi', { exact: true }).click()
    await page.getByRole('button', { name: 'Submit' }).click()
    await expect(page.getByText('Thanks for submitting the form')).toBeTruthy

  });
  
/*test('tc04',async({page})=>{
    await (page.goto('https://demoqa.com/'))
    await page.getByRole('heading', { name: 'Forms' }).click()
    await page.getByText('Practice Form').click()
    await page.getByPlaceholder('First Name').fill('Gerimedica')
    await page.getByPlaceholder('Last Name').fill('BV')
    await page.getByPlaceholder('name@example.com').fill('testa@test.com')
    await page.getByText('Male', { exact: true }).click()
    await page.getByPlaceholder('Mobile Number').fill('0123456789')
    await page.locator('#dateOfBirthInput').click()
    await page.locator('.react-datepicker__month-select').selectOption('January')
    await page.locator('.react-datepicker__year-select').selectOption('1990')
    await page.getByLabel('Choose Monday, January 15th,').click()
    //await page.locator('.subjects-auto-complete__value-container').fill('ma')
   // await page.locator('#subjectsContainer').selectOption('Maths')
    await page.getByText('Reading').click()
    const fileInput = await page.locator('input[type="file"]')
    const imagePath = 'C:\\Users\\owner\\OneDrive\\Desktop\\zaaa.PNG'
    await fileInput.setInputFiles(imagePath);
    //await page.locator('input[type="file"]').click()
    //await page.setInputFiles('C:\\Users\\owner\\OneDrive\\Desktop\\zaaa.PNG')
    //await page.locator('[type="file"]').click()//.setInputFiles('C:\\Users\\owner\\OneDrive\\Desktop\\zaaa.PNG')
    await page.getByPlaceholder('Current Address').fill('Netherlands')
    await page.locator('#state svg').click()
    await page.getByText('NCR', { exact: true }).click()
    await page.locator('#city svg').click()
    await page.getByText('Delhi', { exact: true }).click()
})*/
})