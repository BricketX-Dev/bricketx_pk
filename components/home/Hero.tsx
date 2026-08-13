"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen bg-[#121212] overflow-hidden flex items-center z-0 pt-28 lg:pt-0 pb-16 lg:pb-0">
      {/* Background Gradient/Wave Simulation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c39967]/10 to-transparent blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent blur-[100px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Column - Text Content */}
        <div 
          className={`col-span-1 lg:col-span-6 flex flex-col items-start transition-all duration-1000 ease-out transform ${
            isMounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <span className="text-[#c39967] font-bold text-[12px] md:text-[14px] tracking-[0.15em] uppercase mb-5 md:mb-6 flex items-center gap-2">
            [ BricketX Pakistan ]
          </span>

          <h1 className="font-heading text-white font-semibold text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] mb-6">
            Powering The <br />
            <span className="text-white drop-shadow-[0_0_15px_rgba(195,153,103,0.15)]">BricketX Network.</span>
          </h1>

          <p className="text-[#a5adb6] text-[17px] md:text-[19px] max-w-[540px] mb-10 leading-[1.6]">
            Where strategy, technology and execution meet to build and scale the global BricketX ecosystem — from Karachi to the world.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('#departments')}
              className="w-full sm:w-auto bg-[#c39967] text-[#212121] hover:bg-[#d4a873] hover:shadow-[0_8px_20px_rgba(195,153,103,0.25)] hover:-translate-y-[2px] transition-all duration-300 font-bold text-[15px] py-[16px] px-[32px] rounded-full inline-flex items-center justify-center gap-3 group"
            >
              Explore Departments
              <svg className="w-[18px] h-[18px] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 19L19 5M19 5H9M19 5V15" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              onClick={() => scrollToSection('#build')}
              className="w-full sm:w-auto text-white hover:text-[#c39967] transition-colors duration-300 font-medium text-[15px] inline-flex items-center justify-center gap-3 group"
            >
              <span className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#c39967]/60 group-hover:bg-[#c39967]/5 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              See What We Build
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[#a5adb6] text-[14px] font-medium border-t border-white/10 pt-8 w-full">
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#c39967] text-[#212121] flex items-center justify-center text-[11px] font-bold">
                ✓
              </span>
              Technology & Operations
            </span>
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#c39967] text-[#212121] flex items-center justify-center text-[11px] font-bold">
                ✓
              </span>
              Marketing & Production
            </span>
          </div>
        </div>

        {/* Right Column - Image & Floating Badges */}
        <div 
          className={`col-span-1 lg:col-span-6 relative transition-all duration-1000 ease-out delay-300 transform ${
            isMounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[24px] overflow-hidden bg-white/5 border border-white/5">
            {/* Main Image using Next.js Image component */}
            <Image 
        
              src="/images/department/one-engine-room.png" 
              alt="BricketX Operations and Technology" 
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Badge 1 (Left) */}
          <div className="absolute top-[15%] left-[-5%] sm:left-[-12%] bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 py-4 px-5 rounded-[16px] shadow-2xl flex items-center gap-4 animate-[bounce_5s_ease-in-out_infinite]">
            <div className="w-8 h-8 rounded-full bg-[#c39967] flex items-center justify-center text-[#212121] font-bold text-[14px]">
              ✓
            </div>
            <span className="text-white text-[13px] font-semibold leading-[1.3]">
              Trusted by 800+ <br /> Tech Giants.
            </span>
          </div>

          {/* Floating Badge 2 (Bottom Right) */}
          <div className="absolute bottom-[5%] right-[-5%] sm:right-[5%] bg-[#151515] border border-white/10 p-6 rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-[bounce_6s_ease-in-out_infinite_reverse]">
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-[42px] h-[42px] rounded-full bg-gray-700 border-[3px] border-[#151515] overflow-hidden relative">
                   <div className="absolute inset-0 bg-gray-500"></div>
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
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className={`hidden lg:flex absolute left-8 bottom-12 flex-col items-center gap-4 transition-opacity duration-1000 delay-700 ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <span 
          className="text-[#a5adb6] text-[11px] font-semibold uppercase tracking-[0.2em] rotate-180" 
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll Down
        </span>
        <button 
          onClick={() => scrollToSection('#departments')}
          className="w-[34px] h-[34px] rounded-full border border-white/20 flex items-center justify-center text-[#a5adb6] hover:bg-[#c39967]/10 hover:border-[#c39967]/50 hover:text-[#c39967] transition-all cursor-pointer"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}