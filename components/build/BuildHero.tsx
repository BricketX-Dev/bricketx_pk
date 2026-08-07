"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function BuildHero() {
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
            What We Build
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-heading font-semibold text-[clamp(40px,5vw,60px)] leading-[1.08] tracking-[-0.02em] mt-[16px] mb-[14px]"
          >
            Not services
            <br />
            <span className="text-[#c39967] drop-shadow-[0_0_15px_rgba(195,153,103,0.3)]">
              Systems
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-sans text-[#a5adb6] text-[17px] lg:text-[19px] mt-[20px]"
          >
            BricketX Pakistan doesn't ship one-off deliverables. It builds and runs
            the infrastructure that keeps the entire BricketX network moving —
            from the portal investors log into to the tooling that runs behind
            the scenes.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="font-sans font-medium text-[12px] lg:text-[13px] tracking-[0.05em] text-[#a5adb6] mt-[24px]"
          >
            10 core systems &middot; built in-house &middot; maintained 24/7
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}