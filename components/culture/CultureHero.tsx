"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function CultureHero() {
  return (
    <section className="relative z-10 pt-6 pb-10 overflow-hidden">
      {/* Animated subtle background glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-[#c39967]/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <div className="font-sans font-medium text-[12px] text-[#5C6577] tracking-[0.04em] mb-12">
          <Link href="/" className="hover:text-[#c39967] transition-colors duration-300">Home</Link> / <span className="text-[#c39967]">Culture & Careers</span>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-[640px]"
        >
          <motion.span
            variants={fadeUp}
            className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70"
          >
            Culture & Careers
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-heading font-semibold text-[clamp(38px,5.5vw,60px)] leading-[1.08] tracking-[-0.02em] mt-[20px] mb-[14px]"
          >
            The People Behind<br />
            The{" "}
            <motion.span 
              className="inline-block text-[#c39967] drop-shadow-[0_0_20px_rgba(195,153,103,0.5)]"
              animate={{ textShadow: ["0px 0px 20px rgba(195,153,103,0.3)", "0px 0px 40px rgba(195,153,103,0.7)", "0px 0px 20px rgba(195,153,103,0.3)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Engine Room
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-sans text-[#8B95A6] text-[19px] mt-[20px] leading-relaxed"
          >
            BricketX Pakistan isn't an agency taking briefs — it's the in-house team building a global investment network from Karachi. Here's how we think, how we work, and where you fit in.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}