import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "src/tests",
  timeout: 30000,
  use: {
    baseURL: "https://playwright.dev",
    headless: true,
    launchOptions: {
      slowMo: 500,
    },
  },
  projects: [
    {
      name: "edge",
      use: { ...devices["Desktop Edge"] },
    },
  ],
  workers: process.env.CI ? 2 : undefined,
  reporter: [["html", { open: "never" }]],
};
export default config;
