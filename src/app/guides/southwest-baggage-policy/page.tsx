import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Southwest Airlines Baggage Policy 2026: Who Still Gets Free Bags",
  description:
    "Southwest ended free checked bags for most passengers. Here's exactly who still gets them free, and what carry-on and checked limits actually are.",
};

export default function SouthwestBaggagePolicy() {
  const rows: { group: string; freeBags: string }[] = [
    { group: "Rapid Rewards A-List Preferred (+ up to 8 companions)", freeBags: "2 free checked bags" },
    { group: "Choice Extra Fare fliers & active-duty military", freeBags: "Free checked bags" },
    { group: "Rapid Rewards A-List", freeBags: "1 free bag (2nd is $35)" },
    { group: "Rapid Rewards co-branded credit cardholders", freeBags: "1 free bag (2nd is $45)" },
    { group: "Everyone else (Basic, Choice, Choice Preferred)", freeBags: "$35 first bag, $45 second bag" },
  ];

  return (
    <GuideArticle href="/guides/southwest-baggage-policy" title="Southwest's baggage policy has changed">
      <p>
        For years, &quot;two bags fly free&quot; was the reason people picked Southwest. That&apos;s no longer the
        default — most passengers now pay for checked bags, and it&apos;s worth knowing exactly which group you fall
        into before you book.
      </p>

      <h2>Who still gets free checked bags</h2>
      <table>
        <thead>
          <tr>
            <th>Group</th>
            <th>Checked bag allowance</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.group}>
              <td className="font-semibold">{row.group}</td>
              <td>{row.freeBags}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        If you don&apos;t hold elite status, a Choice Extra Fare, or a Southwest co-branded card, plan on $35 for
        your first checked bag and $45 for your second — on top of the ticket price.
      </p>

      <h2>Carry-on: still generous, still free</h2>
      <p>
        The carry-on allowance hasn&apos;t changed and is free for everyone: up to 24 x 16 x 10 in (roughly 61 x 41
        x 25 cm), with no published weight limit — you just need to be able to lift it into the overhead bin
        yourself. That&apos;s more generous on size than most US carriers. Check a specific bag against this and 15
        other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked bag size and weight limits</h2>
      <p>
        Whether or not your bag is free, it still has to fit the limits: 62 in total (length + width + height) and
        50 lbs per bag. A third bag costs $150 regardless of status. Oversized bags (over 62 in) add at least $200,
        and overweight bags (over 50 lbs) add at least $100 — bags over 100 lbs or 80 in total aren&apos;t accepted
        at all.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you don&apos;t qualify for a free checked bag, it&apos;s often cheaper to pack into Southwest&apos;s
        generous free carry-on instead of paying $35–45 to check one. Our{" "}
        <Link href="/tools/packing-list">packing list generator</Link> is built for exactly that — fitting a trip
        into carry-on-only.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.skyscanner.com/flights/advice/southwest-carry-on-luggage-rules-all-you-need-to-know" target="_blank" rel="noopener noreferrer nofollow">
            Skyscanner — Southwest carry-on rules &amp; checked bags in 2026
          </a>
        </li>
        <li>
          Southwest&apos;s own published baggage policy — fares, fees and qualifying tiers change, so confirm on{" "}
          <a href="https://www.southwest.com" target="_blank" rel="noopener noreferrer nofollow">southwest.com</a> before flying.
        </li>
      </ul>
    </GuideArticle>
  );
}
