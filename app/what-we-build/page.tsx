import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    <div className="relative min-h-screen bg-[#0E1116] text-[#ffffff] font-sans overflow-x-hidden antialiased selection:bg-[#c39967] selection:text-[#212121]">
      <Navbar />

      <main className="relative">
        {/* Subtle Background Grid Pattern matching your theme */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-50 bg-[linear-gradient(to_right,#252D38_1px,transparent_1px),linear-gradient(to_bottom,#252D38_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_30%,transparent_75%)]" />

        <BuildHero />
        <SystemsGrid />
        <BuildLifecycle />
        <BuildFaq />
        <BuildCTA />
      </main>

      <Footer />
    </div>
  );
}