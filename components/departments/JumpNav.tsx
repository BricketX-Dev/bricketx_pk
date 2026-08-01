"use client";

import React, { useState, useEffect, useRef } from "react";

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
      // Get the distance from top of the document to our placeholder
      const rect = containerRef.current.getBoundingClientRect();
      // 68px is the height of your Navbar
      if (rect.top <= 68) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Invisible placeholder anchor to track scroll position and prevent layout shift when fixed */}
      <div ref={containerRef} className="h-0 w-full" />

      <div
        className={`z-40 transition-all duration-300 ${
          isFixed
            ? "fixed top-[68px] left-0 right-0 bg-[#0E1116]/90 backdrop-blur-md border-b border-[#252D38] shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-2"
            : "relative bg-[#0E1116]/82 backdrop-blur-md border-y border-[#252D38] my-8 py-3"
        }`}
      >
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="flex justify-center gap-2 overflow-x-auto scrollbar-none w-full">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`font-mono text-[12.5px] tracking-wide px-3.5 py-1.5 border rounded-full whitespace-nowrap transition-all duration-200 flex-none ${
                    isActive
                      ? "border-[#C6A067] text-[#C6A067] bg-[#C6A067]/10 shadow-[0_0_12px_rgba(198,160,103,0.2)]"
                      : "border-[#252D38] text-[#8B95A6] hover:border-[#C6A067] hover:text-[#C6A067]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spacer to replace height when the nav pops into fixed position */}
      {isFixed && <div className="h-[52px] w-full" />}
    </>
  );
}