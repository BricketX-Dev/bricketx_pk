"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

export default function WhatWeBuild() {
  const items = [
    { title: 'Investor Portal', desc: 'The dashboard investors log into to track holdings and returns.' },
    { title: 'Web Platforms', desc: 'The public sites and applications across the ecosystem.' },
    { title: 'AI Systems', desc: 'Models and assistants that automate research and support.' },
    { title: 'CRM Solutions', desc: 'Systems that manage investor and partner relationships.' },
    { title: 'Dashboards', desc: 'Live reporting views for teams and stakeholders.' },
    { title: 'Automations', desc: 'Workflows that remove manual, repetitive work.' },
    { title: 'Marketing Funnels', desc: 'The paths that turn interest into qualified investors.' },
    { title: 'Reporting Systems', desc: 'Structured, auditable performance and compliance reporting.' },
    { title: 'Brand Guidelines', desc: 'The rules that keep every touchpoint consistent.' },
    { title: 'Operational Systems', desc: 'The internal tooling that runs day-to-day execution.' }
  ];

  return (
    <section id="build" className="relative z-10 py-[60px] bg-[#151A21] border-y border-[#a5adb6]/20">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="max-w-[640px] mb-[44px]"
        >
          <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
            What We Build
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading font-semibold text-[clamp(30px,4vw,44px)] leading-[1.08] tracking-[-0.02em] mt-[16px] mb-[14px]">
            Not services <span className="text-[#c39967]">Systems</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#a5adb6] text-[17px]">The infrastructure that runs the BricketX ecosystem end to end.</motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#a5adb6]/20 border border-[#a5adb6]/20 rounded-[14px] overflow-hidden hover:border-[#c39967]/30 transition-colors"
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-[#0E1116] p-[24px_26px] transition-all duration-300 hover:bg-[#0E1116]/60 hover:pl-[34px] border-l-4 border-transparent hover:border-[#c39967] cursor-pointer group">
              <h3 className="font-heading font-semibold text-[18px] flex items-center gap-[11px] group-hover:text-[#c39967] transition-colors">
                <i className="w-[6px] h-[6px] bg-[#c39967] rounded-full shrink-0 group-hover:scale-150 transition-transform" />
                {item.title}
              </h3>
              <p className="text-[#a5adb6] text-[14px] mt-[7px] pl-[17px] group-hover:text-[#ffffff] transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}