import Link from "next/link";
import Image from "next/image";
import { CHIP_BG, type GuideMeta } from "@/lib/guides";

export default function GuideCard({ guide, priority = false }: { guide: GuideMeta; priority?: boolean }) {
  return (
    <Link
      href={guide.href}
      className="group block rounded-[28px] border-3 border-ink bg-cream overflow-hidden shadow-hard transition-transform hover:-translate-y-1.5"
    >
      <div className="relative aspect-[4/3] border-b-3 border-ink">
        <Image
          src={guide.img}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 640px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className={`font-display absolute top-4 left-4 rounded-full border-3 border-ink px-3 py-1 text-[13px] font-bold ${CHIP_BG[guide.chipColor]}`}>
          {guide.chip}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-[24px] sm:text-[26px] font-extrabold tracking-[-0.02em] leading-tight">{guide.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed font-medium text-ink/75">{guide.blurb}</p>
      </div>
    </Link>
  );
}
