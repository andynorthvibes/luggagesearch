import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Wideroe Baggage Allowance: 8 kg Cabin, 23 kg Checked",
  description:
    "Wideroe cabin bag 55 x 40 x 20 cm plus a small bag, 8 kg combined. Checked: none on Mini, 1 x 23 kg on Smart, up to 2 x 23 kg on Flex. Over 23 kg flies standby.",
  alternates: {
    canonical: "/guides/wideroe-baggage-allowance",
  },
};

export default function WideroeBaggageAllowance() {
  return (
    <GuideArticle href="/guides/wideroe-baggage-allowance" title="Wideroe baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        Wideroe&apos;s regional Norwegian network is flown largely on smaller aircraft with genuinely limited
        cargo hold space, and the airline is upfront about what that means: checked baggage over 23 kg is only
        accepted on a standby basis. If the hold is full, an overweight bag can be left behind and follow on a
        later flight rather than travel with you.
      </p>

      <h2>Checked baggage by ticket type</h2>
      <p>
        Mini: no checked baggage included. Smart and Senior: 1 piece up to 23 kg. Flex and Full Flex: 1 piece up
        to 23 kg on routes with public service obligation (PSO) status, or 2 pieces up to 23 kg on other routes.
      </p>

      <h2>Cabin baggage</h2>
      <p>
        Mini includes one small bag only, up to 40 x 30 x 15 cm. Smart, Flex and Full Flex all include one piece
        of hand luggage up to 55 x 40 x 20 cm plus the same small bag. The 8 kg weight limit covers the cabin bag and small bag together. Check your bag against Wideroe and 52
        other airlines with our <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Bottom line</h2>
      <p>
        If your itinerary includes a Wideroe leg on a smaller regional aircraft, keep checked bags at or under 23
        kg where you can -- going over doesn&apos;t just cost more, it risks the bag not making your specific
        flight.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://help.wideroe.no/hc/en-gb/articles/29531904831378-Baggage-Rules" target="_blank" rel="noopener noreferrer nofollow">
            Wideroe Help — Baggage Rules
          </a> Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
