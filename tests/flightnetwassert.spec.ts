import { test, expect } from '@playwright/test';
import { allTestCases } from '../utility/flightpageobjects';
test.describe('Flight with assertion', () => {
    test('Tc01', async ({ page }) => {
        const Alltestcases = new allTestCases(page) 
                await page.goto('https://us-en.flightnetwork.com/rf/start')
        await expect(page).toHaveURL('https://us-en.flightnetwork.com/rf/start')
        await Alltestcases.acceptCookies()
        await Alltestcases.inputform()
        await Alltestcases.value()
        await Alltestcases.destinationvalue()
        await Alltestcases.destinationdropvalue()
        await Alltestcases.clickondeparturedate()
        await Alltestcases.selectfirstdate()
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
      
    })
})
