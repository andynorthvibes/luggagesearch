import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Aer Lingus: When the Cabin Bag Isn't Actually Free",
  description:
    "Aer Lingus's personal item is always free, but the 10kg cabin bag only comes included on some fares -- on transatlantic Saver tickets, it's a paid add-on.",
  alternates: {
    canonical: "/guides/aer-lingus-baggage-allowance",
  },
};

const fareRows: { fare: string; checkedBags: string }[] = [
  { fare: "Transatlantic Saver", checkedBags: "None included -- always a paid add-on" },
  { fare: "Transatlantic Smart / Flex", checkedBags: "1 x 23 kg (2nd bag costs EUR 75)" },
  { fare: "European Saver", checkedBags: "None included -- priced by distance and weight" },
  { fare: "European Plus / Advantage", checkedBags: "Included with fare" },
  { fare: "AerClub elite members", checkedBags: "10 kg cabin bag included regardless of fare" },
];

export default function AerLingusBaggageAllowance() {
  return (
    <GuideArticle href="/guides/aer-lingus-baggage-allowance" title="Aer Lingus baggage allowance, by fare" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Aer Lingus always includes a small personal item free of charge -- but the larger 10 kg overhead cabin
        bag is a different story. It comes included on Transatlantic, Plus, and Advantage fares and for AerClub
        elite members, but on the cheapest Saver-type fares it&apos;s a paid extra starting around EUR 9.99 when
        booked online, not a standard inclusion.
      </p>

      <h2>Cabin bag and personal item</h2>
      <p>
        The personal item (40 x 30 x 20 cm, think a handbag or laptop case) is free on every fare, every time.
        The 10 kg cabin bag (55 x 40 x 24 cm) is what varies -- included on some fares, purchasable on others. If
        you board with an oversized or overweight cabin bag you haven&apos;t paid for, expect a EUR 35 fee to
        check it into the hold at the gate. Check your bag against Aer Lingus and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage: transatlantic vs. European pricing</h2>
      <table>
        <thead>
          <tr>
            <th>Fare</th>
            <th>Checked baggage</th>
          </tr>
        </thead>
        <tbody>
          {fareRows.map((row) => (
            <tr key={row.fare}>
              <td className="font-semibold">{row.fare}</td>
              <td>{row.checkedBags}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        On transatlantic routes, Smart and Flex fares include one 23 kg bag free, with a second costing EUR 75.
        Overweight bags between 23.1-32 kg cost EUR 75 / $100 / £68 per direction. Within Europe, Saver fares
        charge for checked bags by distance and weight tier -- from around EUR 27 for a near route at 20 kg up to
        EUR 87 for a longer route with two bags at 40 kg combined. Excess weight within Europe costs EUR 10 per
        kilogram, and checking in at the airport without pre-booking costs EUR 35-65 depending on distance.
      </p>

      <h2>Sports gear and instruments</h2>
      <p>
        Sports equipment has its own handling fee -- EUR 40 booked online, EUR 50 by phone or at the airport.
        Musical instruments too large for the cabin can travel on a purchased extra seat, or be checked for a
        EUR 40-50 handling fee.
      </p>

      <h2>Bottom line</h2>
      <p>
        Before assuming your cabin bag rides free, check which fare type you booked -- Saver fares, especially
        transatlantic ones, treat the cabin bag as an add-on rather than an inclusion. See our{" "}
        <Link href="/guides/avoid-checked-baggage-fees">guide to avoiding baggage fees</Link> for how to budget
        for it upfront instead of at the gate.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.sendmybag.com/airlines/aer-lingus-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            Send My Bag — Aer Lingus Baggage Allowance 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.aerlingus.com" target="_blank" rel="noopener noreferrer nofollow">aerlingus.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
