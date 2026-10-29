async page => {
  await page.setViewportSize({width:1440,height:1000});
  await page.goto('http://127.0.0.1:4173/?lang=ar');
  await page.evaluate(()=>document.fonts.ready);
  await page.waitForFunction(()=>![...document.querySelectorAll('.hero-emblem .mark-path')].some(el=>el.style.strokeDasharray));
  await page.screenshot({path:'qa/hero-final-ar.png'});
  await page.locator('#learning').scrollIntoViewIfNeeded();
  await page.locator('.certificate-preview').first().evaluate(el=>el.scrollIntoView({block:'center',behavior:'instant'}));
  await page.waitForFunction(()=>[...document.images].filter(i=>i.loading!=='lazy').every(i=>i.complete));
  await page.waitForFunction(()=>!document.querySelector('.certificate-preview').style.clipPath);
  await page.screenshot({path:'qa/gallery-final-ar.png'});
  await page.locator('.certificate-preview').first().click();
  await page.waitForFunction(()=>getComputedStyle(document.querySelector('dialog')).opacity==='1');
  await page.screenshot({path:'qa/lightbox-final-ar.png'});
  await page.keyboard.press('Escape');
  await page.locator('dialog').waitFor({state:'hidden'});
  await page.locator('#community').evaluate(el=>el.scrollIntoView({block:'start',behavior:'instant'}));
  await page.locator('.madar-membership img').evaluate(img=>img.decode());
  await page.screenshot({path:'qa/community-final-ar.png'});
  await page.locator('#practice').evaluate(el=>el.scrollIntoView({block:'start',behavior:'instant'}));
  await page.screenshot({path:'qa/practice-final-ar.png'});
  await page.goto('http://127.0.0.1:4173/?lang=en');
  await page.waitForFunction(()=>![...document.querySelectorAll('.hero-emblem .mark-path')].some(el=>el.style.strokeDasharray));
  await page.screenshot({path:'qa/hero-final-en.png'});
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:'qa/hero-final-mobile-en.png'});
}
