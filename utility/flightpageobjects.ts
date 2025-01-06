import { Page, expect } from "@playwright/test";

export class allTestCases {
    readonly page: Page;
    acceptBtn;
    frominputfield
    dropval
    toinputfield
    dorpva
    departureDate
    firstDate
    returndate
    lastdate
    slectadult
    addadult
    addchild
    constructor(page: Page) {
        this.page = page;
        this.acceptBtn = page.getByRole('button', { name: 'Accept All' });
        this.frominputfield = page.locator('#searchForm-singleBound-origin-input')
        this.dropval = page.locator('#react-select-4-option-0')
        this.toinputfield= page.locator('#searchForm-singleBound-destination-input')
        this.dorpva = page.locator('#react-select-7-option-0')
        this.departureDate = page.getByTestId('singleBound.departureDate-input')
        this.firstDate = page.getByRole('gridcell', { name: '6 $', exact: true })
        this.returndate = page.getByTestId('singleBound.returnDate-input')
        this.lastdate = page.getByRole('gridcell', { name: '16 $' })
        this.slectadult = page.getByTestId('searchForm-passengers-dropdown')
        this.addadult = page.getByTestId('adults-passengers-add')
        this.addchild = page.getByTestId('children-passengers-add')
    }
    async acceptCookies() {
        await expect(this.acceptBtn).toHaveText('Accept All');
        await this.acceptBtn.click();
    }
    async inputform(){
        await this.frominputfield.fill('lahore')
        await expect(this.frominputfield).toBeVisible()
    }
    async value(){
        await expect(this.dropval).toHaveText('Lahore, Pakistan')
        await this.dropval.click()
    }
    async destinationvalue(){
        await this.toinputfield.fill('karachi')
        await expect(this.toinputfield).toBeVisible()
    }
    async destinationdropvalue(){
        await expect(this.dorpva).toHaveText('Karachi, Pakistan')
        await this.dorpva.click()
    }
    async clickondeparturedate(){
        await expect(this.departureDate).toBeVisible()
        await this.departureDate.click()
    }
    async selectfirstdate(){
        await this.firstDate.click()
        await expect(this.departureDate).toHaveValue('2025-01-06')
    }
    async clickonreturndate(){
    }
    async selectreturndate(){
        await expect(this.lastdate).toBeVisible()
        await this.lastdate.click()
        await expect(this.returndate).toHaveValue('2025-01-16')
    }
    async selectpassengers(){
        await expect(this.slectadult).toHaveText('1 adult')
        await this.slectadult.click()
    }
    async Addadults(){
        await this.addadult.click()
        await expect(this.slectadult).toHaveText('2 adults')
    }
    async Addchlids(){
        await this.addchild.click()
        await expect(this.slectadult).toHaveText('2 adults, 1 child')
    }
}

/*import { Page , expect } from "@playwright/test";

export class alltestcases{
    readonly page:Page
    readonly acceptbtn

    constructor (page : Page){
        this.page = page
    }

    acceptBtn = this.page.getByRole('button', { name: 'Accept All' })

    async acceptcookies(){
        await expect(this.acceptBtn).toHaveText('Accept All')
        await this.acceptBtn.click()
    }
}
*/
