import { Resvg } from '@resvg/resvg-js';
import { writeFile, mkdir, copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const navy = '#07111F', cyan = '#46D9E8', ivory = '#F5F7FA', gray = '#9EADBD';
const monogram = `<g fill="none" stroke="currentColor" stroke-width="17" stroke-linejoin="miter"><path d="M64 256V64H159C209 64 209 151 159 151H101M101 151H164C225 151 225 256 164 256H64"/><path d="M181 256L242 64L300 256M204 188H278"/></g>`;
const svg = (w,h,content) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${content}</svg>`;
const fontFiles = ['public/fonts/Camel-ExtraBold.otf','public/fonts/Camel-ExtraLight.otf'].map(p => resolve(p));
fontFiles.push(resolve('public/fonts/Manrope-Variable.ttf'));
const options = { font: { loadSystemFonts: false, fontFiles, defaultFontFamily: 'Manrope' }, textRendering: 2 };
async function output(path, source, size) {
  await mkdir(path.slice(0,path.lastIndexOf('/')), { recursive:true });
  const r = new Resvg(source, { ...options, ...(size ? {fitTo:{mode:'width',value:size}} : {}) });
  await writeFile(path + '.png',r.render().asPng());
  // Outline all text for a portable, editable vector that does not need installed fonts.
  await writeFile(path + '.svg',r.toString());
}
for (const [theme,bg,fg] of [['dark',navy,cyan],['light',ivory,navy]]) {
  const source = svg(1024,1024,`<rect width="1024" height="1024" fill="${bg}"/><g transform="translate(128 128) scale(2.35)" color="${fg}">${monogram}</g>`);
  await output(`brand-assets/linkedin-avatar/avatar-${theme}-1024`,source);
  await output(`brand-assets/linkedin-avatar/avatar-${theme}-512`,source,512);
}
const banner = svg(1584,396,`<rect width="1584" height="396" fill="${navy}"/><g fill="none" stroke="#28394C"><ellipse cx="390" cy="174" rx="200" ry="260" transform="rotate(-25 390 174)"/><ellipse cx="390" cy="174" rx="270" ry="130" transform="rotate(-25 390 174)"/></g><g transform="translate(288 50) scale(.7)" color="${cyan}">${monogram}</g><circle cx="280" cy="45" r="4" fill="${cyan}"/><rect x="720" y="76" width="4" height="242" fill="${cyan}"/><text x="1490" y="125" text-anchor="end" font-family="The Year of The Camel" font-weight="800" font-size="49" fill="${ivory}">البراء ياسر العسيري</text><text x="1490" y="178" text-anchor="end" font-family="Manrope" font-weight="500" font-size="32" fill="${ivory}">Albaraa Yasir Alassiri</text><text x="1490" y="236" text-anchor="end" font-family="The Year of The Camel" font-weight="200" font-size="27" fill="${cyan}">طالب أمن سيبراني · جامعة الملك خالد</text><text x="1490" y="278" text-anchor="end" font-family="Manrope" font-size="18" fill="${gray}">Cybersecurity Student · King Khalid University</text><text x="1490" y="335" text-anchor="end" font-family="Manrope" font-size="13" letter-spacing="3" fill="${gray}">LEARNING TODAY. SECURING TOMORROW.</text>`);
await output('brand-assets/linkedin-banner/linkedin-banner-1584x396',banner);
const og = svg(1200,630,`<rect width="1200" height="630" fill="${navy}"/><g transform="translate(55 143) scale(1)" color="${cyan}">${monogram}</g><text x="1115" y="233" text-anchor="end" font-family="The Year of The Camel" font-weight="800" font-size="58" fill="${ivory}">البراء ياسر العسيري</text><text x="1115" y="306" text-anchor="end" font-family="Manrope" font-weight="600" font-size="39" fill="${ivory}">Albaraa Yasir Alassiri</text><text x="1115" y="380" text-anchor="end" font-family="The Year of The Camel" font-weight="200" font-size="29" fill="${cyan}">طالب أمن سيبراني · جامعة الملك خالد</text><text x="1115" y="432" text-anchor="end" font-family="Manrope" font-size="22" fill="${gray}">Cybersecurity Student · King Khalid University</text><text x="1115" y="555" text-anchor="end" font-family="Manrope" font-size="15" letter-spacing="3" fill="${gray}">A CONTINUOUS PATH.</text>`);
await output('public/brand/og',og);
await writeFile('public/brand/monogram.svg',svg(320,320,`<g color="${cyan}">${monogram}</g>`));
await writeFile('public/brand/favicon.svg',svg(64,64,`<rect width="64" height="64" fill="${navy}" rx="12"/><g transform="translate(2 2) scale(.18)" color="${cyan}">${monogram}</g>`));
await copyFile('public/brand/monogram.svg','brand-assets/monogram.svg');
await writeFile('brand-assets/brand-guidelines/palette.json',JSON.stringify({ navy, cyan, ivory, secondary:gray, surface:'#0B1729', raised:'#142337' },null,2));
console.log('Brand exports complete: exact PNG dimensions and outlined SVG files.');
