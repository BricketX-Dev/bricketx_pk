"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "./animations";

export default function Company() {
  const companies = [
    { 
      title: 'Our Ecosystem', 
      desc: 'How BricketX\'s entities and verticals fit together.',
      icon: '/images/home/Our Ecosystem.png'
    },
    { 
      title: 'How We Operate', 
      desc: 'The idea-to-scale process the hub runs every day.',
      icon: '/images/home/How we operate.png'
    },
    { 
      title: 'Global Operations', 
      desc: 'Who does what across UK/BVI, Dubai, Kenya and Pakistan.',
      icon: '/images/home/Global Operations.png'
    },
    { 
      title: 'Innovation Lab', 
      desc: 'Where new products and AI experiments begin.',
      icon: '/images/home/Innovation Lab.png'
    }
  ];

  return (
    <section id="company" className="relative z-10 py-[60px] lg:py-[80px] bg-[#0E1116] overflow-hidden border-y border-[#c39967]/10">
      {/* Background Textures */}
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
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="max-w-[640px] mb-[56px]"
        >
          <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
            The Company
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading font-semibold text-[clamp(32px,4vw,48px)] leading-[1.08] tracking-[-0.02em] mt-[16px] mb-[14px] text-white">
            The Engine Behind <span className="text-[#c39967] drop-shadow-[0_0_15px_rgba(195,153,103,0.2)]">The Network</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#a5adb6] text-[18px]">
            How BricketX is structured, how it operates, and where it's headed.
          </motion.p>
        </motion.div>
        
        {/* Cards Grid */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {companies.map((co, i) => (
            <motion.a 
              key={i} 
              variants={fadeUp} 
              href="#" 
              className="block bg-[#151A21]/60 backdrop-blur-xl rounded-[20px] p-[32px_28px] transition-all duration-500 group relative overflow-hidden flex flex-col h-full 
              border border-[#c39967]/20 border-t-[#c39967]/50 
              hover:border-[#c39967]/80 hover:bg-[#151A21]/90 hover:-translate-y-2 
              hover:shadow-[0_15px_40px_rgba(195,153,103,0.2),inset_0_0_20px_rgba(195,153,103,0.05)]"
            >
              {/* Radial Hover Glow (Card Background) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(195,153,103,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
              
              {/* Ambient Glow behind the Icon */}
              <div className="absolute top-[32px] left-[28px] w-[72px] h-[72px] bg-[#c39967] rounded-full blur-[35px] opacity-[0.05] group-hover:opacity-[0.2] transition-opacity duration-500 pointer-events-none z-0" />

              {/* Icon Container */}
              <div className="relative z-10 w-[72px] h-[72px] mb-[28px] rounded-[18px] bg-gradient-to-b from-[#c39967]/10 to-transparent border border-[#c39967]/20 flex items-center justify-center transition-all duration-500 group-hover:border-[#c39967]/60 group-hover:from-[#c39967]/20 shadow-lg group-hover:shadow-[0_0_20px_rgba(195,153,103,0.3)]">
                <Image 
                  src={co.icon} 
                  alt={`${co.title} Icon`} 
                  width={44} 
                  height={44} 
                  className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ease-out drop-shadow-md"
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-heading font-semibold text-[20px] mb-[12px] text-white group-hover:text-[#c39967] transition-colors duration-300 drop-shadow-sm">
                  {co.title}
                </h3>
                <p className="text-[#8b95a1] text-[15px] leading-[1.6] group-hover:text-white/90 transition-colors duration-300 flex-1">
                  {co.desc}
                </p>
                
                {/* Explore Link */}
                <div className="mt-[24px] font-sans font-medium text-[13px] tracking-wide text-[#c39967] flex items-center gap-2 opacity-0 transition-all duration-500 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                  Explore 
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}