import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Icelandair Baggage Allowance: Economy Light's Checked-Bag Trap (2026)",
  description:
    "Icelandair's cheapest fare includes no checked bag at all, and stopover itineraries get charged extra fees per leg, not per journey -- here's what each fare actually includes.",
  alternates: {
    canonical: "/guides/icelandair-baggage-allowance",
  },
};

const fareRows: { fare: string; checkedBags: string; weight: string }[] = [
  { fare: "Economy Light", checkedBags: "None included", weight: "—" },
  { fare: "Economy Standard", checkedBags: "1 bag", weight: "Up to 23 kg" },
  { fare: "Economy Flex", checkedBags: "1 bag", weight: "Up to 23 kg" },
  { fare: "Saga Premium", checkedBags: "2 bags", weight: "Up to 32 kg each" },
  { fare: "Saga Premium Flex", checkedBags: "2 bags", weight: "Up to 32 kg each" },
];

export default function IcelandairBaggageAllowance() {
  return (
    <GuideArticle href="/guides/icelandair-baggage-allowance" title="Icelandair baggage allowance, by fare" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Icelandair is a popular way to add an Iceland stopover to a transatlantic trip, which makes its baggage
        rules worth understanding before you book — especially the cheapest fare, which includes far less than
        many travelers assume.
      </p>

      <h2>Cabin bag and personal item</h2>
      <p>
        Every fare includes one personal item (40 x 30 x 15 cm, must fit under the seat) and one carry-on bag — 55 x
        40 x 20 cm, up to 10 kg on international flights (6 kg on domestic Iceland/Greenland routes). Saga Premium
        Flex passengers get a second carry-on bag. Check your specific bag against this and 52 other airlines with
        our <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>The Economy Light trap</h2>
      <p>
        Icelandair&apos;s cheapest fare, Economy Light, includes <strong>no checked baggage at all</strong> — only
        the cabin allowance above. If you need to check a bag on this fare, you&apos;re paying full price for it
        separately, which can erase most of what you saved by booking the cheaper fare in the first place. Economy
        Standard and Economy Flex both include one 23 kg checked bag.
      </p>
      <table>
        <thead>
          <tr>
            <th>Fare</th>
            <th>Checked bags included</th>
            <th>Weight limit</th>
          </tr>
        </thead>
        <tbody>
          {fareRows.map((row) => (
            <tr key={row.fare}>
              <td className="font-semibold">{row.fare}</td>
              <td>{row.checkedBags}</td>
              <td>{row.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Extra bags: prepay, and watch stopover itineraries</h2>
      <p>
        Prepaying for an extra checked bag online costs roughly 20% less than paying at the airport — for example,
        around $47 prepaid versus $59 at the airport between Iceland and Europe (higher again for North America or
        transatlantic routes via Iceland). The detail that catches people out: on a multi-leg stopover itinerary,
        extra-bag fees are charged <strong>per flight leg, not per journey</strong> — a bag you pay for once still
        gets billed again on the connecting flight.
      </p>
      <p>
        The absolute limit is 32 kg per bag; anything heavier is refused outright rather than accepted with a
        larger fee. Maximum linear dimensions (length + width + height, including handles) are 158 cm.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you&apos;re booking Economy Light to save money, budget separately for a checked bag if you need one —
        it&apos;s not included at any price point on that fare. And if your trip includes an Iceland stopover on
        two separate flights, expect any extra-bag fee to apply twice.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/icelandair-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — Icelandair Baggage Allowance 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.icelandair.com" target="_blank" rel="noopener noreferrer nofollow">icelandair.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
