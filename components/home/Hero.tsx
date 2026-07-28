"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative z-10 flex items-center min-h-[calc(100vh-130px)] py-[40px] lg:py-[0px]">
      <div className="max-w-[1160px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-[36px] lg:gap-[64px] items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-20"
          >
            <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
              BricketX Pakistan // Operational & Innovation Hub
            </motion.span>
            
            <motion.h1 variants={fadeUp} className="font-sans font-semibold text-[clamp(40px,5vw,72px)] xl:text-[76px] leading-[1.08] tracking-[-0.02em] mt-[20px] lg:mt-[24px]">
              Powering the <br /> 
              <span className="whitespace-nowrap"><span className="text-[#c39967] drop-shadow-[0_0_15px_rgba(195,153,103,0.3)]">BricketX</span> Network</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-[17px] lg:text-[19px] text-[#a5adb6] max-w-[520px] mt-[20px] lg:mt-[24px]">
              Where strategy, technology and execution meet to build and scale the global BricketX ecosystem — from Karachi to the world.
            </motion.p>
            
            <motion.div variants={fadeUp} className="font-sans font-medium text-[12px] lg:text-[13px] tracking-[0.05em] text-[#a5adb6] mt-[24px] lg:mt-[28px] flex flex-wrap gap-x-[14px] gap-y-[6px]">
              <span className="hover:text-[#c39967] transition-colors cursor-default">Technology</span>&middot;
              <span className="hover:text-[#c39967] transition-colors cursor-default">Operations</span>&middot;
              <span className="hover:text-[#c39967] transition-colors cursor-default">Marketing</span>&middot;
              <span className="hover:text-[#c39967] transition-colors cursor-default">Production</span>&middot;
              <b className="text-[#c39967] font-semibold drop-shadow-[0_0_8px_rgba(195,153,103,0.4)]">Excellence</b>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-[14px] mt-[36px] lg:mt-[44px]">
              <button onClick={() => scrollToSection('#departments')} className="font-sans font-medium text-[14px] lg:text-[15px] py-[14px] px-[26px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[9px] bg-[#c39967] text-[#212121] hover:bg-[#d4a873] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(195,153,103,0.3)]">
                Explore the Departments
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </button>
              <button onClick={() => scrollToSection('#build')} className="font-sans font-medium text-[14px] lg:text-[15px] py-[14px] px-[26px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[9px] border border-[#a5adb6]/30 text-[#ffffff] hover:border-[#c39967] hover:text-[#c39967] hover:bg-[#c39967]/5 hover:-translate-y-[2px]">
                See What We Build
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[420px] md:max-w-[520px] xl:max-w-[620px] mx-auto order-first md:order-last flex justify-center items-center" 
            aria-hidden="true"
          >
            <motion.div
              animate={{ 
                y: [-15, 10, -15], 
                rotateZ: [0, -1, 1, 0],
                filter: [
                  "drop-shadow(0px 15px 30px rgba(195,153,103,0.15))", 
                  "drop-shadow(0px 35px 55px rgba(195,153,103,0.35))", 
                  "drop-shadow(0px 15px 30px rgba(195,153,103,0.15))"
                ]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-full flex justify-center items-center relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c39967]/10 to-transparent blur-[90px] rounded-full scale-75 pointer-events-none" />
              
              <img 
                src="/images/home/hero1.png" 
                alt="BricketX Hub Visualization" 
                className="w-full h-auto max-h-[65vh] object-contain scale-[1.15] hover:scale-[1.20] transition-transform duration-700 relative z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}