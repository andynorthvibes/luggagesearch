import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Japan Airlines: Generous Abroad, Tighter at Home",
  description:
    "JAL gives international Economy passengers two free 23kg bags -- one of the more generous allowances anywhere -- but a connecting domestic leg resets to less.",
  alternates: {
    canonical: "/guides/japan-airlines-baggage-allowance",
  },
};

const fareRows: { fare: string; checkedBags: string }[] = [
  { fare: "Economy / Premium Economy (international)", checkedBags: "2 bags, 23 kg each, free" },
  { fare: "Business / First Class (international)", checkedBags: "3 bags, 32 kg each, free" },
  { fare: "Standard (domestic Japan)", checkedBags: "20 kg total, across multiple bags" },
  { fare: "First Class (domestic Japan)", checkedBags: "45 kg total" },
];

export default function JapanAirlinesBaggageAllowance() {
  return (
    <GuideArticle href="/guides/japan-airlines-baggage-allowance" title="Japan Airlines baggage allowance, by fare" amazonPicks={CARRY_ON_PICKS}>
      <p>
        On JAL&apos;s international flights, even standard Economy includes two free checked bags at 23 kg each
        -- more generous than most competitors&apos; base Economy fare. The catch is the connection: book a
        domestic Japan leg onto that same itinerary, and the allowance resets to a smaller, differently-measured
        domestic system that catches travelers who assumed their international allowance carried through.
      </p>

      <h2>Cabin bag</h2>
      <p>
        JAL allows one larger cabin bag plus one personal item, at 55 x 40 x 25 cm, with a combined weight limit
        of 10 kg for both pieces together. Check your bag against JAL and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage: international vs. domestic</h2>
      <table>
        <thead>
          <tr>
            <th>Fare / route</th>
            <th>Checked baggage included</th>
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
        International bags can&apos;t exceed 203 cm total dimensions. Domestic Japan flights use a completely
        different framework -- a shared weight budget rather than a per-bag piece count, capped at 50 x 60 x 120
        cm per item. If your trip combines an international JAL flight with a domestic connection, check both
        legs&apos; allowances separately rather than assuming one covers the other.
      </p>

      <h2>Excess baggage fees</h2>
      <p>
        An extra bag costs roughly 20,000 yen (about $200). Overweight bags between 23-32 kg cost about 10,000
        yen (~$100); between 32-45 kg, the fee jumps sharply to around 60,000 yen (~$600). Oversized bags cost a
        flat 20,000 yen regardless of how far over the limit they are.
      </p>

      <h2>Infants and instruments</h2>
      <p>
        Infants traveling on an adult&apos;s lap get one checked bag matching the adult&apos;s allowance, plus a
        free stroller or car seat. Small musical instruments are permitted as carry-on alongside your regular
        cabin bag.
      </p>

      <h2>Bottom line</h2>
      <p>
        JAL&apos;s international Economy allowance is genuinely generous -- but never assume it applies once
        you&apos;re on a connecting domestic Japan flight. Check the domestic leg&apos;s limit separately before
        you pack. See our <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for bags that
        make the most of a 23 kg allowance.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.sendmybag.com/airlines/japan-airlines-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            Send My Bag — Japan Airlines Baggage Allowance 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.jal.co.jp" target="_blank" rel="noopener noreferrer nofollow">jal.co.jp</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
