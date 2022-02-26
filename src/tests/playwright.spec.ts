import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home-page";

let homePage: HomePage;

test.beforeEach(async ({ page }, testInfo) => {
  homePage = new HomePage(page);
  await page.goto("/");
  console.log(`Scenario: "${testInfo.title}" started`);
});

test.describe("Introduction page", () => {
  test("should start with getting started", async ({ page }) => {
    await homePage.clickGetStartedButton();
    expect.soft(page.url()).toContain("/docs/intro");
    expect.soft(await page.title()).toContain("Getting started");
  });
});

test.afterEach(async ({ page }, testInfo) => {
  await page.close();
  console.log(`Scenario finished. Status: ${testInfo.status.toUpperCase()}`);
});
