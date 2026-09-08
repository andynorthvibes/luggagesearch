import Link from "next/link";
import { SITE } from "@/lib/site";
import { LuggageIcon } from "./icons";

const columns = [
  {
    title: "Tools",
    links: [
      { href: "/tools/carry-on-checker", label: "Carry-on size checker" },
      { href: "/tools/packing-list", label: "Packing list generator" },
    ],
  },
  {
    title: "Guides",
    links: [
      { href: "/guides/best-carry-on-luggage", label: "Best carry-on luggage" },
      { href: "/guides/best-checked-luggage", label: "Best checked luggage" },
      { href: "/guides/samsonite-vs-delsey", label: "Samsonite vs Delsey" },
    ],
  },
  {
    title: "Site",
    links: [
      { href: "/glossary", label: "Glossary" },
      { href: "/about", label: "About" },
      { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-6 py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <div className="font-display flex items-center gap-3 text-[26px] font-extrabold tracking-tight text-sun">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-3 border-sun text-sun">
              <LuggageIcon className="h-5 w-5" />
            </span>
            {SITE.name}
          </div>
          <p className="mt-4 max-w-[26rem] text-[15px] leading-relaxed text-cream/70">
            Independent luggage guides and free tools. Reader-supported through advertising and affiliate links —
            never influencing what we recommend.
          </p>
        </div>
        {columns.map((c) => (
          <div key={c.title} className="md:col-span-2">
            <div className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-sun">{c.title}</div>
            <ul className="mt-4 space-y-2.5 text-[15px] font-medium">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-sun hover:underline underline-offset-4 decoration-2">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t-3 border-cream/10">
        <div className="mx-auto max-w-[80rem] px-5 sm:px-6 py-5 text-[13px] text-cream/55 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {SITE.name}. Some links are affiliate links — see our <Link href="/affiliate-disclosure" className="underline underline-offset-2 hover:text-sun">disclosure</Link>.</span>
          <span>Photos via Unsplash.</span>
        </div>
      </div>
    </footer>
  );
}
