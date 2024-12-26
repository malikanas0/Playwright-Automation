import {test ,expect} from "@playwright/test";
test.describe('checker automation with playwright',()=>{
    test('Automate checkers game',async({page})=>{
     await page.goto('https://www.gamesforthebrain.com/game/checkers/')
      await page.locator('[name="space62"]').click()
      await page.locator('[name="space73"]').click()
      await expect(page.locator('[name="space73"]')).toHaveAttribute('src', 'you1.gif')
      await page.waitForTimeout(4000)
      await page.locator('[name="space22"]').click()
      await page.locator('[name="space13"]').click()
      await expect(page.locator('[name="space13"]')).toHaveAttribute('src', 'you1.gif')
      await page.waitForTimeout(2000)
      await page.locator('[name="space51"]').click()
      await page.locator('[name="space62"]').click()
      await expect(page.locator('[name="space62"]')).toHaveAttribute('src', 'you1.gif')
      await page.waitForTimeout(2000)
      await page.locator('[name="space42"]').click()
      await page.locator('[name="space24"]').click()
      await expect(page.locator('[name="space24"]')).toHaveAttribute('src', 'you1.gif')
      await page.waitForTimeout(3000)
      await page.locator('[name="space13"]').click()
      await page.locator('[name="space04"]').click()
      await expect(page.locator('[name="space04"]')).toHaveAttribute('src', 'you1.gif')
      await page.waitForTimeout(3000)
      await page.locator('[name="space02"]').click()
      await page.locator('[name="space13"]').click()
      await expect(page.locator('[name="space13"]')).toHaveAttribute('src', 'you1.gif')
      await page.waitForTimeout(5000)
      await page.locator('[name="space04"]').click()
      await page.locator('[name="space15"]').click()
      await expect(page.locator('[name="space15"]')).toHaveAttribute('src', 'you1.gif')
      await page.waitForTimeout(2000)
      await page.locator('[name="space11"]').click()
      await page.locator('[name="space02"]').click()
      await expect(page.locator('[name="space02"]')).toHaveAttribute('src', 'you1.gif')
      await page.waitForTimeout(2000)
      await page.locator('[name="space15"]').click()
      await page.locator('[name="space26"]').click()
      await expect(page.locator('[name="space26"]')).toHaveAttribute('src', 'you1.gif')
      await page.waitForTimeout(3000)
      await page.locator('[name="space26"]').click()
      await page.locator('[name="space37"]').click()
      await page.waitForTimeout(4000)
      await expect(page.locator('[name="space37"]')).toHaveAttribute('src', 'you1k.gif');
    })
  })

   /* // Step 1: Move black piece (62 -> 73)
    await page.locator('[name="space62"]').click();
    await page.locator('[name="space73"]').click();
    // Validate move (piece now at 73)
    await page.waitForSelector('[name="space73"][src*="you2.gif"]');

    // Step 2: Move white piece (22 -> 13)
    await page.locator('div:nth-child(6) > img:nth-child(6)').click();
    await page.locator('div:nth-child(5) > img:nth-child(7)').click();
    // Validate move (piece now at 13)
    await page.waitForSelector('[name="space13"][src*="gray.gif"]');

    // Step 3: Move black piece (51 -> 62)
    await page.locator('[name="space51"]').click();
    await page.locator('[name="space62"]').click();
    // Validate move (piece now at 62)
    await page.waitForSelector('[name="space62"][src*="black.gif"]');

    // Step 4: Move white piece (42 -> 24)
    await page.locator('[name="space42"]').click();
    await page.locator('[name="space24"]').click();
    // Validate move (piece now at 24)
    await page.waitForSelector('[name="space24"][src*="white.gif"]');

    // Step 5: Move black piece (13 -> 04)
    await page.locator('[name="space13"]').click();
    await page.locator('[name="space04"]').click();
    // Validate move (piece now at 04)
    await page.waitForSelector('[name="space04"][src*="black.gif"]');

    // Step 6: Move white piece (02 -> 13)
    await page.locator('[name="space02"]').click();
    await page.locator('[name="space13"]').click();
    // Validate move (piece now at 13)
    await page.waitForSelector('[name="space13"][src*="white.gif"]');

    // Step 7: Move black piece (04 -> 15)
    await page.locator('[name="space04"]').click();
    await page.locator('[name="space15"]').click();
    // Validate move (piece now at 15)
    await page.waitForSelector('[name="space15"][src*="black.gif"]');

    // Step 8: Move white piece (11 -> 02)
    await page.locator('[name="space11"]').click();
    await page.locator('[name="space02"]').click();
    // Validate move (piece now at 02)
    await page.waitForSelector('[name="space02"][src*="white.gif"]');

    // Step 9: Move black piece (15 -> 26)
    await page.locator('[name="space15"]').click();
    await page.locator('[name="space26"]').click();
    // Validate move (piece now at 26)
    await page.waitForSelector('[name="space26"][src*="black.gif"]');

    // Step 10: Move black piece (26 -> 37)
    await page.locator('[name="space26"]').click();
    await page.locator('[name="space37"]').click();
    // Validate move (piece now at 37)
    await page.waitForSelector('[name="space37"][src*="black.gif"]');

    console.log("All moves performed and validated successfully!");
  });
});

    




    // Perform the moves step by step with delays
    await page.locator('[name="space62"]').click({ force: true });
    await page.waitForTimeout(1000);
    await page.locator('[name="space73"]').click({ force: true });
    await page.waitForTimeout(1000);

    await page.locator('[name="space22"]').click({ force: true });
    await page.waitForTimeout(1000);
    await page.locator('[name="space13"]').click({ force: true });
    await page.waitForTimeout(1000);

    await page.locator('[name="space51"]').click({ force: true });
    await page.waitForTimeout(1000);
    await page.locator('[name="space62"]').click({ force: true });
    await page.waitForTimeout(1000);

    await page.locator('[name="space42"]').click({ force: true });
    await page.waitForTimeout(1000);
    await page.locator('[name="space24"]').click({ force: true });
    await page.waitForTimeout(1000);

    await page.locator('[name="space13"]').click({ force: true });
    await page.waitForTimeout(1000);
    await page.locator('[name="space04"]').click({ force: true });
    await page.waitForTimeout(1000);

    await page.locator('[name="space02"]').click({ force: true });
    await page.waitForTimeout(1000);
    await page.locator('[name="space13"]').click({ force: true });
    await page.waitForTimeout(1000);

    await page.locator('[name="space04"]').click({ force: true });
    await page.waitForTimeout(1000);
    await page.locator('[name="space15"]').click({ force: true });
    await page.waitForTimeout(1000);

    await page.locator('[name="space11"]').click({ force: true });
    await page.waitForTimeout(1000);
    await page.locator('[name="space02"]').click({ force: true });
    await page.waitForTimeout(1000);

    await page.locator('[name="space15"]').click({ force: true });
    await page.waitForTimeout(1000);
    await page.locator('[name="space26"]').click({ force: true });
    await page.waitForTimeout(1000);

    await page.locator('[name="space26"]').click({ force: true });
    await page.waitForTimeout(1000);
    await page.locator('[name="space37"]').click({ force: true });
    await page.waitForTimeout(1000);

    // Log success message
    console.log("Moves performed successfully!");
  });
});
/*
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
  });
});

import {test ,expect} from "@playwright/test";
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