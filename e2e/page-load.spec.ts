import { ALL_PAGES } from "@/config/siteConfig"
import { test, expect } from "@playwright/test"

test.describe("Page load tests", () => {
  for (const pageUrl of ALL_PAGES) {
    test(`should load ${pageUrl} page correctly`, async ({ page }) => {
      // Navigate to the page
      const response = await page.goto(pageUrl)

      // Verify the page loaded with 200 status
      expect(response?.status()).toBe(200)

      // Wait for the page to be fully loaded
      await page.waitForLoadState("domcontentloaded")

      // Check that the page has content - minimum validation
      const body = page.locator("body")
      await expect(body).toBeVisible()
    })
  }
})
