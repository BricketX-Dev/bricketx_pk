import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer";

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
    <div className="relative min-h-screen bg-[#0E1116] text-[#ffffff] font-sans overflow-x-hidden antialiased selection:bg-[#c39967] selection:text-[#212121]">
      <Navbar />
      
      <main>
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
      </main>

      <Footer />
    </div>
  );
}