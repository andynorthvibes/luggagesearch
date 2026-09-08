# LuggageSearch.com

Innholdsdrevet nettsted om koffert, bagasje og reiseutstyr. Engelskspråklig, global målgruppe. Inntektsmodell: Google AdSense + affiliate (Amazon Associates m.fl.).

Se prosjektplanen i Claude-prosjektet "LuggageSearch.com" for full bakgrunn, strategi og byggerekkefølge.

## Kom i gang lokalt

```bash
npm install
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000).

## Stack

Next.js 15 (App Router) + TypeScript + Tailwind CSS, deploy på Vercel.

## Design ("Boarding")

Fete, flate fargeblokker med tykke konturer og harde skygger. Tokens ligger i `tailwind.config.ts`:
`cream` (bakgrunn), `ink` (tekst/konturer), `sun` (gul), `sky` (koboltblå), `coral` (oransje-rød).
Skrift: Bricolage Grotesque (`font-display`) + Hanken Grotesk (`font-sans`), lastet via `next/font/google`.
Gjenbrukbare byggeklosser: `PageIntro`, `GuideCard`, `GuideArticle`, `MobileNav`, ikoner i `components/icons.tsx`.
Bilder hentes fra Unsplash (fri lisens) og listes i `lib/guides.ts`.

## Status (Fase 1 — Fundament)

- [x] Prosjektoppsett og sidestruktur
- [x] 3 pilotguider (best carry-on, best checked luggage, Samsonite vs Delsey)
- [x] To verktøy: bagasjesjekk (airline carry-on checker) og pakkeliste-generator
- [x] SEO-basics: sitemap.ts, robots.ts, metadata, JSON-LD
- [ ] AdSense-søknad
- [ ] Amazon Associates-integrasjon (Fase 2)
- [ ] Kobling mot bynavn.no sitt bydatasett (Fase 3)

**Merk:** Prosjektplanen (v1) skisserte norske URL-slugs (/guider/, /verktoy/, /reisemal/) etter samme mønster som bynavn.no. Siden målgruppen er global og engelskspråklig, er de faktiske URL-ene her på engelsk i stedet (/guides/, /tools/) — bedre for SEO på et engelsk nøkkelordsmarked. Si fra hvis du heller vil ha norske slugs.
