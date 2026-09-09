import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Turkish Airlines Baggage Allowance: Cabin, Checked & the KG/PC Split (2026)",
  description:
    "Turkish Airlines' checked baggage runs on either a weight or a piece system depending on your specific route -- here's how to find out which applies to you, plus cabin bag limits.",
  alternates: {
    canonical: "/guides/turkish-airlines-baggage-allowance",
  },
};

export default function TurkishAirlinesBaggageAllowance() {
  return (
    <GuideArticle
      href="/guides/turkish-airlines-baggage-allowance"
      title="Turkish Airlines baggage allowance, explained" amazonPicks={CARRY_ON_PICKS}
    >
      <p>
        Turkish Airlines&apos; checked baggage allowance isn&apos;t one fixed number — it depends on which of two
        systems your route falls under, and that&apos;s printed on your ticket, not guessable from the fare name
        alone.
      </p>

      <h2>Cabin bag and personal item</h2>
      <p>
        Economy gets one cabin bag up to 55 x 40 x 23 cm and 8 kg. Business gets two bags at the same dimensions, 8
        kg each (16 kg total). Every passenger, regardless of cabin, also gets one personal item up to 40 x 30 x 15
        cm and 4 kg. Check your specific bag against this and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage: KG concept or PC concept</h2>
      <p>
        Turkish Airlines runs two different checked-baggage systems depending on the route: the{" "}
        <strong>KG (weight) concept</strong>, where you get a total kilogram allowance to split across bags, and the{" "}
        <strong>PC (piece) concept</strong>, where you get a set number of bags regardless of combined weight. Which
        one applies to your itinerary is shown on your ticket and booking confirmation — it&apos;s not the same for
        every route, and it can change if your itinerary includes a codeshare or connecting flight.
      </p>
      <p>
        Whichever system applies, no single checked bag can exceed 32 kg or 158 cm in total dimensions (length +
        width + height) — bags over that are refused outright, not just charged extra.
      </p>

      <h2>Excess baggage fees</h2>
      <p>
        Extra-piece, overweight, and oversize fees apply separately and stack if a bag violates more than one limit
        at once. As a rough benchmark, an extra piece weighing 23–32 kg on a piece-concept route has cost around
        $80 (about £59 / €68) — but rates vary meaningfully by route, so check your specific itinerary rather than
        relying on a single number.
      </p>

      <h2>Codeshares change the rules</h2>
      <p>
        If your ticket shows a Turkish Airlines flight number but the flight is operated by a partner airline, the{" "}
        <em>operating</em> airline&apos;s baggage policy applies for that segment — not Turkish Airlines&apos;. On a
        multi-leg itinerary, pack to the strictest limit across every segment, not just the one Turkish Airlines
        itself operates.
      </p>

      <h2>Bottom line</h2>
      <p>
        Don&apos;t assume your checked allowance from a past Turkish Airlines trip still applies — check your
        current booking confirmation for whether your route runs on the KG or PC concept, and check each segment
        separately if you&apos;re connecting through a codeshare partner.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/turkish-airlines-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — Turkish Airlines Baggage Allowance 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.turkishairlines.com" target="_blank" rel="noopener noreferrer nofollow">turkishairlines.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
