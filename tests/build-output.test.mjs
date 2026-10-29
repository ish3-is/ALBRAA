import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
const script = resolve('scripts/postbuild.mjs');
for (const mode of ['unknown','subpath','custom']) test(`static metadata: ${mode}`,async()=>{
  const directory=await mkdtemp(join(tmpdir(),'albaraa-build-check-'));
  try {
    await mkdir(join(directory,'dist'));
    await writeFile(join(directory,'dist/index.html'),'<html><head></head><body>Static fixture</body></html>');
    const site = mode==='custom' ? 'https://portfolio.example/' : mode==='subpath' ? 'https://example.invalid/portfolio-check/' : '';
    const result=spawnSync(process.execPath,[script],{cwd:directory,env:{...process.env,VITE_SITE_URL:site,VITE_CUSTOM_DOMAIN:mode==='custom'?'portfolio.example':''},encoding:'utf8'});
    assert.equal(result.status,0,result.stderr);
    const html=await readFile(join(directory,'dist/index.html'),'utf8');
    const fallback=await readFile(join(directory,'dist/404.html'),'utf8');
    assert.equal(html,fallback);
    assert.equal(html.includes('rel="canonical"'),mode!=='unknown');
    const robots=await readFile(join(directory,'dist/robots.txt'),'utf8');
    if(site){assert(html.includes(site+'brand/og.png'));assert(robots.includes(site+'sitemap.xml'));assert((await readFile(join(directory,'dist/sitemap.xml'),'utf8')).includes(site));}
    else assert(!robots.includes('Sitemap:'));
    if(mode==='custom') assert.equal((await readFile(join(directory,'dist/CNAME'),'utf8')).trim(),'portfolio.example');
  } finally { await rm(directory,{recursive:true,force:true}); }
});
