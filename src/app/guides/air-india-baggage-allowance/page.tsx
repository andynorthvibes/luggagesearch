import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Air India Baggage Allowance: 7 kg Cabin, Checked by Fare",
  description:
    "Air India allows 7 kg in the Economy cabin (55 x 40 x 20 cm). Checked bags: 15-40 kg domestic by fare, 2 x 23 kg to the USA. Full breakdown.",
  alternates: {
    canonical: "/guides/air-india-baggage-allowance",
  },
};

export default function AirIndiaBaggageAllowance() {
  return (
    <GuideArticle href="/guides/air-india-baggage-allowance" title="Air India baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Air India&apos;s cabin limit is one of the tighter ones among full-service airlines: 7 kg in Economy and
        Premium Economy, in a bag no larger than 55 x 40 x 20 cm. Business and First get 10 kg. The same rule
        applies on domestic and international flights, and frequent-flyer status doesn&apos;t raise it.
      </p>

      <h2>Cabin bag</h2>
      <p>
        One cabin bag up to 55 x 40 x 20 cm (115 cm in total), plus one small personal item under 3 kg that fits
        under the seat in front of you. The weight limit is 7 kg in Economy and Premium Economy and 10 kg in
        Business and First. Check your bag against Air India and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage on domestic flights</h2>
      <p>Within India, the allowance is weight-based and set by your fare family:</p>
      <table>
        <thead>
          <tr>
            <th>Fare</th>
            <th>Checked allowance</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="font-semibold">Economy Value</td><td>15 kg</td></tr>
          <tr><td className="font-semibold">Economy Classic</td><td>20 kg</td></tr>
          <tr><td className="font-semibold">Economy Flex</td><td>25 kg</td></tr>
          <tr><td className="font-semibold">Premium Economy Value / Flex</td><td>15 kg / 25 kg</td></tr>
          <tr><td className="font-semibold">Business Value / Flex</td><td>30 kg / 40 kg</td></tr>
          <tr><td className="font-semibold">First</td><td>40 kg</td></tr>
        </tbody>
      </table>

      <h2>Checked baggage on international flights</h2>
      <p>
        Internationally, Air India uses two systems. Routes to Europe, the UK, the USA and Canada, Japan, South
        Korea and Israel use a <strong>piece concept</strong> (a set number of bags, each with a weight cap).
        Routes to the Gulf, the Middle East, Southeast Asia, Sri Lanka and Australia use a{" "}
        <strong>weight concept</strong> (a total kilogram budget you can split across bags).
      </p>
      <p>
        On India to USA/Canada flights, Economy gets two bags of up to 23 kg each and Business/First two bags of up
        to 32 kg each. Flying back from the USA or Canada, the cheapest Economy Value fare drops to one 23 kg bag.
        In Economy and Premium Economy, both bags together may not exceed 273 cm (length + width + height), and no
        single bag over 158 cm; in Business and First each bag can be up to 158 cm. No single bag may weigh more
        than 32 kg on any route.
      </p>

      <h2>Excess baggage and special items</h2>
      <p>
        Excess baggage is charged by the kilogram and the rate depends on the route. Air India says pre-booking
        excess baggage is cheaper than paying at the airport, and on domestic flights it can be pre-booked at a
        discount up to two hours before departure. Sports equipment and other special items carry a separate
        handling fee, so check the fee before you travel.
      </p>

      <h2>Bottom line</h2>
      <p>
        Plan for 7 kg in the cabin, not the 10 kg many other airlines allow, and check which fare family you booked
        before counting on a checked bag: on domestic flights the gap between Economy Value and Flex is 10 kg. See
        our{" "}
        <Link href="/guides/best-lightweight-carry-on-luggage">lightest carry-on luggage guide</Link> for bags that
        make a 7 kg limit easier to hit.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.airindia.com/in/en/travel-information/baggage-guidelines/cabin-baggage.html" target="_blank" rel="noopener noreferrer nofollow">
            Air India — Cabin baggage
          </a>
        </li>
        <li>
          <a href="https://www.airindia.com/in/en/travel-information/baggage-guidelines/checked-baggage-allowance.html" target="_blank" rel="noopener noreferrer nofollow">
            Air India — Checked baggage allowance
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.airindia.com" target="_blank" rel="noopener noreferrer nofollow">airindia.com</a> 
          before flying, since fares and allowances change. Last verified: 27 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
