import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Carry-On vs Personal Item: The Actual Difference",
  description:
    "A personal item is not one standard size — we compared it across our own 53-airline dataset and found it varies by over 50% in volume.",
  alternates: {
    canonical: "/guides/carry-on-vs-personal-item",
  },
};

export default function CarryOnVsPersonalItem() {
  const rows: { airline: string; size: string }[] = [
    { airline: "Ryanair", size: "40 × 20 × 25 cm" },
    { airline: "airBaltic / Widerøe", size: "40 × 30 × 15 cm" },
    { airline: "Jet2 / TAP Air Portugal", size: "40 × 30 × 20 cm" },
    { airline: "Eurowings", size: "40 × 30 × 25 cm" },
    { airline: "Aegean Airlines", size: "45 × 35 × 20 cm" },
  ];

  return (
    <GuideArticle
      href="/guides/carry-on-vs-personal-item"
      title="Carry-on vs personal item: what's the actual difference?"
    >
      <p>
        Most articles on this give you one generic size for &quot;the personal item&quot; as if every airline
        agrees. They don&apos;t. We pulled the free personal-item dimensions from our own 53-airline dataset, and
        the smallest is barely 60% the volume of the largest.
      </p>

      <h2>The basic distinction</h2>
      <p>
        A <strong>personal item</strong> is the smaller bag — a backpack, tote, or laptop bag — that goes under the
        seat in front of you and is included free on essentially every fare, everywhere. A{" "}
        <strong>carry-on</strong> (or &quot;cabin bag&quot;) is the larger, usually wheeled bag that goes in the
        overhead locker. On full-service airlines both are typically free. On a growing number of budget carriers —
        Ryanair, Vueling, Eurowings, Transavia, Wizz Air, Pegasus, and others — the personal item is free but the
        full cabin bag is a paid add-on.
      </p>

      <h2>Personal-item size actually varies a lot</h2>
      <table>
        <thead>
          <tr>
            <th>Airline</th>
            <th>Free personal-item size</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.airline}>
              <td className="font-semibold">{row.airline}</td>
              <td>{row.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Ryanair&apos;s free personal item is tall and narrow; Aegean&apos;s is wider and deeper — nearly 60% more
        volume for the same &quot;free&quot; category. A bag that&apos;s a comfortable personal item on one airline
        can get flagged as an oversized bag on another. Check the exact number for your airline with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link> rather than assuming a bag that worked
        last time will work again.
      </p>

      <h2>What to actually put in each one</h2>
      <p>
        Pack your personal item with what you&apos;ll want mid-flight and can&apos;t easily reach from the overhead
        bin: headphones, a book or tablet, medication, a light layer, snacks, your passport and boarding pass. Keep
        clothing, toiletries, and anything you won&apos;t need until landing in the carry-on instead — you don&apos;t
        want to be digging through an overhead bag mid-flight while people wait in the aisle.
      </p>

      <h2>The fare-class trap</h2>
      <p>
        The most common way people get caught out isn&apos;t the size — it&apos;s assuming a full cabin bag is
        included when it isn&apos;t. On several airlines we cover, the base fare includes only the personal item;
        a proper cabin bag is a separate, sometimes expensive add-on. Our{" "}
        <Link href="/guides/ryanair-baggage-rules">Ryanair</Link>,{" "}
        <Link href="/guides/southwest-baggage-policy">Southwest</Link>, and{" "}
        <Link href="/guides/avoid-checked-baggage-fees">baggage fee guides</Link> cover this pattern in more
        detail — it&apos;s worth checking before you pack a normal-sized wheeled bag on a &quot;basic&quot; fare.
      </p>

      <h2>Bottom line</h2>
      <p>
        &quot;Personal item&quot; is not a standardized size — treat it the same way you&apos;d treat a cabin bag
        limit and check the exact number for your airline before you fly.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>Personal-item dimensions per-airline as documented in this site&apos;s own carry-on checker dataset (<Link href="/tools/carry-on-checker">see the tool</Link>), sourced from each airline&apos;s published baggage policy.</li>
        <li>
          <a href="https://www.carlfriedrik.com/magazine/carry-on-vs-personal-item" target="_blank" rel="noopener noreferrer nofollow">
            Carl Friedrik — Carry-on vs. Personal Items: Understanding the Essentials
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
