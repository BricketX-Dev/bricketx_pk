"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

export default function Positioning() {
  return (
    <section className="relative z-10 py-[100px] bg-gradient-to-b from-[#151A21] to-[#0E1116] border-y border-[#a5adb6]/20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/home/Texture-01.svg')", 
          backgroundRepeat: "repeat",
          backgroundSize: "280px", 
        }}
      />
      
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#151A21] via-transparent via-15% to-transparent" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-[#0E1116] via-transparent via-15% to-transparent" />

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={staggerContainer}
        className="max-w-[1160px] mx-auto px-6 relative z-10"
      >
        <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70 drop-shadow-md">
          The Positioning
        </motion.span>
        
        <motion.p variants={fadeUp} className="font-sans text-[clamp(24px,3.5vw,36px)] font-normal leading-[1.4] max-w-[1080px] tracking-[-0.01em] mt-[24px]">
          <b className="text-[#c39967] font-semibold drop-shadow-[0_0_10px_rgba(195,153,103,0.3)]">BricketX Pakistan is the operational backbone of the BricketX network</b> — the Karachi engine room that builds the technology, runs the operations, and produces the work behind a Shariah-compliant investment platform operating across the UK/BVI, Dubai, Kenya and Pakistan.
        </motion.p>
      </motion.div>
    </section>
  );
}