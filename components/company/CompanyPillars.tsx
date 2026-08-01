"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const pillarsData = [
  {
    idx: "01",
    title: "Our Ecosystem",
    description: "How BricketX's entities, regions and verticals connect into one network - from corporate structure to on-the-ground production.",
    link: "/our-ecosystem/",
  },
  {
    idx: "02",
    title: "How We Operate",
    description: "The disciplined idea-to-scale process the hub runs on every project - research, design, build, automate, ship.",
    link: "/how-we-operate/",
  },
  {
    idx: "03",
    title: "Global Operations",
    description: "Who does what across the network's four regions - the UK/BVI, Dubai, Kenya and Pakistan - and how they stay coordinated.",
    link: "/global-operations/",
  },
  {
    idx: "04",
    title: "Innovation Lab",
    description: "Where new products, AI experiments and process improvements begin - and get tested before they reach the network.",
    link: "/innovation-lab/",
  },
];

export default function CompanyPillars() {
  return (
    <section className="relative z-10 pt-6 pb-14">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillarsData.map((item) => (
            <SpotlightPillarCard key={item.idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotlightPillarCard({ item }: { item: (typeof pillarsData)[0] }) {
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
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        ref={cardRef}
        href={item.link}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex flex-col justify-between h-full bg-[#151A21] border border-[#252D38] rounded-xl p-8 hover:border-[#C6A067] hover:bg-[#1B222B] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
      >
        {/* React Bits Spotlight Layer */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
            style={{
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(198, 160, 103, 0.15), transparent 80%)`,
            }}
          />
        )}

        <div className="relative z-10">
          <span className="font-mono text-xs text-[#C6A067] tracking-widest">
            {item.idx}
          </span>
          <h2 className="font-sans font-semibold text-2xl text-[#E7EAF0] mt-3.5 mb-2.5">
            {item.title}
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#8B95A6] leading-relaxed">
            {item.description}
          </p>
        </div>

        <span className="relative z-10 font-mono text-xs text-[#5C6577] group-hover:text-[#C6A067] mt-6 tracking-wider transition-colors duration-200">
          Explore →
        </span>
      </Link>
    </motion.div>
  );
}