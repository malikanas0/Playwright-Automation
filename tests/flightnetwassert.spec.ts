import { test, expect } from '@playwright/test';
import { allTestCases } from '../utility/flightpageobjects';
test.describe('Flight with assertion', () => {
    
    test('Tc01', async ({ page }) => {
        const Alltestcases = new allTestCases(page) 
        await Alltestcases.sitevisit()
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
    test('tc02', async({page})=>{
        const Alltestcases = new allTestCases(page)
        await Alltestcases.sitevisit()
        await Alltestcases.acceptCookies()
        await Alltestcases.clickoneway()
        await Alltestcases.onewayfromfield()
        await Alltestcases.selectfromoption()
        await Alltestcases.onewayformallinputs()
    })
    test('tc03',async({page})=>{
        
    })
})