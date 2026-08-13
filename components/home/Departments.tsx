"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "./animations";

export default function Departments() {
  const depts = [
    { title: 'Technology', desc: 'Web platforms, AI, automation and security architecture.', img: '/dummy-image.jpg' },
    { title: 'Marketing', desc: 'Demand generation, brand building and investor reach.', img: '/dummy-image.jpg' },
    { title: 'Operations', desc: 'Investor relations, CRM, and capital documentation.', img: '/dummy-image.jpg' },
    { title: 'Creative', desc: 'Branding, interface, and motion graphics design.', img: '/dummy-image.jpg' }
  ];

  return (
    <section id="departments" className="relative z-10 py-[100px] bg-[#171717]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="max-w-[700px]">
            <motion.span variants={fadeUp} className="font-sans font-bold text-[12px] tracking-[0.2em] uppercase text-[#c39967] mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#c39967]"></span>
              Core Departments
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading font-semibold text-[38px] md:text-[52px] leading-[1.1] text-white">
              Five Dedicated Teams. <br/><span className="text-[#c39967]">One Engine Room.</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <button className="flex items-center gap-2 text-white hover:text-[#c39967] transition-colors border-b border-[#c39967] pb-1 font-medium">
              View All Departments
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {depts.map((dept, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-[#121212] rounded-[24px] overflow-hidden border border-white/5 hover:border-[#c39967]/50 transition-all duration-500 group">
              {/* Card Image Header */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image 
                  src={dept.img} 
                  alt={dept.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#c39967]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                
                {/* Floating Icon inside Image */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#121212] rounded-full flex items-center justify-center text-[#c39967] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7"/></svg>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <span className="font-sans font-bold text-[14px] text-[#c39967] tracking-wider mb-2 block">0{i + 1}.</span>
                <h3 className="font-heading font-bold text-[24px] text-white mb-3 group-hover:text-[#c39967] transition-colors">{dept.title}</h3>
                <p className="text-[#a5adb6] text-[15px] leading-[1.6]">{dept.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}