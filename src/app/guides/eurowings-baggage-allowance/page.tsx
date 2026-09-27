import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Eurowings Cabin Bag Size & Baggage Allowance by Fare",
  description:
    "Eurowings cabin bag size: 55 x 40 x 23 cm and 8 kg, plus a free 40 x 30 x 25 cm small bag. BASIC charges for the big bag; SMART and BIZclass include it.",
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

      <h2>Eurowings cabin bag size</h2>
      <p>
        Every Eurowings passenger can bring one small item up to 40 x 30 x 25 cm that fits under the seat. The
        larger cabin bag (trolley) can be up to 55 x 40 x 23 cm and 8 kg and goes in the overhead locker. Whether
        the trolley is included depends on your fare.
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
            <td>Paid add-on, from €18</td>
            <td>Bookable: 12 kg from €17, 23 kg from €75</td>
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
        On fully booked flights, Eurowings may ask SMART and BASIC passengers to check in their hand baggage. It is
        free as long as the bag meets the size and weight limits, so it&apos;s a fallback rather than a penalty.
        BIZclass passengers are exempt. Check
        your bag against Eurowings and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Bottom line</h2>
      <p>
        On Eurowings, the fare decides your bags. If you only need the small 40 x 30 x 25 cm bag, BASIC works. If
        you need a trolley in the cabin, compare the BASIC add-on price with SMART, which also includes a 23 kg
        checked bag. Book extras online rather than at the airport.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.eurowings.com/en/information/baggage.html" target="_blank" rel="noopener noreferrer nofollow">
            Eurowings — Baggage regulations
          </a>
        </li>
        <li>
          <a href="https://www.eurowings.com/en/information/baggage/hand-baggage-policy.html" target="_blank" rel="noopener noreferrer nofollow">
            Eurowings — Hand baggage
          </a> Last verified: 27 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
