import { ALL_PAGES } from "@/config/siteConfig"
import { test, expect } from "@playwright/test"

test.describe("Validate metadata", () => {
  for (const pageUrl of ALL_PAGES) {
    test(`should have metadata for ${pageUrl}`, async ({ page }) => {
      await page.goto(pageUrl)

      const title = await page.title()
      const description = await page.evaluate(() => document.querySelector('meta[name="description"]')?.getAttribute("content"))
      const canonical = await page.evaluate(() => document.querySelector('link[rel="canonical"]')?.getAttribute("href"))

      expect(title).toBeDefined()
      expect(description).toBeDefined()
      expect(canonical).toBeDefined()
    })
  }
})
