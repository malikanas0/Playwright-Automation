import { test, expect } from '@playwright/test';
import path from 'path';

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