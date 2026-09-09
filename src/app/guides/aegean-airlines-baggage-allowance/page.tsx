import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Aegean Airlines Baggage Allowance: Cabin Bag Size Depends on the Plane, Not the Fare",
  description:
    "Aegean Airlines sets cabin bag dimensions by aircraft type, not fare class -- Airbus jets allow a larger bag than the turboprops on regional routes.",
  alternates: {
    canonical: "/guides/aegean-airlines-baggage-allowance",
  },
};

export default function AegeanAirlinesBaggageAllowance() {
  return (
    <GuideArticle href="/guides/aegean-airlines-baggage-allowance" title="Aegean Airlines baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Most airlines size the cabin bag around the fare you booked. Aegean Airlines sizes it around the plane
        instead: a cabin bag can be up to 56 x 45 x 25 cm on the airline&apos;s Airbus jets, but shrinks to 55 x
        40 x 23 cm on the turboprops that fly many of Greece&apos;s island and regional routes -- the same ticket
        type, a different bag limit, depending on equipment.
      </p>

      <h2>Cabin bag by aircraft</h2>
      <p>
        Aegean&apos;s published cabin baggage rule is dimension-based rather than weight-based, and it varies by
        fare family (Light, Flex, Family, Comfort Flex, Business) on top of the aircraft split. A personal item
        such as a handbag or thin laptop case is allowed in addition. Check your bag against Aegean and 52 other
        airlines with our <Link href="/tools/carry-on-checker">carry-on checker</Link> -- and note which aircraft
        you&apos;re booked on if your route could be flown by either type.
      </p>

      <h2>What happens if your bag doesn&apos;t fit</h2>
      <p>
        On the Economy Light fare, if cabin storage fills up before boarding finishes, Aegean checks the
        remaining carry-ons to your final destination for free and issues a baggage receipt -- a softer landing
        than being asked to pay a gate fee.
      </p>

      <h2>Checked baggage</h2>
      <p>
        Checked bags top out at 158 cm total dimensions and 32 kg. How many free pieces you get depends on your
        fare family and Miles+Bonus tier status, with Gold members and Star Alliance Gold status entitled to
        additional bags on top of the standard allowance.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you&apos;re flying a regional Greek route, check whether it&apos;s operated by an Airbus or a
        turboprop before packing to the larger dimension limit -- the difference is enough to matter for a bag
        that&apos;s already close to the edge.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://en.aegeanair.com/travel-info/travelling-with-aegean/baggage/baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            Aegean Airlines — Baggage allowance
          </a> Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
