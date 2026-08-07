"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const values = [
  { n: "01", title: "Educate First", desc: "We teach before we sell — internally and to investors." },
  { n: "02", title: "Innovate Continuously", desc: "New tools, new processes, always shipping something better." },
  { n: "03", title: "Operate With Excellence", desc: "Precision and accountability in everything we run." },
  { n: "04", title: "Think Globally", desc: "We build for a network that spans four regions." },
  { n: "05", title: "Build For Scale", desc: "Every system is designed to grow, not just work." },
  { n: "06", title: "Never Stop Learning", desc: "The hub upskills constantly, across every department." },
  { n: "07", title: "Always Improve", desc: "We iterate on process as much as on product." },
];

export default function CultureValues() {
  return (
    <section className="relative z-10 py-[100px]">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="max-w-[660px] mb-[48px]">
            <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
              How We Think
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-[clamp(28px,4vw,40px)] text-[#E7EAF0] mt-[14px] mb-[12px]">
              The principles we run on.
            </motion.h2>
            <motion.p variants={fadeUp} className="font-sans text-[#8B95A6] text-[17px]">
              Seven values that shape every decision inside the hub.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
            {values.map((val, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                whileHover={{ y: -6 }}
                className="bg-[#151A21] border border-[#252D38] rounded-[14px] p-[30px_28px] transition-all duration-300 hover:border-[#c39967] hover:shadow-[0_20px_40px_rgba(195,153,103,0.1)] group relative overflow-hidden"
              >
                {/* Subtle corner glow */}
                <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-gradient-to-bl from-[#c39967]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full pointer-events-none" />
                
                <div className="font-sans text-[12px] text-[#c39967] tracking-[0.1em] mb-[16px] transition-transform duration-300 group-hover:scale-110 origin-left">
                  {val.n}
                </div>
                <h3 className="font-heading font-semibold text-[20px] text-[#E7EAF0] mb-[10px] group-hover:text-[#c39967] transition-colors relative z-10">
                  {val.title}
                </h3>
                <p className="font-sans text-[#8B95A6] text-[15px] leading-relaxed relative z-10">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}