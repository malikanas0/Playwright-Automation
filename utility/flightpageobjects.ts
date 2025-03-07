import { Page, expect } from "@playwright/test";

export class allTestCases {
    readonly page: Page;
    gotoweb
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
    addinfant
    monthclick
    classbook
    optprem
    nonstopcheckbox
    clicksearchfligt
    oneway
    fromfield
    selectcountry
    tofield
    selecttocountry
    
    constructor(page: Page) {
        this.page = page;
       this.gotoweb= page.goto('https://us-en.flightnetwork.com/rf/start')
        this.acceptBtn = page.getByRole('button', { name: 'Accept All' });
        this.frominputfield = page.locator('#searchForm-singleBound-origin-input')
        this.dropval = page.locator('#react-select-4-option-0')
        this.toinputfield= page.locator('#searchForm-singleBound-destination-input')
        this.dorpva = page.locator('#react-select-7-option-0')
        this.departureDate = page.getByTestId('singleBound.departureDate-input')
        this.firstDate = page.getByRole('gridcell', { name: '31 $' })
       this.returndate = page.getByTestId('singleBound.returnDate-input')
        this.lastdate = page.getByRole('gridcell', { name: '16 $' })
        this.slectadult = page.getByTestId('searchForm-passengers-dropdown')
        this.addadult = page.getByTestId('adults-passengers-add')
        this.addchild = page.getByTestId('children-passengers-add')
        this.addinfant = page.getByTestId('infants-passengers-add')
        this.monthclick = page.getByLabel('Go to next month')
        this.classbook = page.getByTestId('searchForm-cabinClasses-dropdown')
        this.optprem = page.getByTestId('etiDropdownOption')
        this.nonstopcheckbox = page.locator('.css-12v1e3v')
        this.clicksearchfligt = page.locator('.b0x94f1')
        this.oneway =page.getByText('One-Way')
        this.fromfield = page.locator('#searchForm-singleBound-origin-input')
        this.selectcountry =page.locator('#react-select-6-option-0')
        this.tofield = page.locator('#searchForm-singleBound-destination-input')
        this.selecttocountry=page.locator('#react-select-9-option-0')
    }

    async sitevisit(){
        //await expect(this.gotoweb).toHaveURL('https://us-en.flightnetwork.com/rf/start')
    }
    async acceptCookies() {
        //await expect(this.acceptBtn).toHaveText('Accept All');
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
        await expect(this.departureDate).toHaveValue('2025-01-31')
    }
    /*async clickonreturndate(){
        await this.returndate.click()
    }*/
    async clickonnextmonth(){
        await expect(this.monthclick).toBeVisible()
        await this.monthclick.click()
    }
    async selectreturndate(){
        await expect(this.lastdate).toBeVisible()
        await this.lastdate.click()
        await expect(this.returndate).toHaveValue('2025-02-16')
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
    async AddInfants(){
        await this.addinfant.click()
        await expect(this.slectadult).toHaveText('2 adults, 1 child, 1 infant')
    }
    async Addclass(){
        await this.classbook.click()
    }
    async selectprem(){
        await this.optprem.nth(1).click()
        await expect(this.classbook).toHaveText('Premium')
    }
    async flightcheckbox(){
        await expect(this.nonstopcheckbox).toHaveText('Nonstop flights only')
        await this.nonstopcheckbox.click()
    }
    async clickonsearchbtn(){
        await this.clicksearchfligt.nth(2).click()
    }
    //second test case pom 
    async clickoneway(){
        await this.oneway.click()
        await expect(this.oneway).toHaveText('One-Way')
    }
    async onewayfromfield(){   
       await this.fromfield.fill('lahore')
       //await expect(this.tofield).toHaveText('Lahore')
    }
    async selectfromoption(){
        await this.selectcountry.click()
        //await expect(this.fromfield).toHaveText('Lahore, Pakistan')
    }
    async onewayformallinputs(){
        await this.tofield.fill('karachi')
        await this.selecttocountry.click()
        //await expect(this.tofield).toHaveText('Karachi')
        await expect(this.departureDate).toBeVisible()
        await this.departureDate.click()
        await this.firstDate.click()
        await expect(this.departureDate).toHaveValue('2025-01-31')
        await expect(this.slectadult).toHaveText('1 adult')
        await this.slectadult.click()
        await this.addadult.click()
        await expect(this.slectadult).toHaveText('2 adults')
        await this.addchild.click()
        await expect(this.slectadult).toHaveText('2 adults, 1 child')
        await this.addinfant.click()
        await expect(this.slectadult).toHaveText('2 adults, 1 child, 1 infant')
        await this.classbook.click()
        await this.optprem.nth(1).click()
        await expect(this.classbook).toHaveText('Premium')
        await expect(this.nonstopcheckbox).toHaveText('Nonstop flights only')
        await this.nonstopcheckbox.click()
        await this.clicksearchfligt.nth(2).click()
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
