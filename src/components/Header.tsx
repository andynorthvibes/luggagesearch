import Link from "next/link";

const nav = [
  { href: "/guides", label: "Guides" },
  { href: "/tools/carry-on-checker", label: "Carry-On Checker" },
  { href: "/tools/packing-list", label: "Packing List" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white text-sm">LS</span>
          LuggageSearch
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-700 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
