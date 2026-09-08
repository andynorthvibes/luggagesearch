// Shared intro block for inner pages: a coloured chip, a display headline and a lede.
export default function PageIntro({
  chip,
  chipColor = "sun",
  title,
  lede,
  meta,
  narrow = false,
}: {
  chip: string;
  chipColor?: "sun" | "sky" | "coral";
  title: React.ReactNode;
  lede?: React.ReactNode;
  meta?: string;
  narrow?: boolean;
}) {
  const chipBg = { sun: "bg-sun text-ink", sky: "bg-sky text-cream", coral: "bg-coral text-ink" }[chipColor];
  return (
    <div className={narrow ? "max-w-[46rem]" : "max-w-[56rem]"}>
      <span className={`font-display inline-flex items-center rounded-full border-3 border-ink px-4 py-1.5 text-[14px] font-bold ${chipBg}`}>
        {chip}
      </span>
      <h1 className="font-display mt-6 text-[38px] sm:text-[56px] lg:text-[64px] font-extrabold tracking-[-0.03em] leading-[0.98]">{title}</h1>
      {lede && <p className="mt-6 text-[18px] sm:text-[19px] leading-[1.55] font-medium text-ink/80">{lede}</p>}
      {meta && <p className="font-display mt-5 text-[13px] font-bold uppercase tracking-[0.12em] text-ink/55">{meta}</p>}
    </div>
  );
}
