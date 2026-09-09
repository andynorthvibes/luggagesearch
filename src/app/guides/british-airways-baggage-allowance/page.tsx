import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "British Airways Baggage Allowance: Cabin & Checked, by Fare (2026)",
  description:
    "British Airways' checked allowance scales from 1 to 3 bags depending on cabin and fare — here's exactly what each one includes.",
  alternates: {
    canonical: "/guides/british-airways-baggage-allowance",
  },
};

export default function BritishAirwaysBaggageAllowance() {
  const rows: { cabin: string; checkedBags: string }[] = [
    { cabin: "Economy Basic", checkedBags: "0 — hand baggage only, checked bag is a paid add-on" },
    { cabin: "Economy Standard", checkedBags: "1 × 23 kg" },
    { cabin: "Premium Economy", checkedBags: "2 × 23 kg" },
    { cabin: "Business", checkedBags: "2 × 32 kg" },
    { cabin: "First", checkedBags: "3 × 32 kg" },
  ];

  return (
    <GuideArticle href="/guides/british-airways-baggage-allowance" title="British Airways baggage allowance, by fare">
      <p>
        British Airways&apos; checked baggage allowance scales cleanly with cabin and fare — the exception is its
        cheapest Economy fare, which includes no checked bag at all.
      </p>

      <h2>Cabin bag: generous size, no published weight limit</h2>
      <p>
        Every fare includes one cabin bag up to 56 x 45 x 25 cm. Unlike most European carriers, BA doesn&apos;t
        publish a cabin-bag weight limit — the only real constraint is being able to lift it into the overhead
        locker yourself. Check a specific bag against this and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked bag: scales by cabin and fare</h2>
      <table>
        <thead>
          <tr>
            <th>Cabin / fare</th>
            <th>Free checked baggage</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.cabin}>
              <td className="font-semibold">{row.cabin}</td>
              <td>{row.checkedBags}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        &quot;Basic&quot; is commonly a hand-baggage-only fare — if you need a checked bag on it, price the add-on
        before you book rather than assuming it&apos;s included. Standard Economy&apos;s 23 kg bag can carry an
        overweight surcharge (commonly around £65 or local equivalent) up to 32 kg; nothing heavier is accepted.
      </p>

      <h2>Bottom line</h2>
      <p>
        Don&apos;t let the airline&apos;s full-service reputation lead you to assume a checked bag is included —
        check the exact fare name. See our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for what to look for once you know
        your weight budget.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/british-airways-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — British Airways 2026 Baggage Allowance
          </a>
        </li>
        <li>
          British Airways&apos; own published baggage terms — fares, weight limits and fees change, so confirm on{" "}
          <a href="https://www.britishairways.com" target="_blank" rel="noopener noreferrer nofollow">britishairways.com</a> before flying. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
