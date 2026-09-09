import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Norse Atlantic Airways Baggage Allowance: The Personal Item Has No Weight Limit",
  description:
    "Norse Atlantic Airways doesn't cap the weight of its personal item at all, since it's designed for under-seat placement rather than the overhead bin -- unusual among long-haul carriers.",
  alternates: {
    canonical: "/guides/norse-atlantic-airways-baggage-allowance",
  },
};

export default function NorseAtlanticAirwaysBaggageAllowance() {
  return (
    <GuideArticle href="/guides/norse-atlantic-airways-baggage-allowance" title="Norse Atlantic Airways baggage allowance">
      <p>
        Every Norse Atlantic Airways fare includes the same two cabin items: a piece of hand luggage up to 56 x
        45 x 25 cm and 10 kg, plus a personal item up to 40 x 30 x 15 cm -- with officially no weight limit on
        that personal item, since it&apos;s meant to fit under the seat rather than compete for overhead bin
        space. Most long-haul carriers cap even the personal item; Norse doesn&apos;t.
      </p>

      <h2>Cabin bag by fare</h2>
      <p>
        Identical across every fare: 1 hand luggage piece (10 kg) + 1 personal item (no weight cap). Check your
        bag against Norse Atlantic and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage by fare</h2>
      <p>
        Economy Light and Premium Light include no checked baggage. Economy Classic, Economy Flextra and Premium
        Classic each include one piece up to 23 kg. Premium Flextra includes two pieces at 23 kg each. Extra bags
        can be added separately: $60 for up to 15 kg, $75 for up to 23 kg, or $170 for up to 32 kg.
      </p>

      <h2>Bottom line</h2>
      <p>
        On a Light fare, the cabin allowance is genuinely generous for what it is -- a heavy personal item is
        fine -- but budget separately for any checked bag, since neither Light tier includes one.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.cestee.com/airline/norse-atlantic-airways/luggage" target="_blank" rel="noopener noreferrer nofollow">
            Cestee — Norse Atlantic Airways baggage allowance (hand and checked)
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.flynorse.com" target="_blank" rel="noopener noreferrer nofollow">flynorse.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
