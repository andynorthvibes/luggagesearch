import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Pegasus Airlines Baggage Allowance: Light Package Means a 3kg Underseat Bag, Nothing More",
  description:
    "Pegasus Airlines' Light Package on international flights includes no cabin bag and no checked bag -- just a single underseat item capped at 3kg, tighter than most airlines' personal-item limit.",
  alternates: {
    canonical: "/guides/pegasus-airlines-baggage-allowance",
  },
};

export default function PegasusAirlinesBaggageAllowance() {
  return (
    <GuideArticle href="/guides/pegasus-airlines-baggage-allowance" title="Pegasus Airlines baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        On international and North Cyprus flights, Pegasus Airlines&apos; entry-level Light Package strips
        baggage down further than most low-cost carriers do: no cabin bag, no checked bag, just one underseat
        item capped at 40 x 30 x 15 cm and 3 kg. That 3 kg weight limit is unusually tight -- most airlines that
        restrict a personal item still allow closer to double that.
      </p>

      <h2>Baggage by package (international flights)</h2>
      <p>
        Light Package: 1 underseat bag only, max 3 kg. Saver, Saver Plus and Comfort Flex Packages: 1 underseat
        bag plus 1 full cabin bag, and 20 kg of checked baggage included. Domestic flights within Turkey follow
        separate, unchanged rules. Check your bag against Pegasus and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Bottom line</h2>
      <p>
        A 3 kg underseat-only allowance is easy to underestimate -- even a laptop, charger and a light jacket can
        push past it. Unless you&apos;re traveling with almost nothing, Saver or above is worth pricing in from
        the start rather than adding baggage separately after booking Light.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.flypgs.com/en/pegasus-baggage-allowance" target="_blank" rel="noopener noreferrer nofollow">
            Pegasus Airlines — Pegasus Baggage Allowance
          </a> Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
