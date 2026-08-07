"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Added Variants import
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function LifeAtBricketX() {
  const tiles = ["ENGINEERING", "DESIGN STUDIO", "CONTENT", "BRAINSTORMS", "PRODUCTION", "THE TEAM"];

  // Explicitly type as Variants to resolve TypeScript errors
  const tileStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const tileFade: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <section className="relative z-10 py-[100px] bg-[#151A21] border-y border-[#252D38]">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[32px] items-center"
        >
          <motion.div variants={fadeUp} className="pr-0 lg:pr-10">
            <span className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
              Life at BricketX
            </span>
            <h2 className="font-heading font-semibold text-[clamp(26px,3.5vw,36px)] text-[#E7EAF0] mt-[14px] mb-[16px]">
              Real people. Real work.<br /> No stock photos.
            </h2>
            <p className="font-sans text-[#8B95A6] text-[16px] mb-[16px] leading-relaxed">
              Inside the Karachi hub you'll find engineers, designers, marketers and operators building side by side — coding, filming, designing, brainstorming and shipping the systems that run the network.
            </p>
            <p className="font-sans text-[13px] text-[#9AA7BC] border-l-2 border-[#c39967] pl-[14px] py-1 bg-gradient-to-r from-[#c39967]/5 to-transparent">
              This is a working studio, not a portfolio. Every image on this page is our team, our space, our work.
            </p>
            <div className="mt-[28px]">
              <Link
                href="/life-at-bricketx"
                className="group font-heading font-medium text-[15px] py-[14px] px-[26px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[10px] border border-[#313B48] text-[#E7EAF0] hover:border-[#c39967] hover:bg-[#c39967]/10 hover:shadow-[0_0_20px_rgba(195,153,103,0.15)] hover:-translate-y-1"
              >
                See Life at BricketX
                <span className="transition-transform duration-300 group-hover:translate-x-1 text-[#c39967]">&rarr;</span>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            variants={tileStagger} 
            className="grid grid-cols-3 gap-[1px] bg-[#252D38] border border-[#252D38] rounded-[16px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-[1px]"
            aria-hidden="true"
          >
            {tiles.map((tile, i) => (
              <motion.div 
                key={i} 
                variants={tileFade}
                className="bg-[#0E1116] aspect-square flex items-center justify-center font-sans text-[10.5px] text-[#5C6577] text-center tracking-[0.05em] p-[8px] transition-all duration-300 hover:bg-[#1B222B] hover:text-[#c39967] hover:scale-[1.02] hover:z-10 hover:shadow-[0_0_20px_rgba(195,153,103,0.2)] cursor-default rounded-[4px]"
              >
                {tile}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}