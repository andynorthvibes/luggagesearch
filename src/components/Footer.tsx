import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
        <div>
          <div className="font-bold text-slate-900 mb-2">{SITE.name}</div>
          <p className="text-slate-600">{SITE.tagline}</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-2">Site</div>
          <ul className="space-y-1 text-slate-600">
            <li><Link href="/guides" className="hover:text-brand-700">Guides</Link></li>
            <li><Link href="/tools/carry-on-checker" className="hover:text-brand-700">Carry-On Checker</Link></li>
            <li><Link href="/tools/packing-list" className="hover:text-brand-700">Packing List Generator</Link></li>
            <li><Link href="/glossary" className="hover:text-brand-700">Glossary</Link></li>
            <li><Link href="/about" className="hover:text-brand-700">About</Link></li>
            <li><Link href="/affiliate-disclosure" className="hover:text-brand-700">Affiliate Disclosure</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.name}. This site contains affiliate links — see our{" "}
        <Link href="/affiliate-disclosure" className="underline hover:text-brand-700">
          disclosure
        </Link>
        .
      </div>
    </footer>
  );
}
