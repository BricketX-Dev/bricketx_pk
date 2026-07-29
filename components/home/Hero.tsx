"use client";

import { motion, Variants } from "framer-motion";
import MagicRings from "./MagicRings"; // Adjust the import path if necessary

// Custom animation variants for the left-hand slide-in effect
const slideInLeftContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.15,
    },
  },
};

const slideInLeftItem: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0, 
    transition: { 
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] 
    },
  },
};

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative z-10 flex items-center min-h-[calc(100vh-130px)] py-[40px] lg:py-[0px]">
      <div className="max-w-[1160px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-[36px] lg:gap-[64px] items-center">
          
          {/* Left Column - Text & CTAs (Will show on ALL screen sizes) */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={slideInLeftContainer}
            className="relative z-20"
          >
            <motion.span variants={slideInLeftItem} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
              BricketX Pakistan // Operational & Innovation Hub
            </motion.span>
            
            <motion.h1 variants={slideInLeftItem} className="font-sans font-semibold text-[clamp(40px,5vw,72px)] xl:text-[76px] leading-[1.08] tracking-[-0.02em] mt-[20px] lg:mt-[24px]">
              Powering the <br /> 
              <span className="whitespace-nowrap"><span className="text-[#c39967] drop-shadow-[0_0_15px_rgba(195,153,103,0.3)]">BricketX</span> Network</span>
            </motion.h1>
            
            <motion.p variants={slideInLeftItem} className="text-[17px] lg:text-[19px] text-[#a5adb6] max-w-[520px] mt-[20px] lg:mt-[24px]">
              Where strategy, technology and execution meet to build and scale the global BricketX ecosystem — from Karachi to the world.
            </motion.p>
            
            <motion.div variants={slideInLeftItem} className="font-sans font-medium text-[12px] lg:text-[13px] tracking-[0.05em] text-[#a5adb6] mt-[24px] lg:mt-[28px] flex flex-wrap gap-x-[14px] gap-y-[6px]">
              <span className="hover:text-[#c39967] transition-colors cursor-default">Technology</span>&middot;
              <span className="hover:text-[#c39967] transition-colors cursor-default">Operations</span>&middot;
              <span className="hover:text-[#c39967] transition-colors cursor-default">Marketing</span>&middot;
              <span className="hover:text-[#c39967] transition-colors cursor-default">Production</span>&middot;
              <b className="text-[#c39967] font-semibold drop-shadow-[0_0_8px_rgba(195,153,103,0.4)]">Excellence</b>
            </motion.div>
            
            {/* 👇 Changed flex container to flex-col for mobile, sm:flex-row for larger screens */}
            <motion.div variants={slideInLeftItem} className="flex flex-col sm:flex-row flex-wrap gap-[14px] mt-[36px] lg:mt-[44px] w-full">
              {/* 👇 Added w-full sm:w-auto and justify-center */}
              <button onClick={() => scrollToSection('#departments')} className="w-full sm:w-auto justify-center font-sans font-medium text-[14px] lg:text-[15px] py-[14px] px-[26px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[9px] bg-[#c39967] text-[#212121] hover:bg-[#d4a873] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(195,153,103,0.3)]">
                Explore the Departments
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </button>
              {/* 👇 Added w-full sm:w-auto and justify-center */}
              <button onClick={() => scrollToSection('#build')} className="w-full sm:w-auto justify-center font-sans font-medium text-[14px] lg:text-[15px] py-[14px] px-[26px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[9px] border border-[#a5adb6]/30 text-[#ffffff] hover:border-[#c39967] hover:text-[#c39967] hover:bg-[#c39967]/5 hover:-translate-y-[2px]">
                See What We Build
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Animations (Hidden on mobile, visible on tablet/desktop) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="hidden md:flex relative w-full max-w-[500px] md:max-w-[600px] xl:max-w-[750px] mx-auto justify-center items-center" 
            aria-hidden="true"
          >
            <motion.div
              animate={{ 
                y: [-12, 12, -12], 
                scale: [1, 1.04, 1], 
                rotateZ: [0, -0.5, 0.5, 0],
                filter: [
                  "drop-shadow(0px 15px 30px rgba(195,153,103,0.15))", 
                  "drop-shadow(0px 35px 55px rgba(195,153,103,0.35))", 
                  "drop-shadow(0px 15px 30px rgba(195,153,103,0.15))"
                ]
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-full flex justify-center items-center relative"
            >
              {/* Soft background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c39967]/10 to-transparent blur-[90px] rounded-full scale-75 pointer-events-none" />
              
              {/* Magic Rings Animation Frame */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] aspect-square z-0 pointer-events-none opacity-90 mix-blend-screen"
                style={{
                  WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 70%)',
                  maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 70%)',
                }}
              >
                <MagicRings 
                  color="#c39967"      
                  colorTwo="#e8c8a1"   
                  ringCount={5}        
                  speed={0.75}         
                  lineThickness={2} 
                  baseRadius={0.35} 
                  opacity={1}
                  followMouse={false}  
                />
              </div>
              
              {/* Main Graphic */}
              <img 
                src="/images/home/hero1.png" 
                alt="BricketX Hub Visualization" 
                className="w-full h-auto max-h-[80vh] object-contain scale-[1.40] relative z-10"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}