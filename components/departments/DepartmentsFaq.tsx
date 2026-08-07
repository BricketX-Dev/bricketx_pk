"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const deptFaqs = [
  {
    q: "How many departments does BricketX Pakistan have?",
    a: "Five departments operate from the Karachi hub: Technology, Marketing, Operations, Creative and Production.",
  },
  {
    q: "What does the Technology department do?",
    a: "It builds the web platforms, AI, automation and cyber security that the entire BricketX network runs on.",
  },
  {
    q: "Do the departments only work for BricketX?",
    a: "Yes. They are in-house teams that build, run and scale the BricketX ecosystem - not an external agency.",
  },
  {
    q: "Where are the departments based?",
    a: "All five departments are based in the Karachi hub and coordinate execution across the UK/BVI, Dubai and Kenya.",
  },
];

export default function DepartmentsFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mb-10"
        >
          <span className="font-sans font-medium text-[12px] uppercase tracking-[0.18em] text-[#C6A067] flex items-center gap-2.5">
            <span className="w-[22px] h-[1px] bg-[#C6A067] opacity-70"></span>
            Common Questions
          </span>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#E7EAF0] mt-3.5">
            About the departments
          </h2>
        </motion.div>

        <div className="space-y-3">
          {deptFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[#252D38] rounded-xl bg-[#151A21] overflow-hidden"
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
                    <div className="px-6 pb-6 font-sans text-sm sm:text-base text-[#8B95A6] max-w-[760px] leading-relaxed">
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