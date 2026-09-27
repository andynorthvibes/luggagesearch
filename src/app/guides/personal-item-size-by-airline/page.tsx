import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Personal Item Size by Airline: Free Under-Seat Bag Limits",
  description:
    "Free under-seat bag sizes for 17 European airlines, checked against each airline's own site: from 40 x 30 x 15 cm up to easyJet's 45 x 36 x 20 cm.",
  alternates: {
    canonical: "/guides/personal-item-size-by-airline",
  },
};

type Row = {
  airline: string;
  guide: string;
  size: string;
  note: string;
};

// Checked against each airline's own baggage page on 27 September 2026.
// Grouped from smallest to largest free under-seat bag.
const ROWS: Row[] = [
  { airline: "airBaltic", guide: "/guides/airbaltic-baggage-allowance", size: "40 × 30 × 15 cm", note: "MINI fare: under-seat bag only" },
  { airline: "Air France", guide: "/guides/air-france-baggage-allowance", size: "40 × 30 × 15 cm", note: "Cheapest fares: no cabin bag; 12 kg total" },
  { airline: "Finnair", guide: "/guides/finnair-baggage-allowance", size: "40 × 30 × 15 cm", note: "Economy Superlight: under-seat bag only" },
  { airline: "KLM", guide: "/guides/klm-baggage-allowance", size: "40 × 30 × 15 cm", note: "Economy Basic: under-seat bag only" },
  { airline: "Lufthansa", guide: "/guides/lufthansa-baggage-rules", size: "40 × 30 × 15 cm", note: "Economy Basic (short/medium-haul): under-seat bag only" },
  { airline: "Pegasus", guide: "/guides/pegasus-airlines-baggage-allowance", size: "40 × 30 × 15 cm, 3 kg", note: "Light (international): under-seat bag only" },
  { airline: "SAS", guide: "/guides/sas-baggage-allowance", size: "40 × 30 × 15 cm", note: "Economy Light in Europe: under-seat bag only" },
  { airline: "TAP Air Portugal", guide: "/guides/tap-air-portugal-baggage-allowance", size: "40 × 30 × 15 cm, 2 kg", note: "Economy includes a cabin bag too" },
  { airline: "Widerøe", guide: "/guides/wideroe-baggage-allowance", size: "40 × 30 × 15 cm", note: "Mini: under-seat bag only; 8 kg total" },
  { airline: "Jet2", guide: "/guides/jet2-baggage-allowance", size: "40 × 30 × 20 cm", note: "A 10 kg cabin bag is included on every fare" },
  { airline: "Norwegian", guide: "/guides/norwegian-baggage-allowance", size: "40 × 30 × 20 cm", note: "LowFare: under-seat bag only" },
  { airline: "Ryanair", guide: "/guides/ryanair-baggage-rules", size: "40 × 30 × 20 cm", note: "Without Priority: under-seat bag only" },
  { airline: "Transavia", guide: "/guides/transavia-baggage-allowance", size: "40 × 30 × 20 cm, 10 kg", note: "Cabin bag included on Smart and Max" },
  { airline: "Vueling", guide: "/guides/vueling-baggage-allowance", size: "40 × 30 × 20 cm", note: "Cheapest fares: under-seat bag only" },
  { airline: "Wizz Air", guide: "/guides/wizz-air-baggage-rules", size: "40 × 30 × 20 cm, 10 kg", note: "Cabin trolley needs WIZZ Priority" },
  { airline: "Eurowings", guide: "/guides/eurowings-baggage-allowance", size: "40 × 30 × 25 cm", note: "BASIC: under-seat bag only" },
  { airline: "easyJet", guide: "/guides/easyjet-baggage-allowance", size: "45 × 36 × 20 cm, 15 kg", note: "Large cabin bag is a paid extra" },
];

