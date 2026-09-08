import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Ryanair Baggage Rules: Free Bag, Priority Bag & Fees Explained (2026)",
  description:
    "What's actually free on Ryanair, what the paid Priority cabin bag gets you, and where the 10 kg weight limit gets enforced.",
};

export default function RyanairBaggageRules() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is a carry-on bag free on Ryanair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Only a small personal item is free on Ryanair — it must fit under the seat in front of you. A full-size cabin bag for the overhead locker (55 x 40 x 20 cm, up to 10 kg) requires a paid Priority fare or add-on.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if my Ryanair bag is too big or heavy at the gate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gate agents size bags against a sizer frame. An oversized or overweight bag caught at the gate is charged at Ryanair's higher airport rate, plus per-kilogram excess fees — both far more expensive than paying for the right allowance when you book.",
        },
      },
    ],
  };

  return (
    <GuideArticle href="/guides/ryanair-baggage-rules" title="Ryanair baggage rules, explained">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p>
        Ryanair&apos;s baggage rules are simple once you separate them by what you&apos;ve paid for — the confusion
        almost always comes from assuming a fare includes more than it does.
      </p>

      <h2>What&apos;s actually free</h2>
      <p>
        Every fare includes one small personal item that fits under the seat in front of you — currently sized at
        roughly 40 x 20 x 25 cm. That&apos;s it. No wheeled bag, no overhead-locker space, is included in the base
        fare. If you&apos;ve booked the cheapest Ryanair ticket and packed a normal-sized wheeled carry-on, it is
        not covered — you&apos;ll be asked to pay at the gate, and gate pricing is Ryanair&apos;s most expensive
        tier.
      </p>

      <h2>The Priority cabin bag (paid)</h2>
      <p>
        Priority fares and add-ons unlock a second, larger allowance: a 10 kg cabin bag up to 55 x 40 x 20 cm for
        the overhead locker, on top of the free personal item. This is the allowance most people picture when they
        think of a normal carry-on — but on Ryanair it&apos;s an upgrade, not a default. Check your bag against this
        exact limit with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>, which includes Ryanair alongside 15 other
        airlines.
      </p>

      <h2>Checked bags</h2>
      <p>
        Ryanair sells checked bags in two weight tiers — roughly 10 kg and 20 kg — for around €/£25 each when added
        during booking. Adding a checked bag later, or at the airport, costs significantly more (roughly €/£40–50).
        You can add up to three checked bags per person per one-way flight. Bags that exceed their weight tier are
        charged excess fees of around €/£11 per kilogram, up to a hard maximum of 32 kg per bag.
      </p>

      <h2>The most common way to get caught out</h2>
      <p>
        It&apos;s rarely the checked bag that causes surprise fees — it&apos;s bringing a normal-sized wheeled
        carry-on on a fare that only includes the small under-seat item. If you&apos;re not paying for Priority,
        pack into a genuinely small personal item, or budget for the Priority add-on (or checked bag) up front —
        both are cheaper booked in advance than paid for at the gate.
      </p>

      <h2>Bottom line</h2>
      <p>
        Match your bag to what you actually paid for: personal item only on a base fare, or a 55 x 40 x 20 cm / 10
        kg bag with Priority. See our{" "}
        <Link href="/guides/best-carry-on-luggage">carry-on buying guide</Link> if you&apos;re shopping for a bag
        that fits Ryanair&apos;s Priority allowance without going over.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.mybaggage.com/shipping/airlines/ryanair-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            My Baggage — Ryanair 2026 Baggage Allowance Guide
          </a>
        </li>
        <li>
          Ryanair&apos;s own published cabin and checked-baggage terms — sizes, tiers and fees change, so confirm on{" "}
          <a href="https://www.ryanair.com" target="_blank" rel="noopener noreferrer nofollow">ryanair.com</a> before flying.
        </li>
      </ul>
    </GuideArticle>
  );
}
