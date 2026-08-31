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
    <section className="relative z-20 py-[40px] lg:py-[60px]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-5 bg-[#101319]/90 backdrop-blur-xl border border-white/5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/10 relative"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              className={`group relative flex flex-col items-center justify-center py-12 px-4 transition-all duration-500 overflow-hidden cursor-default ${stat.colSpan || ''}`}
            >
              {/* 1. New Hover: Subtle Gold Fill Background */}
              <div className="absolute inset-0 bg-[#c39967]/0 group-hover:bg-[#c39967]/[0.04] transition-colors duration-500 pointer-events-none" />
              
              {/* 2. Expanding Gold Accent Lines (Keeping this as a hover accent, but brighter) */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#f0d4b3] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center delay-75" />

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col items-center transform group-hover:-translate-y-1.5 transition-transform duration-500 ease-out w-full">
                
                {/* Number & Suffix */}
                <div className="font-heading flex items-baseline justify-center mb-3">
                  <span className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#c39967] to-[#e6c19a] drop-shadow-[0_0_12px_rgba(195,153,103,0.4)] group-hover:from-[#fcdfae] group-hover:to-white group-hover:drop-shadow-[0_0_25px_rgba(252,223,174,0.7)] group-hover:scale-110 transition-all duration-500 origin-bottom">
                    {stat.num}
                  </span>
                  <span className="text-2xl lg:text-3xl font-semibold text-[#c39967] ml-0.5 group-hover:text-[#fcdfae] group-hover:translate-x-1 transition-all duration-500">
                    {stat.suffix}
                  </span>
                </div>
                
                {/* Label */}
                <div className="font-sans font-medium text-[11px] tracking-[0.15em] uppercase text-white/90 text-center group-hover:text-white group-hover:tracking-[0.25em] transition-all duration-500">
                  {stat.label}
                </div>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}