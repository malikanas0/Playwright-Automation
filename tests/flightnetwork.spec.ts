import { test, expect } from '@playwright/test';
test.describe('Flight Network',()=>{
    test('tc01',async({page})=>{
        await page.goto('https://us-en.flightnetwork.com/rf/start')
         
        //await page.locator('.css-1hwfws3').nth(0).click()
        await page.getByTestId('searchForm-singleBound-origin-input').locator('div').filter({ hasText: 'From' }).nth(3).fill('Toronto')
        //await page.fill('Toronto')
    })
})