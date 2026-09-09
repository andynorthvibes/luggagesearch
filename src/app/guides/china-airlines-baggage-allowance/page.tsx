import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "China Airlines Baggage Allowance: Economy Swings From Zero to Two Bags by Route",
  description:
    "China Airlines' Economy checked baggage ranges from zero to two pieces depending on the specific route and booking class, while Premium Economy and Business stay flat regardless of route.",
  alternates: {
    canonical: "/guides/china-airlines-baggage-allowance",
  },
};

export default function ChinaAirlinesBaggageAllowance() {
  return (
    <GuideArticle href="/guides/china-airlines-baggage-allowance" title="China Airlines baggage allowance">
      <p>
        Premium Economy and Business passengers get a flat, predictable checked baggage allowance on China
        Airlines no matter which route they fly. Economy passengers don&apos;t: the allowance ranges from zero to
        two pieces depending on the specific route and booking class, with trans-Tasman routes among the
        tightest at zero to one piece.
      </p>

      <h2>Checked baggage by class</h2>
      <p>
        Economy: 0-2 pieces at 23 kg each, varying by route and booking class. Premium Economy: 2 pieces at 28 kg
        each, flat across all routes. Business: 2 pieces at 32 kg each, flat across all routes. Every checked bag
        must stay within 158 cm total dimensions, and individual bags over 32 kg require approval at least 48
        hours before departure.
      </p>

      <h2>Status and family benefits</h2>
      <p>
        Dynasty Flyer Gold and Emerald members receive one extra free piece; Paragon members receive two extra
        pieces on international flights. Infants not occupying a seat get one piece plus either a collapsible
        stroller or a car seat, not both.
      </p>

      <h2>Cabin baggage</h2>
      <p>
        Check your specific cabin bag against China Airlines and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link> -- allowances can vary by cabin, so
        confirm the exact limit for your booking class before you pack.
      </p>

      <h2>Bottom line</h2>
      <p>
        Flying Economy on China Airlines, don&apos;t assume your checked baggage allowance from one route carries
        over to another -- verify it for your specific itinerary, especially on trans-Tasman routes where it can
        drop to zero free pieces.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.china-airlines.com/us/en/fly/prepare-for-the-fly/baggage/baggage-rules" target="_blank" rel="noopener noreferrer nofollow">
            China Airlines — Baggage Rules
          </a> Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
