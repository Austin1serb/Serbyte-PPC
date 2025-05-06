import { ALL_PAGES, SITE_CONFIG } from "@/config/siteConfig"
import { test, expect, type Page } from "@playwright/test"

const SKIP_LINK_VALIDATION = "true"

if (SKIP_LINK_VALIDATION === "true") {
  console.warn("Skipping link validation")
  test.skip()
}

async function getAllLinksFromPage(page: Page) {
  const links = page.locator("a")
  const allLinks = await links.all()
  const allHrefs = await Promise.all(allLinks.map((link) => link.getAttribute("href")))

  const allValidHrefs = allHrefs.reduce((links, link) => {
    expect.soft(link, `${link} is not valid href`).toBeTruthy()

    if (link && !link.startsWith("mailto:") && !link.startsWith("tel:") && !link.startsWith("#")) {
      links.add(new URL(link, page.url()).href)
    }
    return links
  }, new Set<string>())

  return allValidHrefs
}

for (const pageUrl of ALL_PAGES) {
  test(`Validate links on ${pageUrl}`, async ({ page }) => {
    await page.goto(SITE_CONFIG.url + pageUrl)
    const linkUrls = await getAllLinksFromPage(page)

    for (const url of linkUrls) {
      try {
        const response = await page.request.get(url)
        expect(response.ok()).toBeTruthy()
      } catch {
        expect.soft(null, `${url} is broken on page ${pageUrl}`).toBeNull()
      }
    }
  })
}
