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
    <section className="relative z-10 py-20 bg-[#151A21] border-y border-[#252D38]">
      <div className="max-w-[1160px] mx-auto px-6">
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
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className={`group relative border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "border-[#C6A067]/40 bg-[#1A1F26] shadow-[0_0_20px_rgba(198,160,103,0.08)]" 
                    : "border-[#252D38] bg-[#0E1116] hover:border-[#C6A067]/30"
                }`}
              >
                {/* Animated Left Accent Line */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-[#C6A067] transition-transform duration-300 origin-center ${
                    isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                  }`} 
                />

                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 font-sans font-medium text-base sm:text-lg flex justify-between items-center gap-4 cursor-pointer relative z-10"
                >
                  <span className={`transition-colors duration-300 ${
                    isOpen ? "text-[#C6A067]" : "text-[#E7EAF0] group-hover:text-[#C6A067]"
                  }`}>
                    {faq.q}
                  </span>
                  
                  <div className={`p-1.5 rounded-full transition-colors duration-300 ${
                    isOpen ? "bg-[#C6A067]/10" : "bg-transparent group-hover:bg-[#C6A067]/10"
                  }`}>
                    <Plus
                      className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-45 text-[#C6A067]" : "text-[#8B95A6] group-hover:text-[#C6A067]"
                      }`}
                    />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 font-sans text-sm sm:text-base text-[#8B95A6] max-w-[760px] leading-relaxed relative z-10">
                        {faq.a}
                      </div>
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