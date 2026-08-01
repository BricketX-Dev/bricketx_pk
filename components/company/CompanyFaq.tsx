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
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C6A067] flex items-center gap-2.5">
            <span className="w-[22px] h-[1px] bg-[#C6A067] opacity-70"></span>
            Common Questions
          </span>
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-[#E7EAF0] mt-3.5">
            About the company
          </h2>
        </motion.div>

        <div className="space-y-3">
          {companyFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[#252D38] rounded-xl bg-[#0E1116] overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-6 py-5 font-sans font-medium text-base sm:text-lg text-[#E7EAF0] flex justify-between items-center gap-4 cursor-pointer"
              >
                <span>{faq.q}</span>
                <Plus
                  className={`w-5 h-5 text-[#C6A067] transition-transform duration-300 flex-shrink-0 ${
                    openIdx === idx ? "rotate-45" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-sm sm:text-base text-[#8B95A6] max-w-[760px] leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}