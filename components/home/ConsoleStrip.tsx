"use client";

import { motion } from "framer-motion";

export default function ConsoleStrip() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 border-y border-white/5 bg-gradient-to-r from-[#0E1116] via-[#151A21] to-[#0E1116] font-sans font-medium text-[11px] lg:text-[12px] tracking-[0.2em] uppercase overflow-hidden h-[54px] flex items-center shadow-[0_5px_20px_rgba(0,0,0,0.4)]"
    >
      
      {/* Edge Fades for a seamless entering/exiting effect */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0E1116] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0E1116] to-transparent z-20 pointer-events-none" />

      {/* Marquee Ticker */}
      <motion.div 
        className="flex items-center whitespace-nowrap w-max" 
        animate={{ x: [0, "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        {Array(4).fill(0).map((_, idx) => (
          <div key={idx} className="flex items-center gap-12 lg:gap-16 pr-12 lg:pr-16 text-[#737c87]">
            
            {/* Systems Online - Glows bright on hover */}
            <span className="flex items-center gap-3 cursor-default hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c39967] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c39967] shadow-[0_0_8px_rgba(195,153,103,0.8)]" />
              </span>
              Systems Online
            </span>

            {/* Karachi Hub */}
            <span className="group cursor-default hover:text-white transition-colors duration-300">
              Karachi Hub <span className="text-[#c39967] font-bold group-hover:text-[#fcdfae] transition-colors duration-300">24/7</span>
            </span>

            {/* Investor Portal - LIVE text flashes gold on hover */}
            <span className="group flex items-center cursor-default hover:text-white transition-colors duration-300">
              Investor Portal 
              <span className="ml-2 text-white font-bold group-hover:text-[#c39967] group-hover:drop-shadow-[0_0_10px_rgba(195,153,103,0.6)] transition-all duration-300">
                LIVE
              </span>
            </span>

            {/* Locations - Highlights gold on hover */}
            <span className="cursor-default hover:text-[#c39967] transition-colors duration-500">
              UK/BVI <span className="text-white/10 mx-2">•</span> 
              Dubai <span className="text-white/10 mx-2">•</span> 
              Kenya <span className="text-white/10 mx-2">•</span> 
              Pakistan
            </span>
            
            {/* Deploy - Arrow animates upwards on hover */}
            <span className="group flex items-center gap-2 cursor-pointer hover:text-white transition-colors duration-300">
              Deploy 
              <span className="text-[#c39967] text-[10px] transform group-hover:-translate-y-1.5 group-hover:scale-125 transition-all duration-300">
                ▲
              </span>
            </span>
            
            {/* Operational Excellence */}
            <span className="group cursor-default hover:text-white transition-colors duration-300">
              Operational Excellence 
              <span className="ml-2 text-white font-bold group-hover:text-[#c39967] group-hover:drop-shadow-[0_0_10px_rgba(195,153,103,0.6)] transition-all duration-300">
                100%
              </span>
            </span>

          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}