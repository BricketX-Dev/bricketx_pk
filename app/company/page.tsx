import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CompanyHero from "@/components/company/CompanyHero";
import CompanyPillars from "@/components/company/CompanyPillars";
import CorporateStructure from "@/components/company/CorporateStructure";
import OperatingModel from "@/components/company/OperatingModel";
import CompanyFaq from "@/components/company/CompanyFaq";
import CompanyCTA from "@/components/company/CompanyCTA";

export const metadata: Metadata = {
  title: "The Company — BricketX Pakistan | Ecosystem, Operating Model & Global Structure",
  description:
    "Inside BricketX Pakistan - how the network is structured, how the hub operates, where its four regions sit (UK/BVI, Dubai, Kenya, Pakistan), and where new ideas begin.",
  alternates: {
    canonical: "https://www.bricketx.pk/company/",
  },
  openGraph: {
    title: "The Company — Inside the BricketX network",
    description:
      "Ecosystem, operating model, global structure and the innovation lab behind BricketX.",
    url: "https://www.bricketx.pk/company/",
    siteName: "BricketX Pakistan",
    images: [{ url: "https://www.bricketx.pk/og-company.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function CompanyPage() {
  return (
    <div className="relative min-h-screen bg-[#0E1116] text-[#ffffff] font-sans overflow-x-hidden antialiased selection:bg-[#c39967] selection:text-[#212121]">
      <Navbar />

      <main className="relative">
        {/* Subtle Background Grid Pattern */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-50 bg-[linear-gradient(to_right,#252D38_1px,transparent_1px),linear-gradient(to_bottom,#252D38_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_30%,transparent_75%)]" />

        <CompanyHero />
        <CompanyPillars />
        <CorporateStructure />
        <OperatingModel />
        <CompanyFaq />
        <CompanyCTA />
      </main>

      <Footer />
    </div>
  );
}