"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BuildCTA() {
  return (
    <section className="relative z-10 py-24 bg-[#151A21] border-t border-[#252D38] text-center">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#C6A067] inline-flex items-center gap-2.5 justify-center">
            <span className="w-[22px] h-[1px] bg-[#C6A067] opacity-70"></span>
            Build With The Hub
          </span>
          <h2 className="font-sans font-semibold text-3xl sm:text-5xl text-[#E7EAF0] mt-3.5 mb-4">
            Systems that run the network.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#8B95A6] max-w-[500px] mx-auto mb-8">
            See how the BricketX hub can build and run the infrastructure behind your ecosystem.
          </p>

          <div className="flex flex-wrap gap-3.5 justify-center">
            <Link
              href="/contact/"
              className="font-sans font-medium text-sm px-6 py-3.5 rounded-lg bg-[#C6A067] text-[#1a1206] hover:bg-[#d4ac74] transition-all transform hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
            <Link
              href="/departments/"
              className="font-sans font-medium text-sm px-6 py-3.5 rounded-lg border border-[#313B48] text-[#E7EAF0] hover:border-[#8B95A6] hover:bg-[#151A21] transition-all"
            >
              See the Departments
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}