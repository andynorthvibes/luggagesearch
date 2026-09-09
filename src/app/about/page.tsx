import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About",
  description: "Who runs LuggageSearch.com and how the site is funded.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-[80rem] px-5 sm:px-6 py-16 lg:py-20">
      <PageIntro chip="About" title={`About ${SITE.name}`} lede="An independent site about luggage, packing and travel gear — built on published policies, manufacturer specs and tools that actually calculate." narrow />
      <div className="prose-content mt-12 max-w-[46rem]">
      <p>
        {SITE.name} is an independent site about luggage, packing, and travel gear. We publish guides based on
        published airline policies and manufacturer specifications, and build free tools — like our carry-on size
        checker and packing list generator — instead of relying only on articles.
      </p>
      <h2>How we research and verify</h2>
      <p>
        Every airline-specific guide links directly to that airline&apos;s own official baggage policy page and
        shows the date it was last checked against that page. Policies change — fares, weight limits and fees are
        set by the airline, not by us — so treat our guides as a starting point and confirm anything
        booking-critical on the airline&apos;s own site before you fly. Our free tools (the carry-on checker and
        packing list generator) calculate results directly from the same underlying data used in the guides,
        rather than displaying pre-written answers.
      </p>
      <h2>How we make money</h2>
      <p>
        {SITE.name} earns affiliate commissions on some product links, currently through the Amazon Associates
        program, and is designed to also carry advertising through Google AdSense — see our{" "}
        <a href="/affiliate-disclosure">affiliate disclosure</a> for details. Advertising and affiliate
        relationships never influence which products we recommend or how we describe airline policies.
      </p>
      <h2>Corrections</h2>
      <p>
        Airline policies and product specifications change. If you spot something outdated, we want to fix it —
        email us at <a href="mailto:hello@luggagesearch.com">hello@luggagesearch.com</a>.
      </p>
      </div>
    </article>
  );
}
