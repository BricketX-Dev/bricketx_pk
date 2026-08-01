"use client";

import React from "react";
import { motion } from "framer-motion";

const flowSteps = [
  { n: "01", title: "Idea" },
  { n: "02", title: "Research" },
  { n: "03", title: "Design" },
  { n: "04", title: "Build" },
  { n: "05", title: "Automate" },
  { n: "06", title: "Scale" },
];

export default function OperatingModel() {
  return (
    <section className="relative z-10 py-20">
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
            The Operating Model
          </span>
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-[#E7EAF0] mt-3.5 mb-3">
            Idea to scale, every time
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#8B95A6]">
            Every project moves through the same path across the hub's five departments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-[#252D38] border border-[#252D38] rounded-xl overflow-hidden"
        >
          {flowSteps.map((step) => (
            <div key={step.n} className="bg-[#0E1116] p-6 text-center">
              <div className="font-mono text-xs text-[#C6A067] tracking-wider">
                {step.n}
              </div>
              <h4 className="font-sans font-medium text-base text-[#E7EAF0] mt-2">
                {step.title}
              </h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}