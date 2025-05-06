import { ALL_PAGES, SITE_CONFIG } from "@/config/siteConfig"
import { test, expect, type Page } from "@playwright/test"

async function getAllImagesFromPage(page: Page) {
  const images = page.locator("img")
  const allImages = await images.all()
  const allSrcs = await Promise.all(allImages.map((image) => image.getAttribute("src")))

  const allValidSrcs = allSrcs.reduce((srcs, src) => {
    expect.soft(src, `Image src ${src} is not valid`).toBeTruthy()

    if (src) {
      srcs.add(new URL(src, page.url()).href)
    }
    return srcs
  }, new Set<string>())

  return allValidSrcs
}

test("Validate images", async ({ page }) => {
  for (const pageUrl of ALL_PAGES) {
    await page.goto(SITE_CONFIG.url + pageUrl)
    const imageUrls = await getAllImagesFromPage(page)

    for (const url of imageUrls) {
      try {
        const response = await page.request.get(url)
        expect(response.ok()).toBeTruthy()
      } catch {
        expect.soft(null, `Image ${url} is broken on page ${pageUrl}`).toBeNull()
      }
    }
  }
})
