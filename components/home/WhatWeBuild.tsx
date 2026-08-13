"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "./animations";

export default function WhatWeBuild() {
  const projects = [
    { title: 'Investor Portal Dashboard', category: 'Technology', img: '/dummy-image.jpg', span: 'col-span-1 lg:col-span-8' },
    { title: 'Marketing Funnels', category: 'Growth', img: '/dummy-image.jpg', span: 'col-span-1 lg:col-span-4' },
    { title: 'AI Support Assistants', category: 'Automation', img: '/dummy-image.jpg', span: 'col-span-1 lg:col-span-4' },
    { title: 'Global CRM Solutions', category: 'Operations', img: '/dummy-image.jpg', span: 'col-span-1 lg:col-span-8' },
  ];

  return (
    <section id="build" className="relative z-10 py-[100px] bg-[#121212]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="text-center max-w-[700px] mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="font-sans font-bold text-[12px] tracking-[0.2em] uppercase text-[#c39967] mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#c39967]"></span>
            What We Build
            <span className="w-8 h-[1px] bg-[#c39967]"></span>
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading font-semibold text-[38px] md:text-[52px] leading-[1.1] text-white">
            Not Just Services. <br/><span className="text-[#c39967]">We Build Systems.</span>
          </motion.h2>
        </motion.div>
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {projects.map((proj, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              className={`relative ${proj.span} aspect-[4/3] lg:aspect-auto lg:h-[400px] rounded-[24px] overflow-hidden group cursor-pointer`}
            >
              <Image 
                src={proj.img} 
                alt={proj.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark gradient overlay that intensifies on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content block pushing up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#c39967]/20 border border-[#c39967]/50 text-[#c39967] text-[12px] font-bold tracking-wider uppercase mb-4 backdrop-blur-md">
                  {proj.category}
                </span>
                <div className="flex justify-between items-end">
                  <h3 className="font-heading font-bold text-[28px] text-white leading-[1.2] max-w-[80%]">
                    {proj.title}
                  </h3>
                  <div className="w-12 h-12 rounded-full bg-white text-[#121212] flex items-center justify-center group-hover:bg-[#c39967] transition-colors duration-300">
                    <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m-7-7l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}