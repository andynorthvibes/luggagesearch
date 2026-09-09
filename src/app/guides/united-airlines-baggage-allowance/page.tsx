import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "United Airlines Baggage Allowance: Fare Class vs Elite Status (2026)",
  description:
    "United's checked bag fee depends on fare class first, but MileagePlus elite status and some credit cards can waive it entirely -- here's how the pieces fit together.",
  alternates: {
    canonical: "/guides/united-airlines-baggage-allowance",
  },
};

export default function UnitedAirlinesBaggageAllowance() {
  return (
    <GuideArticle
      href="/guides/united-airlines-baggage-allowance"
      title="United Airlines baggage allowance and fees"
    >
      <p>
        United&apos;s checked bag fee looks like a simple fare-class question, but two other factors — MileagePlus
        elite status and certain co-branded credit cards — can waive the fee entirely regardless of fare. Worth
        checking before you assume you have to pay.
      </p>

      <h2>Carry-on and personal item</h2>
      <p>
        Every fare includes one carry-on (9 x 14 x 22 in / 23 x 36 x 56 cm including wheels and handles) and one
        personal item (9 x 10 x 17 in / 22 x 25 x 43 cm) that fits under the seat. Basic Economy on many domestic
        routes restricts you to the personal item only — no carry-on — so check your specific fare&apos;s rules
        before you pack a full-size bag. Check your bag against this and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked bags: fare class is the starting point, not the whole story</h2>
      <p>
        On most North American routes, a first checked bag costs around $35 online ($40 at the airport) and a
        second around $45 online ($50 at the airport) on standard Economy fares — checked bags are not
        automatically included the way they sometimes are internationally. Premium Plus and above (Polaris,
        Business, First) typically include checked bags as part of the fare.
      </p>
      <p>
        Standard checked-bag limits: 50 lb (23 kg) in Economy, up to 70 lb (32 kg) in premium cabins; 62 linear
        inches (158 cm, L+W+H including wheels and handles) maximum size.
      </p>

      <h2>How elite status and credit cards change the math</h2>
      <p>
        MileagePlus Premier elite tiers can include free checked bags — often for the member and companions
        traveling on the same reservation — regardless of the fare class booked. Several United-branded credit
        cards also waive the first checked bag fee for the primary cardholder (and sometimes companions) on
        eligible tickets. If you fly United regularly, this is worth factoring into whether elite status or a
        co-branded card pays for itself faster than you&apos;d expect from the flight discounts alone.
      </p>

      <h2>Bottom line</h2>
      <p>
        Don&apos;t assume your checked bag fee from fare class alone — check whether MileagePlus status or a
        co-branded credit card on your reservation already covers it before you pay at booking or the airport. See
        our <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for what to look for once you
        know your weight budget.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/united-airlines-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — United Airlines Baggage Allowance 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.united.com" target="_blank" rel="noopener noreferrer nofollow">united.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
