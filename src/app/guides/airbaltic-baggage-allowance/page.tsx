import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "airBaltic: Economy MINI Gets a Personal Item Only",
  description:
    "airBaltic's cheapest Economy MINI fare includes only a personal item, no cabin bag -- but the airline separately guarantees $1000 for a delayed bag.",
  alternates: {
    canonical: "/guides/airbaltic-baggage-allowance",
  },
};

export default function AirbalticBaggageAllowance() {
  return (
    <GuideArticle href="/guides/airbaltic-baggage-allowance" title="airBaltic baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Economy MINI, airBaltic&apos;s entry-level fare, includes only a personal item -- no cabin bag at all.
        Every other Economy fare steps up to one cabin bag plus a personal item, and Business Class includes two
        cabin bags plus a personal item.
      </p>

      <h2>Cabin bag by fare</h2>
      <p>
        Economy MINI: personal item only. Other Economy fares: 1 cabin bag + 1 personal item. Business: 2 cabin
        bags + 1 personal item. Check your bag against airBaltic and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link> before booking MINI expecting to bring a
        full carry-on.
      </p>

      <h2>Checked baggage</h2>
      <p>
        Checked baggage allowance depends on both the fare class booked and any airBaltic Club status level --
        there&apos;s no single flat figure across the airline, so it&apos;s worth confirming the exact allowance
        for your fare at booking rather than assuming a number from a previous trip.
      </p>

      <h2>A distinctive protection most airlines don&apos;t offer</h2>
      <p>
        Through a partnership with Blue Ribbon Bags, airBaltic offers a straight $1000 cash payout if your
        checked bag arrives delayed -- paid directly to your bank account rather than requiring a claims process
        for reimbursement of specific purchases, which is how most airlines handle delayed-bag compensation.
      </p>

      <h2>Bottom line</h2>
      <p>
        Booking Economy MINI to save money works fine if you&apos;re only bringing a personal item -- but budget
        for a checked bag or a fare upgrade if you need to bring anything more, since MINI leaves no cabin bag
        allowance to fall back on.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.airbaltic.com/en/baggage/" target="_blank" rel="noopener noreferrer nofollow">
            airBaltic — Baggage allowance on airBaltic flights
          </a> Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
