import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How LuggageSearch.com uses affiliate links and advertising.",
};

export default function AffiliateDisclosurePage() {
  return (
    <article className="mx-auto max-w-[80rem] px-5 sm:px-6 py-16 lg:py-20">
      <PageIntro chip="Disclosure" chipColor="coral" title="How this site makes money." narrow />
      <div className="prose-content mt-12 max-w-[46rem]">
      <p>
        {SITE.name} is reader-supported. Some links on this site — particularly in product guides and comparisons —
        may be affiliate links. If you click one and make a purchase, we may earn a commission at no additional cost
        to you.
      </p>
      <p>
        This includes the Amazon Associates program, an affiliate advertising program designed to provide a means
        for sites to earn advertising fees by linking to Amazon, as well as affiliate programs run directly by
        luggage and travel-gear brands.
      </p>
      <p>
        This site is also designed to display advertising through Google AdSense, which uses cookies to serve ads
        based on your visits to this and other sites.
      </p>
      <h2>Editorial independence</h2>
      <p>
        Affiliate relationships do not determine which products we cover or how we describe them. Product
        specifications and airline policies are sourced from manufacturers and airlines directly, and we link to
        those sources at the bottom of each guide.
      </p>
      </div>
    </article>
  );
}
