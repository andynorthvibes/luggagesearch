import Link from "next/link";
import Image from "next/image";
import { GUIDES } from "@/lib/guides";
import { SITE } from "@/lib/site";
import PageIntro from "./PageIntro";
import GuideCard from "./GuideCard";
import { ArrowIcon } from "./icons";
import AmazonPicks, { type AmazonPick } from "./AmazonPicks";

// Wrapper for long-form guides: intro, photo, body, tool call-to-action, related guides, disclosure.
export default function GuideArticle({
  href,
  title,
  children,
  amazonPicks,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
  amazonPicks?: AmazonPick[];
}) {
  const meta = GUIDES.find((g) => g.href === href);
  const related = GUIDES.filter((g) => g.href !== href).slice(0, 3);

  return (
    <article className="mx-auto max-w-[80rem] px-5 sm:px-6 py-16 lg:py-20">
      <PageIntro chip="Guide" chipColor={meta?.chipColor ?? "sun"} title={title} meta={meta ? `Updated ${meta.updated}` : undefined} />

      {meta && (
        <div className="relative mt-12 aspect-[16/7] overflow-hidden rounded-[32px] border-3 border-ink shadow-hard">
          <Image src={meta.img.replace("w=1000", "w=1800")} alt="" fill priority sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
        </div>
      )}

      <div className="mt-14 grid lg:grid-cols-12 gap-12">
        <div className="prose-content lg:col-span-8">
          {children}
          {amazonPicks && <AmazonPicks picks={amazonPicks} />}
        </div>
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28 rounded-[28px] border-3 border-ink bg-sun p-7 shadow-hard">
            <p className="font-display text-[13px] font-bold uppercase tracking-[0.12em]">Have a bag already?</p>
            <h3 className="font-display mt-2 text-[26px] font-extrabold tracking-[-0.02em] leading-tight">
              Check it against 53 airlines in one go.
            </h3>
            <Link
              href="/tools/carry-on-checker"
              className="font-display mt-5 inline-flex items-center gap-2 rounded-full border-3 border-ink bg-ink px-5 py-3 text-[15px] font-bold text-cream transition-transform hover:-translate-y-0.5"
            >
              Open the checker <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </div>

      <p className="mt-10 text-[13px] text-ink/55 max-w-[46rem]">
        {SITE.name} is reader-supported. This page may contain affiliate links — see our{" "}
        <Link href="/affiliate-disclosure" className="underline underline-offset-2 hover:text-ink">disclosure</Link>. Airline
        policies change: always confirm on the airline&apos;s own site before flying.
      </p>

      {related.length > 0 && (
        <section className="mt-20 border-t-3 border-ink pt-14">
          <h2 className="font-display text-[30px] sm:text-[40px] font-extrabold tracking-[-0.03em] leading-none">Keep reading</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-8 max-w-[52rem]">
            {related.map((g) => (
              <GuideCard key={g.href} guide={g} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
