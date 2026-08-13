"use client";

import { motion } from "framer-motion";

export default function ConsoleStrip() {
  return (
    <div className="relative z-10 border-y border-white/10 bg-[#121212] font-sans font-medium text-[13px] tracking-[0.06em] overflow-hidden shadow-xl py-1.5">
      <motion.div 
        className="flex items-center py-[14px] whitespace-nowrap w-max" 
        animate={{ x: [0, "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
      >
        {Array(4).fill(0).map((_, idx) => (
          <div key={idx} className="flex items-center gap-[48px] pr-[48px]">
            <span className="text-[#a5adb6] flex items-center gap-2">
              <b className="text-[#c39967] text-[10px] animate-pulse">●</b> 
              SYSTEMS ONLINE
            </span>
            <span className="text-[#a5adb6]">
              KARACHI HUB <em className="text-[#c39967] not-italic font-bold">24/7</em>
            </span>
            <span className="text-[#a5adb6] flex items-center gap-2">
              INVESTOR PORTAL 
              <span className="px-2 py-0.5 rounded-full border border-white/20 text-white text-[10px] font-bold">LIVE</span>
            </span>
            <span className="text-[#a5adb6]">UK/BVI · DUBAI · KENYA · PAKISTAN</span>
            <span className="text-[#a5adb6] flex items-center gap-2">
              DEPLOY <em className="text-[#c39967] not-italic text-[10px]">▲</em>
            </span>
            <span className="text-[#a5adb6]">
              OPERATIONAL EXCELLENCE <b className="text-white font-bold">100%</b>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}