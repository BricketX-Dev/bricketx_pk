"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "./animations";

export default function Positioning() {
  return (
    <section className="relative z-10 py-[100px] lg:py-[130px] bg-[#121212] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Image & Floating Elements */}
          <motion.div variants={fadeUp} className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-[600px] mx-auto lg:mx-0">
            {/* Main Image */}
            <div className="absolute inset-0 rounded-[24px] overflow-hidden border border-white/10">
              <Image 
                src="/images/company/operations.png" 
                alt="BricketX Operations" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 to-transparent" />
            </div>

            {/* Tekmino-style Floating Badge */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#1a1a1a] border border-white/10 rounded-[20px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-5 animate-[bounce_6s_ease-in-out_infinite]">
              <div className="w-[60px] h-[60px] rounded-full bg-[#c39967] flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-[#212121]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <div>
                <div className="text-white font-heading font-bold text-[32px] leading-none mb-1">24/7</div>
                <div className="text-[#a5adb6] text-[13px] font-medium tracking-wider uppercase">Active Operations</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={fadeUp} className="flex flex-col items-start lg:pl-10">
            <span className="font-sans font-bold text-[12px] tracking-[0.2em] uppercase text-[#c39967] mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#c39967]"></span>
              The Positioning
            </span>
            
            <h2 className="font-heading font-semibold text-[38px] md:text-[52px] leading-[1.1] text-white mb-6">
              The Engine Room Behind <br />
              <span className="text-[#c39967]">The Network.</span>
            </h2>
            
            <p className="text-[#a5adb6] text-[17px] md:text-[19px] leading-[1.7] mb-8 border-l-2 border-[#c39967]/30 pl-5">
              BricketX Pakistan is the operational backbone. We build the technology, run the operations, and produce the work behind a global investment platform.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10 w-full">
              {['UK & BVI Governance', 'Dubai Management', 'Kenya Mining', 'Karachi Execution'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#c39967]/10 border border-[#c39967] flex items-center justify-center text-[#c39967]">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-3 bg-white/5 border border-white/10 text-white font-bold text-[15px] py-2 pl-7 pr-2 rounded-full hover:bg-[#c39967] hover:text-[#212121] hover:border-[#c39967] transition-all duration-300">
              Discover Our Process
              <span className="w-[38px] h-[38px] rounded-full bg-[#c39967] group-hover:bg-[#212121] text-[#212121] group-hover:text-[#c39967] flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m-7-7l7 7-7 7"/></svg>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}