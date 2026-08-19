"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Premium easing curve
  const easePremium = [0.16, 1, 0.3, 1] as const;

  return (
    
    <section className="relative w-full z-10 pt-12 lg:pt-20 pb-16 lg:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Column - Text Content */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-start">
          <motion.span 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: easePremium }}
            className="text-[#c39967] font-bold text-[12px] md:text-[14px] tracking-[0.15em] uppercase mb-5 md:mb-6 flex items-center gap-2"
          >
            [ BricketX Pakistan ]
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: easePremium }}
            className="font-heading text-white font-semibold text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] mb-6"
          >
            Powering The <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#c39967] to-[#8a6b46]">
              BricketX Network.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: easePremium }}
            className="text-[#a5adb6] text-[17px] md:text-[19px] max-w-[540px] mb-10 leading-[1.6]"
          >
            Where strategy, technology and execution meet to build and scale the global BricketX ecosystem — from Karachi to the world.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 w-full sm:w-auto overflow-hidden p-2 -m-2">
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: easePremium }}
              onClick={() => scrollToSection('#departments')}
              className="w-full sm:w-auto bg-gradient-to-r from-[#c39967] to-[#b38855] text-[#121212] hover:shadow-[0_0_30px_rgba(195,153,103,0.4)] hover:scale-105 transition-all duration-300 font-bold text-[15px] py-[16px] px-[32px] rounded-full inline-flex items-center justify-center gap-3 group"
            >
              Explore Departments
              <svg className="w-[18px] h-[18px] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 19L19 5M19 5H9M19 5V15" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: easePremium }}
              onClick={() => scrollToSection('#build')}
              className="w-full sm:w-auto text-white hover:text-[#c39967] transition-colors duration-300 font-medium text-[15px] inline-flex items-center justify-center gap-3 group"
            >
              <span className="w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:border-[#c39967]/50 group-hover:bg-[#c39967]/10 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              See What We Build
            </motion.button>
          </div>
        </div>

        {/* Right Column - Image & Floating Badges */}
        <div className="col-span-1 lg:col-span-6 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.85, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: easePremium }}
            className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[24px] overflow-hidden bg-white/5 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <Image 
              src="/images/department/one-engine-room.png" 
              alt="BricketX Operations and Technology" 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#121212]/40 to-transparent"></div>
          </motion.div>

          {/* Floating Badge 1 (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute top-[15%] left-[-5%] sm:left-[-12%] bg-[#121212]/80 backdrop-blur-xl border border-white/10 py-4 px-5 rounded-[16px] shadow-2xl flex items-center gap-4 animate-[bounce_5s_ease-in-out_infinite]"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c39967] to-[#8a6b46] flex items-center justify-center text-[#121212] font-bold text-[14px]">
              ✓
            </div>
            <span className="text-white text-[13px] font-semibold leading-[1.3]">
              Trusted by 800+ <br /> Tech Giants.
            </span>
          </motion.div>

          {/* Floating Badge 2 (Bottom Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute bottom-[5%] right-[-5%] sm:right-[5%] bg-[#121212]/90 backdrop-blur-xl border border-white/10 p-6 rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-[bounce_6s_ease-in-out_infinite_reverse]"
          >
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-[42px] h-[42px] rounded-full bg-[#1a1a1a] border-[3px] border-[#121212] overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#c39967]/40 to-white/10"></div>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-3 mb-1">
              <span className="text-white text-[36px] font-bold leading-none tracking-tight">4.9</span>
              <div className="flex text-[#c39967] text-[16px] pb-1 tracking-widest drop-shadow-[0_0_8px_rgba(195,153,103,0.3)]">
                ★★★★★
              </div>
            </div>
            <span className="text-[#a5adb6] text-[12px] font-medium">Based on 600+ Google Reviews.</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}