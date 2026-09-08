import Link from "next/link";
import { LuggageIcon } from "./icons";
import MobileNav from "./MobileNav";

export const NAV = [
  { href: "/tools/carry-on-checker", label: "Carry-on checker" },
  { href: "/tools/packing-list", label: "Packing list" },
  { href: "/guides", label: "Guides" },
  { href: "/glossary", label: "Glossary" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-3 border-ink bg-cream">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-6 h-[72px] flex items-center justify-between">
        <Link href="/" className="font-display flex items-center gap-3 text-[22px] sm:text-[24px] font-extrabold tracking-tight">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-3 border-ink bg-sun">
            <LuggageIcon className="h-5 w-5" />
          </span>
          LuggageSearch
        </Link>
        <nav className="font-display hidden md:flex items-center gap-1 text-[15px] font-semibold">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="px-4 py-2 rounded-full hover:bg-ink hover:text-cream transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <MobileNav items={NAV} />
      </div>
    </header>
  );
}
