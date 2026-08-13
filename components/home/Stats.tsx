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
    <section className="relative z-10 py-[60px] bg-[#121212]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-5 gap-[1px] bg-white/10 border border-white/10 rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              className={`bg-[#151515] py-[40px] px-[24px] flex flex-col items-center justify-center text-center hover:bg-[#1a1a1a] transition-colors duration-500 group ${stat.colSpan || ''}`}
            >
              <div className="font-heading text-[42px] lg:text-[48px] font-bold text-white drop-shadow-md leading-none mb-2">
                <span className="text-[#c39967]">{stat.num}</span>
                <span className="text-white/90">{stat.suffix}</span>
              </div>
              <div className="font-sans font-semibold text-[12px] tracking-[0.1em] uppercase text-[#a5adb6] mt-2 group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}