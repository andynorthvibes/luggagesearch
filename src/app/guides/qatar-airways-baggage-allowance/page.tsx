import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Qatar Airways Baggage Allowance: The Tightest Carry-On Limit We Track (2026)",
  description:
    "Qatar Airways caps cabin bags at 50 x 37 x 25 cm -- smaller than most airlines -- and splits checked baggage between a weight system and a piece system depending on route.",
};

const fareRows: { fare: string; checkedBags: string }[] = [
  { fare: "Economy Lite (piece-concept routes)", checkedBags: "1 bag, 23 kg" },
  { fare: "Economy Classic and above (piece-concept routes)", checkedBags: "2 bags, 23 kg each" },
  { fare: "Economy (weight-concept routes)", checkedBags: "20-35 kg total, shared across bags" },
  { fare: "Business Class", checkedBags: "40 kg total, or 2 bags at 32 kg each on piece routes" },
  { fare: "First Class", checkedBags: "50 kg total, or 2 bags at 32 kg each on piece routes" },
];

export default function QatarAirwaysBaggageAllowance() {
  return (
    <GuideArticle href="/guides/qatar-airways-baggage-allowance" title="Qatar Airways baggage allowance, by fare">
      <p>
        Run a standard 55 x 35 x 20 cm carry-on through our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link> against all 53 airlines we track, and Qatar
        Airways is the one that stops it. Its cabin bag limit is 50 x 37 x 25 cm -- a full 5 cm shorter on the
        longest side than the 55 cm most airlines allow. If your bag is sized for &quot;the industry standard,&quot;
        Qatar is the airline that catches it.
      </p>

      <h2>Cabin bag limits</h2>
      <p>
        Economy passengers get one cabin bag up to 7 kg at 50 x 37 x 25 cm (10 kg on routes to and from Brazil).
        Business and First Class get two bags totaling 15 kg. Departing the US, expect the standard cabin bag plus
        one personal item rather than Qatar&apos;s usual allowance, per TSA rules.
      </p>

      <h2>Two different checked baggage systems</h2>
      <p>
        Qatar splits checked baggage by route. Most of the network uses a <strong>weight concept</strong>: your
        fare comes with a total kilogram budget (roughly 20-35 kg in Economy, 40 kg in Business, 50 kg in First)
        that you can split across bags however you like, up to 158-300 cm per bag depending on the route. Flights
        to and from Africa and the Americas instead use a <strong>piece concept</strong>: a fixed number of bags,
        each capped at 23 kg in Economy or 32 kg in Business/First.
      </p>
      <table>
        <thead>
          <tr>
            <th>Fare / cabin</th>
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
        No single checked bag may exceed 32 kg on either system -- heavier items need repacking or Qatar&apos;s
        cargo service. Overweight fees between 23-32 kg run around $75, and an extra bag typically costs
        $130-$330 depending on the route.
      </p>

      <h2>Mixed-cabin bookings and infants</h2>
      <p>
        If your itinerary crosses multiple cabins (say, Economy on one leg and Business on a connection), Qatar
        applies the highest allowance across the whole journey. Infants get a separate checked allowance, usually
        10 kg or one piece, plus a free stroller or car seat.
      </p>

      <h2>Bottom line</h2>
      <p>
        Before you fly Qatar, check your exact cabin bag against 50 x 37 x 25 cm rather than assuming it clears
        just because it&apos;s cleared other airlines -- and confirm whether your route uses the weight or piece
        system before packing your checked bags. See our{" "}
        <Link href="/guides/best-carry-on-luggage">best carry-on luggage guide</Link> for compact options that
        clear even Qatar&apos;s tighter limit.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/qatar-airways-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — Qatar Airways Baggage Allowance 2026
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
