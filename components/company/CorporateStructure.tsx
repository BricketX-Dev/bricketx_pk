"use client";

import React from "react";
import { motion } from "framer-motion";

const regions = [
  {
    flowTag: "HOLDINGS",
    title: "UK / BVI",
    flag: "/images/flags/united-kingdom.png",
    role: "Corporate Structure",
    sub: "Holdings and governance for the group.",
  },
  {
    flowTag: "LEADERSHIP",
    title: "Dubai",
    flag: "/images/flags/uae.png",
    role: "Management",
    sub: "Regional leadership and investor relations.",
  },
  {
    flowTag: "PRODUCTION",
    title: "Kenya",
    flag: "/images/flags/kenya.png",
    role: "Mining",
    sub: "On-the-ground production and sourcing.",
  },
  {
    flowTag: "EXECUTION",
    title: "Pakistan",
    flag: "/images/flags/pakistan.png",
    role: "Operations",
    sub: "The Karachi hub - where it's built.",
  },
];

export default function CorporateStructure() {
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
            The Structure
          </span>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#E7EAF0] mt-3.5 mb-3">
            One Network - Four Regions
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#8B95A6]">
            Each region owns a distinct role - and every one connects back to the Karachi hub, where the network is built and run.
          </p>
        </motion.div>

        {/* Updated Grid Container to match GlobalOperations styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#a5adb6]/20 border border-[#C6A067]/30 rounded-[14px] overflow-hidden hover:border-[#C6A067]/50 transition-colors backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
          {regions.map((reg) => (
            <div 
              key={reg.title} 
              className="bg-[#0E1116]/70 p-[30px_24px] hover:bg-[#151A21]/80 transition-colors group cursor-pointer relative overflow-hidden"
            >
              {/* Added hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C6A067]/0 via-[#C6A067]/0 to-[#C6A067]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="absolute top-3.5 right-4 font-sans text-[10px] text-[#5C6577] group-hover:text-[#C6A067] transition-colors tracking-widest uppercase z-10">
                {reg.flowTag}
              </span>

              <h3 className="font-heading font-semibold text-xl text-[#E7EAF0] group-hover:text-[#ffffff] transition-colors flex items-center gap-[14px] relative z-10">
                {/* Enhanced flag shadow and border on hover */}
                <div className="relative w-[34px] h-[24px] rounded-[4px] overflow-hidden border border-[#a5adb6]/30 group-hover:border-[#C6A067]/80 shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:shadow-[0_0_12px_rgba(198,160,103,0.5)] transition-all duration-300 flex-shrink-0">
                  <img
                    src={reg.flag}
                    alt={`${reg.title} Flag`}
                    className="w-full h-full object-cover scale-[1.05]"
                  />
                </div>
                {reg.title}
              </h3>
              
              <div className="font-sans text-xs uppercase tracking-wider text-[#C6A067] mt-2.5 relative z-10">
                {reg.role}
              </div>
              
              <div className="font-sans text-sm text-[#8B95A6] group-hover:text-[#ffffff] transition-colors mt-1.5 leading-relaxed relative z-10">
                {reg.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}