import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Air France Baggage Allowance: What Economy Light Actually Includes (2026)",
  description:
    "Air France's Economy Light includes cabin baggage on long-haul routes but zero checked bags at any price point on the cheapest fare -- here's the full fare-by-fare breakdown.",
};

const fareRows: { fare: string; checkedBags: string; weight: string }[] = [
  { fare: "Economy Light", checkedBags: "None (bought separately, from €15+ online)", weight: "—" },
  { fare: "Economy Standard", checkedBags: "1 included", weight: "23 kg" },
  { fare: "Economy Flex", checkedBags: "1 included", weight: "23 kg" },
  { fare: "Premium Economy", checkedBags: "2 included", weight: "23 kg each" },
  { fare: "Business", checkedBags: "2 included", weight: "32 kg each" },
];

export default function AirFranceBaggageAllowance() {
  return (
    <GuideArticle href="/guides/air-france-baggage-allowance" title="Air France baggage allowance, by fare">
      <p>
        Air France&apos;s cheapest fare, Economy Light, still includes cabin baggage on long-haul routes — but no
        checked bag at any price point built into the fare. Worth knowing before you assume &quot;Light&quot;
        just means a smaller discount.
      </p>

      <h2>Cabin baggage</h2>
      <p>
        Most fares include a hand bag (55 x 35 x 25 cm) plus one accessory (40 x 30 x 15 cm), combined up to 12 kg
        in Economy and 18 kg in Business. Check your specific bag against this and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage by fare</h2>
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
      <p>
        On long-haul routes, Economy Light still includes the hand baggage and accessory above — it&apos;s only
        the checked bag that&apos;s excluded. Add one from €15 online on short routes, up to €100–€285 on
        intercontinental flights if you add it in advance; airport prices run roughly 20% higher.
      </p>

      <h2>Flying Blue status bonus applies across two airlines</h2>
      <p>
        Silver and Gold Flying Blue members get one free extra checked bag; Platinum and Ultimate get two — and
        because Air France and KLM share the Flying Blue program, this bonus applies on both airlines&apos;
        flights, not just the one you booked with.
      </p>

      <h2>Bottom line</h2>
      <p>
        Don&apos;t assume Economy Light means no cabin bag on a long-haul Air France flight — it&apos;s the
        checked bag that&apos;s missing, not the hand baggage. Budget for it separately if you need one. See our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for what to look for once you know
        your weight budget.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://deeparrival.com/airlines/air-france/baggage-fees/" target="_blank" rel="noopener noreferrer nofollow">
            Deep Arrival — Air France Baggage Fees & Allowance 2026
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
