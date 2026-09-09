import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "What Not to Pack in Your Carry-On (2026 Security Rules)",
  description:
    "The TSA and airport-security rules that actually get bags pulled aside -- liquids, sharp objects, batteries, and surprising everyday items that get confiscated.",
  alternates: {
    canonical: "/guides/what-not-to-pack-in-carry-on",
  },
};

export default function WhatNotToPackInCarryOn() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How big can liquids be in a carry-on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the standard 3-1-1 rule, each liquid, gel, or aerosol container must be 3.4 oz (100 ml) or smaller, and all containers must fit in one clear, quart-size bag per passenger. Medically necessary liquids like baby formula and medication are exempt in reasonable quantities.",
        },
      },
      {
        "@type": "Question",
        name: "Can I bring a power bank in my carry-on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — lithium battery power banks and spare batteries must go in carry-on baggage, not checked luggage, because of fire risk. Most airlines cap them around 100Wh without airline approval.",
        },
      },
    ],
  };

  return (
    <GuideArticle href="/guides/what-not-to-pack-in-carry-on" title="What not to pack in your carry-on">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p>
        Most carry-on delays at security come from a handful of predictable categories — not exotic items, just
        things packed out of habit. Here&apos;s what actually gets a bag pulled aside.
      </p>

      <h2>Liquids over 3.4 oz (100 ml)</h2>
      <p>
        The 3-1-1 rule: each container must be 3.4 oz or smaller, and all of them together must fit in one clear,
        quart-size bag per passenger. This catches more people than any other rule, and it applies to anything
        liquid, gel, or paste — including hair product, sunscreen, peanut butter, and snow globes (yes, really,
        since they contain liquid). Medications and baby formula are exempt in reasonable quantities, but declare
        them at the checkpoint.
      </p>

      <h2>Sharp objects and tools</h2>
      <p>
        Knives, box cutters, axes, and screwdrivers or drill bits longer than 7 inches all have to go in checked
        luggage. Tweezers, safety (disposable) razors, scissors, and knitting needles are fine in a carry-on —
        it&apos;s blade length and rigidity that matters, not the category of object.
      </p>

      <h2>Sporting goods and equipment</h2>
      <p>
        Baseball bats, hockey and lacrosse sticks, ski/hiking poles, and golf clubs are all checked-bag only. If
        you&apos;re traveling with sports gear, plan for a second checked bag rather than assuming it&apos;ll fit
        in the cabin.
      </p>

      <h2>Anything that could pass as a weapon</h2>
      <p>
        Beyond obvious weapons, this includes stun guns, self-defense sprays, brass knuckles, and — at the security
        officer&apos;s discretion — realistic toy weapons or replica explosives. When in doubt, check it or leave
        it home; contesting a confiscation at the checkpoint rarely goes anywhere.
      </p>

      <h2>Lithium batteries: the opposite rule</h2>
      <p>
        This one surprises people because it runs backward: spare lithium batteries and power banks are required
        in carry-on baggage, not allowed in checked bags, because of fire risk in the cargo hold. Most airlines cap
        an individual power bank around 100Wh without prior approval — check your specific airline if you&apos;re
        traveling with a large one.
      </p>

      <h2>Bottom line</h2>
      <p>
        Pack liquids in a clear quart bag, sharp and rigid tools in your checked bag, and keep batteries and power
        banks in the cabin with you. Once your carry-on is sorted, use our{" "}
        <Link href="/tools/packing-list">packing list generator</Link> to build the rest of the list, and our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link> to confirm the bag itself fits your airline.
      </p>

      <h2>Frequently asked questions</h2>
      <div className="space-y-2">
        <div>
          <h3>How big can liquids be in a carry-on?</h3>
          <p>Under the standard 3-1-1 rule, each liquid, gel, or aerosol container must be 3.4 oz (100 ml) or smaller, and all containers must fit in one clear, quart-size bag per passenger. Medically necessary liquids like baby formula and medication are exempt in reasonable quantities.</p>
        </div>
        <div>
          <h3>Can I bring a power bank in my carry-on?</h3>
          <p>Yes — lithium battery power banks and spare batteries must go in carry-on baggage, not checked luggage, because of fire risk. Most airlines cap them around 100Wh without airline approval.</p>
        </div>
      </div>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://thepointsguy.com/guide/what-not-to-pack-carry-on" target="_blank" rel="noopener noreferrer nofollow">
            The Points Guy — What Not to Pack in Your Carry-On
          </a>
        </li>
        <li>
          TSA&apos;s published prohibited-items list — rules can change; confirm current guidance on{" "}
          <a href="https://www.tsa.gov" target="_blank" rel="noopener noreferrer nofollow">tsa.gov</a> before flying, especially internationally where rules vary by country.
        </li>
      </ul>
    </GuideArticle>
  );
}
