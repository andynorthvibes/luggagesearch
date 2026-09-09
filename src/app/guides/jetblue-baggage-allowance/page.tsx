import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "JetBlue Baggage Allowance: Blue Basic vs Blue Plus vs Mint (2026)",
  description:
    "JetBlue's cheapest fare charges for a first checked bag domestically -- but the same fare gets one free on transatlantic routes. Here's the full fare-by-fare breakdown.",
  alternates: {
    canonical: "/guides/jetblue-baggage-allowance",
  },
};

const fareRows: { fare: string; firstBag: string; secondBag: string; weight: string }[] = [
  { fare: "Blue Basic", firstBag: "$35 paid", secondBag: "$45 paid", weight: "50 lb (23 kg)" },
  { fare: "Blue", firstBag: "$35 paid", secondBag: "$45 paid", weight: "50 lb (23 kg)" },
  { fare: "Blue Plus", firstBag: "Free", secondBag: "$45 paid", weight: "50 lb (23 kg)" },
  { fare: "Mint", firstBag: "Free", secondBag: "Free", weight: "70 lb (32 kg)" },
];

export default function JetBlueBaggageAllowance() {
  return (
    <GuideArticle href="/guides/jetblue-baggage-allowance" title="JetBlue baggage allowance, by fare" amazonPicks={CARRY_ON_PICKS}>
      <p>
        JetBlue&apos;s checked bag fee depends on fare class — except on one specific set of routes, where even
        the cheapest fare gets a free bag that it wouldn&apos;t get flying domestically.
      </p>

      <h2>Carry-on and personal item</h2>
      <p>
        Every fare, Blue Basic included, gets one carry-on (22 x 14 x 9 in) and one personal item (17 x 13 x 8 in,
        under the seat) free. Check your specific bag against this and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked bags by fare</h2>
      <table>
        <thead>
          <tr>
            <th>Fare</th>
            <th>1st bag</th>
            <th>2nd bag</th>
            <th>Weight limit</th>
          </tr>
        </thead>
        <tbody>
          {fareRows.map((row) => (
            <tr key={row.fare}>
              <td className="font-semibold">{row.fare}</td>
              <td>{row.firstBag}</td>
              <td>{row.secondBag}</td>
              <td>{row.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Prepaying online at least 24 hours before departure gets the off-peak rate; peak dates add $5-10. Overweight
        (51+ lb) or oversized (63+ linear inches) bags cost $150 each — and $300 if a bag is both overweight and
        oversized at once.
      </p>

      <h2>The transatlantic exception</h2>
      <p>
        On routes to London, Paris, Dublin and similar transatlantic destinations, the first checked bag is{" "}
        <strong>free on Blue, Blue Plus and Blue Extra</strong> — a meaningfully better deal than the same fares
        get on domestic US routes. If you&apos;re comparing JetBlue against other transatlantic options, factor
        this in before assuming you&apos;ll pay a domestic-style bag fee.
      </p>

      <h2>TrueBlue Mosaic elite perks</h2>
      <p>
        Mosaic members get the first and second checked bags free, at a 70 lb weight allowance each — and the
        perk extends to companions traveling on the same booking, not just the Mosaic member alone.
      </p>

      <h2>Bottom line</h2>
      <p>
        Check whether your specific route is transatlantic before assuming Blue Basic means paying for a first
        bag — it might already be included. See our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for what to look for once you know
        your weight budget.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/jetblue-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — JetBlue Baggage Allowance 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.jetblue.com" target="_blank" rel="noopener noreferrer nofollow">jetblue.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
