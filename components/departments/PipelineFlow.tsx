"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PipelineFlow() {
  return (
    <section className="relative z-10 py-20 bg-[#151A21] border-y border-[#252D38] overflow-hidden">
      {/* Background ambient pipeline glow */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#C6A067] blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mb-10"
        >
          <span className="font-sans font-medium text-[12px] uppercase tracking-[0.18em] text-[#C6A067] flex items-center gap-2.5">
            <span className="w-[22px] h-[1px] bg-[#C6A067] opacity-70"></span>
            How They Connect
          </span>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#E7EAF0] mt-3.5 mb-3">
            Five Departments, One Pipeline
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#8B95A6]">
            No department works alone. Every project flows through the hub in the same sequence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.015,
            boxShadow: "0 0 80px rgba(198,160,103,0.25)",
            borderColor: "rgba(198,160,103,0.6)",
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            scale: { type: "spring", stiffness: 300, damping: 25 },
          }}
          className="group relative w-full flex items-center justify-center px-8 py-2 sm:px-14 sm:py-2 rounded-2xl bg-gradient-to-br from-[#1C2128] via-[#11141A] to-[#0A0C0F] border border-[#C6A067]/30 shadow-[0_0_45px_rgba(198,160,103,0.12)] ring-1 ring-inset ring-black/60 overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 rounded-2xl border border-[#C6A067]/10 pointer-events-none transition-colors duration-500 group-hover:border-[#C6A067]/40"></div>

          <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-[#C6A067]/20 to-transparent group-hover:translate-x-[150%] transition-transform duration-[2s] ease-in-out pointer-events-none"></div>

          {/* Continuous floating animation on the image itself */}
          <motion.img
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src="/images/department/five-departments-one-pipeline.png"
            alt="Pipeline Flow across Five Departments"
            className="w-full max-w-[920px] h-auto object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </motion.div>
      </div>
    </section>
  );
}