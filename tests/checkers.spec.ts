import { test, expect } from "@playwright/test";

test.describe('Checker automation with Playwright', () => {
  test('Automate checkers game', async ({ page }) => {
    // Set a higher timeout for the test
    test.setTimeout(60000);

    // Navigate to the checkers game
    await page.goto('https://www.gamesforthebrain.com/game/checkers/');

    // Perform the moves step by step
    await page.locator('[name="space62"]').click();
    await page.locator('[name="space73"]').click();

    await page.locator('[name="space22"]').click();
    await page.locator('[name="space13"]').click();

    await page.locator('[name="space51"]').click();
    await page.locator('[name="space62"]').click();

    await page.locator('[name="space42"]').click();
    await page.locator('[name="space24"]').click();

    await page.locator('[name="space13"]').click();
    await page.locator('[name="space04"]').click();

    await page.locator('[name="space02"]').click();
    await page.locator('[name="space13"]').click();

    await page.locator('[name="space04"]').click();
    await page.locator('[name="space15"]').click();

    await page.locator('[name="space11"]').click();
    await page.locator('[name="space02"]').click();

    await page.locator('[name="space15"]').click();
    await page.locator('[name="space26"]').click();

    await page.locator('[name="space26"]').click();
    await page.locator('[name="space37"]').click();

    // Optionally, add an assertion to verify the game's state after the moves
    const gameState = await page.locator('body').textContent();
    console.log('Game state:', gameState);
  });
});

/*import {test ,expect} from "@playwright/test";
test.describe('checker automation with playwright',()=>{
    test('Automate checkers game',async({page})=>{
      test.setTimeout(60000)
     await page.goto('https://www.gamesforthebrain.com/game/checkers/')
      await page.locator('[name="space62"]').click()
      await page.locator('[name="space73"]').click()
      //await page.waitForTimeout(10000)
      await page.locator('[name="space22"]').click()
      await page.locator('[name="space13"]').click()
      //await page.waitForTimeout(10000)
      await page.locator('[name="space51"]').click()
      await page.locator('[name="space62"]').click()
      //await page.waitForTimeout(10000)
      await page.locator('[name="space42"]').click()
      await page.locator('[name="space24"]').click()
      //await page.waitForTimeout(10000)
      await page.locator('[name="space13"]').click()
      await page.locator('[name="space04"]').click()
      //await page.waitForTimeout(10000)
      await page.locator('[name="space02"]').click()
      await page.locator('[name="space13"]').click()
      //await page.waitForTimeout(10000)
      await page.locator('[name="space04"]').click()
      await page.locator('[name="space15"]').click()
      //await page.waitForTimeout(10000)
      await page.locator('[name="space11"]').click()
      await page.locator('[name="space02"]').click()
      //await page.waitForTimeout(10000)
      await page.locator('[name="space15"]').click()
      await page.locator('[name="space26"]').click()
      //await page.waitForTimeout(10000)
      await page.locator('[name="space26"]').click()
      await page.locator('[name="space37"]').click()
      //await page.waitForTimeout(10000)
    })
  })
       /* await page.locator('div:nth-child(6) > img:nth-child(2)').click()
        await page.locator('div:nth-child(5) > img').first().click()
        await page.waitForTimeout(3000)
        await page.locator('div:nth-child(6) > img:nth-child(6)').click()
        await page.locator('div:nth-child(5) > img:nth-child(7)').click()
        await page.waitForTimeout(3000)
        await page.locator('div:nth-child(5) > img:nth-child(7)').click()
        await page.locator('div:nth-child(4) > img:nth-child(8)').click()
        await page.waitForTimeout(3000)
        await page.locator('div:nth-child(7) > img:nth-child(7)').click()
        await page.locator('div:nth-child(6) > img:nth-child(6)').click()
        await page.waitForTimeout(3000)
        await page.locator('div:nth-child(7) > img:nth-child(5)').click()
        await page.locator('div:nth-child(6) > img:nth-child(6)').click()
        await page.waitForTimeout(3000)
        await page.locator('div:nth-child(6) > img:nth-child(6)').click()
        await page.locator('div:nth-child(5) > img:nth-child(7)').click()
        await page.waitForTimeout(4000)
        await page.locator('div:nth-child(7) > img').first().click()
        await page.locator('div:nth-child(6) > img:nth-child(2)').click()
        await page.waitForTimeout(4000)
      /*  await page.locator('[name="space62"]').click()
        await page.locator('[name="space73"]').click()
        await page.waitForTimeout(3000)
        await page.locator('[name="space22"]').click()
        await page.locator('[name="space13"]').click()
        await page.waitForTimeout(3000)
        await page.locator('[name="space71"]').click()
        await page.locator('[name="space62"]').click()
        await page.waitForTimeout(3000)
        await page.locator('[name="space42"]').click()
        await page.locator('[name="space24"]').click()
        await page.waitForTimeout(3000)
        await page.locator('[name="space31"]').click()
        await page.locator('[name="space22"]').click()
        await page.waitForTimeout(3000)
        await page.locator('[name="space51"]').click()
        await page.locator('[name="space33"]').click()
        await page.waitForTimeout(4000)
        await page.locator('[name="space13"]').click()
        await page.locator('[name="space04"]').click()
        await page.waitForTimeout(3000)
        await page.locator('[name="space04"]').click()
        await page.locator('[name="space15"]').click()
        await page.waitForTimeout(3000)*/