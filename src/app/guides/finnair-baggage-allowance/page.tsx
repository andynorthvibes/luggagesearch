import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Finnair Baggage Allowance: Your Checked Bags Depend on the Route, Not Just the Fare (2026)",
  description:
    "Finnair's checked baggage allowance swings dramatically by region -- Asia routes can include far more free bags than flights within Europe on a comparable fare.",
};

export default function FinnairBaggageAllowance() {
  return (
    <GuideArticle href="/guides/finnair-baggage-allowance" title="Finnair baggage allowance, by route and fare">
      <p>
        Finnair&apos;s position as a Nordic hub for Asia connections shows up directly in its baggage rules — the
        checked allowance on a comparable fare can be very different depending on which region you&apos;re flying
        to, not just which fare class you booked.
      </p>

      <h2>Cabin baggage</h2>
      <p>
        One personal item (40 x 30 x 15 cm) is free on every fare. A full carry-on (55 x 40 x 23 cm) is included
        on Economy Classic/Flex and above, but not on the stripped-down Economy Superlight fare, which must be
        purchased separately. Weight limit is 8 kg in Economy, 12 kg in Business. Check your specific bag against
        this and 52 other airlines with our <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage varies dramatically by route</h2>
      <p>
        Rather than a single checked-bag number per fare class, Finnair&apos;s allowance shifts by region:
        Mainland China-Europe and Japan-Europe routes can include up to 3 bags in Business; other Asia and Middle
        East routes typically include 1; North America gets 1-2 depending on cabin; and within Europe the
        allowance can drop to 0-1 bag depending on fare level. Maximum size per bag is 90 x 75 x 45 cm, with
        weight limits of 23 kg in Economy/Premium Economy and 32 kg in Business.
      </p>
      <p>
        The practical implication: don&apos;t assume your checked allowance from a European Finnair flight carries
        over to a connecting long-haul segment, or vice versa — check each leg of a multi-region itinerary
        separately.
      </p>

      <h2>Extra bag fees by region</h2>
      <p>
        Prepaid online: roughly €29 for Europe (rising to €36 within 6 days of departure), €65-70 for North
        America, and €75-85 for Asia/Middle East. Prices climb further if bought within a week of departure or at
        the airport.
      </p>

      <h2>Economy Light and Business Light: genuinely stripped down</h2>
      <p>
        Both Economy Light and Business Light include zero checked bags as part of the fare — everything beyond
        the cabin allowance is purchased separately, regardless of cabin class.
      </p>

      <h2>Bottom line</h2>
      <p>
        On Finnair, check your baggage allowance by route, not just by fare name — the same fare class can mean a
        different checked allowance depending on whether you&apos;re flying within Europe or connecting onward to
        Asia. See our <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for what to look for
        once you know your weight budget.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://upgradedpoints.com/travel/airlines/finnair-baggage-fees-and-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            Upgraded Points — Finnair Baggage Fees, Allowance, and Policy 2026
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
