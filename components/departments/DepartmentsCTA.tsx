"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DepartmentsCTA() {
  return (
    <section id="contact" className="relative z-10 py-[80px] text-center overflow-hidden border-t border-[#a5adb6]/20 bg-[#151A21]">
      {/* Pulsing Radial Glow Backdrop */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c39967]/10 rounded-full blur-[120px] pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, staggerChildren: 0.2 }}
        className="max-w-[1160px] mx-auto px-6 relative z-10 flex flex-col items-center"
      >
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] justify-center before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70"
        >
          Work With The Hub
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-heading font-semibold text-[clamp(32px,5vw,52px)] mb-[18px] mt-[16px]"
        >
          Every Department, <span className="text-[#c39967] drop-shadow-[0_0_20px_rgba(195,153,103,0.5)]">One Engine Room</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-sans text-[#a5adb6] text-[18px] max-w-[520px] mx-auto mb-[34px]"
        >
          Partner with the teams powering the BricketX network - or join one of them
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-[16px] justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="font-sans font-medium text-[15px] py-[14px] px-[28px] rounded-[10px] transition-shadow duration-300 inline-flex items-center gap-[9px] bg-[#c39967] text-[#151A21] hover:shadow-[0_10px_30px_rgba(195,153,103,0.4)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Get in Touch</span>
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/careers"
              className="font-sans font-medium text-[15px] py-[14px] px-[28px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[9px] border border-[#a5adb6]/30 text-[#ffffff] hover:border-[#c39967] hover:text-[#c39967] hover:bg-[#c39967]/10"
            >
              View Open Roles
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}