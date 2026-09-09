import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Air Canada Baggage Allowance: Fare Tiers and Fees (2026)",
  description:
    "Air Canada's carry-on shrinks to a personal item only on its cheapest fare, and checked bag fees change again in April 2026 -- here's the full breakdown by fare class.",
  alternates: {
    canonical: "/guides/air-canada-baggage-allowance",
  },
};

const fareRows: { fare: string; freeBags: string; notes: string }[] = [
  { fare: "Economy Basic", freeBags: "0", notes: "Carry-on restricted to personal item only on Canada-U.S. routes" },
  { fare: "Economy Standard", freeBags: "0", notes: "Full carry-on included free" },
  { fare: "Economy Flex", freeBags: "1", notes: "First bag at 23 kg included" },
  { fare: "Economy Comfort", freeBags: "2", notes: "Both bags at 23 kg each" },
  { fare: "Latitude / Premium Economy / Business", freeBags: "2", notes: "Both bags at 32 kg each" },
];

export default function AirCanadaBaggageAllowance() {
  return (
    <GuideArticle href="/guides/air-canada-baggage-allowance" title="Air Canada baggage allowance, by fare" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Air Canada&apos;s cheapest fare doesn&apos;t just skip the checked bag — on Canada-U.S. routes, it can
        restrict you to a personal item only, no full-size carry-on at all. Worth knowing before you pack.
      </p>

      <h2>Carry-on and personal item</h2>
      <p>
        Standard carry-on allowance is 55 x 40 x 23 cm (21.5 x 15.5 x 9 in), plus a personal item up to 43 x 33 x 16
        cm (17 x 13 x 6 in) that fits under the seat. Neither has a published weight limit — the bag just has to be
        liftable into the overhead bin unassisted. On Economy Basic fares between Canada and the U.S., though, only
        the personal item is included; the carry-on itself is not. Check your specific bag against this and 52
        other airlines with our <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked bags by fare class</h2>
      <table>
        <thead>
          <tr>
            <th>Fare</th>
            <th>Free checked bags</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {fareRows.map((row) => (
            <tr key={row.fare}>
              <td className="font-semibold">{row.fare}</td>
              <td>{row.freeBags}</td>
              <td>{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Checked bag fees (effective April 2026)</h2>
      <p>
        On fares without an included bag: first bag around $45, second around $60, and $100 for each bag after
        that. Overweight (23–32 kg) and oversize (158–292 cm linear) fees each run roughly $100–$115 — but unlike
        several competitors, <strong>Air Canada doesn&apos;t stack these fees</strong>. If a bag is both overweight
        and oversize, you pay one fee, not two.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you&apos;re booking Economy Basic on a Canada-U.S. route, budget for a carry-on fee too, not just a
        checked bag — it&apos;s not included at that fare tier. See our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for what to look for once you know
        your weight budget.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://deeparrival.com/airlines/air-canada/baggage-fees/" target="_blank" rel="noopener noreferrer nofollow">
            Deep Arrival — Air Canada Baggage Fees 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.aircanada.com" target="_blank" rel="noopener noreferrer nofollow">aircanada.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
