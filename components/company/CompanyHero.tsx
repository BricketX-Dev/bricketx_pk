"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
export default function CompanyHero() {
  return (
    <section className="relative z-10 pt-10 pb-8 md:pt-16 md:pb-12">
      <div className="max-w-[1160px] mx-auto px-6">
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
            The Company
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-sans font-semibold text-[clamp(40px,5vw,60px)] leading-[1.08] tracking-[-0.02em] mt-[16px] mb-[14px]"
          >
            The engine behind <br />
            the <span className="text-[#c39967] drop-shadow-[0_0_15px_rgba(195,153,103,0.3)]">network</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[#a5adb6] text-[17px] lg:text-[19px] mt-[20px]"
          >
            BricketX Pakistan is the operational core of a network that spans four regions. Here's how it's structured, how it operates, and where its next ideas come from.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}