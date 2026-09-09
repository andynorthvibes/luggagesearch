import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "LOT Polish Airlines Baggage Allowance: The Same Fare Pays Differently by Route",
  description:
    "LOT Polish Airlines' free baggage allowance depends on the specific route, not just the fare booked -- the same Economy Standard ticket can mean one bag or two depending on where you're flying from.",
  alternates: {
    canonical: "/guides/lot-polish-airlines-baggage-allowance",
  },
};

export default function LotPolishAirlinesBaggageAllowance() {
  return (
    <GuideArticle href="/guides/lot-polish-airlines-baggage-allowance" title="LOT Polish Airlines baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        With most airlines, the fare name tells you the whole story. LOT Polish Airlines adds a second variable:
        route. The same Economy Standard fare can include one checked bag on a Europe-to-North-America itinerary
        but two on the same route booked out of Egypt or Lebanon -- the fare class doesn&apos;t change, but the
        allowance does.
      </p>

      <h2>Checked baggage by class and route</h2>
      <p>
        On short-haul flights within Europe and the Middle East, Business gets 2 bags at 32 kg, Economy
        Standard/Flex gets 1 bag at 23 kg, and Economy Saver gets none. On long-haul routes it gets more
        route-dependent: Business rises to 3 bags at 32 kg, Premium Economy typically gets 2 bags at 23 kg, and
        Economy fares range from 1 to 2 bags at 23 kg depending on the specific origin and destination pair.
        Economy Saver stays at zero bags across every route LOT flies.
      </p>

      <h2>Why this matters when booking</h2>
      <p>
        Because the allowance is tied to the route pairing and not a single global rule per fare, the safest
        approach is checking the baggage allowance shown at booking for your exact itinerary rather than assuming
        a figure you remember from a previous LOT flight still applies. Check your carry-on separately against
        LOT and 52 other airlines with our <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Bottom line</h2>
      <p>
        Never assume your LOT baggage allowance from one trip carries over to the next -- verify it per booking,
        especially if Economy Saver is involved, since that tier includes no checked bag on any route.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.lot.com/us/en/help-center/baggage/baggage-allowance-according-to-travel-class" target="_blank" rel="noopener noreferrer nofollow">
            LOT.com — What is the checked baggage allowance?
          </a> Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
