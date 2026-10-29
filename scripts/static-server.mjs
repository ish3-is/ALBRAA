// Strict local test server: no SPA rewrites. Not part of the deployed site.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve(process.env.STATIC_DIR || 'dist-subpath');
const prefix = process.env.STATIC_PREFIX || '/portfolio-check/';
const port = Number(process.env.PORT || 4174);
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.woff2':'font/woff2','.otf':'font/otf','.ttf':'font/ttf','.txt':'text/plain','.xml':'application/xml'};
createServer(async (req,res) => {
  try {
    const url = new URL(req.url,'http://localhost');
    if (!url.pathname.startsWith(prefix)) { res.writeHead(404); res.end('Not found'); return; }
    let file = resolve(root,decodeURIComponent(url.pathname.slice(prefix.length)) || 'index.html');
    if (file !== root && !file.startsWith(root+sep)) { res.writeHead(403); res.end(); return; }
    if ((await stat(file)).isDirectory()) file=resolve(file,'index.html');
    res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream'}); res.end(await readFile(file));
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(port,'127.0.0.1',()=>console.log(`Strict static server: http://127.0.0.1:${port}${prefix}`));
