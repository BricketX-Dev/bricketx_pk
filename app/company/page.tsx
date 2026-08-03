import type { Metadata } from "next";

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
    <>
      <CompanyHero />
      <CompanyPillars />
      <CorporateStructure />
      <OperatingModel />
      <CompanyFaq />
      <CompanyCTA />
    </>
  );
}