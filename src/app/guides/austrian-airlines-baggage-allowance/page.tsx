import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Austrian Airlines Baggage Allowance: Economy Basic Skips the Cabin Bag Entirely",
  description:
    "On short and medium-haul routes, Austrian Airlines' cheapest Economy Basic fare includes no cabin bag at all -- only a small personal item -- with a full carry-on costing extra.",
  alternates: {
    canonical: "/guides/austrian-airlines-baggage-allowance",
  },
};

export default function AustrianAirlinesBaggageAllowance() {
  return (
    <GuideArticle href="/guides/austrian-airlines-baggage-allowance" title="Austrian Airlines baggage allowance">
      <p>
        Most airlines that skimp on the cheapest fare cut the checked bag first and leave the cabin bag alone.
        Austrian Airlines goes a step further on short and medium-haul routes: book Economy Basic and you get no
        cabin bag included at all -- just a small personal item, 40 x 30 x 15 cm, that has to fit under the seat
        in front of you. A proper carry-on has to be purchased separately.
      </p>

      <h2>Cabin bag by fare</h2>
      <p>
        Every Economy fare above Basic includes one item of hand luggage, and Business Class includes two. Check
        your bag&apos;s exact dimensions against Austrian and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link> before you book, especially if Basic looked
        like the cheap option.
      </p>

      <h2>Checked baggage</h2>
      <p>
        Standard checked baggage tops out at 158 cm total dimensions and 23 kg in Economy, rising to 32 kg in
        Business Class. Exactly how many free pieces you get depends on the fare booked, the route, and any
        Miles &amp; More status -- Austrian notes some markets carry a higher Economy allowance than the norm, so
        it&apos;s worth checking your specific itinerary rather than assuming the base figures apply everywhere.
      </p>

      <h2>Bottom line</h2>
      <p>
        If Economy Basic is the fare showing as cheapest, price in a cabin bag before comparing it to a pricier
        fare that already includes one -- the gap often narrows or disappears. See our{" "}
        <Link href="/guides/best-carry-on-luggage">best carry-on luggage guide</Link> for bags that make the most
        of a single free personal item.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.austrian.com/us/en/free-baggage" target="_blank" rel="noopener noreferrer nofollow">
            Austrian Airlines — Information about free baggage
          </a>
        </li>
        <li>
          <a href="https://www.austrian.com/us/en/faq-baggage" target="_blank" rel="noopener noreferrer nofollow">
            Austrian Airlines — FAQs about baggage
          </a> Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
