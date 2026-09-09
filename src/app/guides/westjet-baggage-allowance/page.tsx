import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "WestJet Baggage Allowance: UltraBasic Cuts the Carry-On, Not Just the Checked Bag (2026)",
  description:
    "WestJet's UltraBasic fare strips out the full carry-on bag itself on North American routes, not just checked baggage -- while its co-branded credit card waives the first bag for up to 8 guests on one booking.",
  alternates: {
    canonical: "/guides/westjet-baggage-allowance",
  },
};

const fareRows: { fare: string; checkedBags: string }[] = [
  { fare: "UltraBasic", checkedBags: "$55-65 prepaid for first bag; no cabin bag on N. America routes" },
  { fare: "Econo", checkedBags: "$45-53 prepaid for first bag" },
  { fare: "EconoFlex", checkedBags: "1st bag free" },
  { fare: "Premium / PremiumFlex", checkedBags: "1st and 2nd bags free" },
  { fare: "Business / BusinessFlex", checkedBags: "1st and 2nd bags free" },
];

export default function WestJetBaggageAllowance() {
  return (
    <GuideArticle href="/guides/westjet-baggage-allowance" title="WestJet baggage allowance, by fare">
      <p>
        Most airlines&apos; cheapest fare restricts the <em>checked</em> bag and leaves the cabin bag alone.
        WestJet&apos;s UltraBasic fare goes further on North American routes: it strips out the full-size carry-on
        entirely, leaving only a personal item that fits under the seat -- the same restriction Air Canada applies
        to its own cheapest fare.
      </p>

      <h2>Cabin bag and personal item</h2>
      <p>
        The personal item (41 x 15 x 33 cm) is free on every fare. The full carry-on bag (56 x 23 x 36 cm) is
        free on every fare except UltraBasic on domestic and transborder routes, where it&apos;s simply not
        included at all. Check your bag against WestJet and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage by fare</h2>
      <table>
        <thead>
          <tr>
            <th>Fare</th>
            <th>First / second checked bag</th>
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
        Checked bags top out at 23 kg and 157 cm total dimensions under normal pricing; bags between 23-32 kg or
        oversized cost $150-177, and anything over 32 kg has to go through WestJet Cargo instead. Prices for
        prepaid bags rise if you wait until self-serve check-in or the airport counter.
      </p>

      <h2>Status and the co-branded card</h2>
      <p>
        WestJet Rewards Silver and Gold members get their first two bags free; Platinum members get three. The
        WestJet RBC World Elite Mastercard is unusually generous here -- it waives the first bag not just for the
        cardholder but for up to 8 guests traveling on the same booking.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you&apos;re booking UltraBasic for a North American WestJet flight, budget for a personal item only --
        your usual roller bag won&apos;t make it into the cabin free. See our{" "}
        <Link href="/guides/carry-on-vs-personal-item">carry-on vs. personal item guide</Link> for what actually
        clears that smaller allowance.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://deeparrival.com/airlines/westjet/baggage-fees/" target="_blank" rel="noopener noreferrer nofollow">
            Deep Arrival — WestJet Baggage Fees 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.westjet.com" target="_blank" rel="noopener noreferrer nofollow">westjet.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
