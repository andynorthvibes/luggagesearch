import type { Metadata } from "next";
import ArSizerClient from "@/components/ArSizerClient";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "AR Bag Sizer: Put the Airline's Sizer in Your Room",
  description:
    "See a true-to-scale 3D model of Ryanair's, easyJet's, KLM's and 50 other airlines' carry-on sizers in your room with your phone camera, then test your real bag in it.",
  alternates: {
    canonical: "/tools/ar-bag-sizer",
  },
};

export default function ArBagSizerPage() {
  return (
    <div className="mx-auto max-w-[80rem] px-5 sm:px-6 py-16 lg:py-20">
      <PageIntro
        chip="New · AR tool"
        chipColor="sky"
        title="Put the airline's bag sizer in your room."
        lede="Pick an airline, tap View in your room, and a true-to-scale model of its carry-on sizer appears on your floor. Stand your real bag inside it and see for yourself whether it fits, before you get to the gate."
      />
      <div className="mt-12">
        <ArSizerClient />
      </div>
      <div className="mt-12 max-w-[56rem] space-y-3 text-[15px] font-medium leading-[1.6] text-ink/70">
        <p>
          <b>Works on:</b> iPhone and iPad (Safari, via AR Quick Look) and most Android phones (Chrome, via Google Scene
          Viewer). On a computer you can rotate the 3D model; open the page on your phone for AR.
        </p>
        <p>
          <b>Good to know:</b> the models are built from each airline&apos;s published maximum cabin-bag size and are
          not official airline equipment. Phone AR is typically accurate to a centimetre or two, so if your bag is
          right on the limit, measure it with a tape measure too. Limits can differ by fare and route; always check
          with your airline before you fly.
        </p>
      </div>
    </div>
  );
}
