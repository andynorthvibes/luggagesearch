import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Wizz Air Baggage Rules: Free Allowance, Priority & Checked Bag Prices (2026)",
  description:
    "Wizz Air's free personal item, the paid Priority cabin bag, and checked bag tiers and prices — plus how the WIZZ Go and WIZZ Plus bundles change what's included.",
  alternates: {
    canonical: "/guides/wizz-air-baggage-rules",
  },
};

const checkedTiers = [
  { tier: "10 kg", price: "From about €8.50 online, more at the airport" },
  { tier: "20 kg", price: "Higher than the 10 kg tier; varies by route and season" },
  { tier: "26 kg", price: "Higher again; varies by route and season" },
  { tier: "32 kg", price: "Up to roughly €104 online depending on route and season" },
];

export default function WizzAirBaggageRules() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in Wizz Air's free baggage allowance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "One free personal item per passenger, up to 40 x 30 x 20 cm and 10 kg, that fits under the seat in front of you. A larger cabin bag or any checked bag requires a paid add-on.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a Wizz Air checked bag cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Checked bag prices depend on the weight tier (10, 20, 26, or 32 kg) and vary by route and season, roughly from about €8.50 for the smallest tier up to around €104 for the largest when booked online. Buying at the airport costs more than booking in advance.",
        },
      },
    ],
  };

  return (
    <GuideArticle href="/guides/wizz-air-baggage-rules" title="Wizz Air baggage rules, explained">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p>
        Wizz Air is a low-cost carrier, and like other budget airlines its base fare includes almost no baggage —
        everything beyond a small personal item is a paid add-on. Here&apos;s exactly what&apos;s free, what costs
        extra, and how much.
      </p>

      <h2>What&apos;s free: one small personal item</h2>
      <p>
        Every base fare includes one free personal item, up to 40 x 30 x 20 cm and 10 kg, that must fit under the
        seat in front of you. That&apos;s it — no separate free cabin bag for the overhead locker, unlike some other
        European carriers.
      </p>

      <h2>WIZZ Priority: adds a full-size cabin bag</h2>
      <p>
        The paid WIZZ Priority add-on gets you a second, larger cabin bag — up to 55 x 40 x 23 cm and 10 kg — that
        goes in the overhead locker, plus priority boarding. Without it, you&apos;re limited to the small
        under-seat personal item only.
      </p>
      <p>
        Check your bag&apos;s dimensions against this and other airlines at once with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked bags: priced by weight tier</h2>
      <p>
        Checked baggage is sold in four weight tiers — 10, 20, 26, and 32 kg — priced by route and season rather
        than a flat fee. Booking online in advance is meaningfully cheaper than adding a bag at the airport.
      </p>
      <table>
        <thead>
          <tr>
            <th>Tier</th>
            <th>Typical online price</th>
          </tr>
        </thead>
        <tbody>
          {checkedTiers.map((row) => (
            <tr key={row.tier}>
              <td className="font-semibold">{row.tier}</td>
              <td>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Overweight fees</h2>
      <p>
        Going over your booked checked-bag tier costs roughly €13 per kilogram over, charged at the airport — it&apos;s
        cheaper to book the next tier up in advance than to risk an overweight fee at check-in.
      </p>

      <h2>WIZZ Go and WIZZ Plus bundles</h2>
      <p>
        Rather than buying baggage add-ons individually, Wizz Air sells bundled fares. WIZZ Go includes a 20 kg
        checked bag along with other extras. WIZZ Plus goes further, including a 32 kg checked bag plus seat
        selection. If you know you&apos;ll check a bag, compare the bundle price against buying the checked-bag
        add-on separately on the base fare — the bundle is often cheaper once you add up what you&apos;d otherwise
        pay individually.
      </p>

      <h2>Bottom line</h2>
      <p>
        Budget for baggage before you book: the base Wizz Air fare covers only a small under-seat item. Decide
        upfront whether you need a full cabin bag (WIZZ Priority) or a checked bag (a weight tier, or a WIZZ
        Go/Plus bundle), and book it in advance — airport prices are consistently higher.
      </p>

      <h2>Frequently asked questions</h2>
      <div className="space-y-2">
        <div>
          <h3>What is included in Wizz Air&apos;s free baggage allowance?</h3>
          <p>One free personal item per passenger, up to 40 x 30 x 20 cm and 10 kg, that fits under the seat in front of you. A larger cabin bag or any checked bag requires a paid add-on.</p>
        </div>
        <div>
          <h3>How much does a Wizz Air checked bag cost?</h3>
          <p>Checked bag prices depend on the weight tier (10, 20, 26, or 32 kg) and vary by route and season, roughly from about €8.50 for the smallest tier up to around €104 for the largest when booked online. Buying at the airport costs more than booking in advance.</p>
        </div>
      </div>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/wizz-air-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — Wizz Air Baggage Allowance
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.wizzair.com" target="_blank" rel="noopener noreferrer nofollow">wizzair.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
