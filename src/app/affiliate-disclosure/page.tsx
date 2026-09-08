import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How LuggageSearch.com uses affiliate links and advertising.",
};

export default function AffiliateDisclosurePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16 prose-content">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Affiliate Disclosure</h1>
      <p>
        {SITE.name} is reader-supported. Some links on this site — particularly in product guides and comparisons —
        are affiliate links. If you click one and make a purchase, we may earn a commission at no additional cost to
        you.
      </p>
      <p>
        We participate in the Amazon Associates program, an affiliate advertising program designed to provide a
        means for sites to earn advertising fees by linking to Amazon. We may also participate in affiliate programs
        run directly by luggage and travel-gear brands.
      </p>
      <p>
        This site also displays advertising through Google AdSense, which may use cookies to serve ads based on your
        visits to this and other sites.
      </p>
      <h2>Editorial independence</h2>
      <p>
        Affiliate relationships do not determine which products we cover or how we describe them. Product
        specifications and airline policies are sourced from manufacturers and airlines directly, and we link to
        those sources at the bottom of each guide.
      </p>
    </article>
  );
}
