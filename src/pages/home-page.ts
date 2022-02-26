import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  private readonly getStartedButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedButtonLocator = page.locator("text=Get started");
  }

  async clickGetStartedButton() {
    await this.getStartedButtonLocator.waitFor();
    await this.getStartedButtonLocator.click({ force: true });
  }
}
