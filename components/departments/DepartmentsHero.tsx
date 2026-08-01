"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
export default function DepartmentsHero() {
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
            Our Departments
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-sans font-semibold text-[clamp(40px,5vw,60px)] leading-[1.08] tracking-[-0.02em] mt-[16px] mb-[14px]"
          >
            Five teams. <br />
            One <span className="text-[#c39967] drop-shadow-[0_0_15px_rgba(195,153,103,0.3)]">engine room.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[#a5adb6] text-[17px] lg:text-[19px] mt-[20px]"
          >
            Every part of the BricketX ecosystem - from the investor portal to global coordination - is built, run and scaled by a dedicated department inside the Karachi hub. This is how the work is divided.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}