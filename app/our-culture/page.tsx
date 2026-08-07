import type { Metadata } from "next";

import CultureHero from "@/components/culture/CultureHero";
import CultureValues from "@/components/culture/CultureValues";
import LifeAtBricketX from "@/components/culture/LifeAtBricketX";
import CareersAndModal from "@/components/culture/CareersAndModal";
import CultureFaq from "@/components/culture/CultureFaq";
import CultureCTA from "@/components/culture/CultureCTA";

// ============ SEO METADATA ============
export const metadata: Metadata = {
  title: "Culture & Careers — BricketX Pakistan | Life at the Hub & Open Roles",
  description:
    "The values behind the BricketX hub, what life inside it looks like, and the roles we hire for — developers, designers, marketing, AI, operations, production and management.",
  alternates: {
    canonical: "https://www.bricketx.pk/our-culture/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large", // Updated to the exact string key expected by Next.js
  },
  openGraph: {
    title: "Culture & Careers — Join the team building the future of alternative investments",
    description: "The values, the people and the open roles inside the BricketX Karachi hub.",
    url: "https://www.bricketx.pk/our-culture/",
    siteName: "BricketX Pakistan",
    images: [
      {
        url: "https://www.bricketx.pk/og-culture.jpg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function OurCulturePage() {
  return (
    <>
      {/* ============ SEO: Breadcrumb ============ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.bricketx.pk/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Culture & Careers",
                item: "https://www.bricketx.pk/our-culture/",
              },
            ],
          }),
        }}
      />

      {/* ============ GEO: About (culture + hiring) ============ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Culture & Careers — BricketX Pakistan",
            description:
              "The culture, values and hiring of the BricketX Pakistan hub — the Karachi team building the operational backbone of the BricketX network.",
            isPartOf: {
              "@type": "WebSite",
              name: "BricketX Pakistan",
              url: "https://www.bricketx.pk/",
            },
            mainEntity: {
              "@type": "Organization",
              name: "BricketX Pakistan",
              url: "https://www.bricketx.pk/",
              description:
                "The operational and innovation hub of the BricketX network, based in Karachi.",
              values: [
                "Educate first",
                "Innovate continuously",
                "Operate with excellence",
                "Think globally",
                "Build for scale",
                "Never stop learning",
              ],
              hiringOrganization: true,
            },
          }),
        }}
      />

      {/* ============ AEO: FAQ ============ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is it like to work at BricketX Pakistan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You join the in-house Karachi hub building a global investment network — working across engineering, design, marketing, AI, operations and production, not client service.",
                },
              },
              {
                "@type": "Question",
                name: "What roles does BricketX Pakistan hire for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Developers, UI/UX and designers, marketing, AI, operations, production and management.",
                },
              },
              {
                "@type": "Question",
                name: "What are BricketX Pakistan's values?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Educate first, innovate continuously, operate with excellence, think globally, build for scale, and never stop learning.",
                },
              },
              {
                "@type": "Question",
                name: "How do I apply to BricketX Pakistan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Visit the careers page, choose the department that fits your skills, and get in touch with the hub.",
                },
              },
            ],
          }),
        }}
      />

      {/* ============ PAGE CONTENT ============ */}
      <div className="relative min-h-screen bg-[#0E1116] text-[#E7EAF0] overflow-x-hidden">
        <main className="relative z-10 flex flex-col">
          <CultureHero />
          <CultureValues />
          <LifeAtBricketX />
          <CareersAndModal />
          <CultureFaq />
          <CultureCTA />
        </main>
      </div>
    </>
  );
}