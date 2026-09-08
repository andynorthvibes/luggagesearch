import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About",
  description: "Who runs LuggageSearch.com and how the site is funded.",
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
      <h2>How we make money</h2>
      <p>
        {SITE.name} is designed to be supported by advertising (Google AdSense) and affiliate commissions on some
        product links — see our <a href="/affiliate-disclosure">affiliate disclosure</a> for details. Advertising
        and affiliate relationships never influence which products we recommend or how we describe airline
        policies.
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
