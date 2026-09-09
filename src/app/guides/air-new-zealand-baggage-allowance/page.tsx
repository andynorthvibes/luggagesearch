import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Air New Zealand Baggage Allowance: The Domestic Connection Trap (2026)",
  description:
    "Air New Zealand's domestic Seat fare is carry-on only, with zero checked baggage -- a trap for travelers connecting off a long-haul flight that included one.",
  alternates: {
    canonical: "/guides/air-new-zealand-baggage-allowance",
  },
};

export default function AirNewZealandBaggageAllowance() {
  return (
    <GuideArticle href="/guides/air-new-zealand-baggage-allowance" title="Air New Zealand baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        If you&apos;ve just landed in Auckland on a long-haul flight that included checked baggage and you&apos;re
        connecting onward on a domestic Air New Zealand Seat fare, don&apos;t assume that allowance carries
        through. The domestic Seat fare is carry-on only -- zero checked baggage included -- and it catches
        travelers precisely at this kind of connection.
      </p>

      <h2>Cabin bag by cabin</h2>
      <p>
        Economy gets one carry-on bag up to 7 kg plus a small personal item -- treat this limit as genuinely
        enforced, not aspirational. Premium Economy and Business Premier get two carry-on bags with a combined
        14 kg weight limit. Check your bag against Air New Zealand and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage by fare and cabin</h2>
      <p>
        International Economy includes one checked bag up to 23 kg on most fares. Premium Economy usually
        includes two bags at 23 kg each, and Business Premier three bags at 23 kg each. The domestic Seat fare is
        the exception that trips people up -- it includes no checked bag at all, unlike most of Air New
        Zealand&apos;s international fares.
      </p>
      <p>
        No checked bag may exceed 32 kg regardless of fare -- anything heavier needs repacking. Standard bags cap
        out at 158 cm total dimensions, though sports equipment gets more length leeway (up to 2.2 m) if it stays
        narrow. Prepaid extra bags cost roughly £60-101 on long-haul routes, but aren&apos;t available on
        codeshare or partner-operated segments of your itinerary.
      </p>

      <h2>Watch for partner-operated segments</h2>
      <p>
        On routes like UK to Auckland, part of your journey may be operated by a partner airline rather than Air
        New Zealand itself -- and baggage rules can differ by segment regardless of which airline you booked
        through. Check each leg&apos;s specific allowance rather than assuming one rule covers the whole trip.
      </p>

      <h2>Bottom line</h2>
      <p>
        If your itinerary includes a domestic Air New Zealand connection on a Seat fare, budget for checked
        baggage separately -- it isn&apos;t included the way your international leg&apos;s allowance was. See our{" "}
        <Link href="/guides/avoid-checked-baggage-fees">guide to avoiding baggage fees</Link> for how to plan
        ahead.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/air-new-zealand-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — Air New Zealand Baggage Allowance 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.airnewzealand.co.nz" target="_blank" rel="noopener noreferrer nofollow">airnewzealand.co.nz</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
