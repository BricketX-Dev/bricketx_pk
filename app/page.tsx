// Home Components
import Hero from "@/components/home/Hero";
import ConsoleStrip from "@/components/home/ConsoleStrip";
import Stats from "@/components/home/Stats";
import Positioning from "@/components/home/Positioning";
import Departments from "@/components/home/Departments";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import Company from "@/components/home/Company";
import GlobalOperations from "@/components/home/GlobalOperations";
import CultureCareers from "@/components/home/CultureCareers";
import Faq from "@/components/home/Faq";
import Cta from "@/components/home/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ConsoleStrip />
      <Stats />
      <Positioning />
      <Departments />
      <WhatWeBuild />
      <Company />
      <GlobalOperations />
      <CultureCareers />
      <Faq />
      <Cta />
    </>
  );
}