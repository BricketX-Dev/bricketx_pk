"use client";

import React from "react";
import { motion } from "framer-motion";

const flowSteps = [
  { n: "01", title: "Research", text: "Production frames the problem." },
  { n: "02", title: "Design", text: "Creative shapes the experience." },
  { n: "03", title: "Build", text: "Technology engineers it." },
  { n: "04", title: "Launch", text: "Marketing takes it to market." },
  { n: "05", title: "Run", text: "Operations scales and reports." },
];

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

        {/* Pipeline Steps Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-[1px] bg-[#252D38] border border-[#252D38] rounded-xl overflow-hidden"
        >
          {flowSteps.map((step, idx) => (
            <div
              key={step.n}
              className={`bg-[#0E1116] p-6 text-center ${
                idx === flowSteps.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="font-mono text-xs text-[#C6A067] tracking-wider">
                {step.n}
              </div>
              <h4 className="font-sans font-medium text-base text-[#E7EAF0] mt-2">
                {step.title}
              </h4>
              <p className="font-sans text-xs text-[#8B95A6] mt-1.5 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}