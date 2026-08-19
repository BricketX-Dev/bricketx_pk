"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";

// Defined a linear gradient ID to use inside our SVGs for that premium gold glow
const GRADIENT_ID = "goldIconGradient";

interface Department {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const depts: Department[] = [
  { 
    title: 'Technology', 
    desc: 'Web platforms, AI, automation and security architecture.', 
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={`url(#${GRADIENT_ID})`} strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1.5 3 3 3h10c1.5 0 3-1 3-3V7m-16 0c0-2 1.5-3 3-3h10c1.5 0 3 1 3 3m-16 0v4c0 2 1.5 3 3 3h10c1.5 0 3-1 3-3V7" />
      </svg>
    ) 
  },
  { 
    title: 'Marketing', 
    desc: 'Demand generation, brand building and investor reach.', 
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={`url(#${GRADIENT_ID})`} strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8 M14 7h7v7" />
      </svg>
    ) 
  },
  { 
    title: 'Operations', 
    desc: 'Investor relations, CRM, and capital documentation.', 
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={`url(#${GRADIENT_ID})`} strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    ) 
  },
  { 
    title: 'Creative', 
    desc: 'Branding, interface, and motion graphics design.', 
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke={`url(#${GRADIENT_ID})`} strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-1m0 4h.01M9 21h6M12 3a6 6 0 00-6 6c0 2.2 1.3 4.1 3.2 5.1.5.3.8.8.8 1.4V17h4v-1.5c0-.6.3-1.1.8-1.4 1.9-1 3.2-2.9 3.2-5.1a6 6 0 00-6-6z" />
      </svg>
    ) 
  }
];

export default function Departments() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50, 
    damping: 20,   
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef} 
      id="departments" 
      className="relative z-10 bg-[#0a0a0a] min-h-screen py-32 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Global SVG Definition for the Premium Gold Stroke */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#e8c79c" offset="0%" />
            <stop stopColor="#c39967" offset="50%" />
            <stop stopColor="#9a7246" offset="100%" />
          </linearGradient>
        </defs>
      </svg>

      {/* Deep Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#c39967]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1300px] px-6 mx-auto flex flex-col items-center">
        
        <HeaderTitle />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-28 mb-20">
          {depts.map((dept, index) => (
            <GlassCard 
              key={index} 
              dept={dept} 
              index={index} 
              progress={smoothProgress} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// ==========================================
// BACKGROUND HEADER COMPONENT
// ==========================================
function HeaderTitle() {
  return (
    <div className="text-center max-w-[900px] mx-auto flex flex-col items-center">
      <span className="font-sans font-bold text-[11px] tracking-[0.25em] uppercase text-[#c39967] mb-6 flex items-center justify-center gap-3 bg-gradient-to-b from-white/[0.05] to-transparent px-6 py-2 rounded-full border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <span className="w-4 h-[1px] bg-[#c39967]/60"></span>
        Core Departments
        <span className="w-4 h-[1px] bg-[#c39967]/60"></span>
      </span>
      
      <h2 className="font-heading font-medium text-[40px] md:text-[56px] leading-[1.1] text-white">
        Five Dedicated Teams. <br/>
        <span className="text-[#c39967] font-semibold drop-shadow-[0_0_15px_rgba(195,153,103,0.2)]">One Engine Room.</span>
      </h2>
      
      <p className="mt-6 text-[#8a8f98] text-[16px] md:text-[18px] max-w-2xl mx-auto font-sans font-light leading-relaxed">
        Our API-first, agentless architecture integrates with existing technology to replace fragmented silos with a single control plane.
      </p>
    </div>
  );
}

// ==========================================
// GLASSMORPHIC CARD COMPONENT
// ==========================================
function GlassCard({ 
  dept, 
  index, 
  progress 
}: { 
  dept: Department; 
  index: number; 
  progress: MotionValue<number>;
}) {
  // PERFECTING THE CURVE:
  // Adjusted offsets so it forms a gentle, sweeping U-shape before settling.
  const startYOffsets = [-120, -30, -30, -120];
  const startY = startYOffsets[index] || 0;

  const y = useTransform(progress, [0, 1], [startY, 0]);
  const opacity = useTransform(progress, [0, 0.8], [0.2, 1]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="relative flex flex-col group h-full will-change-transform"
    >
      <div className="flex flex-col items-center text-center h-[380px] rounded-[32px] bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-[#222] shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:border-[#c39967]/40 z-10">
        
        {/* 1px Inner Top Edge Highlight (Creates the 3D glass rim effect) */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 group-hover:via-[#c39967]/60 to-transparent transition-colors duration-500" />

        {/* Hover Radial Glow */}
        <div className="absolute -top-24 w-48 h-48 bg-[#c39967]/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="relative p-10 flex flex-col items-center h-full z-20 w-full">
          
          {/* Floating Icon Container */}
          <div className="w-20 h-20 rounded-[20px] bg-gradient-to-b from-[#1c1c1c] to-[#121212] border border-[#2a2a2a] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.4)] flex items-center justify-center mb-10 group-hover:-translate-y-1.5 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_12px_30px_rgba(195,153,103,0.15)] group-hover:border-[#c39967]/30 transition-all duration-500">
            <div className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              {dept.icon}
            </div>
          </div>

          {/* Text Content */}
          <div className="mt-auto flex flex-col items-center w-full">
            <h3 className="text-white font-medium text-[20px] mb-3 tracking-wide group-hover:text-[#c39967] transition-colors duration-300">
              {dept.title}
            </h3>
            <p className="text-[#8a8f98] text-[14px] leading-relaxed font-light max-w-[90%]">
              {dept.desc}
            </p>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}