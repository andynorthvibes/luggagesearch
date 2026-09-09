import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Lufthansa Baggage Rules: Cabin & Checked, by Fare Class (2026)",
  description:
    "Lufthansa's cabin bag limit is fixed, but the checked bag depends entirely on your fare class — here's what each one actually includes.",
  alternates: {
    canonical: "/guides/lufthansa-baggage-rules",
  },
};

export default function LufthansaBaggageRules() {
  const rows: { fare: string; freeCheckedBags: string; weight: string }[] = [
    { fare: "Economy Light", freeCheckedBags: "None — must be purchased separately", weight: "—" },
    { fare: "Economy Classic / Comfort", freeCheckedBags: "1 bag included", weight: "Up to 23 kg" },
    { fare: "Economy Flex", freeCheckedBags: "1 bag included", weight: "Up to 23 kg" },
  ];

  return (
    <GuideArticle href="/guides/lufthansa-baggage-rules" title="Lufthansa baggage rules, by fare class">
      <p>
        Lufthansa&apos;s cabin bag allowance is the same for everyone. The checked bag isn&apos;t — it depends
        entirely on which Economy fare you booked, and the cheapest one doesn&apos;t include a checked bag at all.
      </p>

      <h2>Cabin bag: fixed at 8 kg</h2>
      <p>
        Every Economy fare includes one cabin bag up to 55 x 40 x 23 cm and 8 kg — Lufthansa is one of the airlines
        that actually weighs cabin bags, unlike most US carriers. Check a specific bag against this and 52 other
        airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked bag: depends on your fare</h2>
      <table>
        <thead>
          <tr>
            <th>Fare</th>
            <th>Free checked bag</th>
            <th>Weight limit</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.fare}>
              <td className="font-semibold">{row.fare}</td>
              <td>{row.freeCheckedBags}</td>
              <td>{row.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Economy Light — Lufthansa&apos;s cheapest fare — does not include a checked bag. If you need one, you add it
        online (cheaper) or at the airport (more expensive). Economy Classic and Flex both include one 23 kg bag;
        the difference between them is mainly about booking flexibility, not baggage.
      </p>

      <h2>Overweight fees</h2>
      <p>
        Bags between 23 kg and 32 kg are accepted with an overweight fee — pricing varies by route and local taxes,
        but it&apos;s consistently cheaper to weigh your bag at home and repack than to pay at the counter. Nothing
        over 32 kg is accepted as checked baggage on most routes.
      </p>

      <h2>Bottom line</h2>
      <p>
        Don&apos;t assume a checked bag is included just because you&apos;re flying a full-service airline — on
        Lufthansa&apos;s cheapest fare, it isn&apos;t. Check your exact fare name before you pack, and see our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for what to look for once you know
        your weight budget.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/lufthansa-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — Lufthansa Baggage Allowance 2026
          </a>
        </li>
        <li>
          Lufthansa&apos;s own published baggage terms — fares, weight limits and fees change, so confirm on{" "}
          <a href="https://www.lufthansa.com" target="_blank" rel="noopener noreferrer nofollow">lufthansa.com</a> before flying. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
