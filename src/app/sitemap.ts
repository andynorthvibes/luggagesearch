import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { GUIDES } from "@/lib/guides";

// Guide routes are derived from GUIDES instead of hardcoded here, so a new
// guide is picked up automatically -- a hand-maintained duplicate list had
// already drifted before (verified back in sync 9 September 2026).
const staticRoutes = [
  "",
  "/guides",
  "/tools/carry-on-checker",
  "/tools/packing-list",
  "/glossary",
  "/about",
  "/affiliate-disclosure",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...staticRoutes, ...GUIDES.map((g) => g.href)];
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
