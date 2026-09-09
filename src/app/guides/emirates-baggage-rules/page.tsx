import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Emirates: Cabin & Checked Allowance Explained",
  description:
    "Emirates runs two different checked-baggage systems depending on your route — here's which one applies to you.",
  alternates: {
    canonical: "/guides/emirates-baggage-rules",
  },
};

export default function EmiratesBaggageRules() {
  return (
    <GuideArticle href="/guides/emirates-baggage-rules" title="Emirates baggage rules, explained" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Emirates is unusual among the big three Gulf carriers in that its checked-bag allowance isn&apos;t one
        system — it&apos;s two, and which one applies depends on where you&apos;re flying.
      </p>

      <h2>Cabin bag: 7 kg, business gets more</h2>
      <p>
        Economy cabin bags are capped at 55 x 38 x 22 cm and 7 kg — one of the stricter weight limits among major
        airlines. Business and First get a higher 9 kg allowance. Check your bag against this and 52 other airlines
        with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked bag: piece-based or weight-based, depending on route</h2>
      <p>
        On routes to the Americas and Africa, Emirates uses a <strong>piece-based</strong> system: one free checked
        bag up to 23 kg, regardless of fare. On most other routes, it switches to a <strong>weight-based</strong>{" "}
        system: your total checked allowance (25–30 kg depending on fare) can be split across bags, with a per-bag
        cap of 32 kg. All checked bags must stay under 150 cm total (length + width + height).
      </p>
      <p>
        The catch on either system: Emirates&apos; cheapest fares — Special/Saver-type fares — often drop the free
        checked bag entirely, even though the airline has a reputation for generous baggage. Don&apos;t assume;
        check the fare rules for your specific booking.
      </p>

      <h2>Bottom line</h2>
      <p>
        Emirates&apos; baggage allowance depends on route and fare more than most airlines — a piece-based Americas
        route and a weight-based Europe-to-Asia route can behave completely differently on the same airline. Verify
        your specific itinerary rather than assuming the generous reputation applies automatically. See our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> once you know your weight budget.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://travellote.com/baggage/emirates/" target="_blank" rel="noopener noreferrer nofollow">
            Travel Lote — Emirates Baggage Allowance 2026
          </a>
        </li>
        <li>
          Emirates&apos; own published baggage terms — allowances vary by route and fare and change over time, so
          confirm on{" "}
          <a href="https://www.emirates.com" target="_blank" rel="noopener noreferrer nofollow">emirates.com</a> before flying. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
