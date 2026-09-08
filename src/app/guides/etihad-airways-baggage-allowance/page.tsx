import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Etihad Airways Baggage Allowance: Why Basic Economy Skips Loyalty Perks (2026)",
  description:
    "Etihad's Basic Economy fare includes zero checked bags -- and Etihad Guest status, which rescues other fares, explicitly doesn't apply to it.",
};

const fareRows: { fare: string; checkedBags: string }[] = [
  { fare: "Economy Basic", checkedBags: "None included" },
  { fare: "Economy Value / Choice", checkedBags: "23-30 kg total" },
  { fare: "Economy Choice Plus", checkedBags: "30-35 kg total" },
  { fare: "Business Class", checkedBags: "40 kg total" },
  { fare: "First Class / The Residence", checkedBags: "50 kg total" },
];

export default function EtihadAirwaysBaggageAllowance() {
  return (
    <GuideArticle href="/guides/etihad-airways-baggage-allowance" title="Etihad Airways baggage allowance, by fare">
      <p>
        On most airlines, elite loyalty status is the safety net that rescues a cheap ticket from a stingy
        baggage allowance. Etihad draws a harder line: Basic Economy includes no checked bags at all, and the
        guide notes explicitly that Etihad Guest loyalty perks don&apos;t apply to it. Status doesn&apos;t buy
        your way out of the cheapest fare here.
      </p>

      <h2>Cabin bag and personal item</h2>
      <p>
        Economy gets one cabin bag up to 7 kg at 56 x 36 x 23 cm. Business and First get two cabin bags totaling
        12 kg, plus a personal item up to 5 kg (23 x 39 x 19 cm). Gate staff can and do weigh cabin bags; anything
        over the limit gets checked with excess fees applied. Compare your bag against Etihad and 52 other
        airlines with our <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage: weight system, with a piece-based exception</h2>
      <p>
        Most of Etihad&apos;s international network uses a weight-based system, summarized below. Flights to and
        from the US and Canada instead use a piece system: 2 bags at 23 kg each in Economy, or 2 bags at 32 kg
        each in Business/First.
      </p>
      <table>
        <thead>
          <tr>
            <th>Fare / cabin</th>
            <th>Checked baggage (weight-based routes)</th>
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
        Every fare and cabin shares the same per-bag cap: 32 kg. Oversized bags (over 90 x 72 x 45 cm) cost up to
        $100/£80/€90 extra. Etihad doesn&apos;t publish flat overweight fees -- it calculates them through an
        online tool, with estimates ranging from around $40 for a minor overage to well over $500 for a heavier
        one. Buying extra baggage online ahead of time can save up to 65% versus paying at the airport.
      </p>

      <h2>What doesn&apos;t cost extra</h2>
      <p>
        One golf set up to 15 kg travels free, on top of your normal checked allowance. Pushchairs and infant car
        seats also travel free as additional items, separate from the checked baggage count.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you&apos;re booking Basic Economy on Etihad, budget for at least one checked bag upfront -- neither the
        fare nor your Etihad Guest tier will cover it. See our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for what holds up at 23 kg.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/etihad-airways-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — Etihad Airways Baggage Allowance 2026
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
