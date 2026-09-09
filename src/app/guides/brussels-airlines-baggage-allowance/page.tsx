import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Brussels Airlines: No Checked Bag on Basic or Light",
  description:
    "Brussels Airlines' Economy Basic and Light fares carry no checked baggage -- Comfort steps up to one 23kg bag, Business includes two bags at 32kg each.",
  alternates: {
    canonical: "/guides/brussels-airlines-baggage-allowance",
  },
};

export default function BrusselsAirlinesBaggageAllowance() {
  return (
    <GuideArticle href="/guides/brussels-airlines-baggage-allowance" title="Brussels Airlines baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Brussels Airlines splits its Economy cabin cleanly in two on checked baggage: Basic and Light include
        none at all, while Comfort, Comfort Green and Flex all step up to one bag at 23 kg. Business Class,
        across every fare tier, includes two bags at 32 kg each.
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
          <tr>
            <td>Economy Basic / Light</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Economy Comfort / Comfort Green / Flex</td>
            <td>1 x 23 kg</td>
          </tr>
          <tr>
            <td>Business (any tier)</td>
            <td>2 x 32 kg</td>
          </tr>
        </tbody>
      </table>
      <p>
        Every checked bag has to stay within 158 cm total dimensions (length + width + height, wheels and
        handles included). Check your carry-on against Brussels Airlines and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>A route-specific catch worth knowing</h2>
      <p>
        Brussels Airlines has blocked extra baggage purchases entirely on flights between Brussels and Yerevan
        from June 15 to September 15, 2026, for both Economy and Business passengers -- whatever you&apos;re
        flying with on that route this summer is what you get, with no option to add more at check-in.
      </p>

      <h2>Bottom line</h2>
      <p>
        Traveling on Basic or Light and expect to check a bag? Add it during booking rather than assuming it will
        be available later -- and if Yerevan is on your route this summer, pack to your fare&apos;s limit from
        the start.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.brusselsairlines.com/us/en/extra-services/baggage/checked-baggage" target="_blank" rel="noopener noreferrer nofollow">
            Brussels Airlines — Checked baggage
          </a> Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
