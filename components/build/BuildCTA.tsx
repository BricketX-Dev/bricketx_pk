"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BuildCTA() {
  return (
    <section id="contact" className="relative z-10 py-[80px] text-center overflow-hidden border-t border-[#a5adb6]/20 bg-[#151A21]">
      {/* Radial Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c39967]/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[1160px] mx-auto px-6 relative z-10"
      >
        <span className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] justify-center before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
          Build With The Hub
        </span>

        <h2 className="font-heading font-semibold text-[clamp(32px,5vw,52px)] mb-[18px] mt-[16px]">
          Systems That Run <span className="text-[#c39967] drop-shadow-[0_0_15px_rgba(195,153,103,0.4)]">The Network</span>
        </h2>

        <p className="font-sans text-[#a5adb6] text-[18px] max-w-[520px] mx-auto mb-[34px]">
          See how the BricketX hub can build and run the infrastructure behind your ecosystem
        </p>

        <div className="flex flex-wrap gap-[14px] justify-center">
          <Link
            href="/contact"
            className="font-sans font-medium text-[15px] py-[14px] px-[26px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[9px] bg-[#c39967] text-[#212121] hover:bg-[#d4a873] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(195,153,103,0.3)]"
          >
            Get in Touch
          </Link>
          <Link
            href="/departments"
            className="font-sans font-medium text-[15px] py-[14px] px-[26px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[9px] border border-[#a5adb6]/30 text-[#ffffff] hover:border-[#c39967] hover:text-[#c39967] hover:bg-[#c39967]/5 hover:-translate-y-[2px]"
          >
            See the Departments
          </Link>
        </div>
      </motion.div>
    </section>
  );
}