import { test, expect } from '@playwright/test';

test('Flight Booking with Assertions', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://us-en.flightnetwork.com/rf/start');
    await expect(page).toHaveURL('https://us-en.flightnetwork.com/rf/start');
    
    // Accept Cookies
    const acceptBtn = page.getByRole('button', { name: 'Accept All' });
    await expect(acceptBtn).toBeVisible();
    await acceptBtn.click();

    // Fill Origin Input
    const originInput = page.getByTestId('searchForm-singleBound-origin-input');
    await originInput.click();
    await page.keyboard.type('lahore');
    await expect(page.locator('#react-select-4-option-0')).toBeVisible();
    await page.locator('#react-select-4-option-0').click();
    
    // Fill Destination Input
    const destinationInput = page.getByTestId('searchForm-singleBound-destination-input');
    await destinationInput.click();
    await page.keyboard.type('karachi');
    await expect(page.locator('#react-select-7-option-0')).toBeVisible();
    await page.locator('#react-select-7-option-0').click();

    // Select Dates
    const departureDateInput = page.getByTestId('singleBound.departureDate-input');
    await expect(departureDateInput).toBeVisible();
    await departureDateInput.click();
    await page.getByRole('gridcell', { name: '31 $' }).click();
    await page.getByLabel('Go to next month').click();
    await page.getByRole('gridcell', { name: '3 $', exact: true }).click();
    await page.waitForTimeout(1000)

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
    await page.getByRole('option', { name: 'Premium' }).click();

    // Verify and Click Search
    const searchButton = page.getByTestId('searchForm-searchFlights-button');
    await expect(searchButton).toBeVisible();
    await searchButton.click();

    // View Trip
    const viewTripButton = page.locator('text=View Trip').first();
    await expect(viewTripButton).toBeVisible();
    await viewTripButton.click();

    // Verify Contact Form
    const emailInput = page.getByTestId('traveler-email-input');
    await emailInput.fill('test@example.com');
    await expect(emailInput).toHaveValue('test@example.com');
});

/*import { test, expect } from '@playwright/test';
import path from 'path';

test('tc07',async({page})=>{
  await page.goto('https://demoqa.com/')
  await page.getByRole('heading', { name: 'Interactions' }).click()
  await page.getByText('Droppable').click()
  await page.locator('#draggable').hover()
  await page.waitForTimeout(3000)
const droppable = page.getByText('Simple').locator('#droppable');
await droppable.hover();



})
/*
test('tc06', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://demoqa.com/');

  // Click on "Widgets"
  await page.getByRole('heading', { name: 'Widgets' }).click();

  // Click on "Tool Tips"
  await page.getByText('Tool Tips').click();

  // Hover over the button
  await page.locator('#toolTipButton').hover();

  // Get the tooltip and verify its text
  const tooltip = page.locator('.tooltip-inner')
  await expect(tooltip).toHaveText('You hovered over the Button')
});
/*test('tc04 - File Upload Debugging', async ({ page }) => {
  // Dynamically resolve the file path
  const filePath = path.resolve('C:/Users/owner/OneDrive/Desktop/zaaa.PNG');

  console.log('Resolved file path:', filePath);

  // Verify if the file exists
  const fs = require('fs');
  if (!fs.existsSync(filePath)) {
    console.error('File does not exist at:', filePath);
    return;
  }

  // Open the page
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Forms' }).click();
  await page.getByText('Practice Form').click();

  // Set the file in the input field
  const fileInput = page.locator('input[type="file"]');
  await fileInput.setInputFiles(filePath);

  // Pause to visually debug the upload
  await page.pause();

  // Verify successful upload if there’s any confirmation on the UI
  console.log('File upload attempt completed');
});


/*import { test, expect } from '@playwright/test';

test('tc04 - File Upload Debugging', async ({ page }) => {
    // Open the page
    await page.goto('https://demoqa.com/');
    await page.getByRole('heading', { name: 'Forms' }).click();
    await page.getByText('Practice Form').click()
    await page.locator('input[type="file"]').setInputFiles('C:/Users/owner/OneDrive/Desktop/Playwright automation projects/package.json')
    //await const handle
    page.once('dialog',(dailog)=>{
      console.log(dailog.message())
      dailog.accept()
    })
    //const filepath = 'C:/Users/owner/OneDrive/Desktop/aa.PNG'
    //await page.locator('#uploadPicture').setInputFiles(filepath); 
    //await page.locator('').click({ force: true });
    //await page.locator('input[type="file"]').setInputFiles('C:/Users/owner/OneDrive/Desktop/zaaa.PNG');
    //await page.getByLabel('Select picture').click()
  });
  */