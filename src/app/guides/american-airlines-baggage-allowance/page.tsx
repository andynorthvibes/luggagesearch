import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "American Airlines Baggage Allowance: Basic Economy Still Gets a Carry-On (2026)",
  description:
    "American includes a full carry-on on every fare, including Basic Economy -- unlike several US competitors. Here's the checked bag fee structure and how AAdvantage status changes it.",
  alternates: {
    canonical: "/guides/american-airlines-baggage-allowance",
  },
};

const eliteRows: { tier: string; freeBags: string }[] = [
  { tier: "Gold / Ruby", freeBags: "1st bag free" },
  { tier: "Platinum / Sapphire", freeBags: "First 2 bags free" },
  { tier: "Executive Platinum / Emerald / Flagship", freeBags: "First 3 bags free, 70 lb limit" },
];

export default function AmericanAirlinesBaggageAllowance() {
  return (
    <GuideArticle
      href="/guides/american-airlines-baggage-allowance"
      title="American Airlines baggage allowance and fees"
    >
      <p>
        American does one thing differently from several US competitors: a full carry-on bag is included on{" "}
        <strong>every</strong> fare, Basic Economy included — not just a personal item. The checked bag is where
        fare class and AAdvantage status actually matter.
      </p>

      <h2>Carry-on: included even on Basic Economy</h2>
      <p>
        One carry-on (22 x 14 x 9 in) and one personal item (18 x 14 x 8 in) are free on every fare, including
        Basic Economy — a genuine point of difference from airlines that restrict Basic Economy to a personal item
        only. Check your specific bag against this and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked bag fees</h2>
      <p>
        On Main Cabin fares: first bag $45 online ($50 at the airport), second bag $55 online ($60 at the
        airport). On Basic Economy tickets issued from mid-May 2026 onward, both fees carry a small surcharge —
        $50 and $60 online respectively. Standard weight limit is 50 lb; heavier bags incur separate overweight
        fees. A third bag costs $200 on any fare.
      </p>

      <h2>How AAdvantage status changes the math</h2>
      <p>
        Elite status waives checked bag fees entirely, and the number of free bags scales with tier:
      </p>
      <table>
        <thead>
          <tr>
            <th>AAdvantage tier</th>
            <th>Free checked bags</th>
          </tr>
        </thead>
        <tbody>
          {eliteRows.map((row) => (
            <tr key={row.tier}>
              <td className="font-semibold">{row.tier}</td>
              <td>{row.freeBags}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        An AAdvantage-branded credit card also waives the first bag fee on domestic flights for the cardholder.
        Premium cabins (First/Business, Flagship) include 2-3 free bags at a 70 lb limit regardless of status.
        Active-duty military get up to 5 free bags on orders, 3 on personal travel.
      </p>

      <h2>Bottom line</h2>
      <p>
        Don&apos;t assume Basic Economy means personal-item-only on American — the carry-on is included regardless
        of fare. If you check bags often, compare what a co-branded credit card or the next AAdvantage tier would
        save against what you&apos;re currently paying per trip. See our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for what to look for once you know
        your weight budget.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://deeparrival.com/airlines/american-airlines/baggage-fees/" target="_blank" rel="noopener noreferrer nofollow">
            Deep Arrival — American Airlines Baggage Fees 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.aa.com" target="_blank" rel="noopener noreferrer nofollow">aa.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
