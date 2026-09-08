import Link from "next/link";
import { SITE } from "@/lib/site";
import { LuggageIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-bold text-white mb-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-brand-400 via-brand-600 to-accent-500 text-white">
              <LuggageIcon className="h-3.5 w-3.5" />
            </span>
            {SITE.name}
          </div>
          <p className="text-slate-400">{SITE.tagline}</p>
        </div>
        <div>
          <div className="font-semibold text-white mb-2">Site</div>
          <ul className="space-y-1 text-slate-400">
            <li><Link href="/guides" className="hover:text-brand-300 transition-colors">Guides</Link></li>
            <li><Link href="/tools/carry-on-checker" className="hover:text-brand-300 transition-colors">Carry-On Checker</Link></li>
            <li><Link href="/tools/packing-list" className="hover:text-brand-300 transition-colors">Packing List Generator</Link></li>
            <li><Link href="/glossary" className="hover:text-brand-300 transition-colors">Glossary</Link></li>
            <li><Link href="/about" className="hover:text-brand-300 transition-colors">About</Link></li>
            <li><Link href="/affiliate-disclosure" className="hover:text-brand-300 transition-colors">Affiliate Disclosure</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.name}. This site contains affiliate links — see our{" "}
        <Link href="/affiliate-disclosure" className="underline hover:text-brand-300 transition-colors">
          disclosure
        </Link>
        .
      </div>
    </footer>
  );
}
