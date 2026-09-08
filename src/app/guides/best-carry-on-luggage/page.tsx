import Link from "next/link";
import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Best Carry-On Luggage: How to Actually Choose One (2026)",
  description:
    "A criteria-based guide to picking carry-on luggage — size, weight, material, and wheels — plus a free tool to check your bag against airline limits.",
};

export default function BestCarryOnLuggage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the standard carry-on size limit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most US airlines (United, Delta, American, JetBlue, Alaska) cap carry-ons at around 22 x 14 x 9 inches (56 x 35 x 23 cm). European and low-cost carriers vary more — some allow larger bags, others (like Ryanair's free allowance) are much smaller. There is no single global standard, which is why checking your specific airline matters.",
        },
      },
      {
        "@type": "Question",
        name: "Should I buy a hardside or softside carry-on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hardside (polycarbonate or ABS) protects contents better and resists crushing in an overhead bin, but has fixed capacity. Softside bags flex to fit tight spaces and often have more exterior pockets, but offer less protection for fragile items.",
        },
      },
    ],
  };

  return (
    <GuideArticle href="/guides/best-carry-on-luggage" title="Best carry-on luggage: how to actually choose one">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p>
        Most &quot;best carry-on&quot; lists are ranked opinion, not criteria. This guide flips that: here&apos;s
        what actually determines whether a carry-on works for you, in order of how often it causes problems at the
        gate.
      </p>

      <h2>1. Size — and why it&apos;s not one number</h2>
      <p>
        There is no universal carry-on size. US majors (United, Delta, American, JetBlue, Alaska) generally allow up
        to 22 x 14 x 9 in (56 x 35 x 23 cm). Budget European carriers are stricter for the <em>free</em> allowance —
        Ryanair&apos;s paid Priority bag tops out at 55 x 40 x 20 cm, and its free personal item is smaller still.
        Gulf carriers like Emirates and Qatar Airways cap cabin bags at just 7 kg, regardless of how well it fits the
        sizer. If you fly multiple airlines, buy for the strictest one you use regularly — not the most generous.
      </p>
      <p>
        Use our{" "}
        <Link href="/tools/carry-on-checker">carry-on checker</Link> to test a specific bag&apos;s dimensions and
        weight against 53 major airlines at once, rather than looking each one up manually.
      </p>

      <h2>2. Empty weight of the bag itself</h2>
      <p>
        On weight-limited airlines (most of Europe, the Middle East, and Asia — unlike the US, which rarely weighs
        cabin bags), the suitcase&apos;s own empty weight eats into your allowance before you&apos;ve packed a single
        shirt. A hardside spinner can weigh anywhere from roughly 2.5 kg to over 4.5 kg empty. If you&apos;re flying
        Lufthansa (8 kg limit) or Emirates (7 kg), a 4 kg bag leaves you only 3–4 kg for everything you own on the
        trip. Check the empty weight before you check the size.
      </p>

      <h2>3. Hardside vs. softside</h2>
      <p>
        <strong>Hardside</strong> (polycarbonate or ABS shell) protects contents from crushing and is easier to wipe
        clean, but has fixed internal volume — what you see is what you get. <strong>Softside</strong> bags (usually
        nylon or polyester) flex to squeeze into tight overhead bins and typically have more exterior organization
        pockets, but offer less protection for anything fragile and can look worn faster.
      </p>
      <p>
        There isn&apos;t a universally &quot;better&quot; choice — see our{" "}
        <Link href="/guides/samsonite-vs-delsey">Samsonite vs Delsey comparison</Link> for how two major brands
        approach this differently across their carry-on lines.
      </p>

      <h2>4. Wheels: spinner vs. inline (rollerblade)</h2>
      <p>
        Four-wheel spinners roll in any direction and are easier to maneuver one-handed through crowded terminals.
        Two-wheel inline bags are typically more durable (fewer moving parts to break) and easier to control on
        slopes or uneven ground, but require you to tilt and drag them. Most modern carry-ons are spinners; inline
        wheels are now mostly found on rugged/outdoor-oriented luggage.
      </p>

      <h2>5. Expandability</h2>
      <p>
        An expandable zipper adds roughly 2–5 cm of depth when unzipped — useful for the trip home when you&apos;ve
        acquired souvenirs, but be aware that expanding the bag can push it over an airline&apos;s size limit. If you
        plan to fly with it expanded, measure it in that state, not collapsed.
      </p>

      <h2>6. Laptop/tech access</h2>
      <p>
        If you travel with a laptop, a carry-on with a dedicated front-loading laptop compartment (or a slim
        secondary bag that fits under the seat) saves you from repacking at security. Not all carry-ons have this —
        it&apos;s worth checking before you buy if you fly for work.
      </p>

      <h2>The bottom line</h2>
      <p>
        Pick your size and weight ceiling based on the strictest airline you actually fly, not the most generous
        one. Everything else — hardside vs. softside, spinner vs. inline, expandable or not — is a preference
        question with no universally right answer.
      </p>

      <h2>Sources</h2>
      <ul className="text-sm">
        <li>
          <a href="https://upgradedpoints.com/travel/airlines/carry-on-luggage-size-chart/" target="_blank" rel="noopener noreferrer nofollow">
            Upgraded Points — 2026 Carry-on Luggage Size Chart for 64 Airlines
          </a>
        </li>
        <li>Individual airline cabin-baggage policy pages (united.com, delta.com, aa.com, lufthansa.com, ryanair.com, easyjet.com, emirates.com, qatarairways.com, singaporeair.com, and others — see the {" "}
          <Link href="/tools/carry-on-checker">carry-on checker</Link> for the full list and per-airline notes).
        </li>
      </ul>
    </GuideArticle>
  );
}
