import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Jetstar Baggage Allowance: Carry-On Rules Are Changing February 2, 2027",
  description:
    "Jetstar's Starter fare currently includes just 7kg of carry-on across two items -- and the airline has already announced its carry-on rules on Jetstar Airways flights are changing from February 2, 2027.",
};

export default function JetstarBaggageAllowance() {
  return (
    <GuideArticle href="/guides/jetstar-baggage-allowance" title="Jetstar baggage allowance">
      <p>
        Jetstar&apos;s cheapest Starter fare includes 7 kg of carry-on shared across two items -- no separate
        full-size cabin bag, just that combined weight split between a personal item and a small bag. It can be
        raised to 14 kg either by buying the +7kg Extra Carry-On Baggage add-on or by booking a fare or bundle
        that already includes 14 kg.
      </p>

      <h2>What&apos;s changing</h2>
      <p>
        Jetstar has announced that carry-on rules are changing on Jetstar Airways (JQ) flights from February 2,
        2027 -- the current 7 kg/14 kg structure described here applies if you&apos;re traveling before that date,
        or flying with Jetstar Japan (GK), which isn&apos;t affected. If your trip falls after February 2, 2027,
        check Jetstar&apos;s site for the updated allowance rather than assuming the current figures still apply.
      </p>

      <h2>Cabin and checked baggage</h2>
      <p>
        Carry-on baggage is included with every booking, though the amount varies by fare and bundle -- check
        your bag against Jetstar and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>. Checked baggage isn&apos;t included on the
        cheapest fares by default; up to 40 kg can be purchased online during booking, and checked weight can
        never be used to top up your carry-on allowance -- the two are kept strictly separate.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you&apos;re booking a Jetstar Airways flight for after February 2, 2027, don&apos;t plan your packing
        around the 7 kg/14 kg figures in this guide until you&apos;ve confirmed the new rule -- everything else on
        this page describes the allowance as it stands today.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.jetstar.com/us/en/flights/baggage/carry-on-baggage" target="_blank" rel="noopener noreferrer nofollow">
            Jetstar — Carry-on baggage
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