const FAQ = [
  {
    q: "What is the standard personal item size?",
    a: "There isn't one. Among the European airlines we checked, the free under-seat bag ranges from 40 x 30 x 15 cm (Lufthansa, SAS, KLM, Air France, Finnair and others) to 45 x 36 x 20 cm on easyJet. The most common budget-airline size is 40 x 30 x 20 cm.",
  },
  {
    q: "Which personal item size works on every airline?",
    a: "A bag of 40 x 30 x 15 cm or smaller fits the free under-seat allowance on all 17 airlines in our table. A 40 x 30 x 20 cm bag works on Ryanair, Wizz Air, Vueling, Transavia, Norwegian, Jet2, Eurowings and easyJet, but is 5 cm too deep for the 40 x 30 x 15 cm airlines.",
  },
  {
    q: "What is Ryanair's free bag size?",
    a: "Ryanair's free small bag is 40 x 30 x 20 cm and must fit under the seat in front of you. A 10 kg cabin bag up to 55 x 40 x 20 cm needs Priority.",
  },
];

export default function PersonalItemSizeByAirline() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <GuideArticle href="/guides/personal-item-size-by-airline" title="Personal item size by airline">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p>
        On a cheap European fare, the free under-seat bag is often the only thing you&apos;re allowed to bring
        into the cabin. Its size isn&apos;t standard. We checked 17 airlines on their own sites. They fall into
        four sizes, and the biggest free bag (easyJet&apos;s) holds about 80% more than the smallest.
      </p>

      <h2>Free under-seat bag sizes, smallest to largest</h2>
      <table>
        <thead>
          <tr>
            <th>Airline</th>
            <th>Free under-seat bag</th>
            <th>On the cheapest fare</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.airline}>
              <td className="font-semibold">
                <Link href={row.guide}>{row.airline}</Link>
              </td>
              <td>{row.size}</td>
              <td>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-sm">
        Sizes include wheels and handles where the airline says so. Weight is only listed where the airline sets a
        separate limit for the small bag.
      </p>

      <h2>The four sizes</h2>
      <ul>
        <li>
          <strong>40 x 30 x 15 cm</strong>: the network airlines (Lufthansa, SAS, KLM, Air France, Finnair, TAP)
          plus airBaltic, Widerøe and Pegasus. The slimmest limit, and the one that catches most people out.
        </li>
        <li>
          <strong>40 x 30 x 20 cm</strong>: the budget standard. Ryanair (since 2025), Wizz Air, Vueling,
          Transavia, Norwegian and Jet2.
        </li>
        <li>
          <strong>40 x 30 x 25 cm</strong>: Eurowings, the deepest free bag of the 40 x 30 group.
        </li>
        <li>
          <strong>45 x 36 x 20 cm</strong>: easyJet, the largest free under-seat bag we track, up to 15 kg.
        </li>
      </ul>

      <h2>Which bag to buy</h2>
      <p>
        If you fly many different airlines, a soft backpack or tote no bigger than <strong>40 x 30 x 15 cm</strong>{" "}
        is the only size that fits every free allowance in the table. If you mostly fly the budget airlines, a
        40 x 30 x 20 cm bag gives you a third more space and still works on Ryanair, Wizz Air, Vueling, Transavia,
        Norwegian, Jet2, Eurowings and easyJet.
      </p>
      <p>
        A soft bag you can squash beats a rigid one: gate staff check the bag in a sizer frame, and a soft bag
        that&apos;s slightly overpacked can still be pressed in. For the full cabin bag (the one for the overhead
        locker), check your bag against 53 airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>, and read{" "}
        <Link href="/guides/carry-on-vs-personal-item">carry-on vs personal item</Link> for the difference
        between the two.
      </p>

      <h2>Frequently asked questions</h2>
      <div className="space-y-2">
        {FAQ.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          Each airline&apos;s own published cabin baggage page, linked from the airline&apos;s guide on this site.
          Rules change, so confirm with the airline before you fly. Last verified: 27 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
