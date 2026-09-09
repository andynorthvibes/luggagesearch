import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Iberia: Economy Basic Skips the Checked Bag",
  description:
    "Iberia's Economy Basic fare includes no checked bag -- add one from around EUR 13 online -- while cabin bag weight scales from 10kg to 14kg in Business.",
  alternates: {
    canonical: "/guides/iberia-baggage-allowance",
  },
};

const fareRows: { fare: string; checkedBags: string }[] = [
  { fare: "Economy Basic", checkedBags: "None included -- from ~EUR 13 online" },
  { fare: "Economy Classic / Optima / Comfort / Flexible", checkedBags: "1 bag included" },
  { fare: "Premium Economy", checkedBags: "2 bags included" },
  { fare: "Business", checkedBags: "2 bags included" },
];

export default function IberiaBaggageAllowance() {
  return (
    <GuideArticle href="/guides/iberia-baggage-allowance" title="Iberia baggage allowance, by fare" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Iberia&apos;s Economy Basic is the one fare tier here that skips a complimentary checked bag entirely --
        every other economy tier above it, from Classic up to Flexible, includes at least one. Add a bag to
        Basic ahead of time online and it starts around EUR 13; leave it for the airport and it costs more.
      </p>

      <h2>Cabin bag and personal item</h2>
      <p>
        Every fare gets one cabin bag at 56 x 40 x 25 cm, with the weight limit rising by cabin: 10 kg in
        Economy, 14 kg in Business. A personal accessory item (40 x 30 x 15 cm) comes free on every fare, and
        long-haul Business passengers get a second cabin bag on top. Check your bag against Iberia and 52 other
        airlines with our <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage by fare</h2>
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
        Economy and Premium Economy bags are capped at 23 kg each; Business bags up to 32 kg. No bag may exceed
        158 cm total dimensions or 32 kg -- heavier items ship as cargo instead. Overweight bags between 23-32 kg
        cost roughly $75-100 on transatlantic routes, or per-kilogram fees around EUR 12-15 within Europe.
      </p>

      <h2>Elite status</h2>
      <p>
        Iberia Plus Oro and Platino members, plus Oneworld Sapphire and Emerald elites, get one additional free
        checked bag on top of whatever their fare already includes -- on both Iberia and other Oneworld flights.
        The entry-level Plata/Ruby tier doesn&apos;t carry this perk.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you&apos;ve booked Economy Basic, plan to add a bag before you get to the airport -- it&apos;s cheaper
        and it&apos;s not included by default the way it is on every fare above it. See our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for options built for a 23 kg
        limit.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://deeparrival.com/airlines/iberia/baggage-fees/" target="_blank" rel="noopener noreferrer nofollow">
            Deep Arrival — Iberia Baggage Fees and Allowance 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.iberia.com" target="_blank" rel="noopener noreferrer nofollow">iberia.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
