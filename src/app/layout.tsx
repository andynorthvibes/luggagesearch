import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "google-adsense-account": "ca-pub-3518305204376923",
  },
  verification: {
    google: "aXmRbu-z3DEK6VnvMyHLBAUTf1nWqrNQRn7vKO8PBC8",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
