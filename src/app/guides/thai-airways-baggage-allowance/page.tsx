import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Thai Airways Baggage Allowance: The March 2026 Switch to Piece-Based (2026)",
  description:
    "Thai Airways moved from a weight-based to a piece-based checked baggage system in March 2026 -- the number of bags now matters, not just the total weight.",
};

const fareRows: { fare: string; checkedBags: string }[] = [
  { fare: "Economy Saver / Standard", checkedBags: "1 bag, 23 kg" },
  { fare: "Economy Flexi / Full Flex", checkedBags: "2 bags, 23 kg each" },
  { fare: "Business Class", checkedBags: "2 bags, 32 kg each" },
  { fare: "First Class", checkedBags: "3 bags, 32 kg each" },
];

export default function ThaiAirwaysBaggageAllowance() {
  return (
    <GuideArticle href="/guides/thai-airways-baggage-allowance" title="Thai Airways baggage allowance, by fare">
      <p>
        In March 2026, Thai Airways switched its checked baggage system from weight-based to piece-based. Under
        the old system, your fare came with a total kilogram budget you could split across bags however you
        liked. Now the number of bags is what counts -- packing everything into one heavier bag no longer works
        the way it used to.
      </p>

      <h2>Cabin bag and personal item</h2>
      <p>
        Economy gets one cabin bag (56 x 45 x 25 cm, up to 7 kg) plus a small personal item (37.5 x 25 x 12.5 cm,
        up to 1.5 kg). Business and First get two carry-on bags with a combined weight limit of 15 kg. Check your
        bag against Thai Airways and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage by fare, under the new system</h2>
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
        Every checked bag must stay under 158 cm total linear dimensions, including wheels and handles -- a rule
        travelers frequently miss since it wasn&apos;t the binding constraint under the old weight-based system.
        Excess baggage fees are zone-based by route distance, roughly $12-70 per kilogram; booking extra baggage
        online ahead of time saves 20-35% versus paying at the airport counter.
      </p>

      <h2>Elite status</h2>
      <p>
        Royal Orchid Plus Gold and Platinum members get one additional checked bag on top of their fare&apos;s
        standard allowance, regardless of which system applied when they earned status.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you flew Thai Airways before 2026 and are packing from memory, check your fare&apos;s piece count
        rather than assuming a shared weight budget -- the system genuinely changed. See our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for bags sized to a 23 kg, 158 cm
        allowance.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/thai-airways-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — Thai Airways Baggage Allowance 2026
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
