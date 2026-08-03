import type { Metadata } from "next";

import BuildHero from "@/components/build/BuildHero";
import SystemsGrid from "@/components/build/SystemsGrid";
import BuildLifecycle from "@/components/build/BuildLifecycle";
import BuildFaq from "@/components/build/BuildFaq";
import BuildCTA from "@/components/build/BuildCTA";

export const metadata: Metadata = {
  title: "What We Build — BricketX Pakistan | The Systems Powering the Network",
  description:
    "Not services — systems. The investor portal, web platforms, AI, CRM, dashboards, automations, funnels, reporting and operational tooling the BricketX hub builds and runs.",
  alternates: {
    canonical: "https://www.bricketx.pk/what-we-build/",
  },
  openGraph: {
    title: "What We Build — The systems powering the BricketX network",
    description:
      "Investor portal, web platforms, AI, CRM, dashboards, automations, funnels, reporting, brand and operational systems.",
    url: "https://www.bricketx.pk/what-we-build/",
    siteName: "BricketX Pakistan",
    images: [{ url: "https://www.bricketx.pk/og-build.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function WhatWeBuildPage() {
  return (
    <>
      <BuildHero />
      <SystemsGrid />
      <BuildLifecycle />
      <BuildFaq />
      <BuildCTA />
    </>
  );
}