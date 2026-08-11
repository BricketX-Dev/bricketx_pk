"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface Capability {
  title: string;
  description: string;
  link: string;
}

interface DepartmentSectionProps {
  id: string;
  idx: string;
  title: string;
  lead: string;
  viewLink: string;
  capabilities: Capability[];
}

export default function DepartmentSection({
  id,
  idx,
  title,
  lead,
  viewLink,
  capabilities,
}: DepartmentSectionProps) {
  return (
    <section id={id} className="py-[60px] border-b border-[#a5adb6]/20 last-of-type:border-b-0 relative z-10 scroll-mt-32">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-[32px]">
            <motion.div variants={fadeUp} className="flex items-start gap-5">
              <span className="font-sans font-medium text-[14px] text-[#c39967] tracking-[0.1em] pt-1">
                {idx}
              </span>
              <div>
                <h2 className="font-heading font-semibold text-[clamp(28px,4vw,36px)] leading-[1.1]">
                  {title}
                </h2>
                <p className="font-sans text-[#a5adb6] text-[16px] mt-[10px] max-w-[640px]">
                  {lead}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link
                href={viewLink}
                className="group font-sans font-medium text-[13px] text-[#c39967] border border-[#a5adb6]/30 rounded-[10px] px-[16px] py-[10px] hover:border-[#c39967] hover:bg-[#c39967]/10 transition-all duration-300 whitespace-nowrap self-start inline-flex items-center gap-2"
              >
                View department 
                <motion.span 
                  className="inline-block"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  &rarr;
                </motion.span>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
            {capabilities.map((cap) => (
              <motion.div key={cap.title} variants={fadeUp}>
                <Link href={cap.link} className="block h-full outline-none">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-full bg-[#151A21]/80 backdrop-blur-sm border border-[#a5adb6]/20 rounded-[14px] p-[24px_20px] transition-colors duration-300 hover:border-[#c39967] hover:bg-[#151A21] hover:shadow-[0_15px_35px_rgba(195,153,103,0.15)] group relative overflow-hidden flex flex-col justify-between"
                  >
                    <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-gradient-to-bl from-[#c39967]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
                    
                    <div>
                      <h3 className="font-heading font-semibold text-[18px] mb-[8px] group-hover:text-[#c39967] transition-colors relative z-10">
                        {cap.title}
                      </h3>
                      <p className="font-sans text-[#a5adb6] text-[14px] group-hover:text-[#ffffff] transition-colors relative z-10">
                        {cap.description}
                      </p>
                    </div>

                    <div className="mt-[20px] font-sans font-medium text-[12px] text-[#c39967] opacity-0 transition-all duration-300 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 relative z-10 flex items-center gap-1.5">
                      Explore 
                      <span className="block transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300">&rarr;</span>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}