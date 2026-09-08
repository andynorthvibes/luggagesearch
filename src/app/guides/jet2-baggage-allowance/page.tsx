import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Jet2 Baggage Allowance: No Under-Seat-Only Option Like Ryanair or easyJet (2026)",
  description:
    "Jet2, the UK package-holiday carrier, doesn't sell a personal-item-only fare -- every ticket includes a 10kg cabin bag, and hold bags left unbooked cost more regardless of when you arrive.",
};

export default function Jet2BaggageAllowance() {
  return (
    <GuideArticle href="/guides/jet2-baggage-allowance" title="Jet2 baggage allowance">
      <p>
        Ryanair and easyJet built their business around a personal-item-only base fare, charging extra for
        anything bigger. Jet2, built around package holidays rather than one-way city hops, doesn&apos;t offer
        that stripped-down tier at all -- every ticket includes a 10 kg cabin bag as standard, with a small
        personal item added at the airline&apos;s discretion rather than as a guaranteed second piece.
      </p>

      <h2>Hand luggage</h2>
      <p>
        Every passenger gets one cabin bag up to 56 x 45 x 25 cm and 10 kg. A small additional personal item
        (handbag-sized) may be allowed, but Jet2 treats it as discretionary rather than a fixed entitlement the
        way many competitors do. Bags that don&apos;t fit the size or weight limit get moved into the hold at the
        gate, with fees applied on the spot. Check your bag against Jet2 and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Hold baggage</h2>
      <p>
        Jet2 allows up to three checked items, each capped at 22 kg. Overweight bags cost £12 per kilogram, and
        nothing over 32 kg is accepted regardless of how much you&apos;re willing to pay. Critically, hold
        baggage not pre-booked before you reach the airport costs more than booking ahead, whether or not you
        arrive early -- there&apos;s no way to avoid the markup by simply showing up in good time.
      </p>

      <h2>Sports gear and instruments</h2>
      <p>
        Golf clubs and bicycles cost a flat £30 one-way if pre-booked online, though items like windsurfing
        boards require a phone booking instead. Standard-sized musical instruments follow the normal cabin
        baggage rules; larger ones can travel on a purchased extra seat if under 65 kg.
      </p>

      <h2>Infants and liquids</h2>
      <p>
        Children under two get no hand luggage allowance of their own, though pushchairs and car seats up to 10
        kg combined check in for free. Liquids follow standard rules: containers up to 100 ml, all fitting inside
        one transparent 20 x 20 cm bag.
      </p>

      <h2>Bottom line</h2>
      <p>
        Jet2&apos;s baggage model rewards booking everything -- cabin bag included by default, hold bags -- ahead
        of time rather than at the airport. See our{" "}
        <Link href="/guides/avoid-checked-baggage-fees">guide to avoiding baggage fees</Link> for how much
        pre-booking typically saves.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.sendmybag.com/airlines/jet2-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            Send My Bag — Jet2 Baggage Allowance 2026
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
