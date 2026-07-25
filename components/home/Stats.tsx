"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

export default function Stats() {
  const stats = [
    { num: '500', suffix: '+', label: 'Projects Delivered' },
    { num: '24', suffix: '/7', label: 'Operations' },
    { num: '5', suffix: '', label: 'Core Departments' },
    { num: '4', suffix: '', label: 'Global Regions' },
    { num: '100', suffix: '%', label: 'Operational Excellence', colSpan: 'col-span-2 md:col-span-1' }
  ];

  return (
    <section className="relative z-10 py-[48px]">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-5 gap-[1px] bg-[#c39967]/20 border border-[#c39967]/30 rounded-[14px] overflow-hidden shadow-[0_10px_30px_rgba(195,153,103,0.05)]"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className={`bg-[#0E1116] py-[30px] px-[22px] text-center hover:bg-[#0E1116]/80 transition-colors duration-300 ${stat.colSpan || ''}`}>
              <div className="font-sans text-[38px] font-semibold text-[#ffffff] drop-shadow-md">
                <b className="text-[#c39967] font-semibold">{stat.num}</b>{stat.suffix}
              </div>
              <div className="font-sans font-medium text-[11px] tracking-[0.08em] uppercase text-[#a5adb6] mt-[8px] group-hover:text-[#ffffff] transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}