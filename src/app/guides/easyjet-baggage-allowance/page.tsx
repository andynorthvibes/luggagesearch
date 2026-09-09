import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "easyJet Baggage Allowance: Under-Seat Bag vs Large Cabin Bag (2026)",
  description:
    "easyJet's free bag is smaller than it looks, and a bag that doesn't fit at the gate costs a flat GBP 50 -- here's the difference between the free and paid cabin bag tiers.",
  alternates: {
    canonical: "/guides/easyjet-baggage-allowance",
  },
};

export default function EasyJetBaggageAllowance() {
  return (
    <GuideArticle href="/guides/easyjet-baggage-allowance" title="easyJet baggage allowance, explained">
      <p>
        Like other European budget carriers, easyJet&apos;s free allowance is smaller than most travelers expect —
        and getting caught out at the gate with an oversized bag costs a flat fee regardless of how small the
        excess is.
      </p>

      <h2>Free hand luggage: one small under-seat bag</h2>
      <p>
        The free allowance is one item up to 45 x 36 x 20 cm and 15 kg, which must fit under the seat in front of
        you — there is no separate free overhead-locker bag. Check your specific bag against this and 52 other
        airlines with our <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Large cabin bag: the paid overhead-locker option</h2>
      <p>
        For a bag that goes in the overhead locker (up to 56 x 45 x 25 cm, 15 kg), you need to either pay for it
        separately, book easyJet Plus, or book a Flexi fare, which includes it. Without one of these, only the
        smaller under-seat bag travels free — bringing a normal-size cabin bag without paying for the upgrade is
        the single most common way travelers get caught out at the gate.
      </p>
      <p>
        An oversized cabin bag discovered at the boarding gate is charged a flat £50, regardless of how much over
        the limit it is — cheaper to check the exact dimensions before you fly than risk it at the gate.
      </p>

      <h2>Checked (hold) baggage</h2>
      <p>
        Up to 3 checked bags are allowed, each capped at 275 cm total dimensions (length + width + depth). Standard
        weight allowance is 23 kg per bag (a lighter 15 kg option is also available). Adding a bag costs
        anywhere from about £9.49 to £50 one-way depending on route and how far in advance you book — buying online
        in advance is consistently cheaper than the flat £50 airport rate. Excess weight is charged at £12 per
        kilogram over.
      </p>

      <h2>Family and infant equipment travels free</h2>
      <p>
        Travel cots, pushchairs, and car seats are checked for free (up to 2 items per child), on top of your
        normal allowance — worth knowing if you&apos;re trying to estimate total baggage costs for a family trip.
        See our <Link href="/guides/best-luggage-for-family-travel">family travel luggage guide</Link> for more on
        packing efficiently with kids.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you&apos;re not flying easyJet Plus or a Flexi fare, plan around the small under-seat bag only — and
        measure your bag before the airport if there&apos;s any doubt, since the gate penalty is a flat fee that
        doesn&apos;t scale with how close you were.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.sendmybag.com/airlines/easyjet-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            Send My Bag — easyJet Baggage Allowance 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.easyjet.com" target="_blank" rel="noopener noreferrer nofollow">easyjet.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
