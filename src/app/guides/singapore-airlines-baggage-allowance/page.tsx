import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Singapore Airlines Baggage Allowance: Even the Cheapest Fare Includes a Checked Bag (2026)",
  description:
    "Singapore Airlines runs a weight-concept system on most routes and a piece-concept on flights to the US and Canada -- and KrisFlyer status stacks extra allowance on top of either.",
  alternates: {
    canonical: "/guides/singapore-airlines-baggage-allowance",
  },
};

const weightRows: { cabin: string; allowance: string }[] = [
  { cabin: "Economy Lite / Value", allowance: "25 kg" },
  { cabin: "Economy Standard / Flexi", allowance: "30 kg" },
  { cabin: "Premium Economy", allowance: "35 kg" },
  { cabin: "Business", allowance: "40 kg" },
  { cabin: "First & Suites", allowance: "50 kg" },
];

export default function SingaporeAirlinesBaggageAllowance() {
  return (
    <GuideArticle
      href="/guides/singapore-airlines-baggage-allowance"
      title="Singapore Airlines baggage allowance, explained" amazonPicks={CARRY_ON_PICKS}
    >
      <p>
        Singapore Airlines does something most full-service carriers don&apos;t anymore: even its cheapest Economy
        fare includes a checked bag. The catch is figuring out which of two different checked-baggage systems
        applies to your route.
      </p>

      <h2>Cabin bag: 7 kg, weighed at the gate</h2>
      <p>
        Economy and Premium Economy get one cabin bag up to 7 kg and 115 cm total dimensions, plus one personal
        item. Business, First and Suites get two cabin bags (14 kg combined). Cabin bags are weighed and sized
        again at the gate, not just check-in — a bag that slips through check-in can still get gate-checked if
        it&apos;s over. Check your specific bag against this and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage: weight concept on most routes</h2>
      <p>
        On most routes, Singapore Airlines uses a total weight allowance you can split across any number of bags,
        as long as no single bag exceeds 32 kg:
      </p>
      <table>
        <thead>
          <tr>
            <th>Cabin</th>
            <th>Total weight allowance</th>
          </tr>
        </thead>
        <tbody>
          {weightRows.map((row) => (
            <tr key={row.cabin}>
              <td className="font-semibold">{row.cabin}</td>
              <td>{row.allowance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Notably, even the cheapest Economy Lite fare includes 25 kg of checked baggage — a real point of difference
        from low-cost and mid-tier carriers that charge extra for any checked bag on their base fare.
      </p>

      <h2>Except on US and Canada routes: piece concept instead</h2>
      <p>
        Flights to and from the US and Canada switch to a piece-based system: Economy and Premium Economy get 2
        bags at up to 23 kg each; Business, First and Suites get 2 bags at up to 32 kg each. The 32 kg absolute
        maximum per bag applies across the entire network, on both systems.
      </p>

      <h2>KrisFlyer and PPS status stack extra allowance</h2>
      <p>
        Elite status adds to whichever allowance applies to your fare, not instead of it: PPS Club members get
        either double the weight allowance or two extra bags on piece routes; KrisFlyer Elite Gold adds 20 kg or
        one extra bag; KrisFlyer Elite Silver adds 10 kg or one extra bag. Worth checking if you&apos;re close to a
        status threshold before a heavily-packed trip.
      </p>

      <h2>Bottom line</h2>
      <p>
        Check whether your specific route runs on the weight or piece system before you assume your usual
        allowance carries over — and if you have KrisFlyer or PPS status, factor the bonus allowance in before you
        pay for an extra bag.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://deeparrival.com/airlines/singapore-airlines/baggage-fees/" target="_blank" rel="noopener noreferrer nofollow">
            Deep Arrival — Singapore Airlines Baggage Fees 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.singaporeair.com" target="_blank" rel="noopener noreferrer nofollow">singaporeair.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
