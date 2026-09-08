import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "TAP Air Portugal Baggage Allowance: How Status Rescues the Discount Fare (2026)",
  description:
    "TAP's cheapest Discount fare includes zero checked bags -- but Star Alliance Gold, Miles&Go Gold, Navigator status, or even just the TAP Platinum Visa each add one free bag back, even on Discount.",
};

const fareRows: { fare: string; checkedBags: string }[] = [
  { fare: "Discount", checkedBags: "None included" },
  { fare: "Basic / Classic / Plus", checkedBags: "1 x 23 kg" },
  { fare: "Executive / Top Executive", checkedBags: "2 x 32 kg each" },
];

export default function TapAirPortugalBaggageAllowance() {
  return (
    <GuideArticle href="/guides/tap-air-portugal-baggage-allowance" title="TAP Air Portugal baggage allowance, by fare">
      <p>
        TAP&apos;s cheapest Discount fare comes with zero checked baggage -- &quot;the most common TAP
        surprise,&quot; since budget-fare passengers often expect at least one bag. But there&apos;s a genuine
        workaround: Star Alliance Gold status, Miles&amp;Go Gold, Navigator status, or even just holding the TAP
        Platinum Visa each add one free checked bag -- and it applies even on the Discount fare that otherwise
        excludes checked baggage entirely.
      </p>

      <h2>Cabin bag and personal item</h2>
      <p>
        Every economy fare, Discount included, gets one cabin bag at 55 x 40 x 20 cm up to 10 kg, plus a personal
        item under 2 kg that fits under the seat. Business gets two cabin bags on most routes, but only one on
        flights to North America. Check your bag against TAP and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage by fare</h2>
      <table>
        <thead>
          <tr>
            <th>Fare</th>
            <th>Checked bags included</th>
          </tr>
        </thead>
        <tbody>
          {fareRows.map((row) => (
            <tr key={row.fare}>
              <td className="font-semibold">{row.fare}</td>
              <td>{row.checkedBags}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Bags can&apos;t exceed 158 cm total dimensions or 32 kg -- heavier items have to travel as cargo instead.
        Overweight bags between 23-32 kg cost roughly $160 on US-Europe routes, charged in US dollars specifically
        on US routes.
      </p>

      <h2>The status workaround</h2>
      <p>
        Unlike airlines where elite perks only apply above the cheapest fare, TAP&apos;s bonus bag from status
        reaches all the way down to Discount. If you&apos;re a Star Alliance Gold member from any airline&apos;s
        program, or you hold the TAP-branded credit card, you effectively convert a hand-baggage-only ticket into
        one with a free checked bag.
      </p>

      <h2>Bottom line</h2>
      <p>
        Before assuming Discount means no checked bag for you specifically, check whether your Star Alliance or
        Miles&amp;Go status already covers it. See our{" "}
        <Link href="/guides/avoid-checked-baggage-fees">guide to avoiding baggage fees</Link> for more ways to
        sidestep the charge.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://deeparrival.com/airlines/tap-air-portugal/baggage-fees/" target="_blank" rel="noopener noreferrer nofollow">
            Deep Arrival — TAP Air Portugal Baggage Fees 2026
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
