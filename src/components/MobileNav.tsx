"use client";

import { useState } from "react";
import Link from "next/link";
import { CrossIcon, MenuIcon } from "./icons";

export default function MobileNav({ items }: { items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-3 border-ink bg-cream active:bg-sun"
      >
        {open ? <CrossIcon className="h-5 w-5" /> : <MenuIcon />}
      </button>
      {open && (
        <nav className="absolute left-0 right-0 top-full border-b-3 border-ink bg-cream shadow-hard">
          <ul className="font-display px-5 py-3 text-[18px] font-bold">
            {items.map((n) => (
              <li key={n.href} className="border-b-3 border-ink/10 last:border-0">
                <Link href={n.href} onClick={() => setOpen(false)} className="block py-4">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
