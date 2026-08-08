"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function DepartmentsHero() {
  return (
    <section className="relative z-10 pt-12 pb-10 md:pt-20 md:pb-16 overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text Content */}
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
              className="font-heading font-semibold text-[clamp(40px,5vw,60px)] leading-[1.08] tracking-[-0.02em] mt-[16px] mb-[14px]"
            >
              Five Teams <br />
              One <span className="text-[#c39967] drop-shadow-[0_0_15px_rgba(195,153,103,0.3)]">Engine Room</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-sans text-[#a5adb6] text-[17px] lg:text-[19px] mt-[20px] leading-relaxed"
            >
              Every part of the BricketX ecosystem - from the investor portal to global coordination - is built, run and scaled by a dedicated department inside the Karachi hub. This is how the work is divided.
            </motion.p>
          </motion.div>

          {/* Right Side: Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            // Added floating effect and colored shadow on hover to the container
            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[5/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group border border-white/10 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(195,153,103,0.4)]"
          >
            {/* 1. Diagonal Shine Sweep Effect */}
            <div className="absolute top-0 -left-[120%] h-full w-[50%] z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[200%] transition-all duration-1000 ease-in-out pointer-events-none" />

            {/* 2. Ambient Background Glow (Warmer on hover) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c39967]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay" />
            
            <Image
              src="/images/department/one-engine-room.png"
              alt="One Engine Room"
              fill
              priority
              // Added slight rotation alongside the scale for a more dynamic feel
              className="object-cover object-center scale-100 group-hover:scale-110 group-hover:-rotate-1 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* 3. Interactive Border that changes color on hover */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-[#c39967]/50 transition-all duration-500 rounded-2xl md:rounded-3xl pointer-events-none z-20" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}