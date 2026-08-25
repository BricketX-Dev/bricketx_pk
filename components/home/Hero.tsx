"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-130px)] py-[40px] lg:py-[0px] overflow-hidden bg-black">
      
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/06.webp"
          alt="BricketX Network Background"
          fill
          priority
          /* Reduced opacity to 40 to make the background significantly darker */
          className="object-cover object-center opacity-50"
        />
        {/* Deepened the base dark overlay from black/40 to black/60 */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 w-full flex flex-col items-center text-center">
        
        <div className="flex flex-col items-center">
          {/* Symmetrical left and right lines for the centered top tag */}
          <span className="font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70 after:content-[''] after:w-[22px] after:h-[1px] after:bg-[#c39967] after:opacity-70">
            BricketX Pakistan // Operational & Innovation Hub
          </span>
          
          {/* Using the new font-heading class here */}
          <h1 className="font-heading font-semibold text-[clamp(40px,5vw,72px)] xl:text-[76px] leading-[1.08] tracking-[-0.02em] mt-[20px] lg:mt-[24px] text-white">
            Powering The <br /> 
            <span className="whitespace-nowrap"><span className="text-[#c39967] drop-shadow-[0_0_15px_rgba(195,153,103,0.3)]">BricketX</span> Network</span>
          </h1>
          
          <p className="text-[17px] lg:text-[19px] text-[#a5adb6] max-w-[620px] mt-[20px] lg:mt-[24px] drop-shadow-md">
            Where strategy, technology and execution meet to build and scale the global BricketX ecosystem — from Karachi to the world.
          </p>
          
          <div className="font-medium text-[12px] lg:text-[13px] tracking-[0.05em] text-[#a5adb6] mt-[24px] lg:mt-[28px] flex flex-wrap justify-center gap-x-[14px] gap-y-[6px]">
            <span className="hover:text-[#c39967] transition-colors cursor-default">Technology</span>&middot;
            <span className="hover:text-[#c39967] transition-colors cursor-default">Operations</span>&middot;
            <span className="hover:text-[#c39967] transition-colors cursor-default">Marketing</span>&middot;
            <span className="hover:text-[#c39967] transition-colors cursor-default">Production</span>&middot;
            <b className="text-[#c39967] font-semibold drop-shadow-[0_0_8px_rgba(195,153,103,0.4)]">Excellence</b>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-[14px] mt-[36px] lg:mt-[44px] w-full">
            <button onClick={() => scrollToSection('#departments')} className="w-full sm:w-auto justify-center font-medium text-[14px] lg:text-[15px] py-[14px] px-[26px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[9px] bg-[#c39967] text-[#212121] hover:bg-[#d4a873] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(195,153,103,0.3)]">
              Explore the Departments
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
            
            <button onClick={() => scrollToSection('#build')} className="w-full sm:w-auto justify-center font-medium text-[14px] lg:text-[15px] py-[14px] px-[26px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[9px] border border-[#a5adb6]/30 text-[#ffffff] backdrop-blur-sm hover:border-[#c39967] hover:text-[#c39967] hover:bg-[#c39967]/10 hover:-translate-y-[2px]">
              See What We Build
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}