import { readFile, writeFile, copyFile } from 'node:fs/promises';
import { loadEnv } from 'vite';
const env = { ...loadEnv('production', process.cwd(), ''), ...process.env };
const output = process.env.BUILD_OUT_DIR || 'dist';
let html = await readFile(`${output}/index.html`, 'utf8');
const out = process.env.BUILD_OUT_DIR || 'dist';
const configured = env.VITE_SITE_URL?.trim();
if (configured) {
  const url = new URL(configured);
  if (url.protocol !== 'https:') throw new Error('VITE_SITE_URL must be an absolute HTTPS URL.');
  if (!url.pathname.endsWith('/')) url.pathname += '/';
  url.search = ''; url.hash = '';
  const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  const tag = `<link rel="canonical" href="${escape(url.href)}" />\n<meta property="og:url" content="${escape(url.href)}" />\n<meta property="og:image" content="${escape(new URL('brand/og.png', url).href)}" />\n<meta name="twitter:image" content="${escape(new URL('brand/og.png', url).href)}" />\n<link rel="alternate" hreflang="ar" href="${escape(url.href)}?lang=ar" />\n<link rel="alternate" hreflang="en" href="${escape(url.href)}?lang=en" />\n<link rel="alternate" hreflang="x-default" href="${escape(url.href)}" />`;
  html = html.replace('</head>', tag + '\n</head>');
  await writeFile(`${out}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(url.href)}</loc></url></urlset>`);
  await writeFile(`${out}/robots.txt`, `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', url).href}\n`);
  if (env.VITE_CUSTOM_DOMAIN) {
    if (env.VITE_CUSTOM_DOMAIN !== url.hostname) throw new Error('Custom domain must match VITE_SITE_URL hostname.');
    await writeFile(`${out}/CNAME`, url.hostname + '\n');
  }
} else {
  await writeFile(`${out}/robots.txt`, 'User-agent: *\nAllow: /\n');
}
await writeFile(`${out}/index.html`, html);
await copyFile(`${out}/index.html`, `${out}/404.html`);
await writeFile(`${out}/.nojekyll`, '');
console.log('Static output prepared. Canonical and sitemap: ' + (configured ? 'configured' : 'omitted until a real URL is supplied'));
