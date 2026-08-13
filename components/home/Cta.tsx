"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";
import Link from "next/link";

export default function Cta() {
  return (
    <section id="contact" className="relative z-10 py-[120px] text-center bg-[#121212] border-t border-white/5 overflow-hidden">
      {/* Massive Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c39967]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={staggerContainer}
        className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center"
      >
        <motion.span variants={fadeUp} className="font-sans font-bold text-[12px] tracking-[0.2em] uppercase text-[#c39967] mb-6 flex items-center gap-3">
          <span className="w-6 h-[1px] bg-[#c39967]/60"></span>
          Let's Build
          <span className="w-6 h-[1px] bg-[#c39967]/60"></span>
        </motion.span>
        
        <motion.h2 variants={fadeUp} className="font-heading font-semibold text-[44px] md:text-[64px] lg:text-[80px] text-white mb-6 leading-[1.05] tracking-tight">
          The Engine Room <br/><span className="text-[#c39967] drop-shadow-[0_0_30px_rgba(195,153,103,0.3)]">Is Open.</span>
        </motion.h2>
        
        <motion.p variants={fadeUp} className="text-[#a5adb6] text-[19px] md:text-[22px] max-w-[600px] mx-auto mb-12">
          Partner with the team powering the BricketX network, or join it.
        </motion.p>
        
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
          <Link href="mailto:hello@bricketx.pk" className="w-full sm:w-auto bg-[#c39967] text-[#212121] hover:bg-[#d4a873] hover:shadow-[0_8px_25px_rgba(195,153,103,0.3)] hover:-translate-y-[2px] transition-all duration-300 font-bold text-[16px] py-[18px] px-[36px] rounded-full inline-flex items-center justify-center gap-3 group">
            Get in Touch
            <svg className="w-[18px] h-[18px] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 19L19 5M19 5H9M19 5V15" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
          <Link href="#careers" className="w-full sm:w-auto text-white hover:text-[#c39967] bg-white/5 border border-white/10 hover:border-[#c39967]/50 transition-all duration-300 font-medium text-[16px] py-[18px] px-[36px] rounded-full inline-flex items-center justify-center group hover:-translate-y-[2px]">
            View Open Roles
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}