import Link from "next/link";
import Image from "next/image";
import { AIRLINES } from "@/lib/airlines";
import { GUIDES } from "@/lib/guides";
import GuideCard from "@/components/GuideCard";
import { ArrowIcon, PlaneIcon } from "@/components/icons";

const tools = [
  {
    title: "Carry-on size checker",
    text: `Your bag's dimensions and weight, checked against ${AIRLINES.length} airlines' published cabin limits. Green means it boards with you.`,
    href: "/tools/carry-on-checker",
    cta: "Check a bag",
    bg: "bg-sky text-cream",
  },
  {
    title: "Packing list generator",
    text: "Three questions about your trip. One complete, editable checklist you can tick off as you go.",
    href: "/tools/packing-list",
    cta: "Build a list",
    bg: "bg-coral text-ink",
  },
];

export default function Home() {
  const airlineNames = AIRLINES.map((a) => a.name.replace(" (Scandinavian Airlines)", ""));
  const marquee = [...airlineNames, ...airlineNames];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-sun">
        <div className="mx-auto max-w-[80rem] px-5 sm:px-6 pt-14 pb-16 lg:pt-24 lg:pb-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-3">
              <span className="font-display inline-flex items-center rounded-full border-3 border-ink bg-cream px-4 py-1.5 text-[14px] font-bold">
                Free · no sign-up
              </span>
              <span className="font-display inline-flex items-center rounded-full border-3 border-ink bg-coral px-4 py-1.5 text-[14px] font-bold">
                {AIRLINES.length} airlines
              </span>
            </div>
            <h1 className="font-display mt-8 text-[52px] sm:text-[84px] lg:text-[108px] leading-[0.92] font-extrabold tracking-[-0.03em]">
              <span className="block overflow-hidden"><span className="rise block">Will it fit?</span></span>
              <span className="block overflow-hidden"><span className="rise block [animation-delay:100ms]">Find out in</span></span>
              <span className="block overflow-hidden"><span className="rise block [animation-delay:200ms]">ten seconds.</span></span>
            </h1>
            <p className="fade-in [animation-delay:400ms] mt-8 max-w-[32rem] text-[18px] sm:text-[19px] leading-[1.5] font-medium">
              Type your bag&apos;s size, see which airlines let it in the cabin. Then build a packing list before you
              forget the charger.
            </p>
            <div className="fade-in [animation-delay:550ms] mt-10 flex flex-wrap gap-4">
              <Link
                href="/tools/carry-on-checker"
                className="font-display inline-flex items-center gap-3 rounded-full border-3 border-ink bg-ink px-7 sm:px-8 py-4 text-[17px] sm:text-[18px] font-bold text-cream shadow-hard-coral transition-transform hover:-translate-y-1"
              >
                Check my carry-on <ArrowIcon />
              </Link>
              <Link
                href="/tools/packing-list"
                className="font-display inline-flex items-center gap-3 rounded-full border-3 border-ink px-7 sm:px-8 py-4 text-[17px] sm:text-[18px] font-bold transition-colors hover:bg-ink hover:text-cream"
              >
                Build a packing list
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticker-in relative mx-auto max-w-[340px] lg:max-w-[400px] aspect-[3/4] overflow-hidden rounded-[40px] border-3 border-ink shadow-hard-lg">
              <Image
                src="https://images.unsplash.com/photo-1632165061207-81a8a3baee47?q=80&w=1000&auto=format&fit=crop"
                alt="A yellow carry-on covered in stickers, alone in an airport hall"
                fill
                priority
                sizes="(min-width: 1024px) 400px, 340px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee of the airlines the checker covers */}
      <div className="overflow-hidden border-y-3 border-ink bg-ink py-3 text-sun" aria-label="Airlines covered by the carry-on checker">
        <div className="font-display marquee flex w-max items-center gap-8 text-[15px] font-bold uppercase tracking-[0.12em] whitespace-nowrap">
          {marquee.map((n, i) => (
            <span key={i} className="inline-flex items-center gap-8">
              {n} <PlaneIcon />
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <section className="mx-auto max-w-[80rem] px-5 sm:px-6 py-20 lg:py-24">
        <h2 className="font-display text-[36px] sm:text-[56px] font-extrabold tracking-[-0.03em] leading-none">Two tools. Zero sign-ups.</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {tools.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className={`group rounded-[32px] border-3 border-ink p-8 sm:p-10 lg:p-12 shadow-hard transition-transform hover:-translate-y-1.5 ${t.bg}`}
            >
              <h3 className="font-display text-[32px] sm:text-[44px] font-extrabold tracking-[-0.03em] leading-[0.98]">{t.title}</h3>
              <p className="mt-5 text-[17px] leading-[1.55] font-medium opacity-90">{t.text}</p>
              <span className="font-display mt-8 inline-flex items-center gap-2 rounded-full border-3 border-ink bg-cream px-5 py-2.5 text-[16px] font-bold text-ink">
                {t.cta} <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Proof — computed from the same dataset the checker uses */}
      <section className="mx-auto max-w-[80rem] px-5 sm:px-6 pb-20 lg:pb-24">
        <div className="rounded-[32px] border-3 border-ink bg-cream p-8 sm:p-10 lg:p-14 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="font-display text-[14px] font-bold uppercase tracking-[0.14em] text-sky">Why it matters</p>
            <h2 className="font-display mt-4 text-[30px] sm:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.0]">
              A &ldquo;standard&rdquo; 55 × 40 × 20 cm carry-on clears only{" "}
              <span className="inline-block rounded-2xl bg-coral px-3 -mx-1">8 of {AIRLINES.length}</span> airlines we track.
            </h2>
            <p className="mt-6 max-w-[34rem] text-[17px] leading-[1.55] font-medium">
              Five centimetres narrower — 55 × 35 × 20 — and it clears 15. That is the difference between boarding
              and a gate-check fee. Our checker shows you before you buy.
            </p>
            <Link href="/tools/carry-on-checker" className="font-display mt-6 inline-flex items-center gap-2 text-[16px] font-bold underline decoration-2 underline-offset-4 hover:text-sky">
              Try it with your own bag <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              { size: "55 × 40 × 20", n: 8, bg: "bg-coral" },
              { size: "55 × 35 × 20", n: 15, bg: "bg-sun" },
            ].map((s) => (
              <div key={s.size} className={`rounded-[24px] border-3 border-ink p-5 sm:p-6 text-center ${s.bg}`}>
                <div className="font-display text-[56px] sm:text-[64px] font-extrabold leading-none tracking-[-0.04em]">{s.n}</div>
                <div className="font-display mt-2 text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.1em]">of {AIRLINES.length} airlines</div>
                <div className="mt-3 text-[14px] font-semibold">{s.size} cm</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="border-t-3 border-ink bg-white">
        <div className="mx-auto max-w-[80rem] px-5 sm:px-6 py-20 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[36px] sm:text-[56px] font-extrabold tracking-[-0.03em] leading-none">Guides worth the scroll.</h2>
            <div className="flex flex-wrap items-center gap-5">
              <p className="text-[16px] font-medium max-w-[22rem]">Criteria and sources, not recycled top-10 lists.</p>
              <Link
                href="/guides"
                className="font-display inline-flex items-center gap-2 rounded-full border-3 border-ink bg-cream px-5 py-2.5 text-[14px] font-bold transition-transform hover:-translate-y-0.5"
              >
                All {GUIDES.length} guides <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-8">
            {GUIDES.slice(0, 3).map((g) => (
              <GuideCard key={g.href} guide={g} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
