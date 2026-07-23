"use client";

import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";


// --- Animation Variants ---
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#0E1116] text-[#ffffff] font-sans overflow-x-hidden antialiased selection:bg-[#c39967] selection:text-[#212121]">
      
      <style jsx global>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>

      {/* NAV */}
      <Navbar />

      {/* HERO */}
      <section className="relative z-10 pt-[60px] pb-[32px]">
        <div className="max-w-[1160px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-[36px] md:gap-[56px] items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
                BricketX Pakistan // Operational & Innovation Hub
              </motion.span>
              
              {/* Forced Two Lines */}
              <motion.h1 variants={fadeUp} className="font-sans font-semibold text-[clamp(42px,6vw,72px)] leading-[1.08] tracking-[-0.02em] mt-[22px]">
                Powering the <br /> 
                <span className="whitespace-nowrap"><span className="text-[#c39967] drop-shadow-[0_0_15px_rgba(195,153,103,0.3)]">BricketX</span> Network</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-[19px] text-[#a5adb6] max-w-[520px] mt-[22px]">
                Where strategy, technology and execution meet to build and scale the global BricketX ecosystem — from Karachi to the world.
              </motion.p>
              <motion.div variants={fadeUp} className="font-sans font-medium text-[13px] tracking-[0.05em] text-[#a5adb6] mt-[26px] flex flex-wrap gap-x-[14px] gap-y-[6px]">
                <span className="hover:text-[#c39967] transition-colors cursor-default">Technology</span>&middot;
                <span className="hover:text-[#c39967] transition-colors cursor-default">Operations</span>&middot;
                <span className="hover:text-[#c39967] transition-colors cursor-default">Marketing</span>&middot;
                <span className="hover:text-[#c39967] transition-colors cursor-default">Production</span>&middot;
                <b className="text-[#c39967] font-semibold drop-shadow-[0_0_8px_rgba(195,153,103,0.4)]">Excellence</b>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-[14px] mt-[34px]">
                <button onClick={() => scrollToSection('#departments')} className="font-sans font-medium text-[15px] py-[14px] px-[26px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[9px] bg-[#c39967] text-[#212121] hover:bg-[#d4a873] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(195,153,103,0.3)]">
                  Explore the Departments
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </button>
                <button onClick={() => scrollToSection('#build')} className="font-sans font-medium text-[15px] py-[14px] px-[26px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[9px] border border-[#a5adb6]/30 text-[#ffffff] hover:border-[#c39967] hover:text-[#c39967] hover:bg-[#c39967]/5 hover:-translate-y-[2px]">
                  See What We Build
                </button>
              </motion.div>
            </motion.div>

            {/* Network Signature Diagram */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square w-full max-w-[340px] md:max-w-[440px] mx-auto order-first md:order-last" 
              aria-hidden="true"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible drop-shadow-2xl">
                <circle cx="200" cy="200" r="150" fill="none" stroke="#a5adb6" strokeWidth="1" strokeDasharray="2 6" className="opacity-30" />
                <circle cx="200" cy="200" r="95" fill="none" stroke="#a5adb6" strokeWidth="1" strokeDasharray="2 6" className="opacity-30" />
                
                <g stroke="#a5adb6" strokeWidth="1" fill="none" className="opacity-30">
                  <path d="M200 200 L200 55" /><path d="M200 200 L338 130" />
                  <path d="M200 200 L338 285" /><path d="M200 200 L200 350" />
                  <path d="M200 200 L62 285" /><path d="M200 200 L62 130" />
                </g>
                <g fill="none" stroke="#c39967" strokeWidth="1.5" strokeDasharray="4 200" style={{ animation: 'dash-anim 3.2s linear infinite' }}>
                  <path d="M200 200 L200 55" />
                  <path d="M200 200 L338 285" style={{ animationDelay: '1s' }} />
                  <path d="M200 200 L62 285" style={{ animationDelay: '2s' }} />
                  <path d="M200 200 L338 130" style={{ animationDelay: '0.5s' }} />
                </g>

                <g className="cursor-pointer group">
                  <circle cx="200" cy="55" r="20" fill="#151A21" stroke="#a5adb6" strokeWidth="1.5" className="opacity-60 hover:stroke-[#c39967] transition-colors" />
                  <text x="200" y="30" textAnchor="middle" fill="#a5adb6" className="font-sans font-medium text-[9.5px] tracking-[0.06em] uppercase hover:fill-[#c39967] transition-colors">Technology</text>
                  
                  <circle cx="338" cy="130" r="20" fill="#151A21" stroke="#a5adb6" strokeWidth="1.5" className="opacity-60 hover:stroke-[#c39967] transition-colors" />
                  <text x="338" y="105" textAnchor="middle" fill="#a5adb6" className="font-sans font-medium text-[9.5px] tracking-[0.06em] uppercase">Marketing</text>
                  
                  <circle cx="338" cy="285" r="20" fill="#151A21" stroke="#a5adb6" strokeWidth="1.5" className="opacity-60 hover:stroke-[#c39967] transition-colors" />
                  <text x="338" y="322" textAnchor="middle" fill="#a5adb6" className="font-sans font-medium text-[9.5px] tracking-[0.06em] uppercase">Operations</text>
                  
                  <circle cx="200" cy="350" r="20" fill="#151A21" stroke="#a5adb6" strokeWidth="1.5" className="opacity-60 hover:stroke-[#c39967] transition-colors" />
                  <text x="200" y="385" textAnchor="middle" fill="#a5adb6" className="font-sans font-medium text-[9.5px] tracking-[0.06em] uppercase">Creative</text>
                  
                  <circle cx="62" cy="285" r="20" fill="#151A21" stroke="#a5adb6" strokeWidth="1.5" className="opacity-60 hover:stroke-[#c39967] transition-colors" />
                  <text x="62" y="322" textAnchor="middle" fill="#a5adb6" className="font-sans font-medium text-[9.5px] tracking-[0.06em] uppercase">Production</text>
                  
                  <circle cx="62" cy="130" r="20" fill="#151A21" stroke="#a5adb6" strokeWidth="1.5" className="opacity-60 hover:stroke-[#c39967] transition-colors" />
                  <text x="62" y="105" textAnchor="middle" fill="#a5adb6" className="font-sans font-medium text-[9.5px] tracking-[0.06em] uppercase">Global</text>
                  
                  <circle cx="200" cy="55" r="3" fill="#c39967" className="animate-pulse" />
                  <circle cx="338" cy="285" r="3" fill="#c39967" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <circle cx="62" cy="130" r="3" fill="#c39967" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                </g>

                <circle cx="200" cy="200" r="40" fill="#1d160a" stroke="#c39967" strokeWidth="1.5" className="filter drop-shadow-[0_0_10px_rgba(195,153,103,0.3)]" />
                <text x="200" y="197" textAnchor="middle" fill="#ffffff" className="font-sans text-[13px] font-semibold">BricketX</text>
                <text x="200" y="213" textAnchor="middle" fill="#c39967" className="font-sans text-[13px] font-semibold">.PK</text>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONSOLE STRIP */}
      <div className="relative z-10 border-y border-[#c39967]/30 bg-[#151A21] font-sans font-medium text-[12.5px] tracking-[0.04em] overflow-hidden shadow-[0_0_20px_rgba(195,153,103,0.05)]">
        <motion.div 
          className="flex gap-[44px] py-[13px] whitespace-nowrap w-max" 
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 34 }}
        >
          {Array(2).fill(0).map((_, idx) => (
            <div key={idx} className="flex gap-[44px]">
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

      {/* STATS */}
      <section className="relative z-10 py-[48px]">
        <div className="max-w-[1160px] mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-5 gap-[1px] bg-[#c39967]/20 border border-[#c39967]/30 rounded-[14px] overflow-hidden shadow-[0_10px_30px_rgba(195,153,103,0.05)]"
          >
            {[
              { num: '500', suffix: '+', label: 'Projects Delivered' },
              { num: '24', suffix: '/7', label: 'Operations' },
              { num: '5', suffix: '', label: 'Core Departments' },
              { num: '4', suffix: '', label: 'Global Regions' },
              { num: '100', suffix: '%', label: 'Operational Excellence', colSpan: 'col-span-2 md:col-span-1' }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className={`bg-[#0E1116] py-[30px] px-[22px] text-center hover:bg-[#0E1116]/80 transition-colors duration-300 ${stat.colSpan || ''}`}>
                <div className="font-sans text-[38px] font-semibold text-[#ffffff] drop-shadow-md">
                  <b className="text-[#c39967] font-semibold">{stat.num}</b>{stat.suffix}
                </div>
                <div className="font-sans font-medium text-[11px] tracking-[0.08em] uppercase text-[#a5adb6] mt-[8px] group-hover:text-[#ffffff] transition-colors">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ENGINE-ROOM REFRAME */}
      <section className="relative z-10 py-[60px] bg-gradient-to-b from-[#151A21] to-[#0E1116] border-y border-[#a5adb6]/20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="max-w-[1160px] mx-auto px-6"
        >
          <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
            The Positioning
          </motion.span>
          
          <motion.p variants={fadeUp} className="font-sans text-[clamp(22px,3vw,30px)] font-normal leading-[1.4] max-w-[1080px] tracking-[-0.01em] mt-[22px]">
            <b className="text-[#c39967] font-semibold drop-shadow-[0_0_10px_rgba(195,153,103,0.3)]">BricketX Pakistan is the operational backbone of the BricketX network</b> — the Karachi engine room that builds the technology, runs the operations, and produces the work behind a Shariah-compliant investment platform operating across the UK/BVI, Dubai, Kenya and Pakistan.
          </motion.p>
        </motion.div>
      </section>

      {/* DEPARTMENTS */}
      <section id="departments" className="relative z-10 py-[60px]">
        <div className="max-w-[1160px] mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="max-w-[640px] mb-[44px]"
          >
            <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
              Our Departments
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-sans font-semibold text-[clamp(30px,4vw,44px)] leading-[1.08] tracking-[-0.02em] mt-[16px] mb-[14px]">
              Five teams <span className="text-[#c39967]">One engine room</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#a5adb6] text-[17px]">Every part of the BricketX ecosystem is built, run and scaled by a dedicated department in Karachi.</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-[16px]"
          >
            {[
              { id: '01', title: 'Technology', desc: 'The web platforms, AI, automation and security that keep the network running.', chips: ['Web Development', 'AI', 'Automation', 'Cyber Security'] },
              { id: '02', title: 'Marketing', desc: 'Demand, brand and investor reach across every channel and search surface.', chips: ['Social Media', 'SEO', 'Video Production', 'Paid Ads', 'PR'] },
              { id: '03', title: 'Operations', desc: 'Investor relations, CRM, reporting and documentation that keep capital moving.', chips: ['Investor Relations', 'CRM', 'Reporting', 'Documentation'] },
              { id: '04', title: 'Creative', desc: 'Branding, interface and motion that shape how the network looks and feels.', chips: ['Branding', 'UI/UX', 'Graphic Design', 'Motion Graphics'] }
            ].map((dept, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#151A21] border border-[#a5adb6]/20 rounded-[14px] p-[28px] transition-all duration-300 hover:border-[#c39967] hover:bg-[#151A21]/80 hover:-translate-y-[4px] hover:shadow-[0_10px_30px_rgba(195,153,103,0.15)] group cursor-pointer">
                <span className="font-sans font-medium text-[12px] text-[#c39967] tracking-[0.1em]">{dept.id}</span>
                <h3 className="font-sans font-semibold text-[23px] mt-[14px] mb-[8px] group-hover:text-[#c39967] transition-colors">{dept.title}</h3>
                <p className="text-[#a5adb6] text-[15px] mb-[16px]">{dept.desc}</p>
                <div className="flex flex-wrap gap-[8px]">
                  {dept.chips.map((chip, j) => (
                    <span key={j} className="font-sans font-medium text-[11.5px] tracking-[0.03em] text-[#a5adb6] bg-[#0E1116] border border-[#a5adb6]/20 px-[11px] py-[5px] rounded-[20px] transition-colors group-hover:border-[#c39967]/50 group-hover:text-[#ffffff]">{chip}</span>
                  ))}
                </div>
              </motion.div>
            ))}
            {/* Full width dept */}
            <motion.div variants={fadeUp} className="md:col-span-2 bg-[#151A21] border border-[#a5adb6]/20 rounded-[14px] p-[28px] transition-all duration-300 hover:border-[#c39967] hover:bg-[#151A21]/80 hover:-translate-y-[4px] hover:shadow-[0_10px_30px_rgba(195,153,103,0.15)] group cursor-pointer">
              <span className="font-sans font-medium text-[12px] text-[#c39967] tracking-[0.1em]">05</span>
              <h3 className="font-sans font-semibold text-[23px] mt-[14px] mb-[8px] group-hover:text-[#c39967] transition-colors">Production</h3>
              <p className="text-[#a5adb6] text-[15px] mb-[16px]">Research, process and coordination that turn ideas into shipped, scalable work across every region.</p>
              <div className="flex flex-wrap gap-[8px]">
                {['Research', 'Process Management', 'Training', 'Global Coordination'].map((chip, j) => (
                  <span key={j} className="font-sans font-medium text-[11.5px] tracking-[0.03em] text-[#a5adb6] bg-[#0E1116] border border-[#a5adb6]/20 px-[11px] py-[5px] rounded-[20px] transition-colors group-hover:border-[#c39967]/50 group-hover:text-[#ffffff]">{chip}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section id="build" className="relative z-10 py-[60px] bg-[#151A21] border-y border-[#a5adb6]/20">
        <div className="max-w-[1160px] mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="max-w-[640px] mb-[44px]"
          >
            <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
              What We Build
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-sans font-semibold text-[clamp(30px,4vw,44px)] leading-[1.08] tracking-[-0.02em] mt-[16px] mb-[14px]">
              Not services <span className="text-[#c39967]">Systems</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#a5adb6] text-[17px]">The infrastructure that runs the BricketX ecosystem end to end.</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#a5adb6]/20 border border-[#a5adb6]/20 rounded-[14px] overflow-hidden hover:border-[#c39967]/30 transition-colors"
          >
            {[
              { title: 'Investor Portal', desc: 'The dashboard investors log into to track holdings and returns.' },
              { title: 'Web Platforms', desc: 'The public sites and applications across the ecosystem.' },
              { title: 'AI Systems', desc: 'Models and assistants that automate research and support.' },
              { title: 'CRM Solutions', desc: 'Systems that manage investor and partner relationships.' },
              { title: 'Dashboards', desc: 'Live reporting views for teams and stakeholders.' },
              { title: 'Automations', desc: 'Workflows that remove manual, repetitive work.' },
              { title: 'Marketing Funnels', desc: 'The paths that turn interest into qualified investors.' },
              { title: 'Reporting Systems', desc: 'Structured, auditable performance and compliance reporting.' },
              { title: 'Brand Guidelines', desc: 'The rules that keep every touchpoint consistent.' },
              { title: 'Operational Systems', desc: 'The internal tooling that runs day-to-day execution.' }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#0E1116] p-[24px_26px] transition-all duration-300 hover:bg-[#0E1116]/60 hover:pl-[34px] border-l-4 border-transparent hover:border-[#c39967] cursor-pointer group">
                <h3 className="font-sans font-semibold text-[18px] flex items-center gap-[11px] group-hover:text-[#c39967] transition-colors">
                  <i className="w-[6px] h-[6px] bg-[#c39967] rounded-full shrink-0 group-hover:scale-150 transition-transform" />
                  {item.title}
                </h3>
                <p className="text-[#a5adb6] text-[14px] mt-[7px] pl-[17px] group-hover:text-[#ffffff] transition-colors">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* THE COMPANY */}
      <section id="company" className="relative z-10 py-[60px]">
        <div className="max-w-[1160px] mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="max-w-[640px] mb-[44px]"
          >
            <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
              The Company
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-sans font-semibold text-[clamp(30px,4vw,44px)] leading-[1.08] tracking-[-0.02em] mt-[16px] mb-[14px]">
              The engine behind <span className="text-[#c39967]">the network</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#a5adb6] text-[17px]">How BricketX is structured, how it operates, and where it's headed.</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px]"
          >
            {[
              { title: 'Our Ecosystem', desc: 'How BricketX\'s entities and verticals fit together.' },
              { title: 'How We Operate', desc: 'The idea-to-scale process the hub runs every day.' },
              { title: 'Global Operations', desc: 'Who does what across UK/BVI, Dubai, Kenya and Pakistan.' },
              { title: 'Innovation Lab', desc: 'Where new products and AI experiments begin.' }
            ].map((co, i) => (
              <motion.a key={i} variants={fadeUp} href="#" className="block bg-[#151A21] border border-[#a5adb6]/20 rounded-[14px] p-[26px_22px] transition-all duration-300 hover:border-[#c39967] hover:-translate-y-[4px] hover:shadow-[0_10px_30px_rgba(195,153,103,0.15)] group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50px] h-[50px] bg-gradient-to-bl from-[#c39967]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full" />
                <h3 className="font-sans font-semibold text-[19px] mb-[9px] group-hover:text-[#c39967] transition-colors">{co.title}</h3>
                <p className="text-[#a5adb6] text-[14px] group-hover:text-[#ffffff] transition-colors">{co.desc}</p>
                <div className="mt-[16px] font-sans font-medium text-[12px] text-[#c39967] opacity-0 transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">Explore &rarr;</div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GLOBAL OPERATIONS */}
      <section className="relative z-10 py-[60px] bg-[#151A21] border-y border-[#a5adb6]/20">
        <div className="max-w-[1160px] mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="max-w-[640px] mb-[44px]"
          >
            <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
              Global Operations
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-sans font-semibold text-[clamp(30px,4vw,44px)] leading-[1.08] tracking-[-0.02em] mt-[16px] mb-[14px]">
              One network. <span className="text-[#c39967]">Four regions.</span>
            </motion.h2>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#a5adb6]/20 border border-[#a5adb6]/20 rounded-[14px] overflow-hidden mt-[8px] hover:border-[#c39967]/30 transition-colors"
          >
            {[
              { region: 'Pakistan', role: 'Operations & Execution', desc: 'The Karachi hub — where it\'s built.' },
              { region: 'Dubai', role: 'Management', desc: 'Regional leadership & investor relations.' },
              { region: 'Kenya', role: 'Mining', desc: 'On-the-ground production & sourcing.' },
              { region: 'UK / BVI', role: 'Corporate Structure', desc: 'Holdings & governance.' }
            ].map((loc, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#0E1116] p-[30px_24px] hover:bg-[#0E1116]/60 transition-colors group cursor-pointer">
                <h3 className="font-sans font-semibold text-[20px] flex items-center group-hover:text-[#ffffff] transition-colors">
                  <span className="w-[8px] h-[8px] rounded-full bg-[#c39967] inline-block mr-[8px] shadow-[0_0_0_3px_rgba(195,153,103,0.12)] group-hover:shadow-[0_0_8px_rgba(195,153,103,0.6)] transition-shadow" />
                  {loc.region}
                </h3>
                <div className="font-sans font-medium text-[12px] tracking-[0.06em] uppercase text-[#c39967] mt-[10px]">{loc.role}</div>
                <div className="text-[#a5adb6] text-[14px] mt-[6px] group-hover:text-[#ffffff] transition-colors">{loc.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CULTURE & CAREERS */}
      <section id="culture" className="relative z-10 py-[60px]">
        <div className="max-w-[1160px] mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-[20px] items-stretch"
          >
            {/* Culture */}
            <motion.div variants={fadeUp} className="bg-[#151A21] border border-[#a5adb6]/20 rounded-[14px] p-[36px] hover:border-[#c39967] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(195,153,103,0.1)] group">
              <span className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
                Our Culture
              </span>
              <h2 className="font-sans font-semibold text-[30px] mt-[16px] group-hover:text-[#c39967] transition-colors">How we <span className="text-[#c39967] group-hover:text-[#ffffff] transition-colors">think.</span></h2>
              <div className="flex flex-col gap-[14px] mt-[20px]">
                {['Educate first', 'Innovate continuously', 'Operate with excellence', 'Think globally, build for scale', 'Never stop learning'].map((val, i) => (
                  <div key={i} className="font-sans text-[17px] text-[#a5adb6] flex gap-[12px] items-center hover:translate-x-2 hover:text-[#ffffff] transition-all cursor-default">
                    <b className="font-sans font-semibold text-[12px] text-[#c39967]">0{i + 1}</b>{val}
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Careers */}
            <motion.div variants={fadeUp} className="bg-[#151A21] border border-[#a5adb6]/20 rounded-[14px] p-[36px] hover:border-[#c39967] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(195,153,103,0.1)] group">
              <span className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
                Careers
              </span>
              <h2 className="font-sans font-semibold text-[30px] mt-[16px] group-hover:text-[#ffffff] transition-colors">Join the team building the future of <span className="text-[#c39967]">alternative investments.</span></h2>
              <p className="text-[#a5adb6] mt-[14px]">We hire across every department in the hub.</p>
              <div className="flex flex-wrap gap-[9px] mt-[20px]">
                {['Developers', 'UI/UX', 'Designers', 'Marketing', 'AI', 'Operations', 'Production', 'Management'].map((role, i) => (
                  <a key={i} href="#" className="font-sans font-medium text-[12px] py-[8px] px-[14px] border border-[#a5adb6]/30 rounded-[8px] text-[#a5adb6] transition-all duration-300 hover:border-[#c39967] hover:text-[#c39967] hover:bg-[#c39967]/10 hover:-translate-y-1">
                    {role}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-[60px] bg-[#151A21] border-y border-[#a5adb6]/20">
        <div className="max-w-[1160px] mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="max-w-[640px] mb-[44px]"
          >
            <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
              Common Questions
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-sans font-semibold text-[clamp(30px,4vw,44px)] leading-[1.08] tracking-[-0.02em] mt-[16px] mb-[14px]">
              Frequently <span className="text-[#c39967]">asked</span>
            </motion.h2>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {[
              { q: 'What is BricketX Pakistan?', a: 'BricketX Pakistan is the operational and innovation hub of the BricketX network, based in Karachi. It builds the technology, runs the operations, and produces the work behind the group\'s Shariah-compliant investment platform.' },
              { q: 'Is BricketX Pakistan an IT or software company?', a: 'No. BricketX Pakistan is the in-house execution hub for the BricketX group. Technology is one of five departments, alongside Marketing, Operations, Creative and Production.' },
              { q: 'What does the Karachi hub do for BricketX?', a: 'It powers investor experience, digital infrastructure, marketing, production and global coordination for the wider BricketX network.' },
              { q: 'How does BricketX Pakistan fit into the global network?', a: 'It is the execution layer of the group. Pakistan handles operations, Dubai handles management, Kenya handles mining, and the UK/BVI holds the corporate structure.' },
              { q: 'Which departments operate from Pakistan?', a: 'Five departments operate from the Karachi hub: Technology, Marketing, Operations, Creative and Production.' }
            ].map((faq, i) => {
              const isOpen = openFaqIndex === i;

              return (
                <motion.div 
                  key={i} 
                  variants={fadeUp} 
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className={`border rounded-[12px] mb-[12px] bg-[#151A21] overflow-hidden transition-all duration-300 group cursor-pointer hover:border-[#c39967]/40 ${isOpen ? 'border-[#c39967]/60 shadow-[0_4px_20px_rgba(195,153,103,0.1)]' : 'border-[#a5adb6]/20'}`}
                >
                  <div className={`p-[22px_26px] font-sans text-[18px] font-medium flex justify-between items-center gap-[16px] transition-colors group-hover:text-[#c39967] ${isOpen ? 'text-[#c39967]' : 'text-[#ffffff]'}`}>
                    {faq.q}
                    <motion.span 
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`font-sans font-semibold text-[22px] flex-shrink-0 transition-colors ${isOpen ? 'text-[#c39967]' : 'text-[#a5adb6] group-hover:text-[#c39967]'}`}
                    >
                      +
                    </motion.span>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="p-[0_26px_24px] text-[#a5adb6] text-[15.5px] max-w-[760px] leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="relative z-10 py-[80px] text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c39967]/5 rounded-full blur-[100px] pointer-events-none" />
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="max-w-[1160px] mx-auto px-6 relative z-10"
        >
          <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] justify-center before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
            Let's Build
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-sans font-semibold text-[clamp(32px,5vw,52px)] mb-[18px] mt-[16px]">
            The engine room <span className="text-[#c39967] drop-shadow-[0_0_15px_rgba(195,153,103,0.4)]">is open</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#a5adb6] text-[18px] max-w-[520px] mx-auto mb-[34px]">
            Partner with the team powering the BricketX network, or join it.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-[14px] justify-center">
            <a href="mailto:hello@bricketx.pk" className="font-sans font-medium text-[15px] py-[14px] px-[26px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[9px] bg-[#c39967] text-[#212121] hover:bg-[#d4a873] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(195,153,103,0.3)]">
              Get in Touch
            </a>
            <a href="#" className="font-sans font-medium text-[15px] py-[14px] px-[26px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[9px] border border-[#a5adb6]/30 text-[#ffffff] hover:border-[#c39967] hover:text-[#c39967] hover:bg-[#c39967]/5 hover:-translate-y-[2px]">
              View Open Roles
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}