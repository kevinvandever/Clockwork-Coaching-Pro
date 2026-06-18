// Post-build prerender: renders the built SPA in a headless browser and writes
// the resulting HTML to disk so crawlers, link unfurlers, and non-JS fetchers
// see the full page content. Runs after `vite build`.
import http from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist', 'public');

// Routes to prerender (must match the app's wouter routes).
const ROUTES = ['/', '/booking'];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

// Minimal static file server with SPA fallback to the original index.html.
function startServer() {
  const shellPath = path.join(DIST, 'index.html');
  const server = http.createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
      const ext = path.extname(urlPath);
      if (ext) {
        const filePath = path.join(DIST, urlPath);
        if (existsSync(filePath)) {
          const body = await readFile(filePath);
          res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
          res.end(body);
          return;
        }
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      // No extension -> SPA route: serve the shell so the app boots client-side.
      const shell = await readFile(shellPath);
      res.writeHead(200, { 'Content-Type': MIME['.html'] });
      res.end(shell);
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function main() {
  if (!existsSync(path.join(DIST, 'index.html'))) {
    throw new Error(`Build output not found at ${DIST}. Run "vite build" first.`);
  }

  const server = await startServer();
  const { port } = server.address();
  const origin = `http://127.0.0.1:${port}`;

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
  } catch (err) {
    // Non-fatal: if no browser is available (e.g. CI without Chromium), skip
    // prerendering and ship the normal SPA shell so the deploy still succeeds.
    server.close();
    console.warn(
      '\n⚠️  Prerender skipped: could not launch a browser.\n' +
        '   The site will deploy WITHOUT prerendered HTML (SEO/crawler content).\n' +
        '   To enable prerendering, ensure Chrome is installed: npx puppeteer browsers install chrome\n' +
        `   Reason: ${err.message}\n`
    );
    return;
  }

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.goto(`${origin}${route}`, { waitUntil: 'networkidle0', timeout: 45000 });
      // Ensure the app has mounted real content into #root.
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          return root && root.innerText.trim().length > 200;
        },
        { timeout: 45000 }
      );

      const html = '<!DOCTYPE html>\n' + (await page.evaluate(() => document.documentElement.outerHTML));
      await page.close();

      const outPath =
        route === '/'
          ? path.join(DIST, 'index.html')
          : path.join(DIST, route.replace(/^\//, '') + '.html');
      await mkdir(path.dirname(outPath), { recursive: true });
      await writeFile(outPath, html, 'utf-8');

      const bodyLen = html.length;
      console.log(`prerendered ${route} -> ${path.relative(DIST, outPath)} (${bodyLen} bytes)`);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
