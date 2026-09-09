import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "How to Avoid Checked Baggage Fees",
  description:
    "Credit cards, elite status, fare class, and packing choices that actually avoid checked baggage fees — ranked by how much they save.",
  alternates: {
    canonical: "/guides/avoid-checked-baggage-fees",
  },
};

export default function AvoidCheckedBaggageFees() {
  return (
    <GuideArticle href="/guides/avoid-checked-baggage-fees" title="How to avoid checked baggage fees">
      <p>
        Checked bag fees now run $35–$75 one-way on most US airlines, and considerably more if you pay at the
        airport. There are a handful of ways around them that actually work — here they are, roughly in order of how
        reliably they save you money.
      </p>

      <h2>1. Don&apos;t check a bag</h2>
      <p>
        The most reliable way to avoid a checked-bag fee is to not need one. Our{" "}
        <Link href="/tools/packing-list">packing list generator</Link> builds a carry-on-only list from your trip
        length and climate, and our{" "}
        <Link href="/guides/best-carry-on-luggage">carry-on buying guide</Link> covers how to pick a bag that
        maximizes usable space within airline size limits.
      </p>

      <h2>2. An airline credit card</h2>
      <p>
        Co-branded airline cards are the most direct route to a free bag: the United Explorer Card includes a free
        checked bag on United flights, and Southwest&apos;s cards give the cardholder (and up to eight companions,
        on some cards) a free first checked bag. General travel cards help indirectly — Chase Sapphire Reserve&apos;s
        annual travel credit and Amex Platinum&apos;s airline incidental credit can both be applied toward baggage
        fees, though they&apos;re not a dedicated free-bag benefit.
      </p>

      <h2>3. Elite frequent-flyer status</h2>
      <p>
        Any tier of Delta Medallion status includes free checked bags. Alaska Airlines&apos; elite tiers include 2–3
        free bags depending on level. If you fly one airline regularly enough to be close to a status threshold,
        the free-bag value alone can be worth chasing it.
      </p>

      <h2>4. Alliance and partner status</h2>
      <p>
        Status earned on one airline can carry over to its alliance partners — for example, SkyTeam elite status
        from another airline can unlock free checked bags on Delta if your frequent-flyer number is attached to the
        booking. Worth checking before assuming a partner-airline flight has no status benefit.
      </p>

      <h2>5. Fare class</h2>
      <p>
        Business and first class tickets typically include at least one free checked bag. On the other end, basic
        economy fares on several airlines exclude even a full-size carry-on, not just checked bags — read the fare
        rules before you book, not after you&apos;re at the gate.
      </p>

      <h2>6. Compare the total cost, not just the fare</h2>
      <p>
        A cheaper base fare on a budget carrier can end up more expensive than a full-service airline once a
        checked bag is added — this is increasingly true now that airlines like{" "}
        <Link href="/guides/southwest-baggage-policy">Southwest charge for most checked bags</Link> and{" "}
        <Link href="/guides/ryanair-baggage-rules">Ryanair&apos;s free allowance is a small personal item only</Link>.
        Price your trip with the bags you actually need included, not just the base ticket.
      </p>

      <h2>Bottom line</h2>
      <p>
        Packing carry-on-only beats every workaround, because it doesn&apos;t depend on holding a specific card or
        status. Where checking a bag is unavoidable, an airline credit card or elite status pays for itself
        quickly if you fly that airline more than once or twice a year.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://upgradedpoints.com/travel/airlines/how-to-avoid-paying-baggage-fees/" target="_blank" rel="noopener noreferrer nofollow">
            Upgraded Points — The Ultimate Guide to Avoid Paying for Baggage Fees
          </a>
        </li>
        <li>
          <a href="https://www.cnbc.com/select/airlines-raising-checked-bag-fees-how-to-avoid-paying-them/" target="_blank" rel="noopener noreferrer nofollow">
            CNBC Select — Airlines Are Raising Checked Bag Fees: How to Avoid Paying Them
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
