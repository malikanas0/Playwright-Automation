import { test, expect } from '@playwright/test';
test.describe('Flight Network',()=>{
    test('tc01',async({page})=>{
        await page.goto('https://us-en.flightnetwork.com/rf/start')
        await page.getByRole('button', { name: 'Accept All' }).click()
        await page.getByTestId('searchForm-singleBound-origin-input').locator('div').filter({ hasText: 'From' }).nth(3).click()
        await page.keyboard.type('lahore')
        await page.waitForTimeout(1000)
        await page.locator('#react-select-4-option-0').click()
        await page.getByTestId('searchForm-singleBound-destination-input').locator('div').filter({ hasText: 'To' }).nth(3).click()
        await page.keyboard.type('karachi')
        await page.waitForTimeout(1000)
        await page.locator('#react-select-7-option-0').click()
        await page.waitForTimeout(1000)
        await page.getByTestId('singleBound.departureDate-input').click()
        await page.getByRole('gridcell', { name: '31 $' }).click()
        await page.getByLabel('Go to next month').click()
        await page.getByRole('gridcell', { name: '3 $', exact: true }).click()
        await page.getByTestId('searchForm-passengers-dropdown').click()
        await page.getByTestId('adults-passengers-add').click()
        await page.getByTestId('children-passengers-add').click()
        await page.getByTestId('infants-passengers-add').click()
        await page.getByTestId('searchForm-cabinClasses-dropdown').click()
        await page.getByRole('option', { name: 'Premium' }).click()
        await page.getByTestId('directFlight-input').click()
        await page.getByTestId('searchForm-searchFlights-button').click()
        await page.waitForTimeout(1000)
    })
    test('tc02',async({page})=>{
        await page.goto('https://us-en.flightnetwork.com/rf/start')
        await page.getByRole('button', { name: 'Accept All' }).click()
        await page.waitForTimeout(1000)
        await page.getByTestId('searchForm-oneWay-radio-label').locator('div').filter({ hasText: 'One-Way' }).click()
        await page.getByTestId('searchForm-singleBound-origin-input').locator('div').filter({ hasText: 'From' }).nth(3).click()
        await page.keyboard.type('lahore')
        await page.waitForTimeout(1000)
        await page.locator('#react-select-6-option-0').click()
        await page.getByTestId('searchForm-singleBound-destination-input').locator('div').filter({ hasText: 'To' }).nth(3).click()
        await page.keyboard.type('karachi')
        await page.waitForTimeout(1000)
        await page.locator('#react-select-9-option-0').click()
        await page.waitForTimeout(1000)
        await page.getByTestId('singleBound.departureDate-input').click()
        await page.getByRole('gridcell', { name: '31 $' }).click()
        await page.getByTestId('searchForm-passengers-dropdown').click()
        await page.getByTestId('children-passengers-add').click()
        await page.getByTestId('infants-passengers-add').click()
        await page.getByTestId('directFlight-input').click()
        await page.getByTestId('searchForm-searchFlights-button').click()
        await page.waitForTimeout(2000)
    })
    test('tc03',async({page})=>{
        await page.goto('https://us-en.flightnetwork.com/rf/start')
        await page.getByRole('button', { name: 'Accept All' }).click()
        await page.waitForTimeout(1000)
        await page.getByTestId('searchForm-multiStop-radio-label').locator('div').filter({ hasText: 'Multi-City' }).click()
        await page.getByTestId('searchForm-multiBound[0]-origin-input').locator('div').filter({ hasText: 'From' }).nth(3).click()
        await page.keyboard.type('lahore')
        await page.waitForTimeout(1000)
        await page.locator('#react-select-14-option-0').click()
        await page.getByTestId('searchForm-multiBound[0]-destination-input').locator('div').filter({ hasText: 'To' }).nth(3).click()
        await page.keyboard.type('karachi')
        await page.waitForTimeout(1000)
        await page.locator('#react-select-19-option-0').click()
        await page.waitForTimeout(1000)
        await page.getByTestId('multiBound[0].departureDate-input').click()
        await page.getByLabel('Go to next month').click()
        await page.getByRole('gridcell', { name: '3 $', exact: true }).click()
        await page.getByTestId('searchForm-multiBound[1]-origin-input').locator('div').filter({ hasText: 'From' }).nth(3).click()
        await page.keyboard.type('islamabad')
        await page.waitForTimeout(1000)
        await page.getByTestId('searchForm-LocationDropdownOption-ISB').click()
        await page.getByTestId('searchForm-multiBound[1]-destination-input').locator('div').filter({ hasText: 'To' }).nth(3).click()
        await page.keyboard.type('lahore')
        await page.waitForTimeout(1000)
        await page.locator('#react-select-25-option-0').click()
        await page.waitForTimeout(1000)
        await page.getByTestId('multiBound[1].departureDate-input').click()
        await page.getByLabel('Go to next month').click()
        await page.getByRole('gridcell', { name: '6 $$', exact: true }).click()
        await page.getByTestId('searchForm-multiStop-addTrip-button').click()
        await page.getByTestId('searchForm-removeTrip-2-non-mobile-button').click()
        await page.getByTestId('directFlight-input').click()
        await page.getByTestId('searchForm-passengers-dropdown').click()
        await page.getByTestId('adults-passengers-add').click()
        await page.getByTestId('children-passengers-add').click()
        await page.getByTestId('infants-passengers-add').click()
        await page.getByTestId('searchForm-cabinClasses-dropdown').click()
        await page.getByRole('option', { name: 'Business' }).click()
        await page.getByTestId('searchForm-searchFlights-button').click()
        await page.waitForTimeout(2000)
    })
})