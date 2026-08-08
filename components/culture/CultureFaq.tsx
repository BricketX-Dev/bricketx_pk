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
    <section className="relative z-10 py-[80px] bg-[#151A21] border-y border-[#252D38]">
      <div className="max-w-[1160px] mx-auto px-6">
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
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className={`border rounded-[12px] bg-[#151A21] overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'border-[#c39967]/50 shadow-[0_0_30px_rgba(195,153,103,0.1)]' 
                      : 'border-[#252D38] hover:border-[#313B48] hover:bg-[#1B222B]'
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-[20px_24px] font-heading font-medium text-[17px] text-[#E7EAF0] flex justify-between items-center gap-[16px] cursor-pointer group"
                  >
                    <span className="transition-colors duration-300 group-hover:text-[#c39967]">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                      className={`flex-shrink-0 p-1 rounded-full transition-colors duration-300 ${isOpen ? 'bg-[#c39967]/10' : 'group-hover:bg-[#313B48]'}`}
                    >
                      <Plus className="w-[20px] h-[20px] text-[#c39967]" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-[24px] pb-[22px] font-sans text-[15px] text-[#8B95A6] max-w-[760px] leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}