"use client";

import { motion } from "framer-motion";

export default function ConsoleStrip() {
  return (
    <div className="relative z-10 border-y border-[#c39967]/30 bg-[#151A21] font-sans font-medium text-[12.5px] tracking-[0.04em] overflow-hidden shadow-[0_0_20px_rgba(195,153,103,0.05)]">
      <motion.div 
        className="flex py-[13px] whitespace-nowrap w-max" 
        animate={{ x: [0, "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 68 }}
      >
        {Array(4).fill(0).map((_, idx) => (
          <div key={idx} className="flex gap-[44px] pr-[44px]">
            <span className="text-[#a5adb6]"><b className="text-[#c39967] font-semibold animate-pulse">●</b> SYSTEMS ONLINE</span>
            <span className="text-[#a5adb6]">KARACHI HUB <em className="text-[#c39967] not-italic">24/7</em></span>
            <span className="text-[#a5adb6]">INVESTOR PORTAL <b className="text-[#ffffff] font-semibold">LIVE</b></span>
            <span className="text-[#a5adb6]">UK/BVI · DUBAI · KENYA · PAKISTAN</span>
            <span className="text-[#a5adb6]">DEPLOY <em className="text-[#c39967] not-italic">▲</em></span>
            <span className="text-[#a5adb6]">OPERATIONAL EXCELLENCE <b className="text-[#ffffff] font-semibold">100%</b></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}