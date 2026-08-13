"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";
import Image from "next/image";

export default function GlobalOperations() {
  const locations = [
    { region: 'Pakistan', flag: '/images/flags/pakistan.png', role: 'Operations & Execution', desc: 'The Karachi hub — where it is built.' },
    { region: 'Dubai', flag: '/images/flags/uae.png', role: 'Management', desc: 'Regional leadership & investor relations.' },
    { region: 'Kenya', flag: '/images/flags/kenya.png', role: 'Mining', desc: 'On-the-ground production & sourcing.' },
    { region: 'UK / BVI', flag: '/images/flags/united-kingdom.png', role: 'Corporate Structure', desc: 'Holdings & governance.' }
  ];

  const typewriterParent = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const typewriterChar = {
    hidden: { opacity: 0, y: 10 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <section className="relative z-10 py-[100px] border-t border-white/5 bg-[#121212] overflow-hidden">
      
      {/* Background Graphic */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/dummy-image.jpg')", // Replace with network map image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-0 bg-[#121212]/90 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="max-w-[720px] mb-16"
        >
          <motion.span variants={fadeUp} className="font-sans font-bold text-[12px] tracking-[0.2em] uppercase text-[#c39967] mb-4 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#c39967]/60"></span>
            <motion.div variants={typewriterParent} initial="hidden" whileInView="visible" viewport={{ once: true }} className="inline-block">
              {Array.from("Global Operations").map((char, index) => (
                <motion.span key={index} variants={typewriterChar} className="inline-block whitespace-pre">{char}</motion.span>
              ))}
            </motion.div>
          </motion.span>

          <motion.h2 variants={fadeUp} className="font-heading font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] text-white mb-6 tracking-tight">
            One Network. <br/><span className="text-[#c39967] drop-shadow-[0_0_20px_rgba(195,153,103,0.3)]">Four Regions.</span>
          </motion.h2>
        </motion.div>
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10 rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {locations.map((loc, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-[#151515] p-[40px_32px] hover:bg-[#1a1a1a] transition-colors duration-500 group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c39967]/0 to-[#c39967]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-[48px] h-[34px] rounded-md overflow-hidden border border-white/10 mb-6 shadow-md group-hover:border-[#c39967]/50 group-hover:shadow-[0_0_15px_rgba(195,153,103,0.4)] transition-all duration-300">
                  {/* Using standard img for local dummy paths per request */}
                  <img src={loc.flag} alt={`${loc.region} Flag`} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "/dummy-image.jpg"; }} />
                </div>
                
                <h3 className="font-heading font-bold text-[24px] text-white group-hover:text-[#c39967] transition-colors mb-2">
                  {loc.region}
                </h3>
                <div className="font-sans font-bold text-[11px] tracking-[0.1em] uppercase text-[#c39967] mb-4">{loc.role}</div>
                <div className="text-[#a5adb6] text-[15px] group-hover:text-white/90 transition-colors leading-[1.6]">{loc.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}