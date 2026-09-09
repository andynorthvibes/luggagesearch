import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";
import { CARRY_ON_PICKS } from "@/lib/amazonPicks";

export const metadata: Metadata = {
  title: "Korean Air Baggage Allowance: A 2025 Change Quietly Cut the Free Bag Count (2026)",
  description:
    "Tickets issued after June 2025 get only one free checked bag on Korean Air's Economy Saver fare, even to the US -- down from two -- gates weigh bags strictly.",
  alternates: {
    canonical: "/guides/korean-air-baggage-allowance",
  },
};

export default function KoreanAirBaggageAllowance() {
  return (
    <GuideArticle href="/guides/korean-air-baggage-allowance" title="Korean Air baggage allowance" amazonPicks={CARRY_ON_PICKS}>
      <p>
        If you&apos;re relying on older reviews or a previous trip&apos;s experience, Korean Air&apos;s Economy
        Saver allowance may have quietly gotten smaller. For tickets issued after June 2025, Economy Saver
        includes only one free checked bag on every route -- including to the US, where standard Economy
        historically included two. Older advice describing &quot;two free bags to the US&quot; no longer applies
        to Saver-fare tickets bought since then.
      </p>

      <h2>Cabin bag and personal item</h2>
      <p>
        Korean Air allows one cabin bag at 55 x 40 x 20 cm plus a personal item at 40 x 30 x 15 cm, with a
        combined weight limit of 10 kg for both together. The airline enforces this at check-in and again at the
        gate more rigorously than many competitors -- don&apos;t assume a slightly-over bag will slide through.
        Check your bag against Korean Air and 52 other airlines with our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link>.
      </p>

      <h2>Checked baggage by fare and route</h2>
      <p>
        Korean Air uses a piece-based system rather than a shared weight budget. Standard Economy includes one
        free bag up to 23 kg, with a maximum of 158 cm total dimensions per bag. On transpacific and transatlantic
        routes, standard Economy historically included two free bags -- but Economy Saver, the cheapest fare
        tier, now drops to just one free bag across the board for tickets issued after June 2025. Cheaper Light,
        Basic, or Saver-branded fares often exclude the free bag entirely, so confirm your specific fare&apos;s
        allowance before you fly rather than assuming based on cabin class alone.
      </p>

      <h2>Bottom line</h2>
      <p>
        Don&apos;t assume your Korean Air ticket carries the checked-bag allowance you remember from a previous
        trip -- confirm your fare&apos;s exact allowance at booking, especially if you bought an Economy Saver
        fare recently. See our{" "}
        <Link href="/guides/avoid-checked-baggage-fees">guide to avoiding baggage fees</Link> for how to budget
        ahead of time.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://travellote.com/baggage/koreanair/" target="_blank" rel="noopener noreferrer nofollow">
            Travel Lote — Korean Air Baggage Allowance 2026
          </a>
        </li>
        <li>
          Official baggage policy — check current rules directly on 
          <a href="https://www.koreanair.com" target="_blank" rel="noopener noreferrer nofollow">koreanair.com</a> 
          before flying, since fares and allowances change. Last verified: 9 September 2026.
        </li>
      </ul>
    </GuideArticle>
  );
}
