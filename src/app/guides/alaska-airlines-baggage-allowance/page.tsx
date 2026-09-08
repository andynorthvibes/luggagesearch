import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Alaska Airlines Baggage Allowance: Fees, Perks & the 20-Minute Guarantee (2026)",
  description:
    "Alaska charges the same checked bag fee online or at the airport since April 2026 -- and backs its baggage delivery with a 20-minute guarantee. Here's the full breakdown.",
};

export default function AlaskaAirlinesBaggageAllowance() {
  return (
    <GuideArticle
      href="/guides/alaska-airlines-baggage-allowance"
      title="Alaska Airlines baggage allowance and fees"
    >
      <p>
        Alaska includes a full carry-on and personal item on every fare, even its cheapest Saver tickets — and
        backs up its checked-bag service with a guarantee most airlines don&apos;t bother offering.
      </p>

      <h2>Carry-on: included on every fare, even Saver</h2>
      <p>
        One carry-on (22 x 14 x 9 in) and one personal item are free regardless of fare, including the basic
        Saver tier. Check your specific bag against this and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked bag fees: no more online discount</h2>
      <p>
        First bag: $45 per person, each way. Second bag: $55. Third and beyond: $200 each. Since April 2026, Alaska
        removed its online prepayment discount — the price is the same whether you pay in advance or at the
        airport, which is unusual; most airlines still charge a meaningful premium for paying at the counter.
      </p>
      <p>
        Overweight fees: $100 for 51–70 lb, $200 for 71–100 lb. Oversized bags (63–115 in) add $200. Anything over
        100 lb or 115 in needs to go as cargo instead of checked baggage.
      </p>

      <h2>Free bag perks</h2>
      <p>
        The Atmos Rewards Visa card waives the first checked bag fee for the cardholder <strong>and up to 6
        guests</strong> on the same reservation — a notably generous companion allowance compared to most
        co-branded airline cards. Elite status also unlocks free bags starting at the first tier, with more at
        higher tiers; First Class includes two free bags at a 70 lb limit. Active-duty military get up to 5 free
        bags at 70 lb each.
      </p>

      <h2>The 20-minute baggage guarantee</h2>
      <p>
        If your checked bag doesn&apos;t reach the carousel within 20 minutes of the aircraft parking at the gate,
        Alaska credits you 2,500 rewards points or $25 — a concrete service guarantee that&apos;s rare in the
        industry.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you fly Alaska with a group, the Atmos Rewards Visa&apos;s 6-guest free-bag perk is worth checking
        before everyone pays individually. See our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for what to look for once you know
        your weight budget.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://deeparrival.com/airlines/alaska-airlines/baggage-fees/" target="_blank" rel="noopener noreferrer nofollow">
            Deep Arrival — Alaska Airlines Baggage Fees 2026
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
