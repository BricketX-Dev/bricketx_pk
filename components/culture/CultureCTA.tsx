"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function CultureCTA() {
  return (
    <section id="contact" className="relative z-10 py-[120px] text-center overflow-hidden">
      {/* Dynamic Animated Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c39967]/5 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] justify-center before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
            Build With Us
          </motion.span>

          <motion.h2 variants={fadeUp} className="font-heading font-semibold text-[clamp(30px,5vw,46px)] text-[#E7EAF0] mb-[16px] mt-[14px]">
            Ready to join the engine room?
          </motion.h2>

          <motion.p variants={fadeUp} className="font-sans text-[#8B95A6] text-[17px] max-w-[520px] mx-auto mb-[40px]">
            Pick a department, or send us your work — we're always looking for people who build.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-[16px] justify-center">
            <Link
              href="/careers"
              className="group relative font-heading font-medium text-[15px] p-[14px_28px] rounded-[10px] bg-[#c39967] text-[#1a1206] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(195,153,103,0.4)] active:scale-95 inline-flex items-center gap-[9px]"
            >
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-[#ffffff]/40 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out" />
              <span className="relative z-10">View Open Roles</span>
            </Link>
            <Link
              href="/contact"
              className="group font-heading font-medium text-[15px] p-[14px_28px] rounded-[10px] border border-[#313B48] text-[#E7EAF0] transition-all duration-300 hover:border-[#c39967] hover:text-[#c39967] hover:bg-[#c39967]/10 hover:scale-105 active:scale-95 inline-flex items-center gap-[9px]"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}