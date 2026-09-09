import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Transavia Baggage Allowance: Smart Gets a Cabin Bag, Plus Gets Checked Bags -- Not Both",
  description:
    "Transavia's two middle fares split in opposite directions: Smart adds a full cabin bag but no checked baggage, while Plus adds checked baggage but no upgraded cabin bag.",
  alternates: {
    canonical: "/guides/transavia-baggage-allowance",
  },
};

export default function TransaviaBaggageAllowance() {
  return (
    <GuideArticle href="/guides/transavia-baggage-allowance" title="Transavia baggage allowance">
      <p>
        Transavia&apos;s four fares don&apos;t simply stack more baggage on top of each other as you pay more.
        Basic and Plus both cap you at a single small underseat bag; Smart and Max both add a full-size cabin
        bag. But Smart -- despite adding the cabin bag -- includes no checked baggage at all, while Plus adds 20
        kg of checked baggage without upgrading the cabin bag. The two middle-priced fares solve different
        problems, not the same problem twice as well.
      </p>

      <h2>Cabin and checked baggage by fare</h2>
      <table>
        <thead>
          <tr>
            <th>Fare</th>
            <th>Cabin baggage</th>
            <th>Checked baggage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic</td>
            <td>1 underseat bag, 40 x 30 x 20 cm</td>
            <td>None included</td>
          </tr>
          <tr>
            <td>Plus</td>
            <td>1 underseat bag, 40 x 30 x 20 cm</td>
            <td>20 kg</td>
          </tr>
          <tr>
            <td>Smart</td>
            <td>Underseat bag + 1 cabin bag (up to 55 x 40 x 25 cm)</td>
            <td>None included</td>
          </tr>
          <tr>
            <td>Max</td>
            <td>Underseat bag + 1 cabin bag (up to 55 x 40 x 25 cm)</td>
            <td>30 kg</td>
          </tr>
        </tbody>
      </table>
      <p>
        Check your carry-on&apos;s exact size against Transavia and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link> before deciding which fare actually covers
        what you&apos;re bringing.
      </p>

      <h2>Bottom line</h2>
      <p>
        If you need a real cabin bag, Smart or Max is the floor -- Basic and Plus only ever get the small
        underseat piece. If you need to check a bag, Plus is enough on its own; you don&apos;t need to pay up to
        Max unless you also want the bigger cabin bag.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://www.transavia.com/help/en-eu/search-and-book/basic-smart-plus-max-fare" target="_blank" rel="noopener noreferrer nofollow">
            Transavia — Fares: Basic, Smart, Plus, Max
          </a> Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
