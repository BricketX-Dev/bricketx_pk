"use client";

import React from "react";
import { motion } from "framer-motion";

// If you are using Next.js, you can import Image from "next/image" for better optimization
// import Image from "next/image";

export default function PipelineFlow() {
  return (
    <section className="relative z-10 py-20 bg-[#151A21] border-y border-[#252D38]">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mb-10"
        >
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C6A067] flex items-center gap-2.5">
            <span className="w-[22px] h-[1px] bg-[#C6A067] opacity-70"></span>
            How They Connect
          </span>
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-[#E7EAF0] mt-3.5 mb-3">
            Five departments, one pipeline
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#8B95A6]">
            No department works alone. Every project flows through the hub in the same sequence.
          </p>
        </motion.div>

        {/* Enhanced Pipeline Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // 1. Framer motion hover effects for the container
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 80px rgba(198,160,103,0.25)",
            borderColor: "rgba(198,160,103,0.7)",
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            scale: { duration: 0.4, ease: "easeOut" },
            boxShadow: { duration: 0.4, ease: "easeOut" },
          }}
          // Adjusted padding: Extremely tight vertical spacing (py-2 & sm:py-2)
          className="group relative w-full flex items-center justify-center px-8 py-2 sm:px-14 sm:py-2 rounded-2xl bg-gradient-to-br from-[#1C2128] via-[#11141A] to-[#0A0C0F] border border-[#C6A067]/40 shadow-[0_0_45px_rgba(198,160,103,0.12)] ring-1 ring-inset ring-black/60 overflow-hidden cursor-pointer"
        >
          {/* Subtle Inner Border that brightens on hover */}
          <div className="absolute inset-0 rounded-2xl border border-[#C6A067]/10 pointer-events-none transition-colors duration-500 group-hover:border-[#C6A067]/30"></div>

          {/* 2. Sweeping Shine Effect (Tailwind transition) - SLOWED DOWN */}
          {/* Changed duration-[1.2s] to duration-[2.5s] */}
          <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-[#C6A067]/15 to-transparent group-hover:translate-x-[150%] transition-transform duration-[2.5s] ease-in-out pointer-events-none"></div>

          {/* 3. Changed to motion.img for independent scale to create a 3D parallax feel */}
          <motion.img
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            src="/images/department/five-departments-one-pipeline.png"
            alt="Pipeline Flow across Five Departments"
            className="w-full max-w-[920px] h-auto object-contain relative z-10 drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}