"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const systemsData = [
  {
    idx: "01",
    title: "Investor Portal",
    description: "The secure dashboard investors log into to track holdings, returns and documents in real time.",
    link: "/investor-portal/",
  },
  {
    idx: "02",
    title: "Web Platforms",
    description: "The public sites and applications that run across every entity in the ecosystem.",
    link: "/web-platforms/",
  },
  {
    idx: "03",
    title: "AI Systems",
    description: "Models and assistants that automate research, investor support and internal reporting.",
    link: "/ai-systems/",
  },
  {
    idx: "04",
    title: "CRM Solutions",
    description: "The systems that manage every investor, partner and lead relationship in one place.",
    link: "/crm-solutions/",
  },
  {
    idx: "05",
    title: "Dashboards",
    description: "Live reporting views that give teams and stakeholders a single source of truth.",
    link: "/dashboards/",
  },
  {
    idx: "06",
    title: "Automations",
    description: "Workflows that remove manual, repetitive work across operations and marketing.",
    link: "/automations/",
  },
  {
    idx: "07",
    title: "Marketing Funnels",
    description: "The end-to-end paths that turn interest into qualified, onboarded investors.",
    link: "/marketing-funnels/",
  },
  {
    idx: "08",
    title: "Reporting Systems",
    description: "Structured, auditable reporting for performance, compliance and governance.",
    link: "/reporting-systems/",
  },
  {
    idx: "09",
    title: "Brand Guidelines",
    description: "The rules and assets that keep every touchpoint across the network consistent.",
    link: "/brand-guidelines/",
  },
  {
    idx: "10",
    title: "Operational Systems",
    description: "The internal tooling that runs day-to-day execution across the hub.",
    link: "/operational-systems/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SystemsGrid() {
  return (
    <section className="relative z-10 py-14">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {systemsData.map((item) => (
            <motion.div key={item.idx} variants={cardVariants}>
              <Link
                href={item.link}
                className="group relative flex flex-col justify-between h-full bg-[#151A21] border border-[#252D38] rounded-xl p-6 hover:bg-[#1B222B] hover:border-[#C6A067] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C6A067] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                <div>
                  <span className="font-mono text-xs text-[#C6A067] tracking-wider">
                    {item.idx}
                  </span>
                  <h3 className="font-sans font-semibold text-xl text-[#E7EAF0] mt-3 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[#8B95A6] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <span className="font-mono text-xs text-[#5C6577] group-hover:text-[#C6A067] mt-5 tracking-wider transition-colors duration-200">
                  Explore →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}