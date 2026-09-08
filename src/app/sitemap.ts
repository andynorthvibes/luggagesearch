import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const routes = [
  "",
  "/guides",
  "/guides/best-carry-on-luggage",
  "/guides/best-checked-luggage",
  "/guides/samsonite-vs-delsey",
  "/guides/ryanair-baggage-rules",
  "/guides/southwest-baggage-policy",
  "/guides/best-lightweight-carry-on-luggage",
  "/guides/avoid-checked-baggage-fees",
  "/guides/lufthansa-baggage-rules",
  "/guides/emirates-baggage-rules",
  "/guides/carry-on-vs-personal-item",
  "/guides/best-luggage-for-business-travel",
  "/tools/carry-on-checker",
  "/tools/packing-list",
  "/glossary",
  "/about",
  "/affiliate-disclosure",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
