"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface JumpNavProps {
  activeId: string;
}

const navItems = [
  { id: "technology", label: "01 · Technology" },
  { id: "marketing", label: "02 · Marketing" },
  { id: "operations", label: "03 · Operations" },
  { id: "creative", label: "04 · Creative" },
  { id: "production", label: "05 · Production" },
];

export default function JumpNav({ activeId }: JumpNavProps) {
  const [isFixed, setIsFixed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top <= 68) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={containerRef} className="h-0 w-full" />

      <div
        className={`z-40 transition-all duration-300 ${
          isFixed
            ? "fixed top-[68px] left-0 right-0 bg-[#0E1116]/90 backdrop-blur-md border-b border-[#252D38] shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3"
            : "relative bg-[#0E1116]/82 backdrop-blur-md border-y border-[#252D38] my-8 py-4"
        }`}
      >
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="flex justify-center gap-3 overflow-x-auto scrollbar-none w-full relative">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative font-mono text-[12.5px] tracking-wide px-4 py-2 whitespace-nowrap transition-colors duration-300 flex-none z-10 ${
                    isActive ? "text-[#C6A067]" : "text-[#8B95A6] hover:text-[#E7EAF0]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#C6A067]/10 border border-[#C6A067] rounded-full shadow-[0_0_15px_rgba(198,160,103,0.2)] z-[-1]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {isFixed && <div className="h-[60px] w-full" />}
    </>
  );
}