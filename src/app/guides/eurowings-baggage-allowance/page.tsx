import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Eurowings Baggage Allowance: BASIC, SMART and BIZclass Compared",
  description:
    "Eurowings' three-tier fare ladder decides everything about your bags -- BASIC charges extra for a full-size cabin bag, SMART includes one, and BIZclass doubles both cabin and checked allowances.",
  alternates: {
    canonical: "/guides/eurowings-baggage-allowance",
  },
};

export default function EurowingsBaggageAllowance() {
  return (
    <GuideArticle href="/guides/eurowings-baggage-allowance" title="Eurowings baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Eurowings ties nearly every part of your baggage allowance to which of its three fares you book. A small
        underseat bag (40 x 30 x 25 cm) is included regardless, but the full-size cabin bag most travelers
        actually pack -- up to 55 x 40 x 23 cm and 8 kg -- is a paid extra on the cheapest BASIC fare, included
        once on SMART, and included twice on BIZclass.
      </p>

      <h2>Cabin and checked baggage by fare</h2>
      <table>
        <thead>
          <tr>
            <th>Fare</th>
            <th>Large cabin bag (8 kg)</th>
            <th>Checked baggage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BASIC</td>
            <td>Paid add-on, from ~€21</td>
            <td>Bookable separately: 12, 23 or 32 kg</td>
          </tr>
          <tr>
            <td>SMART</td>
            <td>1 included</td>
            <td>1 x 23 kg included</td>
          </tr>
          <tr>
            <td>BIZclass</td>
            <td>2 included</td>
            <td>2 x 32 kg included</td>
          </tr>
        </tbody>
      </table>
      <p>
        On fully booked flights, Eurowings may ask to gate-check hand baggage that meets the size and weight
        limits at no charge, with collection waiting at arrival -- a common fallback rather than a penalty. Check
        your bag against Eurowings and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Bottom line</h2>
      <p>
        Adding baggage online -- up to two hours before departure -- costs up to 50% less than paying at the
        airport, and a second checked bag can be added as an add-on across all three fares from roughly €70.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.eurowings.com/en/information/baggage.html" target="_blank" rel="noopener noreferrer nofollow">
            Eurowings — Baggage regulations
          </a> Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
