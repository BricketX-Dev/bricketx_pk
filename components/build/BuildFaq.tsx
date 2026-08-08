"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What does BricketX Pakistan build?",
    a: "Systems, not one-off services: the investor portal, web platforms, AI, CRM, dashboards, automations, marketing funnels, reporting and operational tooling that run the BricketX network.",
  },
  {
    q: "What is the BricketX investor portal?",
    a: "It is the secure dashboard investors log into to track their holdings, returns and documents in real time.",
  },
  {
    q: "Are these products or services?",
    a: "They are internal systems and platforms that power the BricketX ecosystem, built and maintained by the Karachi hub rather than sold as external services.",
  },
  {
    q: "Which department builds these systems?",
    a: "Most are engineered by the Technology department, with Creative, Marketing and Operations shaping the design, funnels and reporting around them.",
  },
];

export default function BuildFaq() {
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
          <span className="font-sans text-xs uppercase tracking-[0.18em] text-[#C6A067] flex items-center gap-2.5">
            <span className="w-[22px] h-[1px] bg-[#C6A067] opacity-70"></span>
            Common Questions
          </span>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#E7EAF0] mt-3.5">
            About What We Build
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
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