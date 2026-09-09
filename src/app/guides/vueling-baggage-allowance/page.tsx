import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Vueling Baggage Allowance: Even the Cheapest Fare Includes an Underseat Bag",
  description:
    "Vueling's cheapest Fly Light fare still includes a free underseat bag -- but the standard overhead roller bag is paid, and gate sizers enforce it strictly.",
  alternates: {
    canonical: "/guides/vueling-baggage-allowance",
  },
};

export default function VuelingBaggageAllowance() {
  return (
    <GuideArticle href="/guides/vueling-baggage-allowance" title="Vueling baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Vueling structures its cabin allowance around two bags, not one: a small underseat bag included on every
        fare including the cheapest, and a larger overhead roller bag that&apos;s only free from the Fly bundle
        upward. On Fly Light, that overhead bag has to be purchased separately or bundled in through a seat
        selection that includes it.
      </p>

      <h2>Cabin bag by fare</h2>
      <table>
        <thead>
          <tr>
            <th>Fare</th>
            <th>Underseat bag (40 x 30 x 20 cm)</th>
            <th>Overhead bag (55 x 40 x 20 cm, 10 kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fly Light</td>
            <td>Included</td>
            <td>Paid add-on</td>
          </tr>
          <tr>
            <td>Fly, Fly Grande, Fly Pro, Premium</td>
            <td>Included</td>
            <td>Included</td>
          </tr>
        </tbody>
      </table>
      <p>
        Gate sizers are enforced strictly: an underseat bag that doesn&apos;t fit can mean a €60-75 penalty on the
        spot, and an oversized bag boarded without a pre-booked slot can cost €110-140. Check your bag&apos;s
        exact size against Vueling and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link> before you get to the gate.
      </p>

      <h2>Checked baggage</h2>
      <p>
        Checked bags come in four weight tiers -- 15, 20, 25 and 30 kg -- priced separately, with a 25 kg bag
        included on Fly (if selected during booking), Fly Grande, Optima and Family fares. Adding a bag online is
        roughly half the price of adding one at the airport, and excess weight beyond what you&apos;ve booked
        costs €12 per kilo up to a 32 kg cap.
      </p>

      <h2>Bottom line</h2>
      <p>
        On Fly Light, plan around the small underseat bag unless you&apos;ve paid for more -- it&apos;s genuinely
        the only cabin baggage included, not just the first item you&apos;re allowed to carry for free.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://help.vueling.com/hc/en-gb/articles/19798835176081-Hand-Luggage-Allowance-Cabin-bags-allowance" target="_blank" rel="noopener noreferrer nofollow">
            Vueling Help — Hand Luggage Allowance (Cabin bags allowance)
          </a> Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
