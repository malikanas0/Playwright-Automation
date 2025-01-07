import { test, expect } from '@playwright/test';
test.describe('Flight Network',()=>{
    test('tc01',async({page})=>{
        await expect(page.goto('https://us-en.flightnetwork.com/rf/start')).toBeTruthy()
        const acceptbtn = page.getByRole('button', { name: 'Accept All' }).click()
        await expect(acceptbtn).toBeTruthy()
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
        await page.getByRole('gridcell', { name: '4 $', exact: true }).click()
        await page.waitForTimeout(1000)
        await page.getByLabel('Go to next month').click()
        await page.waitForTimeout(1000)
        await page.getByRole('gridcell', { name: '7 $', exact: true }).click()
        await page.getByTestId('searchForm-passengers-dropdown').click()
        await page.getByTestId('adults-passengers-add').click()
        await page.getByTestId('children-passengers-add').click()
        await page.getByTestId('infants-passengers-add').click()
        await page.getByTestId('searchForm-cabinClasses-dropdown').click()
        await page.getByRole('option', { name: 'Premium' }).click()
        await page.getByTestId('directFlight-input').click()
        await page.getByTestId('searchForm-searchFlights-button').click()
        await page.waitForTimeout(1000)
        await page.getByTestId('view-trip-button').nth(0).click()
        await page.getByTestId('trip-details-button').click()
        await page.getByTestId('FLEXIBLE_TICKET-button').click()
        await page.waitForTimeout(4000)
        await page.getByTestId('traveler-email-input').fill('malikanassultan@gmail.com')
        await page.getByTestId('traveler-email-confirm-input').fill('malikanassultan@gmail.com')
        await page.getByTestId('travelerDetails-contactInformation-phoneCountryId-combobox-button').click()
        await page.getByRole('option', { name: 'Pakistan (+92)' }).click()
        await page.getByTestId('traveler-phone-input').fill('03201454667')
        await page.getByLabel('No, I do not want to receive').click()
    })
    test('tc02',async({page})=>{
        await page.goto('https://us-en.flightnetwork.com/rf/start')
        const acceptBtn = page.getByRole('button', { name: 'Accept All' })
        await expect(acceptBtn).toHaveText('Accept All')
        await acceptBtn.click()

        const clickononeway = page.getByText('One-Way')
        await clickononeway.click()

        const fromfield = page.locator('#searchForm-singleBound-origin-input')
       await fromfield.fill('lahore')
       const countryinput = page.locator('#react-select-6-option-0')
       await countryinput.click()
       
       const tofields = page.locator('#searchForm-singleBound-destination-input')
       await tofields.fill('karachi')
       const selecttocount = page.locator('#react-select-9-option-0')
        await selecttocount.click()

        const depdate = page.getByTestId('singleBound.departureDate-input')
        await depdate.click()
        const dateselect =page.getByRole('gridcell', { name: '31 $' })
        await dateselect.click()
        await expect(depdate).toHaveValue('2025-01-31')

        const addpassengers = page.getByTestId('searchForm-passengers-dropdown')
        await addpassengers.click()
        await expect(addpassengers).toHaveText('1 adult')

        const addchildern = page.getByTestId('children-passengers-add')
        await addchildern.click()
        await expect(addpassengers).toHaveText('1 adult, 1 child')

        const addinfant = page.getByTestId('infants-passengers-add')
        await addinfant.click()
        await expect(addpassengers).toHaveText('1 adult, 1 child, 1 infant')

        const Addclass = page.getByTestId('searchForm-cabinClasses-dropdown')
        await Addclass.click()
        await expect(Addclass).toHaveText('Economy')

        const selectclassopt = page.getByRole('option', { name: 'Premium' })
        await selectclassopt.click()
        await expect(Addclass).toHaveText('Premium')

        const searchbox = page.getByTestId('directFlight-input')
        await searchbox.click()

        const clickonsearchbtn = page.getByTestId('searchForm-searchFlights-button')
        await clickonsearchbtn.click()
        

        /*await page.goto('https://us-en.flightnetwork.com/rf/start')
        await page.getByRole('button', { name: 'Accept All' }).click()
        await page.waitForTimeout(1000)
        await page.getByText('One-Way').click()
       const fromfield = page.locator('#searchForm-singleBound-origin-input')
       await fromfield.fill('lahore')
        //await page.getByTestId('searchForm-singleBound-origin-input').locator('div').filter({ hasText: 'From' }).nth(3).click()
        //await page.keyboard.type('lahore')
        await page.waitForTimeout(1000)
        await page.locator('#react-select-6-option-0').click()

        await page.getByTestId('searchForm-singleBound-destination-input').locator('div').filter({ hasText: 'To' }).nth(3).click()
        await page.keyboard.type('karachi')
        await page.waitForTimeout(1000)
        const selecttocount = page.locator('#react-select-9-option-0')
        await selecttocount.click()
        await 
        await page.locator('#react-select-9-option-0').click()
        await page.waitForTimeout(1000)
        await page.getByTestId('singleBound.departureDate-input').click()
        await page.getByRole('gridcell', { name: '31 $' }).click()
        await page.getByTestId('searchForm-passengers-dropdown').click()
        await page.getByTestId('children-passengers-add').click()
        await page.getByTestId('infants-passengers-add').click()
        await page.getByTestId('directFlight-input').click()
        await page.getByTestId('searchForm-searchFlights-button').click()
        await page.waitForTimeout(2000)*/
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
    test('tc04',async({page})=>{
        await page.goto('https://us-en.flightnetwork.com/rf/start')
        await page.getByRole('button', { name: 'Accept All' }).click()
        await page.waitForTimeout(1000)
        await page.getByTestId('menu-link-Hotels').click()
        await page.waitForTimeout(1000)
        await page.getByPlaceholder('Where are you going?').click()
        await page.keyboard.type('islamabad')
        await page.waitForTimeout(1000)
        //await page.getByLabel('Dismiss sign-in info.').click()
        await page.getByRole('option', { name: 'Islamabad Islamabad Capital' }).click()
        await page.waitForTimeout(1000)
        await page.waitForLoadState('networkidle')
        await page.locator('span').filter({ hasText: '7 days' }).click()
        await page.getByRole('button', { name: 'Search' }).click()
        await page.waitForTimeout(1000)
        await page.getByLabel('31 December').click()
        await page.waitForTimeout(1000)
        await page.getByRole('button', { name: 'Search' }).click()
        await page.waitForEvent('load')
    })
    test('tc05',async({page})=>{
        await page.goto('https://us-en.flightnetwork.com/rf/start')
        await page.getByRole('button', { name: 'Accept All' }).click()
        await page.getByTestId('menu-link-Rental car').click()
        await page.waitForTimeout(2000)
        await page.getByTestId('searchbox-toolbox-fts-pickup').fill('islamabad')
        await page.getByRole('button', { name: 'Airport Islamabad' }).click()
        await page.getByTestId('searchbox-toolbox-date-picker-pickup-date-value').click()
        await page.getByLabel('10 January 2025').click()
        await page.getByLabel('4 February 2025', { exact: true }).click()
        //await page.getByTestId('searchbox-toolbox-pickup-time').click()
        await page.waitForTimeout(1000)
        await page.getByTestId('searchbox-toolbox-dropoff-time').click()
        await page.waitForTimeout(1000)
        await page.getByTestId('searchbox-toolbox-submit-button').click()
        await page.waitForTimeout(1000)
        // await page.waitForLoadState()
        //await page.waitForEvent('load')
    })
})
/*const acceptBtn = page.getByRole('button', { name: 'Accept All' })
        await expect(acceptBtn).toHaveText('Accept All')
        await acceptBtn.click()
        await page.waitForTimeout(1000)*/
          /*const frominputfield = page.locator('#searchForm-singleBound-origin-input')
        await frominputfield.fill('lahore')
        await expect(frominputfield).toBeVisible()*/
          /*const dropval = page.locator('#react-select-4-option-0')
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
        await firstDate.click()
        await expect(departureDate).toHaveValue('2025-01-06')

        const returndate = page.getByTestId('singleBound.returnDate-input')

        //const monthclick = page.getByLabel('Go to next month')
        //await expect(monthclick).toBeVisible()
        //await monthclick.click()

        const lastdate = page.getByRole('gridcell', { name: '16 $' })
        await expect(lastdate).toBeVisible()
        await lastdate.click()

        await expect(returndate).toHaveValue('2025-02-16')

        const slectadult = page.getByTestId('searchForm-passengers-dropdown')
        await expect(slectadult).toHaveText('1 adult')
        await slectadult.click()
        const addadult = page.getByTestId('adults-passengers-add')
        await addadult.click()
        await expect(slectadult).toHaveText('2 adults')
        const addchild = page.getByTestId('children-passengers-add')
        await addchild.click()
        await expect(slectadult).toHaveText('2 adults, 1 child')
        const addinfant = page.getByTestId('infants-passengers-add')
        await addinfant.click()
        await expect(slectadult).toHaveText('2 adults, 1 child, 1 infant')

        const classbook = page.getByTestId('searchForm-cabinClasses-dropdown')
        await classbook.click()
        const optprem = page.getByTestId('etiDropdownOption')
        await optprem.nth(1).click()
        await expect(classbook).toHaveText('Premium')

        const nonstopcheckbox = page.locator('.css-12v1e3v')
        await expect(nonstopcheckbox).toHaveText('Nonstop flights only')
        await nonstopcheckbox.click()
        
        const clicksearchfligt = page.locator('.b0x94f1')
        await clicksearchfligt.nth(2).click()*/