import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Virgin Australia Baggage Allowance: Economy X Now Matches Business Class Cabin Bags (2026)",
  description:
    "Since February 2026, Virgin Australia's Economy carry-on rose from 7kg to 8kg, and Economy X now gets two cabin bags at 14kg -- the same as Business, for less.",
  alternates: {
    canonical: "/guides/virgin-australia-baggage-allowance",
  },
};

export default function VirginAustraliaBaggageAllowance() {
  return (
    <GuideArticle href="/guides/virgin-australia-baggage-allowance" title="Virgin Australia baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Since February 2, 2026, Virgin Australia&apos;s carry-on allowance quietly got more generous across the
        board. Standard Economy&apos;s single cabin bag went from 7 kg to 8 kg, and Economy X -- a mid-tier fare,
        not Business -- now includes two cabin bags totaling 14 kg, matching what Business class passengers get
        for a fraction of the fare price.
      </p>

      <h2>Cabin bag by fare</h2>
      <p>
        Economy gets one carry-on bag up to 8 kg (up from 7 kg pre-February 2026) plus a personal item (45 x 33 x
        20 cm). Economy X and Business Class both get two carry-on bags totaling 14 kg combined, plus the same
        personal item. All carry-on bags share the same maximum dimensions: 56 x 36 x 23 cm. Check your bag
        against Virgin Australia and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage and Velocity status</h2>
      <p>
        Standard checked baggage allowances vary by specific fare and route -- confirm yours at booking. Velocity
        Frequent Flyer status adds a clear, tiered bonus regardless of fare: Silver and Gold members get 2 bags
        at 23 kg each (Gold adds priority handling), Platinum gets 3 bags at 23 kg each with priority service,
        and Platinum Plus gets 5 bags at 32 kg each with full priority treatment.
      </p>

      <h2>Why Economy X stands out</h2>
      <p>
        The February 2026 change makes Economy X unusually good value on the cabin-bag front specifically --
        travelers who&apos;d normally pay for Business just to get a second cabin bag can now get the same
        two-bag, 14 kg cabin allowance on Economy X instead, while still paying an economy-tier fare.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you last flew Virgin Australia before February 2026, your cabin bag allowance has likely increased --
        re-check your specific fare&apos;s current limit rather than assuming the older 7 kg figure still
        applies. See our <Link href="/guides/best-carry-on-luggage">best carry-on luggage guide</Link> for options
        that make the most of an 8 kg or 14 kg allowance.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.corporatetraveller.com.au/en-au/resources/news/virgin-australias-carry-baggage-allowance" target="_blank" rel="noopener noreferrer nofollow">
            Corporate Traveller — Virgin Australia&apos;s Updated Carry-On Baggage Allowance
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.virginaustralia.com" target="_blank" rel="noopener noreferrer nofollow">virginaustralia.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
