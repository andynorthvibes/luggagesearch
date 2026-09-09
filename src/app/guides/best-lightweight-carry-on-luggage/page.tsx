import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import AmazonPicks from "@/components/AmazonPicks";

export const metadata: Metadata = {
  title: "Best Lightweight Carry-On Luggage: Ranked by Actual Weight (2026)",
  description:
    "Lightweight carry-on suitcases ranked by verified empty weight, not marketing copy — and why it matters on weight-limited airlines.",
  alternates: {
    canonical: "/guides/best-lightweight-carry-on-luggage",
  },
};

export default function BestLightweightCarryOn() {
  const rows: { bag: string; weight: string; shell: string }[] = [
    { bag: "TravelPro Maxlite 5 (21″)", weight: "5.5 lbs / 2.5 kg", shell: "Softside" },
    { bag: "Coolife Hardside Expandable (20″)", weight: "5.7 lbs / 2.6 kg", shell: "Polypropylene, hardside" },
    { bag: "Kenneth Cole Reaction Out of Bounds (20″)", weight: "6.2 lbs / 2.8 kg", shell: "Hardside" },
    { bag: "Amazon Basics Hardside Spinner (20″)", weight: "6.6 lbs / 3.0 kg", shell: "Hardside" },
    { bag: "Samsonite Freeform Spinner", weight: "6.6 lbs / 3.0 kg", shell: "Polypropylene, hardside" },
    { bag: "Away The Carry-On", weight: "7.4 lbs / 3.4 kg", shell: "Polycarbonate, hardside" },
  ];

  return (
    <GuideArticle
      href="/guides/best-lightweight-carry-on-luggage"
      title="Best lightweight carry-on luggage, by actual weight"
    >
      <p>
        Most &quot;best lightweight luggage&quot; lists rank by brand reputation, not a verified scale. Here&apos;s
        the same idea done the other way round: bags ordered by their actual published empty weight, so you can see
        exactly what you&apos;re trading off.
      </p>

      <h2>The lightest bags, by verified empty weight</h2>
      <table>
        <thead>
          <tr>
            <th>Bag</th>
            <th>Empty weight</th>
            <th>Shell</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.bag}>
              <td className="font-semibold">{row.bag}</td>
              <td>{row.weight}</td>
              <td>{row.shell}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Nearly 2 kg separates the lightest bag on this list from the heaviest — and that gap is entirely the
        suitcase&apos;s own weight, before you&apos;ve packed anything.
      </p>

      <h2>Why empty weight actually matters</h2>
      <p>
        On US airlines, cabin bags usually aren&apos;t weighed — size is what gets checked. But most of Europe, the
        Middle East and Asia enforce a cabin-bag weight limit, and it applies to the bag <em>and</em> everything
        inside it. Emirates and Qatar Airways cap cabin bags at 7 kg; Lufthansa and SAS at 8 kg. A 3.4 kg empty
        suitcase leaves you under 4 kg for clothes, shoes and a laptop on those airlines — a 2.5 kg bag nearly
        doubles that. Run your own numbers with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>, which covers both size and weight limits
        across 53 airlines.
      </p>

      <AmazonPicks
        title="The two lightest bags on this list, linked"
        picks={[
          {
            name: "Travelpro Maxlite 5 Softside Carry-On Spinner",
            note: "The lightest bag in the table above at 2.5 kg empty — the pick if you regularly fly a weight-limited airline like Emirates or SAS.",
            query: "Travelpro Maxlite 5 Softside Carry-On Spinner",
            url: "https://amzn.to/469Odqz",
          },
          {
            name: "Amazon Basics Hardside Spinner Carry-On Luggage",
            note: "A heavier hardside alternative from the table (3.0 kg empty) if you'd rather trade some weight budget for crush resistance.",
            query: "Amazon Basics Hardside Spinner Luggage Carry-On",
            url: "https://amzn.to/4xg6q0z",
          },
        ]}
      />

      <h2>The tradeoff: weight vs. durability</h2>
      <p>
        The lightest bags tend to be softside nylon or thinner polypropylene shells — they save weight but flex
        more and offer less protection for fragile items. Heavier polycarbonate shells, like Away&apos;s, prioritize
        rigidity and crush resistance over minimal weight. Neither is objectively &quot;better&quot; — it depends on
        whether you&apos;re optimizing for a strict weight-limited airline or for durability on rougher trips.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you regularly fly weight-limited airlines, treat empty weight as a hard spec to check before you buy —
        not an afterthought. If you mostly fly US carriers that only enforce size, a heavier, more durable shell
        costs you nothing in practice. Either way, confirm the final fit against your specific airlines with the{" "}
        <Link href="/tools/carry-on-checker">checker</Link> before you travel.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.outdoorgearlab.com/topics/travel/best-carry-on-luggage" target="_blank" rel="noopener noreferrer nofollow">
            Outdoor Gear Lab — The Best Carry-On Luggage of 2026 (tested weights)
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
