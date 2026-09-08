import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Qantas Baggage Allowance: Weight-Based vs Piece-Based, by Route (2026)",
  description:
    "Qantas switches between a weight-based and a piece-based checked baggage system depending on your route -- here's which one applies, and what it means for how much you can pack.",
};

const checkedRows: { cabin: string; domestic: string; international: string; americas: string }[] = [
  { cabin: "Economy", domestic: "1 piece, 23 kg", international: "30 kg total (weight-based)", americas: "2 pieces, 32 kg combined" },
  { cabin: "Premium Economy", domestic: "1 piece, 23 kg", international: "40 kg total", americas: "2 pieces, 32 kg combined" },
  { cabin: "Business", domestic: "1 piece, 32 kg", international: "40 kg total", americas: "3 pieces, 32 kg combined" },
  { cabin: "First", domestic: "1 piece, 32 kg", international: "50 kg total", americas: "3 pieces, 32 kg combined" },
];

export default function QantasBaggageAllowance() {
  return (
    <GuideArticle href="/guides/qantas-baggage-allowance" title="Qantas baggage allowance: weight-based vs piece-based">
      <p>
        Qantas runs two different checked-baggage systems side by side, and which one applies to you depends on
        your route, not your fare. Get this wrong and you&apos;ll either underpack or get an unpleasant surprise at
        check-in.
      </p>

      <h2>Carry-on: 7 kg in Economy, 14 kg up front</h2>
      <p>
        International Economy gets one cabin bag up to 7 kg (max 115 cm total dimensions) plus one small personal
        item. Business and First get two bags totalling 14 kg. Domestic flights allow 2 pieces (or 1 piece plus a
        garment bag) up to 14 kg total, and regional Dash 8 aircraft are stricter still — just one 7 kg bag, 105 cm
        max. Check your specific bag against this and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage: it depends which system your route uses</h2>
      <p>
        On domestic flights and routes to/from the Americas, Qantas counts <strong>pieces</strong> — you get a set
        number of bags, each capped at 32 kg. On other international routes (Asia, Europe, elsewhere), Qantas counts{" "}
        <strong>total weight</strong> instead — one shared kilogram allowance across however many bags you check,
        as long as no single piece exceeds 32 kg.
      </p>
      <table>
        <thead>
          <tr>
            <th>Cabin</th>
            <th>Domestic (piece-based)</th>
            <th>International, non-Americas (weight-based)</th>
            <th>To/from the Americas (piece-based)</th>
          </tr>
        </thead>
        <tbody>
          {checkedRows.map((row) => (
            <tr key={row.cabin}>
              <td className="font-semibold">{row.cabin}</td>
              <td>{row.domestic}</td>
              <td>{row.international}</td>
              <td>{row.americas}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        If your itinerary combines a domestic leg with an international one on the same ticket, the international
        checked allowance applies to the whole journey — worth knowing if you&apos;re connecting through an
        Australian city on the way overseas.
      </p>

      <h2>Excess baggage fees (2026)</h2>
      <p>
        Domestic: roughly A$150 per extra piece, or A$60 per piece over 23 kg. International (non-Americas): around
        A$300 per extra piece. To/from the Americas: around US$200 per extra piece. Booking extra baggage online in
        advance is consistently cheaper — often close to half the per-kilogram price — than paying at the airport.
        The combined total per person is capped at 65 kg regardless of how it&apos;s split across pieces.
      </p>

      <h2>Watch for zero-baggage promotional fares</h2>
      <p>
        Some discounted Qantas fares include no checked baggage at all. Always check your booking confirmation
        rather than assuming a checked bag is included just because you&apos;re flying a full-service carrier — see
        our <Link href="/guides/best-checked-luggage">checked luggage guide</Link> once you know your weight budget.
      </p>

      <h2>Bottom line</h2>
      <p>
        Figure out which baggage system applies to your specific route before you pack — piece-based (domestic,
        Americas) rewards packing fewer, fuller bags; weight-based (other international routes) rewards keeping the
        combined total down, however you split it across pieces.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/qantas-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — Qantas Baggage Allowance 2026
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
