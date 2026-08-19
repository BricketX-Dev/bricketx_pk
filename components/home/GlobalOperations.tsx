"use client";

import { motion } from "framer-motion";

export default function GlobalOperations() {
  const locations = [
    { region: 'Pakistan', flag: '/images/flags/pakistan.png', role: 'Operations & Execution', desc: 'The Karachi hub — where it is built.' },
    { region: 'Dubai', flag: '/images/flags/uae.png', role: 'Management', desc: 'Regional leadership & investor relations.' },
    { region: 'Kenya', flag: '/images/flags/kenya.png', role: 'Mining', desc: 'On-the-ground production & sourcing.' },
    { region: 'UK / BVI', flag: '/images/flags/united-kingdom.png', role: 'Corporate Structure', desc: 'Holdings & governance.' }
  ];

  const easePremium = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="relative z-10 py-[120px] border-y border-white/5 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title Block */}
        <div className="max-w-[720px] mb-16 overflow-hidden">
          <motion.span 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: easePremium }}
            className="font-sans font-bold text-[12px] tracking-[0.2em] uppercase text-[#c39967] mb-4 flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-gradient-to-r from-[#c39967] to-transparent"></span>
            Global Operations
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.15, ease: easePremium }}
            className="font-heading font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] text-white mb-6 tracking-tight"
          >
            One Network. <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#c39967]">
              Four Regions.
            </span>
          </motion.h2>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          {locations.map((loc, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: i * 0.15, ease: easePremium }}
              className="bg-[#121212]/80 backdrop-blur-md p-[40px_32px] hover:bg-[#1a1a1a]/90 transition-all duration-500 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c39967]/0 to-[#c39967]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-[48px] h-[34px] rounded-md overflow-hidden border border-white/10 mb-6 shadow-md group-hover:border-[#c39967]/50 transition-all duration-300">
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
        </div>
      </div>
    </section>
  );
}