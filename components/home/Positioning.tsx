"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "./animations";

export default function Positioning() {
  return (
    <section className="relative z-10 py-[60px] lg:py-[90px] bg-gradient-to-b from-[#151A21] to-[#0E1116] border-y border-[#a5adb6]/20 overflow-hidden">
      {/* Background Textures & Gradients */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/home/Texture-02.svg')", 
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
        className="max-w-[1280px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center"
      >
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-6 lg:pr-10">
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-sans font-medium text-[11px] tracking-[0.2em] uppercase text-[#a5adb6] shadow-sm">
              The Positioning
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeUp} 
            className="font-sans text-[clamp(32px,4vw,48px)] font-bold leading-[1.2] tracking-[-0.02em] text-white"
          >
            <span className="text-[#c39967] drop-shadow-[0_0_10px_rgba(195,153,103,0.3)]">BricketX Pakistan</span> is the operational backbone of the BricketX network.
          </motion.h2>

          <motion.p 
            variants={fadeUp} 
            className="font-sans text-lg lg:text-xl font-normal leading-[1.6] text-[#a5adb6]"
          >
            The Karachi engine room that builds the technology, runs the operations, and produces the work behind a Shariah-compliant investment platform operating across the UK/BVI, Dubai, Kenya and Pakistan.
          </motion.p>
        </div>

        {/* Right Column: Image Collage */}
        <motion.div 
          variants={fadeUp} 
          className="relative w-full aspect-square max-w-[550px] mx-auto lg:mx-0 lg:ml-auto mt-8 lg:mt-0"
        >
          {/* Main Image (Top/Left) */}
          <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded-2xl overflow-hidden shadow-2xl group border border-white/10 bg-[#0E1116]">
            <Image 
              src="/images/home/Collage%20Image%2001.png" 
              alt="BricketX Infrastructure" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Subtle Overlay on Hover */}
            <div className="absolute inset-0 bg-[#c39967]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Overlapping Image (Bottom/Right) */}
          <div className="absolute bottom-4 right-0 w-[65%] h-[60%] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/10 bg-[#0E1116] group z-10 transition-transform duration-500 hover:-translate-y-2">
            <Image 
              src="/images/home/Collage%20Image%2002.png" 
              alt="Global Operations" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
             <div className="absolute inset-0 bg-[#c39967]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}