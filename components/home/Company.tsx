"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

export default function Company() {
  const companies = [
    { title: 'Our Ecosystem', desc: 'How BricketX\'s entities and verticals fit together.' },
    { title: 'How We Operate', desc: 'The idea-to-scale process the hub runs every day.' },
    { title: 'Global Operations', desc: 'Who does what across UK/BVI, Dubai, Kenya and Pakistan.' },
    { title: 'Innovation Lab', desc: 'Where new products and AI experiments begin.' }
  ];

  return (
    <section id="company" className="relative z-10 py-[80px] bg-[#0E1116] overflow-hidden border-y border-[#a5adb6]/10">
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/home/Texture-02.svg')", 
          backgroundRepeat: "repeat",
          backgroundSize: "280px", 
        }}
      />
      
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#0E1116] via-transparent via-20% to-transparent" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-[#0E1116] via-transparent via-20% to-transparent" />
      
      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="max-w-[640px] mb-[44px]"
        >
          <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
            The Company
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading font-semibold text-[clamp(30px,4vw,44px)] leading-[1.08] tracking-[-0.02em] mt-[16px] mb-[14px]">
            The Engine Behind <span className="text-[#c39967] drop-shadow-[0_0_15px_rgba(195,153,103,0.2)]">The Network</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#a5adb6] text-[17px]">How BricketX is structured, how it operates, and where it's headed.</motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]"
        >
          {companies.map((co, i) => (
            <motion.a key={i} variants={fadeUp} href="#" className="block bg-[#151A21]/80 backdrop-blur-sm border border-[#a5adb6]/20 rounded-[14px] p-[26px_22px] transition-all duration-300 hover:border-[#c39967] hover:-translate-y-[4px] hover:bg-[#151A21] hover:shadow-[0_10px_30px_rgba(195,153,103,0.15)] group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[50px] h-[50px] bg-gradient-to-bl from-[#c39967]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full" />
              <h3 className="font-heading font-semibold text-[19px] mb-[9px] group-hover:text-[#c39967] transition-colors relative z-10">{co.title}</h3>
              <p className="text-[#a5adb6] text-[14px] group-hover:text-[#ffffff] transition-colors relative z-10">{co.desc}</p>
              <div className="mt-[16px] font-sans font-medium text-[12px] text-[#c39967] opacity-0 transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 relative z-10">Explore &rarr;</div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}