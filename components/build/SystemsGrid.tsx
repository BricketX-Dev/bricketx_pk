"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const systemsData = [
  { idx: "01", title: "Investor Portal", description: "The secure dashboard investors log into to track holdings, returns and documents in real time.", link: "#" },
  { idx: "02", title: "Web Platforms", description: "The public sites and applications that run across every entity in the ecosystem.", link: "#" },
  { idx: "03", title: "AI Systems", description: "Models and assistants that automate research, investor support and internal reporting.", link: "#" },
  { idx: "04", title: "CRM Solutions", description: "The systems that manage every investor, partner and lead relationship in one place.", link: "#" },
  { idx: "05", title: "Dashboards", description: "Live reporting views that give teams and stakeholders a single source of truth.", link: "#" },
  { idx: "06", title: "Automations", description: "Workflows that remove manual, repetitive work across operations and marketing.", link: "#" },
  { idx: "07", title: "Marketing Funnels", description: "The end-to-end paths that turn interest into qualified, onboarded investors.", link: "#" },
  { idx: "08", title: "Reporting Systems", description: "Structured, auditable reporting for performance, compliance and governance.", link: "#" },
  { idx: "09", title: "Brand Guidelines", description: "The rules and assets that keep every touchpoint across the network consistent.", link: "#" },
  { idx: "10", title: "Operational Systems", description: "The internal tooling that runs day-to-day execution across the hub.", link: "#" },
];

export default function SystemsGrid() {
  return (
    <section className="relative z-10 py-[60px]">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]"
        >
          {systemsData.map((item) => (
            <motion.div key={item.idx} variants={fadeUp}>
              <Link
                href={item.link}
                className="block h-full bg-[#151A21]/80 backdrop-blur-sm border border-[#a5adb6]/20 rounded-[14px] p-[26px_22px] transition-all duration-300 hover:border-[#c39967] hover:-translate-y-[4px] hover:bg-[#151A21] hover:shadow-[0_10px_30px_rgba(195,153,103,0.15)] group relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-[50px] h-[50px] bg-gradient-to-bl from-[#c39967]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full" />
                
                <div>
                  <span className="font-sans font-medium text-[12px] text-[#c39967] tracking-[0.1em]">
                    {item.idx}
                  </span>
                  <h3 className="font-sans font-semibold text-[20px] mt-[8px] mb-[9px] group-hover:text-[#c39967] transition-colors relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-[#a5adb6] text-[14px] group-hover:text-[#ffffff] transition-colors relative z-10">
                    {item.description}
                  </p>
                </div>

                <div className="mt-[18px] font-sans font-medium text-[12px] text-[#c39967] opacity-0 transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 relative z-10">
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