import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Emirates Baggage Allowance: Cabin 7 kg, Checked by Fare",
  description:
    "Emirates Economy allows a 7 kg cabin bag (55 x 38 x 22 cm) and 20-35 kg checked depending on fare, or 1-2 x 23 kg on Americas routes.",
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
        airlines. Business and First can bring a second 7 kg piece — a briefcase (up to 45 x 35 x 20 cm) or a garment bag. Check your bag against this and 52 other airlines
        with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked bag: weight-based or piece-based, depending on route</h2>
      <p>
        Most Emirates routes use a <strong>weight concept</strong>: your fare comes with a total kilogram budget
        that you can split across as many bags as you like, as long as no single bag is over 32 kg or 203 cm
        (length + width + height). Flights to and from the Americas, and flights starting in Africa, use a{" "}
        <strong>piece concept</strong> instead: a set number of bags, each capped at 23 kg in Economy and Premium
        Economy (32 kg in Business and First) and 150 cm.
      </p>
      <table>
        <thead>
          <tr>
            <th>Fare / cabin</th>
            <th>Weight concept</th>
            <th>Piece concept (Americas, from Africa)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="font-semibold">Economy Special</td><td>20 kg</td><td>1 x 23 kg</td></tr>
          <tr><td className="font-semibold">Economy Saver</td><td>25 kg</td><td>2 x 23 kg*</td></tr>
          <tr><td className="font-semibold">Economy Flex</td><td>30 kg</td><td>2 x 23 kg</td></tr>
          <tr><td className="font-semibold">Economy Flex Plus</td><td>35 kg</td><td>2 x 23 kg</td></tr>
          <tr><td className="font-semibold">Premium Economy</td><td>35 kg</td><td>2 x 23 kg</td></tr>
          <tr><td className="font-semibold">Business</td><td>40 kg</td><td>2 x 32 kg</td></tr>
          <tr><td className="font-semibold">First</td><td>50 kg</td><td>2 x 32 kg</td></tr>
        </tbody>
      </table>
      <p className="text-sm">
        *On intra-Americas and US-Europe flights, Economy Saver gets one 23 kg bag instead of two.
      </p>
      <p>
        The gap between the cheapest and most expensive Economy fares is 15 kg on weight-concept routes, so the
        fare you pick matters as much as the airline&apos;s generous reputation. Anything over 203 cm has to go as
        cargo.
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
          <a href="https://www.emirates.com/us/english/before-you-fly/baggage/checked-baggage/" target="_blank" rel="noopener noreferrer nofollow">
            Emirates — Checked baggage
          </a>
        </li>
        <li>
          <a href="https://www.emirates.com/us/english/before-you-fly/baggage/cabin-baggage-rules/" target="_blank" rel="noopener noreferrer nofollow">
            Emirates — Cabin baggage rules
          </a>
        </li>
        <li>
          Emirates&apos; own published baggage terms — allowances vary by route and fare and change over time, so
          confirm on{" "}
          <a href="https://www.emirates.com" target="_blank" rel="noopener noreferrer nofollow">emirates.com</a> before flying. Last verified: 27 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
