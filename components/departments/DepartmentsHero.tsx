"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DepartmentsHero() {
  return (
    <section className="relative z-10 pt-10 pb-8 md:pt-16 md:pb-12">
      <div className="max-w-[1160px] mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="font-mono text-xs text-[#5C6577] tracking-wider mb-8">
          <Link href="/" className="hover:text-[#C6A067] transition-colors">
            Home
          </Link>{" "}
          / <span className="text-[#C6A067]">Departments</span>
        </nav>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#C6A067] flex items-center gap-2.5">
            <span className="w-[22px] h-[1px] bg-[#C6A067] opacity-70"></span>
            Our Departments
          </div>

          <h1 className="font-sans font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-[#E7EAF0] mt-5">
            Five teams
            <br />
            One <span className="text-[#C6A067]">engine room</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-[#8B95A6] max-w-[620px] mt-5 leading-relaxed">
            Every part of the BricketX ecosystem - from the investor portal to global coordination - is built, run and scaled by a dedicated department inside the Karachi hub. This is how the work is divided.
          </p>
        </motion.div>
      </div>
    </section>
  );
}