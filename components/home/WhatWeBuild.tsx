"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  category: string;
  img: string;
}

const projects: Project[] = [
  { title: 'Investor Portal Dashboard', category: 'Technology', img: '/images/our-culture/life-at-bricketx.png' },
  { title: 'Marketing Funnels', category: 'Growth', img: '/images/our-culture/life-at-bricketx2.png' },
  { title: 'AI Support Assistants', category: 'Automation', img: '/images/our-culture/life-at-bricketx3.png' },
  { title: 'Global CRM Solutions', category: 'Operations', img: '/images/company/operations.png' },
];

export default function WhatWeBuild() {
  const easePremium = [0.16, 1, 0.3, 1] as const;

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  const typewriterContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(6px)", scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 0.8, ease: easePremium } 
    }
  };

  const lineExpand = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1, 
      transition: { duration: 1.2, ease: easePremium } 
    }
  };

  return (
    <section ref={containerRef} id="build" className="relative z-10 bg-transparent h-[400vh]">

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 lg:px-12">

        {/* Animated Typewriter Header Block */}
        <motion.div 
          variants={typewriterContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center max-w-[700px] mx-auto mb-8 md:mb-12 p-4 shrink-0 z-20 pointer-events-none"
        >
          <div className="font-sans font-bold text-[12px] tracking-[0.2em] uppercase text-[#c39967] mb-6 flex items-center justify-center gap-4 overflow-hidden">
            <motion.span variants={lineExpand} className="w-10 h-[1px] bg-[#c39967] origin-right"></motion.span>
            <span className="inline-block">
              {Array.from("What We Build").map((char, index) => (
                <motion.span key={`small-${index}`} variants={letterVariants} className="inline-block whitespace-pre">
                  {char}
                </motion.span>
              ))}
            </span>
            <motion.span variants={lineExpand} className="w-10 h-[1px] bg-[#c39967] origin-left"></motion.span>
          </div>

          <h2 className="font-heading font-semibold text-[36px] md:text-[56px] leading-[1.05] text-white tracking-tight">
            <span className="block overflow-hidden py-1">
              {Array.from("Not Just Services").map((char, index) => (
                <motion.span key={`line1-${index}`} variants={letterVariants} className="inline-block whitespace-pre">
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden py-1 text-[#c39967] drop-shadow-[0_0_20px_rgba(195,153,103,0.2)]">
              {Array.from("We Build Systems").map((char, index) => (
                <motion.span key={`line2-${index}`} variants={letterVariants} className="inline-block whitespace-pre">
                  {char}
                </motion.span>
              ))}
            </span>
          </h2>
        </motion.div>

        {/* Dynamic Cards Stack */}
        <div 
          className="relative w-full max-w-[1100px] h-[55vh] md:h-[65vh] min-h-[400px] z-10"
          style={{ perspective: "2500px", transformStyle: "preserve-3d" }}
        >
          {projects.map((proj, index) => (
            <ProjectCard 
              key={index} 
              project={proj} 
              index={index} 
              total={projects.length} 
              progress={smoothProgress} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// Sub-component to handle the 3D flying math + Inner Parallax
function ProjectCard({ 
  project, 
  index, 
  total, 
  progress 
}: { 
  project: Project; 
  index: number; 
  total: number; 
  progress: MotionValue<number>;
}) {
  const step = 1 / (total - 1); 

  const center = index * step;
  const entryStart = (index - 1) * step;
  const exitEnd = (index + 1) * step;

  let inputRange: number[] = [];
  let xRange: string[] = [];
  let zRange: number[] = [];
  let rotateYRange: number[] = [];
  let opacityRange: number[] = [];
  let innerYRange: number[] = []; 

  // Adjusted the inner parallax slightly for the new split layout
  if (index === 0) {
    inputRange = [center, exitEnd];
    xRange = ["0%", "-100%"];
    zRange = [0, -1000]; 
    rotateYRange = [0, -45]; 
    opacityRange = [1, 0];
    innerYRange = [0, -20]; 
  } else if (index === total - 1) {
    inputRange = [entryStart, center];
    xRange = ["100%", "0%"];
    zRange = [-1000, 0];
    rotateYRange = [45, 0];
    opacityRange = [0, 1];
    innerYRange = [40, 0]; 
  } else {
    inputRange = [entryStart, center, exitEnd];
    xRange = ["100%", "0%", "-100%"];
    zRange = [-1000, 0, -1000];
    rotateYRange = [45, 0, -45];
    opacityRange = [0, 1, 0];
    innerYRange = [40, 0, -20]; 
  }

  const x = useTransform(progress, inputRange, xRange);
  const z = useTransform(progress, inputRange, zRange);
  const rotateY = useTransform(progress, inputRange, rotateYRange);
  const opacity = useTransform(progress, inputRange, opacityRange);
  const innerY = useTransform(progress, inputRange, innerYRange);

  return (
    <motion.div
      style={{ 
        x, 
        z, 
        rotateY,
        opacity,
        transformOrigin: "center center"
      }}
      // CHANGED: flex-col layout for a split card design, sharper 16px radius
      className="absolute inset-0 w-full h-full rounded-[16px] flex flex-col overflow-hidden group border border-[#ffffff15] shadow-[0_40px_80px_rgba(0,0,0,0.8)] bg-[#050505] will-change-transform"
    >
      {/* UPPER 70%: IMAGE PANEL */}
      <div className="relative w-full h-[70%] overflow-hidden bg-[#111]">
        <Image 
          src={project.img} 
          alt={project.title} 
          fill 
          className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />

        {/* Subtle dark overlay just so it's not blindingly bright */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />

        {/* Floating Top-Left Badge (Different from Departments tag) */}
        <div className="absolute top-6 left-6 px-4 py-1.5 rounded-[8px] bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 text-[#c39967] text-[11px] md:text-[12px] font-bold tracking-widest uppercase shadow-xl">
          {project.category}
        </div>
      </div>

      {/* LOWER 30%: SOLID CONTENT PANEL */}
      <div className="relative w-full h-[30%] bg-[#080808] border-t border-white/10 p-6 md:px-10 flex flex-row items-center justify-between z-10 overflow-hidden">

        {/* Left Side: Parallax Text */}
        <motion.div 
          style={{ y: innerY }}
          className="flex flex-col justify-center h-full"
        >
          <span className="text-[#a5adb6] font-mono text-[11px] md:text-[13px] tracking-wider mb-2 opacity-70">
            System // {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-heading font-semibold text-[22px] md:text-[36px] text-white leading-tight drop-shadow-sm max-w-[90%]">
            {project.title}
          </h3>
        </motion.div>

        {/* Right Side: Pill Button (Different from Departments circle button) */}
        <motion.div style={{ y: innerY }}>
          <button className="hidden md:flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#c39967] hover:border-[#c39967] hover:text-[#121212] transition-all duration-300 text-white font-semibold text-sm whitespace-nowrap">
            View Case Study
            <svg className="w-4 h-4 -rotate-45 transition-transform group-hover:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m-7-7l7 7-7 7"/></svg>
          </button>

          {/* Mobile minimal version of the button */}
          <button className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white">
            <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"/></svg>
          </button>
        </motion.div>

      </div>
    </motion.div>
  );
}