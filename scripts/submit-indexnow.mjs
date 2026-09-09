// Notifies IndexNow (picked up by Bing, and other participating engines) about
// every URL on the site whenever a production build runs on Vercel. Runs as an
// npm "postbuild" hook, so it fires automatically after `next build` -- no
// manual step needed once Bing Webmaster Tools has been set up separately
// (IndexNow submission does not require Bing Webmaster Tools verification,
// but adding the site there too lets Andreas see indexing status directly).
//
// Guarded to only run on Vercel's actual production build (VERCEL_ENV ===
// "production"), never on a local `npm run build` or a preview deploy, so it
// doesn't spam IndexNow every time someone builds locally to sanity-check.
//
// Reads the route list straight out of sitemap.ts and guides.ts as text
// (regex, not a TS import -- this is a plain Node script, no TS compiler
// available at this point in the build) so it can never drift from the
// sitemap itself, the way a hand-maintained duplicate list did before
// (see src/app/sitemap.ts's own comment about that).

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const KEY = "8439778dad20d4cf459d5d8a4bb2fadb";

function extractSiteUrl() {
  const txt = readFileSync(path.join(ROOT, "src/lib/site.ts"), "utf8");
  const m = txt.match(/url:\s*"([^"]+)"/);
  if (!m) throw new Error("Could not find SITE.url in src/lib/site.ts");
  return m[1];
}

function extractStaticRoutes() {
  const txt = readFileSync(path.join(ROOT, "src/app/sitemap.ts"), "utf8");
  const m = txt.match(/const staticRoutes = \[([\s\S]*?)\];/);
  if (!m) throw new Error("Could not find staticRoutes in src/app/sitemap.ts");
  return [...m[1].matchAll(/"([^"]*)"/g)].map((mm) => mm[1]);
}

function extractGuideHrefs() {
  const txt = readFileSync(path.join(ROOT, "src/lib/guides.ts"), "utf8");
  return [...txt.matchAll(/href:\s*"([^"]+)"/g)].map((mm) => mm[1]);
}

async function main() {
  if (process.env.VERCEL_ENV !== "production") {
    console.log("[indexnow] skipping (not a production build on Vercel)");
    return;
  }

  const siteUrl = extractSiteUrl();
  const host = new URL(siteUrl).host;
  const routes = [...extractStaticRoutes(), ...extractGuideHrefs()];
  const urlList = routes.map((r) => `${siteUrl}${r}`);

  console.log(`[indexnow] submitting ${urlList.length} URLs for ${host}`);

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: KEY,
        keyLocation: `${siteUrl}/${KEY}.txt`,
        urlList,
      }),
    });
    console.log(`[indexnow] response: ${res.status} ${res.statusText}`);
  } catch (err) {
    // Never fail the build over this -- it's a best-effort notification, not
    // a required step.
    console.warn("[indexnow] submission failed (non-fatal):", err.message);
  }
}

main();
