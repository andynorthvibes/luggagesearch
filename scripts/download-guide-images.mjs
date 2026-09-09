#!/usr/bin/env node
// Run this ONCE, locally on your own machine (not through Claude's sandboxed
// shell, which has no general internet access): `node scripts/download-guide-images.mjs`
//
// Downloads the Unsplash source photo for every guide -- currently hotlinked
// directly from images.unsplash.com on every page view -- into
// public/images/guides/<slug>.jpg, so the site serves its own copies instead.
// Requires Node 18+ (built-in fetch).
//
// After running this, rebuild and push as usual -- src/lib/guides.ts already
// points at these local paths.

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "images", "guides");

// slug -> Unsplash photo id. 1920px wide covers both the guide-card thumbnail
// and the wider guide-page hero banner (previously served at 1000px/1800px
// via Unsplash's own resize params) -- Next/Image resizes down from this
// single local source as needed.
const PHOTOS = {
  "best-carry-on-luggage": "1670888616036-ed6e723c07e6",
  "best-checked-luggage": "1670888664952-efff442ec0d2",
  "samsonite-vs-delsey": "1670888616427-764112453941",
  "ryanair-baggage-rules": "1673505379276-fd25416b6e55",
  "southwest-baggage-policy": "1702411739431-0b6874405792",
  "best-lightweight-carry-on-luggage": "1673505705824-e6abaa279c97",
  "avoid-checked-baggage-fees": "1762965119363-af950b523dca",
  "lufthansa-baggage-rules": "1706967930742-9d6c5238e7e4",
  "emirates-baggage-rules": "1591632175697-f07e2d75dacb",
  "carry-on-vs-personal-item": "1504150558240-0b4fd8946624",
  "best-luggage-for-business-travel": "1574202141112-c3a90e1a3ce2",
  "british-airways-baggage-allowance": "1698584109673-12d97bc70d08",
  "what-not-to-pack-in-carry-on": "1673505705715-8deb093d39e8",
  "best-luggage-for-family-travel": "1673505705677-93516a00ca06",
  "wizz-air-baggage-rules": "1602191595949-1b1e5fb5634a",
  "qantas-baggage-allowance": "1503365194569-df4e1d04cec1",
  "turkish-airlines-baggage-allowance": "1527007622069-3a0241e1cd8c",
  "icelandair-baggage-allowance": "1530521954074-e64f6810b32d",
  "delta-baggage-allowance": "1572358707000-39729872feba",
  "united-airlines-baggage-allowance": "1714235058886-a0b38ad5066c",
  "air-canada-baggage-allowance": "1714235058817-af16a662fe1d",
  "singapore-airlines-baggage-allowance": "1564209906116-fb6887675069",
  "easyjet-baggage-allowance": "1569512850669-7baa648e82d8",
  "american-airlines-baggage-allowance": "1603792835233-f4f7c2497d4f",
  "jetblue-baggage-allowance": "1663030083159-5a58ca80c4ef",
  "alaska-airlines-baggage-allowance": "1773228972271-41d02886869b",
  "air-france-baggage-allowance": "1708403120467-1715bb6840df",
  "sas-baggage-allowance": "1549894595-4698795b38ee",
  "swiss-baggage-allowance": "1654686473683-79cef3d57db6",
  "finnair-baggage-allowance": "1558413203-528a11565bf4",
  "klm-baggage-allowance": "1629308993023-bb7ca078abdc",
  "qatar-airways-baggage-allowance": "1581553680321-4fffae59fccd",
  "etihad-airways-baggage-allowance": "1568571959361-3bffbad07499",
  "cathay-pacific-baggage-allowance": "1670888616597-53457e54b61b",
  "norwegian-baggage-allowance": "1632165061207-81a8a3baee47",
  "aer-lingus-baggage-allowance": "1502301197179-65228ab57f78",
  "japan-airlines-baggage-allowance": "1531938716357-224c16b5ace3",
  "ana-baggage-allowance": "1525103504173-8dc1582c7430",
  "jet2-baggage-allowance": "1448582649076-3981753123b5",
  "westjet-baggage-allowance": "1532968899863-5b52ef155913",
  "tap-air-portugal-baggage-allowance": "1660082120861-952dc7ad9652",
  "iberia-baggage-allowance": "1636491059289-faf59c5b3e56",
  "korean-air-baggage-allowance": "1623011096060-2cfeab2928d1",
  "thai-airways-baggage-allowance": "1588525720553-b98866715961",
  "air-india-baggage-allowance": "1768668054692-41fa548a9f5e",
  "air-new-zealand-baggage-allowance": "1494274782939-268883e8903f",
  "virgin-australia-baggage-allowance": "1563820510191-3b4a20c78568",
  "austrian-airlines-baggage-allowance": "1782804176647-b726116b6839",
  "brussels-airlines-baggage-allowance": "1653795163859-9ee39ecc6d62",
  "ita-airways-baggage-allowance": "1762883691346-0bf3da20c4b7",
  "lot-polish-airlines-baggage-allowance": "1635343167210-637ee0a60acc",
  "aegean-airlines-baggage-allowance": "1515622472995-1a06094d2224",
  "vueling-baggage-allowance": "1642979876496-7fd6bce1c80b",
  "eurowings-baggage-allowance": "1700223797363-eac22c5a10ed",
  "eva-air-baggage-allowance": "1680781349533-318a712fa41f",
  "transavia-baggage-allowance": "1639597784674-431b34cec7a8",
  "airbaltic-baggage-allowance": "1714235058849-a9fe1088b16d",
  "pegasus-airlines-baggage-allowance": "1774560745344-78667b3594a7",
  "wideroe-baggage-allowance": "1781514041306-489a8d346265",
  "norse-atlantic-airways-baggage-allowance": "1763569799665-485826a970f6",
  "china-airlines-baggage-allowance": "1776018276499-3140bd1582aa",
  "jetstar-baggage-allowance": "1728939862876-1c7e36d9cdfa",
};

const WIDTH = 1920;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  let ok = 0;
  const failed = [];

  for (const [slug, photoId] of Object.entries(PHOTOS)) {
    const url = `https://images.unsplash.com/photo-${photoId}?q=80&w=${WIDTH}&auto=format&fit=crop`;
    const dest = path.join(OUT_DIR, `${slug}.jpg`);
    process.stdout.write(`Downloading ${slug}... `);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(dest, buf);
      console.log(`ok (${(buf.length / 1024).toFixed(0)} KB)`);
      ok++;
    } catch (err) {
      console.log(`FAILED: ${err instanceof Error ? err.message : err}`);
      failed.push(slug);
    }
  }

  console.log(`\n${ok}/${Object.keys(PHOTOS).length} images downloaded to ${OUT_DIR}`);
  if (failed.length) {
    console.log(`Failed: ${failed.join(", ")}`);
    process.exitCode = 1;
  }
}

main();
