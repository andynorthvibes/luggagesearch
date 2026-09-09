import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import AmazonPicks from "@/components/AmazonPicks";

export const metadata: Metadata = {
  title: "Best Checked Luggage: What Actually Matters (2026)",
  description:
    "A practical guide to choosing checked luggage — weight limits, durability, expandability, and how to avoid overweight-bag fees.",
  alternates: {
    canonical: "/guides/best-checked-luggage",
  },
};

export default function BestCheckedLuggage() {
  return (
    <GuideArticle href="/guides/best-checked-luggage" title="Best checked luggage: what actually matters">

      <p>
        A checked bag has one job the carry-on doesn&apos;t: survive baggage handling. That changes what to prioritize
        when you&apos;re shopping, and it&apos;s different from picking a carry-on.
      </p>

      <h2>1. Weight limit math — including the bag itself</h2>
      <p>
        Most international carriers cap checked bags at 23 kg (50 lb) per piece in economy; some US domestic fares
        and premium cabins allow 32 kg (70 lb). A large hardside checked bag can weigh 4.5–6 kg empty — meaning on a
        23 kg allowance, the suitcase itself can eat 20–25% of your limit before you&apos;ve packed anything. If
        you&apos;re a heavy packer, a lighter-weight shell buys you real packing capacity, not just a lower number on
        the box.
      </p>
      <p>
        Overweight fees are steep and non-negotiable at the counter — typically $75–$200 (or the airline&apos;s
        local-currency equivalent) per bag, charged on the spot. A luggage scale (cheap, and small enough to pack) is
        one of the highest-value purchases you can make alongside the bag itself.
      </p>

      <h2>2. Durability over looks</h2>
      <p>
        Checked bags get thrown, stacked, and dragged across tarmac by conveyor systems — they take far more abuse
        than a carry-on you keep within arm&apos;s reach. Reinforced corners, recessed (rather than protruding)
        wheels, and a metal (not plastic) telescoping handle frame all matter more here than they do for a carry-on.
        Read reviews specifically for &quot;checked&quot; or &quot;large&quot; sizes — a brand&apos;s carry-on and
        checked lines don&apos;t always share the same hardware quality.
      </p>

      <h2>3. Expandable capacity</h2>
      <p>
        An expandable checked bag typically adds 5–8 cm of depth — genuinely useful for a one-way move, a long trip,
        or bringing souvenirs home. The tradeoff: expanded, the bag may exceed some airlines&apos; linear-dimension
        limits for checked luggage (typically around 158 cm / 62 in, L+W+H combined), which can trigger an
        oversized-bag fee even if the weight is fine. Check both limits if you plan to travel expanded.
      </p>

      <h2>4. Wheels and handle</h2>
      <p>
        Four-wheel spinners are easier to push through a crowded arrivals hall one-handed, especially with a large,
        heavy bag. Look for wheels that are recessed into the shell rather than bolted onto the outside — exposed
        wheel housings are the single most common failure point on checked luggage after repeated baggage-handler
        drops.
      </p>

      <h2>5. Size categories</h2>
      <p>
        &quot;Medium&quot; checked bags (roughly 24–26 in / 61–66 cm) suit trips of about a week; &quot;large&quot;
        (28–30 in / 71–76 cm) suit two weeks or more, or checked-baggage-only travelers. Going larger than you need
        just adds empty weight you&apos;re carrying (and often paying to check) for no benefit.
      </p>

      <AmazonPicks
        picks={[
          {
            name: "Samsonite Omni PC Hardside Expandable Luggage, Checked-Large 28-Inch",
            note: "Reinforced corners and recessed spinner wheels — built for the rougher handling checked bags take. Also sold in 20\" and 24\" sizes.",
            query: "Samsonite Omni PC Hardside Expandable Luggage Checked-Large 28-Inch",
            url: "https://amzn.to/4d2dHd6",
          },
          {
            name: "Travelpro Maxlite Air Hardside Expandable Checked Luggage",
            note: "A lighter-weight hardshell option, useful if empty weight is what's eating into your allowance (see point 1 above).",
            query: "Travelpro Maxlite Air Hardside Expandable Checked Luggage",
            url: "https://amzn.to/4r23TFT",
          },
        ]}
      />

      <h2>The bottom line</h2>
      <p>
        For checked luggage, prioritize empty weight and hardware durability over styling — the bag will be handled
        far more roughly than a carry-on, and every kilogram of shell weight is a kilogram you can&apos;t pack.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>Published baggage policies from major international carriers (checked-bag weight and linear-dimension limits, cross-referenced across United, Delta, American, British Airways, Lufthansa, and Emirates).</li>
        <li>
          See also our <Link href="/guides/samsonite-vs-delsey">Samsonite vs Delsey</Link> comparison for
          brand-specific build-quality and warranty differences.
        </li>
      </ul>
    </GuideArticle>
  );
}
