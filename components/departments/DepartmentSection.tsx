"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Capability {
  title: string;
  description: string;
  link: string;
}

interface DepartmentSectionProps {
  id: string;
  idx: string;
  title: string;
  lead: string;
  viewLink: string;
  capabilities: Capability[];
}

export default function DepartmentSection({
  id,
  idx,
  title,
  lead,
  viewLink,
  capabilities,
}: DepartmentSectionProps) {
  return (
    <section id={id} className="py-16 border-b border-[#252D38] last-of-type:border-b-0 relative z-10 scroll-mt-32">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-8">
            <div className="flex items-start gap-5">
              <span className="font-mono text-sm text-[#C6A067] tracking-widest pt-2">
                {idx}
              </span>
              <div>
                <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-[#E7EAF0]">
                  {title}
                </h2>
                <p className="font-sans text-base sm:text-lg text-[#8B95A6] mt-2.5 max-w-[640px] leading-relaxed">
                  {lead}
                </p>
              </div>
            </div>

            <Link
              href={viewLink}
              className="font-mono text-[12.5px] text-[#C6A067] border border-[#6E5533] rounded-lg px-4 py-2 hover:bg-[#C6A067] hover:text-[#1a1206] whitespace-nowrap transition-all duration-200 flex-none self-start mt-2 sm:mt-0"
            >
              View department →
            </Link>
          </div>

          {/* Capabilities Grid with Interactive Spotlight/Card Effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {capabilities.map((cap) => (
              <SpotlightCard key={cap.title} cap={cap} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SpotlightCard({ cap }: { cap: Capability }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      ref={cardRef}
      href={cap.link}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between h-full bg-[#151A21] border border-[#252D38] rounded-xl p-5 hover:border-[#C6A067] hover:bg-[#1B222B] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
    >
      {/* React Bits Spotlight Glow Layer */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(198, 160, 103, 0.15), transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10">
        <h3 className="font-sans font-medium text-[17px] text-[#E7EAF0] flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 bg-[#C6A067] rounded-full flex-none" />
          {cap.title}
        </h3>
        <p className="font-sans text-[13.5px] text-[#8B95A6] mt-2.5 pl-4 leading-relaxed">
          {cap.description}
        </p>
      </div>

      <span className="relative z-10 font-mono text-[11.5px] text-[#5C6577] group-hover:text-[#C6A067] mt-4 pl-4 tracking-wider transition-colors duration-200">
        Explore →
      </span>
    </Link>
  );
}