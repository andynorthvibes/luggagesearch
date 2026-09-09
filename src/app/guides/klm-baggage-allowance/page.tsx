import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "KLM: What 'Economy Basic' Actually Means",
  description:
    "KLM's Economy Basic sounds like a standard fare but includes only an under-seat bag -- no cabin bag, no checked bag. The naming trap and full breakdown.",
  alternates: {
    canonical: "/guides/klm-baggage-allowance",
  },
};

const fareRows: { fare: string; checkedBags: string }[] = [
  { fare: "Economy Basic", checkedBags: "None -- and no full cabin bag either" },
  { fare: "Economy Light", checkedBags: "None included" },
  { fare: "Economy Standard / Flex", checkedBags: "1 × 23 kg" },
  { fare: "Premium Comfort", checkedBags: "2 × 23 kg each" },
  { fare: "Business Class", checkedBags: "2 × 32 kg each" },
];

export default function KlmBaggageAllowance() {
  return (
    <GuideArticle href="/guides/klm-baggage-allowance" title="KLM baggage allowance, by fare" amazonPicks={CARRY_ON_PICKS}>
      <p>
        KLM&apos;s cheapest fare has a naming problem: &quot;Economy Basic&quot; sounds like a standard economy
        ticket with the usual cabin bag included, minus a checked bag. It isn&apos;t — it&apos;s a genuinely
        stripped-down fare with a small under-seat bag only.
      </p>

      <h2>Cabin bag and personal item</h2>
      <p>
        On most fares, the main cabin bag (55 x 35 x 25 cm) plus a personal item (40 x 30 x 15 cm) are included,
        combined up to 12 kg in Economy and 18 kg in Business, including handles and wheels in the measurement.
        Check your specific bag against this and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Economy Basic: the naming trap</h2>
      <p>
        Economy Basic includes only a small under-seat bag — no full-size cabin bag, and no checked bag. Many
        travelers assume &quot;Basic&quot; is a version of standard Economy with fewer extras, but the cabin
        allowance itself is smaller too. Check your fare&apos;s exact baggage terms at booking rather than
        assuming based on the name.
      </p>

      <h2>Checked baggage by fare</h2>
      <table>
        <thead>
          <tr>
            <th>Fare</th>
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
        Pre-booking an extra checked bag online costs roughly €25-75 within Europe, or €30-240 intercontinentally
        — airport prices run roughly double. KLM refuses any bag over 32 kg outright rather than charging a larger
        fee; overweight bags between 23-32 kg incur a flat fee starting around €75-300 depending on route.
      </p>

      <h2>Flying Blue status now reaches Basic and Light fares</h2>
      <p>
        As of the 2026 policy update, Flying Blue Silver and Gold members get one additional free checked bag, and
        Platinum/Ultimate get two — and this now applies even on Basic and Light fares, which previously excluded
        status perks entirely. Since Flying Blue is shared with Air France, the bonus applies on both
        airlines&apos; flights.
      </p>

      <h2>Bottom line</h2>
      <p>
        Don&apos;t assume Economy Basic on KLM gets you a normal cabin bag just because it isn&apos;t labeled
        &quot;Light&quot; — check the exact allowance before you pack. See our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for what to look for once you know
        your weight budget.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/klm-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — KLM Baggage Allowance 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.klm.com" target="_blank" rel="noopener noreferrer nofollow">klm.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
