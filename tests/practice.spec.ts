import { test, expect } from '@playwright/test';

test.describe('Flight Network', () => {
    test('tc01', async ({ page }) => {
        // Navigate to the website and assert URL
        await page.goto('https://us-en.flightnetwork.com/rf/start');
        await expect(page).toHaveURL('https://us-en.flightnetwork.com/rf/start');
        
        // Accept Cookies
        const acceptButton = page.getByRole('button', { name: 'Accept All' });
        await expect(acceptButton).toBeVisible();
        await acceptButton.click();
        
        // Fill Origin Input
        const originInput = page.getByTestId('searchForm-singleBound-origin-input');
        await expect(originInput).toBeVisible();
        await originInput.locator('div').filter({ hasText: 'From' }).nth(3).click();
        await page.keyboard.type('lahore');
        await page.waitForTimeout(1000);
        const originOption = page.locator('#react-select-4-option-0');
        await expect(originOption).toBeVisible();
        await originOption.click();
        
        // Fill Destination Input
        const destinationInput = page.getByTestId('searchForm-singleBound-destination-input');
        await expect(destinationInput).toBeVisible();
        await destinationInput.locator('div').filter({ hasText: 'To' }).nth(3).click();
        await page.keyboard.type('karachi');
        await page.waitForTimeout(1000);
        const destinationOption = page.locator('#react-select-7-option-0');
        await expect(destinationOption).toBeVisible();
        await destinationOption.click();

        // Select Dates
        const departureDateInput = page.getByTestId('singleBound.departureDate-input');
        await expect(departureDateInput).toBeVisible();
        await departureDateInput.click();
        const firstDate = page.getByRole('gridcell', { name: '31 $' });
        await expect(firstDate).toBeVisible();
        await firstDate.click();
        const nextMonthButton = page.getByLabel('Go to next month');
        await expect(nextMonthButton).toBeVisible();
        await nextMonthButton.click();
        const secondDate = page.getByRole('gridcell', { name: '3 $', exact: true });
        await expect(secondDate).toBeVisible();
        await secondDate.click();

        // Select Passengers
        const passengersDropdown = page.getByTestId('searchForm-passengers-dropdown');
        await expect(passengersDropdown).toBeVisible();
        await passengersDropdown.click();
        await page.getByTestId('adults-passengers-add').click();
        await page.getByTestId('children-passengers-add').click();
        await page.getByTestId('infants-passengers-add').click();

        // Select Cabin Class
        const cabinDropdown = page.getByTestId('searchForm-cabinClasses-dropdown');
        await expect(cabinDropdown).toBeVisible();
        await cabinDropdown.click();
        const premiumOption = page.getByRole('option', { name: 'Premium' });
        await expect(premiumOption).toBeVisible();
        await premiumOption.click();

        // Enable Direct Flight Option
        const directFlightCheckbox = page.getByTestId('directFlight-input');
        await expect(directFlightCheckbox).toBeVisible();
        await directFlightCheckbox.click();

        // Search for Flights
        const searchButton = page.getByTestId('searchForm-searchFlights-button');
        await expect(searchButton).toBeVisible();
        await searchButton.click();
        await page.waitForTimeout(1000);

        // View Trip
        const viewTripButton = page.getByTestId('view-trip-button').nth(0);
        await expect(viewTripButton).toBeVisible();
        await viewTripButton.click();

        // Trip Details
        const tripDetailsButton = page.getByTestId('trip-details-button');
        await expect(tripDetailsButton).toBeVisible();
        await tripDetailsButton.click();

        // Select Flexible Ticket
        const flexibleTicketButton = page.getByTestId('FLEXIBLE_TICKET-button');
        await expect(flexibleTicketButton).toBeVisible();
        await flexibleTicketButton.click();
        await page.waitForTimeout(4000);

        // Fill Contact Information
        const emailInput = page.getByTestId('traveler-email-input');
        await expect(emailInput).toBeVisible();
        await emailInput.fill('malikanassultan@gmail.com');
        const confirmEmailInput = page.getByTestId('traveler-email-confirm-input');
        await expect(confirmEmailInput).toBeVisible();
        await confirmEmailInput.fill('malikanassultan@gmail.com');
        const phoneCountryDropdown = page.getByTestId('travelerDetails-contactInformation-phoneCountryId-combobox-button');
        await expect(phoneCountryDropdown).toBeVisible();
        await phoneCountryDropdown.click();
        const pakistanOption = page.getByRole('option', { name: 'Pakistan (+92)' });
        await expect(pakistanOption).toBeVisible();
        await pakistanOption.click();
        const phoneInput = page.getByTestId('traveler-phone-input');
        await expect(phoneInput).toBeVisible();
        await phoneInput.fill('03201454667');

        // Deselect Marketing Emails
        const noMarketingEmailsCheckbox = page.getByLabel('No, I do not want to receive');
        await expect(noMarketingEmailsCheckbox).toBeVisible();
        await noMarketingEmailsCheckbox.click();
    });
});

/*import { test, expect } from '@playwright/test';
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
})
/*import { test, expect } from '@playwright/test';

test.describe('Custom Input Handling', () => {
    test('Fill custom input with Toronto', async ({ page }) => {
        await page.goto('https://us-en.flightnetwork.com/rf/start'); // Replace with your form's URL

        // Click on the custom input field
        await page.getByRole('button', { name: 'Accept All' }).click()
        const customField = page.getByTestId('searchForm-singleBound-origin-input').locator('div').filter({ hasText: 'From' }).nth(3)
        await customField.click()

        // Type into the field
        await page.keyboard.type('lahore')

        await page.waitForTimeout(1000); // Adjust based on your field's behavior
        // Select the dropdown option (if applicable)
        //const option = page.locator('.dropdown-option-class', { hasText: 'lahore' }); // Adjust for your option's locator
        //await option.click()

        await page.locator('#react-select-4-option-0').click() 

        // Validate the result
        //await expect(customField).toContainText('lahore'); // Adjust based on your field's behavior
    });
});*/
