import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Delta: Basic Economy vs Main Cabin Fees",
  description:
    "Delta doesn't weigh cabin bags, but checked-bag fees depend heavily on fare class and route -- here's what Basic Economy actually costs versus standard fares.",
  alternates: {
    canonical: "/guides/delta-baggage-allowance",
  },
};

export default function DeltaBaggageAllowance() {
  return (
    <GuideArticle href="/guides/delta-baggage-allowance" title="Delta baggage allowance and fees" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Delta&apos;s cabin bag policy is simple and consistent. The checked bag is where it gets complicated — the
        fee depends on your fare class, your route, and how many bags you&apos;re checking, and Basic Economy
        changes the math meaningfully.
      </p>

      <h2>Cabin bag: sized, not weighed</h2>
      <p>
        Every fare includes one cabin bag (up to 22 x 14 x 9 in / 56 x 35 x 23 cm) plus one personal item, free of
        charge. Unlike Lufthansa and most non-US carriers, Delta doesn&apos;t enforce a weight limit on cabin bags
        for most routes — size is what gets checked at the gate. Check your specific bag against this and 52 other
        airlines with our <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked bags depend on fare class and route</h2>
      <p>
        On US/Canada domestic Main Cabin fares, the first checked bag costs $45 and the second $55 — checked bags
        are not free by default the way they sometimes are on international full-service carriers. On Basic
        Economy between the US/Canada and Europe or North Africa, the first bag is $60 and the second $100. Book
        Standard Economy on that same route instead and the first bag is free, with the second still $100 — a
        meaningful reason to compare the two fares rather than automatically picking the cheapest headline price.
      </p>
      <p>
        Checked bag size and weight limits on domestic fares: up to 50 lb (23 kg) and 62 in (158 cm) total
        dimensions. See our <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for what to look
        for once you know your weight budget.
      </p>

      <h2>Extra and overweight fees stack</h2>
      <p>
        A third checked bag on domestic flights costs $150, and each additional bag after that is $200. Overweight
        fees run $100 for 51–70 lb and $200 for 71–100 lb; oversized bags (63–80 in total dimensions) add another
        $200. These fees are not mutually exclusive — a bag that&apos;s both overweight and oversized gets charged
        for both. Delta allows up to 10 checked bags on mainline flights, but only 4 on Delta Connection regional
        flights.
      </p>

      <h2>Bottom line</h2>
      <p>
        Don&apos;t assume a checked bag is free on Delta just because you&apos;re flying a full-service airline —
        on Basic Economy and most domestic Main Cabin fares, it isn&apos;t. Compare the fare difference against the
        bag fee before booking Basic Economy if you know you&apos;ll check a bag.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.sendmybag.com/airlines/delta-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            Send My Bag — Delta Baggage Allowance and Fees 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.delta.com" target="_blank" rel="noopener noreferrer nofollow">delta.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
