import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "ANA Baggage Allowance: Domestic Japan Switches Systems in 2026",
  description:
    "ANA's domestic Japan flights move from a weight-based to a piece-based checked baggage system on May 19, 2026 -- and ANA only ever charges the higher of an overweight or oversize fee, never both.",
};

const fareRows: { fare: string; checkedBags: string }[] = [
  { fare: "Economy / Premium Economy (international)", checkedBags: "2 bags, 23 kg each" },
  { fare: "Business Class", checkedBags: "2 bags, 32 kg each" },
  { fare: "First Class", checkedBags: "3 bags, 32 kg each" },
  { fare: "Domestic Japan (until 18 May 2026)", checkedBags: "20 kg total, weight-based" },
  { fare: "Domestic Japan (from 19 May 2026)", checkedBags: "2 bags, 23 kg each, piece-based" },
];

export default function AnaBaggageAllowance() {
  return (
    <GuideArticle href="/guides/ana-baggage-allowance" title="ANA baggage allowance, by fare">
      <p>
        Starting May 19, 2026, ANA is switching its domestic Japan flights from a weight-based checked baggage
        system to the same piece-based system it already uses internationally -- effectively raising the standard
        domestic Economy allowance from 20 kg total to two full 23 kg bags. If you&apos;re flying ANA domestically
        around that date, the rules genuinely change mid-year.
      </p>

      <h2>Cabin bag</h2>
      <p>
        ANA sets a combined 10 kg weight limit across your cabin bag and personal item together -- a notably
        strict cap compared to airlines that allow more per item. Maximum dimensions are 55 x 40 x 25 cm, though
        smaller aircraft with under 100 seats use a reduced 45 x 35 x 20 cm limit instead. Check your bag against
        ANA and 52 other airlines with our <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage by fare and route</h2>
      <table>
        <thead>
          <tr>
            <th>Fare / route</th>
            <th>Checked baggage included</th>
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
        Bags can&apos;t exceed 158 cm total dimensions under normal rules, though oversized items up to 292 cm
        are accepted for an extra fee. A single piece over 45 kg is rejected outright as checked baggage. Extra
        bags cost roughly $50-200 depending on route, cheaper if prepaid online; overweight bags between 23-32 kg
        cost around $60. Unlike airlines that stack overweight and oversize fees together, ANA charges only the
        higher of the two, never both.
      </p>

      <h2>Elite status</h2>
      <p>
        ANA Mileage Club members at Bronze, Platinum, and Diamond tiers each get one additional free checked
        piece. Notably, no US co-branded ANA credit card currently offers a baggage bonus, unlike several US
        domestic carriers&apos; cards.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you&apos;re booking a domestic Japan flight on ANA around May 2026, double-check which system applies
        to your travel date -- the allowance genuinely improves once the piece-based system takes over. See our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for bags built for a 23 kg limit.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://deeparrival.com/airlines/ana/baggage-fees/" target="_blank" rel="noopener noreferrer nofollow">
            Deep Arrival — ANA Baggage Allowance and Fees 2026
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
