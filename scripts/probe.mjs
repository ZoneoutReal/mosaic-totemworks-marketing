// Quick visual + console-error probe of the marketing site at desktop and mobile.
import { chromium } from 'playwright'

const URL = 'http://localhost:5181/'
const OUT = '/tmp/mosaic-mkt'

const browser = await chromium.launch()

// --- Desktop ---
{
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 2
  })
  const page = await ctx.newPage()
  const errors = []
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  page.on('pageerror', (e) => errors.push(e.message))
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)
  await page.screenshot({ path: `${OUT}-desktop-hero.png`, fullPage: false })
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2))
  await page.waitForTimeout(500)
  await page.screenshot({ path: `${OUT}-desktop-mid.png`, fullPage: false })
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(500)
  await page.screenshot({ path: `${OUT}-desktop-bottom.png`, fullPage: false })
  console.log(JSON.stringify({ viewport: 'desktop', title: await page.title(), errors }, null, 2))
}

// --- Mobile (iPhone 14-ish) ---
{
  const ctx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.2 Mobile/15E148 Safari/604.1'
  })
  const page = await ctx.newPage()
  const errors = []
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
  page.on('pageerror', (e) => errors.push(e.message))
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)
  await page.screenshot({ path: `${OUT}-mobile-hero.png`, fullPage: false })
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 3))
  await page.waitForTimeout(500)
  await page.screenshot({ path: `${OUT}-mobile-solution.png`, fullPage: false })
  await page.evaluate(() => window.scrollTo(0, (2 * document.body.scrollHeight) / 3))
  await page.waitForTimeout(500)
  await page.screenshot({ path: `${OUT}-mobile-roadmap.png`, fullPage: false })
  console.log(JSON.stringify({ viewport: 'mobile', title: await page.title(), errors }, null, 2))
}

await browser.close()
