import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Norwegian Baggage Allowance: Personal-Item-Only, Even on Long-Haul (2026)",
  description:
    "Norwegian's cheapest LowFare ticket includes only a small personal item -- no overhead cabin bag at all -- a budget-carrier restriction that also applies on its longer routes.",
};

const fareRows: { fare: string; checkedBags: string }[] = [
  { fare: "LowFare", checkedBags: "None included" },
  { fare: "LowFare+", checkedBags: "1 x 23 kg" },
  { fare: "Flex", checkedBags: "2 x 23 kg" },
  { fare: "Premium", checkedBags: "2 x 23 kg" },
  { fare: "Premium Flex", checkedBags: "2 x 23 kg" },
];

export default function NorwegianBaggageAllowance() {
  return (
    <GuideArticle href="/guides/norwegian-baggage-allowance" title="Norwegian baggage allowance, by fare">
      <p>
        Personal-item-only fares are common on short-haul budget carriers like Ryanair and easyJet. Norwegian
        applies the same restriction to its cheapest LowFare ticket regardless of route length: no overhead
        cabin bag included at all, just a small under-seat item -- something travelers booking longer Norwegian
        routes on the lowest fare often don&apos;t expect.
      </p>

      <h2>Cabin bag by fare</h2>
      <p>
        LowFare includes one personal item only, 40 x 30 x 20 cm and up to 10 kg, which must fit under the seat
        in front of you. LowFare+ adds a full overhead cabin bag (55 x 40 x 23 cm) alongside the personal item,
        with a combined weight limit of 10 kg for both. Flex, Premium, and Premium Flex keep the same two-bag
        allowance but raise the combined weight limit to 15 kg. Check your bag against Norwegian and 52 other
        airlines with our <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage by fare</h2>
      <table>
        <thead>
          <tr>
            <th>Fare</th>
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
        Checked bags can&apos;t exceed 250 x 79 x 112 cm or 32 kg under any circumstances -- that&apos;s a hard
        safety cutoff, not a fee tier. Overweight bags between 23-32 kg cost £12 per kilogram. Buying a checked
        bag at the airport instead of online costs £40 for a direct flight or £80 if you&apos;re connecting.
      </p>

      <h2>Instruments and infants</h2>
      <p>
        Smaller musical instruments fly as carry-on if they fit the weight limit; larger ones up to 140 x 46 x 30
        cm need an extra purchased seat. Infants get a minimal allowance of their own -- 5 kg of checked baggage
        and no dedicated cabin bag, though baby food and formula are allowed on board regardless.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you&apos;ve booked LowFare, don&apos;t plan on bringing a roller bag into the cabin -- it isn&apos;t
        included at any route length. See our{" "}
        <Link href="/guides/carry-on-vs-personal-item">carry-on vs. personal item guide</Link> for what actually
        fits under a seat.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.sendmybag.com/airlines/norwegian-air-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            Send My Bag — Norwegian Air Baggage Allowance 2026
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
