import { test, expect } from '@playwright/test';

test.describe('Custom Input Handling', () => {
    test('Fill custom input with Toronto', async ({ page }) => {
        await page.goto('https://us-en.flightnetwork.com/rf/start'); // Replace with your form's URL

        // Click on the custom input field
        await page.getByRole('button', { name: 'Accept All' }).click()
        const customField = page.getByTestId('searchForm-singleBound-origin-input').locator('div').filter({ hasText: 'From' }).nth(3)
        await customField.click()

        // Type into the field
        await page.keyboard.type('lahore')
        await
        // Select the dropdown option (if applicable)
        const option = page.locator('.dropdown-option-class', { hasText: 'lahore' }); // Adjust for your option's locator
        await option.click()

        // Validate the result
        await expect(customField).toContainText('lahore'); // Adjust based on your field's behavior
    });
});
