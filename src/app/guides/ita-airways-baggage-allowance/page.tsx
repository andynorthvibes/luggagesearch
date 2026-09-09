import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "ITA Airways: Cabin Bags Stay at 8kg in Every Class",
  description:
    "ITA Airways doesn't scale cabin bag weight by cabin class -- every hand luggage piece is capped at 8kg, even in Business. What changes is piece count.",
  alternates: {
    canonical: "/guides/ita-airways-baggage-allowance",
  },
};

export default function ItaAirwaysBaggageAllowance() {
  return (
    <GuideArticle href="/guides/ita-airways-baggage-allowance" title="ITA Airways baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Plenty of airlines reward a pricier cabin with a heavier carry-on allowance. ITA Airways doesn&apos;t:
        every hand luggage piece is capped at 8 kg regardless of class, sized to a maximum of 158 cm total
        dimensions. What Premium Economy and Business get instead is a second piece -- two bags at 8 kg each,
        versus one for everyone else.
      </p>

      <h2>Cabin bag by class</h2>
      <p>
        Economy: 1 piece, up to 8 kg. Premium Economy and Business: 2 pieces, up to 8 kg each. Check your exact
        bag against ITA Airways and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link> -- an 8 kg cap catches travelers used to
        10 kg or 12 kg limits elsewhere.
      </p>

      <h2>Checked baggage by fare</h2>
      <p>
        Economy Light and Economy Classic both include one checked bag up to 23 kg. Economy Comfort steps up to
        two bags at 32 kg each, and Business includes two to three bags at 32 kg each depending on the route.
        Allowances can differ noticeably between flights within Europe and intercontinental routes, so it&apos;s
        worth double-checking the specific itinerary rather than assuming a flat rule across ITA&apos;s network.
      </p>

      <h2>Bottom line</h2>
      <p>
        Flying Business on ITA for the extra cabin bag rather than the weight limit makes sense here -- the
        allowance doubles in pieces, not kilos. See our{" "}
        <Link href="/guides/best-carry-on-luggage">best carry-on luggage guide</Link> for bags built to stay
        under an 8 kg limit.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.ita-airways.com/xx/en/book-and-prepare/travel-information/baggage/free-baggage-allowance" target="_blank" rel="noopener noreferrer nofollow">
            ITA Airways — Baggage Allowance for Travel with ITA Airways
          </a> Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
