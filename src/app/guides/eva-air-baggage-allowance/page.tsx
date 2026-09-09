import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "EVA Air Baggage Allowance: A Different Rule on the US-Taiwan Route",
  description:
    "EVA Air's checked baggage switches from a single weight-based bag to a two-piece allowance specifically on US-Taiwan routes, while the 7kg cabin bag limit is enforced everywhere.",
  alternates: {
    canonical: "/guides/eva-air-baggage-allowance",
  },
};

export default function EvaAirBaggageAllowance() {
  return (
    <GuideArticle href="/guides/eva-air-baggage-allowance" title="EVA Air baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        EVA Air runs two different checked baggage systems depending on where you&apos;re flying. Most
        international routes use the weight-based standard: one complimentary checked bag up to 23 kg and 158 cm
        total dimensions. Fly specifically between the US and Taiwan, though, and the rule flips to a
        piece-based allowance -- two bags at 23 kg each, rather than one.
      </p>

      <h2>Cabin baggage</h2>
      <p>
        The cabin bag limit is 56 x 36 x 23 cm and 7 kg, and EVA Air actively weighs and measures bags at check-in
        and the gate -- a tighter enforcement than some carriers apply in practice. A personal item such as a
        handbag or laptop bag is allowed at no charge in addition. Check your bag against EVA Air and 52 other
        airlines with our <Link href="/tools/carry-on-checker">carry-on checker</Link> before you fly.
      </p>

      <h2>Checked baggage by route</h2>
      <p>
        Standard international routes: 1 bag, up to 23 kg, weight-based. US-Taiwan routes: 2 bags, up to 23 kg
        each, piece-based. The cheapest fares -- often branded Light, Basic or Saver -- can exclude free checked
        baggage entirely regardless of route, so it&apos;s worth confirming what&apos;s actually included on your
        specific ticket rather than assuming the route-based rule above applies automatically.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you&apos;re connecting through a US-Taiwan segment as part of a longer itinerary, don&apos;t assume the
        standard single-bag rule -- the two-piece allowance on that specific leg can mean more free baggage than
        the rest of your trip.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://travellote.com/baggage/evaair/" target="_blank" rel="noopener noreferrer nofollow">
            Travel Lote — EVA Air Baggage Allowance 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.evaair.com" target="_blank" rel="noopener noreferrer nofollow">evaair.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
