import { ArrowIcon } from "./icons";

export type AmazonPick = {
  name: string;
  note: string;
  query: string;
};

// Reusable "shop this" callout for guides with real product recommendations.
// Links go to an Amazon search results page (not a specific product page) so
// they stay accurate as colors, sizes, and stock change — and so price and
// availability are shown by Amazon itself, never by us.
export default function AmazonPicks({
  title = "Where to start looking on Amazon",
  picks,
}: {
  title?: string;
  picks: AmazonPick[];
}) {
  return (
    <div className="my-10 rounded-[28px] border-3 border-ink bg-cream p-7 shadow-hard">
      <p className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-ink/60">{title}</p>
      <div className="mt-5 space-y-5">
        {picks.map((pick, i) => (
          <div key={pick.name} className={i === 0 ? "" : "border-t-3 border-ink/10 pt-5"}>
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(pick.query)}&tag=luggagesearch-20`}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="font-display inline-flex items-center gap-2 text-[18px] font-bold leading-tight hover:text-sky"
            >
              {pick.name} <ArrowIcon className="h-4 w-4 shrink-0" />
            </a>
            <p className="mt-1.5 text-[15px] leading-relaxed text-ink/75">{pick.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[12px] leading-relaxed text-ink/50">
        As an Amazon Associate we earn from qualifying purchases. These links open Amazon search results, so you can
        compare current price, color, and availability yourself before buying.
      </p>
    </div>
  );
}
