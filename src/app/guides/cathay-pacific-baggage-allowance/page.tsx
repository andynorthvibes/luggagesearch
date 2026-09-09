import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Cathay Pacific: Cabin Weight Scales With Class",
  description:
    "Cathay Pacific is one of the few airlines where cabin bag weight rises with cabin class -- 7kg Economy, 10kg Business, 15kg First -- plus a personal item.",
  alternates: {
    canonical: "/guides/cathay-pacific-baggage-allowance",
  },
};

const fareRows: { fare: string; checkedBags: string }[] = [
  { fare: "Economy Light", checkedBags: "1 bag, 23 kg" },
  { fare: "Economy Essential / Flex", checkedBags: "2 bags, 23 kg each" },
  { fare: "Premium Economy", checkedBags: "2 bags, 23 kg each" },
  { fare: "Business Class", checkedBags: "2 bags, 32 kg each" },
  { fare: "First Class", checkedBags: "3 bags, 32 kg each" },
];

export default function CathayPacificBaggageAllowance() {
  return (
    <GuideArticle href="/guides/cathay-pacific-baggage-allowance" title="Cathay Pacific baggage allowance, by fare" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Most airlines cap cabin bag weight at a flat number regardless of cabin -- usually around 7-10 kg for
        everyone. Cathay Pacific instead scales the limit with what you paid: 7 kg in Economy and Premium
        Economy, 10 kg in Business, and 15 kg in First. And unlike carriers that force a choice between a cabin
        bag or a personal item, Cathay includes both at every cabin level.
      </p>

      <h2>Cabin bag and personal item</h2>
      <p>
        Every passenger, regardless of fare, gets one piece of hand luggage at 56 x 36 x 23 cm plus a smaller
        personal item at 40 x 30 x 15 cm. What changes by cabin is the weight ceiling: 7 kg (Economy/Premium
        Economy), 10 kg (Business), or 15 kg (First). Check your bag against Cathay and 52 other airlines with
        our <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage by fare</h2>
      <table>
        <thead>
          <tr>
            <th>Fare / cabin</th>
            <th>Checked bags included</th>
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
        No single bag may exceed 32 kg or 158 cm total dimensions. Overweight bags run USD 60-150 per piece
        depending on route; oversized bags over 158 cm cost a flat USD 200. Anything over 203 cm total isn&apos;t
        accepted at all, and bags over 32 kg are rejected outright rather than surcharged.
      </p>

      <h2>Infants and elite status</h2>
      <p>
        Passengers traveling with an infant under two get one complimentary checked bag plus two additional
        items such as a stroller, car seat, or bassinet. Marco Polo Club members and Oneworld elite-tier
        passengers receive increased checked baggage allowances on top of their fare&apos;s base amount.
      </p>

      <h2>Bottom line</h2>
      <p>
        Cathay&apos;s tiered cabin-weight system means an Economy passenger&apos;s 7 kg carry-on limit is
        genuinely tighter than what a Business Class passenger gets on the exact same aircraft -- pack
        accordingly. See our <Link href="/guides/best-carry-on-luggage">best carry-on luggage guide</Link> for
        options that clear the Economy limit comfortably.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.sendmybag.com/airlines/cathay-pacific-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            Send My Bag — Cathay Pacific Baggage Allowance 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.cathaypacific.com" target="_blank" rel="noopener noreferrer nofollow">cathaypacific.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
