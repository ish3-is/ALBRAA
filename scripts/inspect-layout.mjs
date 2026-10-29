import { chromium } from '@playwright/test';
const browser = await chromium.launch({channel:'msedge'});
const page = await browser.newPage();
for (const width of [768,1024]) {
 await page.setViewportSize({width,height:900}); await page.goto('http://127.0.0.1:4173/?lang=ar'); await page.evaluate(()=>document.fonts.ready);
 console.log(width, await page.evaluate(()=>[...document.querySelectorAll('body *')].filter(e=>{const b=e.getBoundingClientRect();return b.width && (b.right>innerWidth+1 || b.left< -1)}).map(e=>({tag:e.tagName,cls:e.className,left:e.getBoundingClientRect().left,right:e.getBoundingClientRect().right})).slice(0,25)));
}
await page.locator('.certificate-preview').first().click();
for(let i=0;i<15;i++){await page.keyboard.press('Tab');console.log('focus',await page.evaluate(()=>({tag:document.activeElement.tagName,cls:document.activeElement.className})));}
await browser.close();
