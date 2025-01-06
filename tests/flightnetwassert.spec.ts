import { test, expect } from '@playwright/test';
import { allTestCases } from '../utility/flightpageobjects';
test.describe('Flight with assertion', () => {
    test('Tc01', async ({ page }) => {
        const Alltestcases = new allTestCases(page) 
                await page.goto('https://us-en.flightnetwork.com/rf/start')
        await expect(page).toHaveURL('https://us-en.flightnetwork.com/rf/start')

        await Alltestcases.acceptCookies()
        /*const acceptBtn = page.getByRole('button', { name: 'Accept All' })
        await expect(acceptBtn).toHaveText('Accept All')
        await acceptBtn.click()
        await page.waitForTimeout(1000)*/
        await Alltestcases.inputform()
        
        /*const frominputfield = page.locator('#searchForm-singleBound-origin-input')
        await frominputfield.fill('lahore')
        await expect(frominputfield).toBeVisible()*/
        await Alltestcases.value()
        await Alltestcases.destinationvalue()
        await Alltestcases.destinationdropvalue()
        await Alltestcases.clickondeparturedate()
        await Alltestcases.selectfirstdate()
        //await Alltestcases.clickonreturndate()
        await Alltestcases.clickonnextmonth()
        await Alltestcases.selectreturndate()
        await Alltestcases.selectpassengers()
        await Alltestcases.Addadults()
        await Alltestcases.Addchlids()
        await Alltestcases.AddInfants()
        await Alltestcases.Addclass()
        await Alltestcases.selectprem()
        await Alltestcases.flightcheckbox()
        await Alltestcases.clickonsearchbtn()
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
    })
})
