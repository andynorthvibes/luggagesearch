import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { ArrowIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <article className="mx-auto max-w-[80rem] px-5 sm:px-6 py-16 lg:py-20">
      <PageIntro
        chip="404"
        chipColor="coral"
        title="This page didn't make the cut."
        lede="The link you followed doesn't match a page here — it may have moved, or the address has a typo. Try one of these instead."
        narrow
      />
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/"
          className="font-display inline-flex items-center gap-3 rounded-full border-3 border-ink bg-ink px-7 py-4 text-[17px] font-bold text-cream shadow-hard-coral transition-transform hover:-translate-y-1"
        >
          Back to homepage <ArrowIcon className="h-4 w-4" />
        </Link>
        <Link
          href="/guides"
          className="font-display inline-flex items-center gap-3 rounded-full border-3 border-ink px-7 py-4 text-[17px] font-bold transition-colors hover:bg-ink hover:text-cream"
        >
          Browse all guides
        </Link>
        <Link
          href="/tools/carry-on-checker"
          className="font-display inline-flex items-center gap-3 rounded-full border-3 border-ink px-7 py-4 text-[17px] font-bold transition-colors hover:bg-ink hover:text-cream"
        >
          Carry-on checker
        </Link>
      </div>
    </article>
  );
}
