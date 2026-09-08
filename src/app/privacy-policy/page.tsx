import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How LuggageSearch.com handles data, cookies, and advertising.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-[80rem] px-5 sm:px-6 py-16 lg:py-20">
      <PageIntro chip="Privacy" chipColor="sky" title="Privacy policy" lede={`Last updated September 2026. This page explains what data ${SITE.name} collects and how it is used.`} narrow />
      <div className="prose-content mt-12 max-w-[46rem]">
        <h2>What this site collects directly</h2>
        <p>
          {SITE.name} does not require an account, and none of the tools on this site — including the carry-on
          checker and packing list generator — send the information you enter to our servers or store it after you
          close the page; it stays in your browser.
        </p>

        <h2>Analytics</h2>
        <p>
          This site uses Vercel Web Analytics to understand overall traffic — which pages get visited, roughly
          where from, and on what kind of device. It does not use cookies, and Vercel does not collect information
          that can identify you individually: visits are counted using an anonymous hash generated from the
          request, not tied to your identity, and that hash is discarded after 24 hours. No data collected this way
          is shared with advertisers or used to personalize ads.
        </p>

        <h2>Hosting and standard server logs</h2>
        <p>
          Like any website, this site is served through hosting infrastructure (Vercel) that automatically logs
          standard technical information for security and performance purposes — such as IP address, browser type,
          and pages requested. This is normal web-server behavior, not something {SITE.name} configures or accesses
          individually.
        </p>

        <h2>Cookies and advertising</h2>
        <p>
          This site is designed to display advertising through Google AdSense. Once active, Google and its
          advertising partners may use cookies or similar technologies to serve ads based on your visits to this and
          other sites, and to measure ad performance. Google&apos;s use of advertising cookies enables it and its
          partners to serve ads based on your visit to this site and/or other sites on the internet.
        </p>
        <p>
          You can opt out of personalized advertising by visiting{" "}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer nofollow">
            Google Ads Settings
          </a>
          , or opt out of third-party vendors&apos; use of cookies for personalized advertising by visiting{" "}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer nofollow">
            www.aboutads.info
          </a>{" "}
          (US) or{" "}
          <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer nofollow">
            www.youronlinechoices.eu
          </a>{" "}
          (EU).
        </p>

        <h2>Affiliate links</h2>
        <p>
          This site may include affiliate links, including through the Amazon Associates program. If you click one
          and make a purchase, we may earn a commission at no additional cost to you — see our{" "}
          <a href="/affiliate-disclosure">affiliate disclosure</a> for details. Clicking an affiliate link may set a
          cookie on the destination site (e.g. Amazon) to track the referral; this site does not control those
          cookies.
        </p>

        <h2>Third-party images</h2>
        <p>
          Photos on this site are sourced from Unsplash and loaded directly from Unsplash&apos;s servers, which may
          log standard request information (such as IP address) independently of this site, under{" "}
          <a href="https://unsplash.com/privacy" target="_blank" rel="noopener noreferrer nofollow">
            Unsplash&apos;s own privacy policy
          </a>
          .
        </p>

        <h2>Children&apos;s privacy</h2>
        <p>
          This site is not directed at children under 13, and we do not knowingly collect personal information from
          children.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have rights under data protection laws such as the GDPR (EU/UK) or
          state privacy laws (e.g. California&apos;s CCPA) — including the right to know what data is collected
          about you and to opt out of its sale or sharing for advertising purposes. The opt-out links above cover the
          advertising-related choices most relevant to this site.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy as the site changes — for example once advertising or affiliate programs are
          actually active. Check back here for the current version.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy — email us at <a href="mailto:hello@luggagesearch.com">hello@luggagesearch.com</a>.
        </p>
      </div>
    </article>
  );
}
