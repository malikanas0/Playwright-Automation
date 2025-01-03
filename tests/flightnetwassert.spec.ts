import { test, expect } from '@playwright/test';
import exp from 'constants';

test.describe('Flight with assertion', () => {
    test('Tc01', async ({ page }) => {
        await page.goto('https://us-en.flightnetwork.com/rf/start')
        await expect(page).toHaveURL('https://us-en.flightnetwork.com/rf/start')
       
        const acceptBtn = page.getByRole('button', { name: 'Accept All' })
        await expect(acceptBtn).toHaveText('Accept All')
        await acceptBtn.click()
        await page.waitForTimeout(1000)
        
        const frominputfield = page.locator('#searchForm-singleBound-origin-input')
        await frominputfield.fill('lahore')
        await expect(frominputfield).toBeVisible()
        
        const dropval = page.locator('#react-select-4-option-0')
        await expect(dropval).toHaveText('Lahore, Pakistan')
        await dropval.click()
        
        const toinputfield = page.locator('#searchForm-singleBound-destination-input')
        await toinputfield.fill('karachi')
        await expect(toinputfield).toBeVisible()

        const dorpva = page.locator('#react-select-7-option-0')
        await expect(dorpva).toHaveText('Karachi, Pakistan')
        await dorpva.click()
        await page.waitForTimeout(1000)

        const departureDate = page.getByTestId('singleBound.departureDate-input')
        await expect(departureDate).toBeVisible()
        await departureDate.click()
        
        const firstDate = page.getByRole('gridcell', { name: '6 $', exact: true })
        await expect(firstDate).toBeVisible()
        await firstDate.click()

        const monthclick = page.getByLabel('Go to next month')
        await expect(monthclick).toBeVisible()
        await monthclick.click()

        const lastdate = page.getByRole('gridcell', { name: '5 $', exact: true })
        await expect(lastdate).toBeVisible()
        await lastdate.click()

        const slectadult = page.getByTestId('searchForm-passengers-dropdown')
        await expect(slectadult).toHaveText('1 adult')
        await slectadult.click()
    })
})
