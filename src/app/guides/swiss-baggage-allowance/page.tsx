import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Swiss Baggage Allowance: Economy Light Is Hand Luggage Only, Every Route (2026)",
  description:
    "Unlike some competitors, Swiss International Air Lines' Economy Light excludes checked baggage on every route, no regional exceptions. The full breakdown.",
  alternates: {
    canonical: "/guides/swiss-baggage-allowance",
  },
};

const fareRows: { fare: string; checkedBags: string; weight: string }[] = [
  { fare: "Economy Light", checkedBags: "None, on every route", weight: "—" },
  { fare: "Economy Classic / Flex", checkedBags: "1 bag", weight: "23 kg" },
  { fare: "Premium Economy", checkedBags: "2 bags", weight: "23 kg each" },
  { fare: "Business", checkedBags: "2 bags", weight: "32 kg each" },
  { fare: "First (intercontinental)", checkedBags: "3 bags", weight: "32 kg each" },
];

export default function SwissBaggageAllowance() {
  return (
    <GuideArticle href="/guides/swiss-baggage-allowance" title="Swiss baggage allowance, by fare" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Swiss International Air Lines makes its cheapest fare&apos;s restriction consistent, at least: Economy
        Light is hand-luggage-only on every single route, with no regional exceptions to catch you out.
      </p>

      <h2>Cabin bag and personal item</h2>
      <p>
        Every passenger gets one cabin bag (55 x 40 x 23 cm, up to 8 kg) and one personal item (40 x 30 x 10 cm).
        Business and First passengers can bring two cabin bags. Check your specific bag against this and 52 other
        airlines with our <Link href="/tools/carry-on-checker">carry-on checker</Link>.
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
        Maximum dimensions per checked bag: 158 cm total (length + width + height), with a hard 32 kg limit —
        beyond that, there&apos;s no fee option, only repacking. Ski equipment travels free on every fare except
        Economy Light.
      </p>

      <h2>Excess baggage fees</h2>
      <p>
        Within Europe: an overweight or oversized bag costs roughly CHF 57 (about £47/€50); an extra bag runs CHF
        73 booked online or CHF 92 at the airport. On intercontinental routes, the same fees roughly triple —
        around CHF 173 for overweight/oversized, CHF 230 online or CHF 287 at the airport for an extra bag. Booking
        through your online account is consistently cheaper than paying at the counter.
      </p>

      <h2>Bottom line</h2>
      <p>
        Economy Light on Swiss is hand luggage only, full stop — there&apos;s no region where it quietly includes
        a checked bag. Budget for one separately if you need it, on any route. See our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for what to look for once you know
        your weight budget.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/swiss-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — Swiss International Air Lines Baggage Allowance 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.swiss.com" target="_blank" rel="noopener noreferrer nofollow">swiss.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
