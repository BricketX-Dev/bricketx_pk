"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What is it like to work at BricketX Pakistan?", a: "You join the in-house Karachi hub building a global investment network — working across engineering, design, marketing, AI, operations and production, not client service." },
  { q: "What roles does BricketX Pakistan hire for?", a: "Developers, UI/UX and designers, marketing, AI, operations, production and management." },
  { q: "What are BricketX Pakistan's values?", a: "Educate first, innovate continuously, operate with excellence, think globally, build for scale, and never stop learning." },
  { q: "How do I apply to BricketX Pakistan?", a: "Visit the careers page, choose the department that fits your skills, and get in touch with the hub." },
];

export default function CultureFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative z-10 py-[80px] bg-[#151A21] border-y border-[#252D38] overflow-hidden">
      {/* Subtle ambient background glow for the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A067]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="max-w-[660px] mb-[40px]">
            <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
              Common Questions
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-[clamp(28px,4vw,40px)] text-[#E7EAF0] mt-[14px] mb-[12px]">
              About Working Here
            </motion.h2>
          </div>

          <div className="space-y-[12px]">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <motion.div key={idx} variants={fadeUp}>
                  <motion.div
                    initial={false}
                    animate={{
                      backgroundColor: isOpen ? "#1A212A" : "#151A21",
                      borderColor: isOpen ? "rgba(195,153,103,0.4)" : "#252D38",
                      boxShadow: isOpen
                        ? "0 10px 30px -10px rgba(195,153,103,0.15)"
                        : "0 0px 0px 0px rgba(0,0,0,0)",
                    }}
                    whileHover={{
                      borderColor: "rgba(195,153,103,0.7)",
                      backgroundColor: "#1C242D",
                      y: -2,
                      boxShadow: "0 10px 40px -10px rgba(195,153,103,0.25)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="group relative border rounded-[12px] overflow-hidden"
                  >
                    {/* Glowing Active Line Indicator */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "100%" : "0%",
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute left-0 top-0 w-[3px] bg-[#c39967] shadow-[0_0_12px_#c39967] z-20 pointer-events-none"
                    />

                    {/* Light Sweep on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c39967]/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out pointer-events-none z-0" />

                    <button
                      onClick={() => toggle(idx)}
                      className="relative z-10 w-full text-left px-[24px] py-[20px] font-heading flex justify-between items-center gap-[16px] cursor-pointer outline-none"
                    >
                      <span
                        className={`font-medium text-[17px] transition-all duration-300 transform ${
                          isOpen
                            ? "text-[#FFFFFF] translate-x-2"
                            : "text-[#E7EAF0] group-hover:translate-x-2 group-hover:text-[#FFFFFF]"
                        }`}
                      >
                        {faq.q}
                      </span>
                      
                      {/* Icon Wrapper with background hover state */}
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className={`p-1.5 rounded-full flex-shrink-0 transition-colors duration-300 ${
                          isOpen ? "bg-[#c39967]/20" : "bg-transparent group-hover:bg-[#c39967]/10"
                        }`}
                      >
                        <Plus className="w-[20px] h-[20px] text-[#c39967]" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, filter: "blur(8px)" }}
                          animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                          exit={{ height: 0, opacity: 0, filter: "blur(8px)" }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.4 }}
                            className="px-[24px] pb-[22px] pt-1 font-sans text-[15px] text-[#8B95A6] max-w-[760px] leading-relaxed relative z-10 ml-2"
                          >
                            {faq.a}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}