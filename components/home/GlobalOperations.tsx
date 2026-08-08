"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

export default function GlobalOperations() {
  const locations = [
    { region: 'Pakistan', flag: '/images/flags/pakistan.png', role: 'Operations & Execution', desc: 'The Karachi hub — where it\'s built.' },
    { region: 'Dubai', flag: '/images/flags/uae.png', role: 'Management', desc: 'Regional leadership & investor relations.' },
    { region: 'Kenya', flag: '/images/flags/kenya.png', role: 'Mining', desc: 'On-the-ground production & sourcing.' },
    { region: 'UK / BVI', flag: '/images/flags/united-kingdom.png', role: 'Corporate Structure', desc: 'Holdings & governance.' }
  ];

  // Slower Typewriter variants
  const typewriterParent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, 
      },
    },
  };

  const typewriterChar = {
    hidden: { opacity: 0, x: -5 }, 
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3, 
      },
    },
  };

  return (
    <section className="relative z-10 py-[80px] border-y border-[#a5adb6]/20 bg-[#151A21] overflow-hidden">
      
      {/* --- UPDATED: Background Image Zoom Animation --- */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 25, // Extremely slow, smooth transition (25 seconds)
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 z-0 opacity-100 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: "url('/images/home/network.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <motion.div
        animate={{ left: ["-100%", "200%"] }}
        transition={{ 
          repeat: Infinity, 
          duration: 8, 
          ease: "linear", 
          repeatDelay: 5 
        }}
        className="absolute inset-y-0 z-0 w-1/2 md:w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none"
      />
      {/* Fade Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#151A21] via-transparent via-20% to-transparent" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-[#151A21] via-transparent via-20% to-transparent" />
      
      {/* Main Content */}
      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="max-w-[640px] mb-[44px]"
        >
          {/* Subtitle - Character-level typing */}
          <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70 drop-shadow-md">
            <motion.div
              variants={typewriterParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="inline-block"
            >
              {Array.from("Global Operations").map((char, index) => (
                <motion.span key={`SPAN-${index}`} variants={typewriterChar} className="inline-block whitespace-pre">
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </motion.span>

          {/* Main H2 - Character typing */}
          <motion.h2 variants={fadeUp} className="font-heading font-semibold text-[clamp(30px,4vw,44px)] leading-[1.08] tracking-[-0.02em] mt-[16px] mb-[14px]">
            <motion.div
              variants={typewriterParent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="inline-block"
            >
              {Array.from("One Network ").map((char, index) => (
                <motion.span key={`H2-1-${index}`} variants={typewriterChar} className="inline-block whitespace-pre">
                  {char}
                </motion.span>
              ))}
              <span className="text-[#c39967] drop-shadow-[0_0_15px_rgba(195,153,103,0.3)]">
                {Array.from("Four Regions").map((char, index) => (
                  <motion.span key={`H2-2-${index}`} variants={typewriterChar} className="inline-block whitespace-pre">
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.div>
          </motion.h2>
        </motion.div>
        
        {/* Grid Cards */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#a5adb6]/20 border border-[#c39967]/30 rounded-[14px] overflow-hidden mt-[8px] hover:border-[#c39967]/50 transition-colors backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
          {locations.map((loc, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-[#0E1116]/70 p-[30px_24px] hover:bg-[#151A21]/80 transition-colors group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c39967]/0 via-[#c39967]/0 to-[#c39967]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="font-heading font-semibold text-[20px] flex items-center gap-[14px] group-hover:text-[#ffffff] transition-colors relative z-10">
                <div className="relative w-[34px] h-[24px] rounded-[4px] overflow-hidden border border-[#a5adb6]/30 group-hover:border-[#c39967]/80 shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:shadow-[0_0_12px_rgba(195,153,103,0.5)] transition-all duration-300 flex-shrink-0">
                  <img src={loc.flag} alt={`${loc.region} Flag`} className="w-full h-full object-cover scale-[1.05]" />
                </div>
                {loc.region}
              </h3>
              <div className="font-sans font-medium text-[12px] tracking-[0.06em] uppercase text-[#c39967] mt-[14px] relative z-10">{loc.role}</div>
              <div className="text-[#a5adb6] text-[14px] mt-[6px] group-hover:text-[#ffffff] transition-colors relative z-10">{loc.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}