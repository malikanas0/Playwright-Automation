import { Page, expect } from "@playwright/test";

export class CheckersPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to the Checkers game
  async navigate() {
    await this.page.goto("https://www.gamesforthebrain.com/game/checkers/");
  }

  // Perform a move and assert the state
  async movePiece(from: string, to: string, expectedSrc: string) {
    await this.page.locator(`[name="space${from}"]`).click();
    await this.page.locator(`[name="space${to}"]`).click();
    await expect(this.page.locator(`[name="space${to}"]`)).toHaveAttribute("src", expectedSrc);
  }
}
