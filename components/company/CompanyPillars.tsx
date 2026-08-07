"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const pillarsData = [
  { idx: "01", title: "Our Ecosystem", description: "How BricketX's entities, regions and verticals connect into one network - from corporate structure to on-the-ground production.", link: "#" },
  { idx: "02", title: "How We Operate", description: "The disciplined idea-to-scale process the hub runs on every project - research, design, build, automate, ship.", link: "#" },
  { idx: "03", title: "Global Operations", description: "Who does what across the network's four regions - the UK/BVI, Dubai, Kenya and Pakistan - and how they stay coordinated.", link: "#" },
  { idx: "04", title: "Innovation Lab", description: "Where new products, AI experiments and process improvements begin - and get tested before they reach the network.", link: "#" },
];

export default function CompanyPillars() {
  return (
    <section className="relative z-10 py-[40px]">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-[16px]"
        >
          {pillarsData.map((item) => (
            <motion.div key={item.idx} variants={fadeUp}>
              <Link
                href={item.link}
                className="block h-full bg-[#151A21]/80 backdrop-blur-sm border border-[#a5adb6]/20 rounded-[14px] p-[32px_28px] transition-all duration-300 hover:border-[#c39967] hover:-translate-y-[4px] hover:bg-[#151A21] hover:shadow-[0_10px_30px_rgba(195,153,103,0.15)] group relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-[60px] h-[60px] bg-gradient-to-bl from-[#c39967]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full" />
                
                <div>
                  <span className="font-sans font-medium text-[12px] text-[#c39967] tracking-[0.1em]">
                    {item.idx}
                  </span>
                  <h2 className="font-heading font-semibold text-[24px] mt-[10px] mb-[10px] group-hover:text-[#c39967] transition-colors relative z-10">
                    {item.title}
                  </h2>
                  <p className="font-sans text-[#a5adb6] text-[15px] group-hover:text-[#ffffff] transition-colors relative z-10">
                    {item.description}
                  </p>
                </div>

                <div className="mt-[22px] font-sans font-medium text-[12px] text-[#c39967] opacity-0 transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 relative z-10">
                  Explore &rarr;
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}