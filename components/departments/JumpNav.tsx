"use client";

import React from "react";

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
  return (
    <div className="sticky top-[68px] z-40 bg-[#0E1116]/82 backdrop-blur-md border-y border-[#252D38] my-8">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="flex gap-2 py-3 overflow-x-auto scrollbar-none">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`font-mono text-[12.5px] tracking-wide px-3.5 py-1.5 border rounded-full whitespace-nowrap transition-all duration-200 flex-none ${
                  isActive
                    ? "border-[#C6A067] text-[#C6A067] bg-[#C6A067]/10"
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
  );
}