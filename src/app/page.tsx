import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { CheckCircleIcon, ListIcon, FileTextIcon, LuggageIcon } from "@/components/icons";

const tools = [
  {
    href: "/tools/carry-on-checker",
    title: "Carry-On Size Checker",
    description: "Enter your bag's dimensions and weight — instantly see which airlines will accept it as cabin baggage.",
    cta: "Check your bag",
    icon: CheckCircleIcon,
  },
  {
    href: "/tools/packing-list",
    title: "Packing List Generator",
    description: "Answer three questions about your trip and get a complete, editable packing checklist.",
    cta: "Build my list",
    icon: ListIcon,
  },
];

const guides = [
  {
    href: "/guides/best-carry-on-luggage",
    title: "Best Carry-On Luggage",
    description: "How to actually choose a carry-on — by size, weight, material, and wheel type — not just a top-10 list.",
  },
  {
    href: "/guides/best-checked-luggage",
    title: "Best Checked Luggage",
    description: "What matters in a checked bag: durability, expandability, and how airline weight limits actually work.",
  },
  {
    href: "/guides/samsonite-vs-delsey",
    title: "Samsonite vs Delsey",
    description: "Two of the biggest luggage brands compared on materials, warranty, and real-world durability.",
  },
];

const stats = [
  { value: "16", label: "Airlines' carry-on limits checked" },
  { value: "2", label: "Free tools — no sign-up needed" },
  { value: "100%", label: "Sourced from official policies" },
];

export default function Home() {
  return (
    <div>
      {/* Hero — cinematic, dark, photo-backed */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1738602867971-d111f1a54c80?q=80&w=1920&auto=format&fit=crop"
            alt="An airplane on the runway at sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-transparent" />
        </div>
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl" />

        <div className="hidden lg:block pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[440px] w-[440px]">
          <div className="absolute inset-0 rounded-full bg-accent-500/25 blur-3xl" />
          <Image
            src="https://images.unsplash.com/photo-1569512850669-7baa648e82d8?q=80&w=900&auto=format&fit=crop"
            alt="A metallic hardshell suitcase"
            fill
            sizes="440px"
            className="object-contain drop-shadow-2xl [mask-image:radial-gradient(closest-side,black_58%,transparent_100%)] [-webkit-mask-image:radial-gradient(closest-side,black_58%,transparent_100%)]"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-36">
          <span className="animate-fade-in-up inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold text-white ring-1 ring-inset ring-white/20">
            <LuggageIcon className="h-3.5 w-3.5" />
            Independent guides &amp; free tools
          </span>
          <h1 className="animate-fade-in-up [animation-delay:120ms] mt-6 max-w-2xl text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Find the right{" "}
            <span className="bg-gradient-to-r from-brand-300 to-accent-300 bg-clip-text text-transparent">
              luggage
            </span>{" "}
            — without the guesswork.
          </h1>
          <p className="animate-fade-in-up [animation-delay:240ms] mt-6 max-w-xl text-lg text-slate-300">
            {SITE.description}
          </p>
          <div className="animate-fade-in-up [animation-delay:360ms] mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/tools/carry-on-checker"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:bg-brand-50"
            >
              Check your carry-on
            </Link>
            <Link
              href="/tools/packing-list"
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Build a packing list
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-3 sm:py-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-600">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Free tools</h2>
        <p className="text-slate-600 mb-8">No sign-up, no app download — just answers.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-accent-500 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-900/20">
                <tool.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-brand-700">{tool.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{tool.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-transform group-hover:translate-x-1">
                {tool.cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Editorial: why LuggageSearch */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 border-t border-slate-200">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-900/5 order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1768668053205-103e18fc042d?q=80&w=1200&auto=format&fit=crop"
              alt="A colorful stack of vintage suitcases"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-2 right-3 text-[10px] text-white/70">Photo: Unsplash</span>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700 ring-1 ring-inset ring-accent-200">
              Why LuggageSearch
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
              Real criteria, real sources — not a recycled top-10 list.
            </h2>
            <p className="mt-4 text-slate-600">
              Every guide is built from published airline policies and manufacturer specifications, and every tool
              runs real calculations against that data — not guesswork. Advertising and affiliate relationships
              never influence which products we recommend or how we describe a policy.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Read more about how we work →
            </Link>
          </div>
        </div>
      </section>

      {/* Photo banner CTA */}
      <section className="relative h-72 sm:h-96 w-full">
        <Image
          src="https://images.unsplash.com/photo-1574815963212-14443d0f94be?q=80&w=1920&auto=format&fit=crop"
          alt="An open suitcase being packed with folded clothes"
          fill
          sizes="100vw"
          className="object-cover saturate-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-slate-900/60 to-slate-900/10" />
        <div className="relative h-full mx-auto max-w-6xl px-4 sm:px-6 flex items-center">
          <div className="max-w-md">
            <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold text-white ring-1 ring-inset ring-white/20">
              Free packing tool
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white">Pack smarter, not heavier</h2>
            <p className="mt-3 text-slate-200">
              Answer three quick questions and get a complete packing checklist tailored to your trip.
            </p>
            <Link
              href="/tools/packing-list"
              className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-brand-50"
            >
              Build my packing list →
            </Link>
          </div>
        </div>
        <span className="absolute bottom-2 right-3 text-[10px] text-white/60">Photo: Unsplash</span>
      </section>

      {/* Guides */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Guides</h2>
        <p className="text-slate-600 mb-8">Researched comparisons, not recycled top-10 lists.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {guides.map((guide, i) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-900/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-accent-500 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-accent-600 text-sm font-bold text-white shadow-md shadow-accent-900/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-bold text-slate-900 group-hover:text-brand-700">{guide.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{guide.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">
                <FileTextIcon className="h-3.5 w-3.5" /> Read guide →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
