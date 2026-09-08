import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "SAS Baggage Allowance: Economy Light Depends on Where You're Flying (2026)",
  description:
    "SAS's cheapest fare gets you a full carry-on to the US or Asia, but only a personal item within Europe -- the same fare name means different things by region.",
};

export default function SasBaggageAllowance() {
  return (
    <GuideArticle href="/guides/sas-baggage-allowance" title="SAS baggage allowance, explained">
      <p>
        SAS&apos;s cheapest fare, Economy Light, doesn&apos;t mean the same thing on every route — what you get
        depends on whether you&apos;re flying within Europe or to the US and Asia, under the same fare name.
      </p>

      <h2>Cabin bag and personal item</h2>
      <p>
        On most fares, a carry-on (55 x 40 x 23 cm, up to 8 kg) is included alongside a free personal item (40 x
        30 x 15 cm). Check your specific bag against this and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Economy Light: the exception is regional</h2>
      <p>
        On European routes, Economy Light strips the carry-on entirely — you get the personal item only, no
        overhead-locker bag. On US and Asia routes, Economy Light still includes the personal item, but the
        carry-on can be added for an extra fee rather than being excluded by default. Read your specific route
        carefully rather than assuming Economy Light means the same restriction everywhere.
      </p>

      <h2>Checked baggage by fare</h2>
      <p>
        Economy Light within Europe includes no checked bag at all. Economy Standard and Go Smart include one bag
        at 23 kg. Premium/SAS Plus includes two bags at 23 kg each. Business includes two bags at 32 kg each.
      </p>
      <p>
        Prepaying online at least 8 days before departure is meaningfully cheaper — airport prices can run up to
        three times the advance online rate, from roughly €16 prepaid to €105+ at the airport. Overweight fees run
        about €55–€75 for 23.1–28 kg, and €85–€135 for 28–32 kg.
      </p>

      <h2>EuroBonus status now reaches Light fares</h2>
      <p>
        As of the 2026 policy update, EuroBonus Silver members get one free checked bag even on Economy Light — a
        change from earlier rules that excluded Light fares from status perks entirely. Worth checking if you have
        status and were assuming Light meant no free bag regardless.
      </p>

      <h2>Bottom line</h2>
      <p>
        Check which region you&apos;re flying in before assuming what Economy Light includes — it&apos;s a
        materially different fare within Europe than it is to the US or Asia. See our{" "}
        <Link href="/guides/best-checked-luggage">checked luggage guide</Link> for what to look for once you know
        your weight budget.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thetraveltinker.com/transport/sas-scandinavian-airlines-baggage-allowance/" target="_blank" rel="noopener noreferrer nofollow">
            The Travel Tinker — SAS Scandinavian Airlines Baggage Allowance 2026
          </a>
        </li>
      </ul>
    </GuideArticle>
  );
}
