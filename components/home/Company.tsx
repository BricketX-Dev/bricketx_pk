"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Company() {
  return (
    <section id="company" className="relative z-10 py-[100px] bg-[#171717] border-t border-white/5 overflow-hidden">
      {/* Optional subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c39967]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants}
          className="text-center max-w-[700px] mx-auto mb-16"
        >
          <motion.span variants={itemVariants} className="font-sans font-bold text-[12px] tracking-[0.2em] uppercase text-[#c39967] mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#c39967]"></span>
            The Company
            <span className="w-8 h-[1px] bg-[#c39967]"></span>
          </motion.span>
          <motion.h2 variants={itemVariants} className="font-heading font-semibold text-[38px] md:text-[52px] leading-[1.1] text-white">
            The Complete <span className="text-[#c39967]">Ecosystem.</span>
          </motion.h2>
        </motion.div>
        
        {/* Bento Grid */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]"
        >
          {/* Large Image Block */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative lg:col-span-2 row-span-2 rounded-[24px] overflow-hidden group border-2 border-white/20 hover:border-[#c39967]/80 shadow-lg hover:shadow-[0_10px_40px_-15px_rgba(195,153,103,0.3)] transition-all duration-500"
          >
            <Image 
              src="/images/company/operations.png" 
              alt="How We Operate" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute bottom-8 left-8 right-8 transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="font-heading font-bold text-[32px] text-white mb-2">How We Operate</h3>
              <p className="text-white/80 text-[16px] max-w-[400px]">The idea-to-scale process the hub runs every day to support global initiatives.</p>
            </div>
          </motion.div>

          {/* Solid Color Focus Block */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative bg-[#c39967] rounded-[24px] p-8 flex flex-col justify-between group overflow-hidden border-2 border-black/10 hover:border-white/60 shadow-lg transition-all duration-500 cursor-default"
          >
            {/* Animated background flare */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-[20px] transition-transform duration-700 group-hover:scale-150 group-hover:bg-white/30" />
            
            <div className="w-14 h-14 rounded-full bg-[#121212] flex items-center justify-center text-[#c39967] shadow-xl transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8"/>
              </svg>
            </div>
            <div className="relative z-10 transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="font-heading font-bold text-[24px] text-[#121212] mb-2">Global Operations</h3>
              <p className="text-[#121212]/80 font-medium">Bridging UK/BVI, Dubai, Kenya and Pakistan effortlessly.</p>
            </div>
          </motion.div>

          {/* Dark Glass Block with Image overlay */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative bg-[#121212] border-2 border-white/20 hover:border-[#c39967]/80 rounded-[24px] overflow-hidden group shadow-lg hover:shadow-[0_10px_30px_-15px_rgba(195,153,103,0.2)] transition-all duration-500"
          >
            <div className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100">
              <Image src="/images/company/operations.png" alt="Innovation Lab" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/70 to-[#121212]/10" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="font-heading font-bold text-[24px] text-white mb-2">Innovation Lab</h3>
              <p className="text-[#a5adb6] group-hover:text-white/90 transition-colors duration-300 relative z-10">Where new products and AI experiments begin before deployment.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}