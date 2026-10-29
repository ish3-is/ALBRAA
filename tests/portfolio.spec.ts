import { test, expect } from '@playwright/test';
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:4173/';

test('Arabic default, URL language, persistence, and genuine English content', async ({ page }) => {
  await page.goto(base);
  await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.locator('h1')).toContainText('البراء ياسر');
  await page.getByRole('button', { name: 'Switch to English' }).click();
  await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
  await expect(page.locator('h1')).toContainText('Albaraa Yasir');
  await expect(page.locator('#madar-heading')).toContainText('MaDar');
  await expect(page.locator('.madar-membership a')).toHaveAttribute('href', 'https://ish3-is.github.io/MDR/');
  await expect(page.locator('.madar-membership')).toContainText('Cybersecurity Department');
  await expect(page.locator('.practice-grid article')).toHaveCount(2);
  await expect(page.locator('.practice-grid article').first().locator('a').first()).toHaveAttribute('href', 'https://ish3-is.github.io/incident-console/');
  await expect(page.locator('.practice-grid article').last().locator('a').first()).toHaveAttribute('href', 'https://ish3-is.github.io/caseframe-7712/');
  await expect(page).toHaveTitle(/Albaraa Yasir Alassiri/);
  await expect(page).toHaveURL(/lang=en/);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.goto(base);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.goto(base + '?lang=ar');
  await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
});

test('five real documents, filters, modal keyboard focus, zoom, navigation, and originals', async ({ page }) => {
  await page.goto(base + '?lang=en');
  await expect(page.locator('.certificate-card')).toHaveCount(5);
  await page.getByRole('button', { name: 'English', exact: true }).click();
  await expect(page.locator('.certificate-card')).toHaveCount(2);
  await page.getByRole('button', { name: 'All', exact: true }).click();
  const trigger = page.locator('.certificate-preview').first();
  await trigger.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('h2')).toContainText('Threats');
  await page.getByRole('button', { name: 'Zoom in', exact: true }).click();
  await expect(dialog.locator('output')).toHaveText('125%');
  await page.getByRole('button', { name: 'Next certificate', exact: true }).click();
  await expect(dialog.locator('h2')).toContainText('Patents');
  await expect(dialog.locator('output')).toHaveText('100%');
  await page.keyboard.press('ArrowLeft');
  await expect(dialog.locator('h2')).toContainText('Threats');
  const href = await dialog.getByRole('link', { name: 'Original image' }).getAttribute('href');
  expect(href).toContain('certificates/originals/cyber-threats.jpg');
  expect((await page.request.get(new URL(href!,base).href)).status()).toBe(200);
  // Native dialog keeps keyboard focus within the protected document task.
  for (let i=0;i<13;i++) { await page.keyboard.press('Tab'); expect(await page.evaluate(() => !!document.activeElement?.closest('dialog'))).toBe(true); }
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

for (const width of [375,390,768,1024,1440,1920]) {
  for (const lang of ['ar','en']) test(`layout ${width}px ${lang}, all assets and navigation`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
    await page.setViewportSize({width,height:900});
    await page.goto(base + `?lang=${lang}`);
    await page.evaluate(async () => { await document.fonts.ready; document.querySelectorAll('img').forEach(i => i.loading='eager'); await Promise.all([...document.images].map(i => i.decode())); });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const bad = await page.locator('img').evaluateAll(images => images.filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src));
    expect(bad).toEqual([]);
    const headingWeight = await page.locator('h1>span').first().evaluate(el => getComputedStyle(el).fontWeight);
    if (lang === 'ar') expect(headingWeight).toBe('800');
    expect(await page.evaluate(() => document.fonts.check('800 24px Camel'))).toBe(true);
    if (width < 600) {
      const toggle = page.locator('#menu-toggle'); await toggle.click();
      await expect(toggle).toHaveAttribute('aria-expanded','true');
      await page.locator('#main-nav a[href="#learning"]').click();
      await expect(toggle).toHaveAttribute('aria-expanded','false');
    } else await page.locator('#main-nav a[href="#learning"]').click();
    await expect(page).toHaveURL(/#learning/);
    expect(errors).toEqual([]);
    if (width === 390 || width === 1440) { await page.goto(base+`?lang=${lang}`); await page.evaluate(() => document.fonts.ready); await page.waitForFunction(() => ![...document.querySelectorAll<SVGElement>('.hero-emblem .mark-path')].some(el => el.style.strokeDasharray)); await page.screenshot({path:`qa/final-${width}-${lang}.png`,fullPage:true}); }
  });
}

test('reduced motion, truthful contact state and static fallback', async ({ page, request }) => {
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.goto(base+'?lang=en');
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
  await expect(page.locator('.social-links')).toHaveCount(0);
  await expect(page.locator('#contact')).toContainText('when available');
  expect((await request.get(base+'404.html')).status()).toBe(200);
  expect((await request.get(base+'brand/og.png')).status()).toBe(200);
  expect((await request.get(base+'brand/favicon.svg')).status()).toBe(200);
});
