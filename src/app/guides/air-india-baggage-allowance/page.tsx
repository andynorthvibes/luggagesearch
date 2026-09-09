import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Air India: One of the Tightest Limits We Track",
  description:
    "Air India's Economy cabin bag caps out at just 8kg -- tighter than most full-service carriers -- and domestic vs international run different baggage systems.",
  alternates: {
    canonical: "/guides/air-india-baggage-allowance",
  },
};

export default function AirIndiaBaggageAllowance() {
  return (
    <GuideArticle href="/guides/air-india-baggage-allowance" title="Air India baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Most full-service carriers cap Economy cabin bags at 7-10 kg. Air India sits at the tight end of that
        range: 8 kg, with bags over 10 kg checked into the hold rather than allowed onboard. Business and First
        get more room at 12 kg. Pack your carry-on with this lower number in mind rather than the 10 kg many
        other airlines allow.
      </p>

      <h2>Cabin bag</h2>
      <p>
        The standard cabin bag limit is 55 x 35 x 25 cm at 8 kg in Economy, 12 kg in Business/First. Alliance Air,
        Air India&apos;s regional subsidiary, uses a smaller 40 x 30 x 15 cm limit on its own flights. Check your
        bag against Air India and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Two different checked baggage systems</h2>
      <p>
        Air India&apos;s checked baggage splits sharply by route type. On flights to the USA, it uses a
        piece-based system: 2 bags at 23 kg each in Economy, 2 bags at 32 kg each in Business/First, plus a
        separate 10 kg allowance for infants. Domestic India routes instead use a weight-based system --
        following a policy update, the lowest domestic fare categories get 15 kg total, Flex fares get 25 kg, and
        Business ranges 25-35 kg depending on the specific fare.
      </p>
      <p>
        Size limits differ too: domestic and most international Economy bags max out at 273 cm total linear
        dimensions per piece at 23 kg, while Business/First bags follow the more common 158 cm limit at 32 kg.
      </p>

      <h2>Excess baggage fees</h2>
      <p>
        On routes to the US, Canada, Europe, or Australia, excess baggage costs USD 40 per kilogram; other
        international routes charge USD 15 per kilogram. Booking excess baggage through customer service ahead
        of time gets a 20% discount versus paying at the airport.
      </p>

      <h2>Special items and delays</h2>
      <p>
        Sporting equipment like golf clubs, skis, and surfboards is charged at 33-50% of the standard excess
        baggage rate rather than full price. If checked baggage is delayed more than 24 hours on an international
        flight, Air India offers a flat 3,000 INR reimbursement.
      </p>

      <h2>Bottom line</h2>
      <p>
        Don&apos;t assume a 10 kg cabin bag will clear Air India -- confirm the 8 kg Economy limit before you
        pack, and check whether your route is domestic (weight-based) or international (piece-based) before
        budgeting for checked bags. See our{" "}
        <Link href="/guides/best-lightweight-carry-on-luggage">lightest carry-on luggage guide</Link> for bags
        that make an 8 kg limit easier to hit.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.myticketstoindia.com/blog/a-detailed-guideline-on-air-india-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            MyTicketsToIndia — Air India Baggage Allowance Guide 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.airindia.com" target="_blank" rel="noopener noreferrer nofollow">airindia.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
