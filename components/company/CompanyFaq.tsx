"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const companyFaqs = [
  {
    q: "How is BricketX structured?",
    a: "Across four regions: the UK/BVI holds the corporate structure, Dubai handles management, Kenya handles mining, and Pakistan runs operations and execution from the Karachi hub.",
  },
  {
    q: "What is the BricketX ecosystem?",
    a: "The connected set of entities, regions and verticals that make up the network, coordinated operationally from the Karachi hub.",
  },
  {
    q: "How does BricketX operate?",
    a: "Through a disciplined idea-to-scale process run by the hub's five departments - Technology, Marketing, Operations, Creative and Production.",
  },
  {
    q: "What is the BricketX Innovation Lab?",
    a: "The team where new products, AI experiments and process improvements are developed and tested before they roll out across the network.",
  },
];

export default function CompanyFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative z-10 py-20 bg-[#151A21] border-y border-[#252D38] overflow-hidden">
      {/* Subtle ambient background glow for the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A067]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[660px] mb-10"
        >
          <span className="font-sans text-xs uppercase tracking-[0.18em] text-[#C6A067] flex items-center gap-2.5">
            <span className="w-[22px] h-[1px] bg-[#C6A067] opacity-70"></span>
            Common Questions
          </span>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#E7EAF0] mt-3.5">
            About The Company
          </h2>
        </motion.div>

        <div className="space-y-4">
          {companyFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={false}
                animate={{
                  backgroundColor: isOpen ? "#1A212A" : "#151A21",
                  borderColor: isOpen ? "rgba(198,160,103,0.4)" : "#252D38",
                  boxShadow: isOpen
                    ? "0 10px 30px -10px rgba(198,160,103,0.15)"
                    : "0 0px 0px 0px rgba(0,0,0,0)",
                }}
                whileHover={{
                  borderColor: "rgba(198,160,103,0.7)",
                  backgroundColor: "#1C242D",
                  y: -2,
                  boxShadow: "0 10px 40px -10px rgba(198,160,103,0.25)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative border rounded-xl overflow-hidden"
              >
                {/* Glowing Active Line Indicator */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "100%" : "0%",
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute left-0 top-0 w-[3px] bg-[#C6A067] shadow-[0_0_12px_#C6A067] z-20 pointer-events-none"
                />

                {/* Light Sweep on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C6A067]/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out pointer-events-none z-0" />

                <button
                  onClick={() => toggle(idx)}
                  className="relative z-10 w-full text-left px-6 py-5 font-sans flex justify-between items-center gap-4 cursor-pointer outline-none"
                >
                  <span
                    className={`font-medium text-base sm:text-lg transition-all duration-300 transform ${
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
                      isOpen ? "bg-[#C6A067]/20" : "bg-transparent group-hover:bg-[#C6A067]/10"
                    }`}
                  >
                    <Plus className="w-5 h-5 text-[#C6A067]" />
                  </motion.div>
                </button>
                
                {/* initial={false} on AnimatePresence prevents it from animating on first page load */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, filter: "blur(8px)" }}
                      animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                      exit={{ height: 0, opacity: 0, filter: "blur(8px)" }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      // overflow-hidden is REQUIRED here to prevent the content from snapping outside during collapse
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="px-6 pb-6 pt-1 font-sans text-sm sm:text-base text-[#8B95A6] max-w-[760px] leading-relaxed relative z-10 ml-2"
                      >
                        {faq.a}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}