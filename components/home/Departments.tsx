"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "./animations";

export default function Departments() {
  const depts = [
    { 
      id: '01', 
      title: 'Technology', 
      desc: 'The web platforms, AI, automation and security that keep the network running.', 
      chips: ['Web Development', 'AI', 'Automation', 'Cyber Security'],
      icon: '/images/home/Technology.png'
    },
    { 
      id: '02', 
      title: 'Marketing', 
      desc: 'Demand, brand and investor reach across every channel and search surface.', 
      chips: ['Social Media', 'SEO', 'Video Production', 'Paid Ads', 'PR'],
      icon: '/images/home/Marketing.png'
    },
    { 
      id: '03', 
      title: 'Operations', 
      desc: 'Investor relations, CRM, reporting and documentation that keep capital moving.', 
      chips: ['Investor Relations', 'CRM', 'Reporting', 'Documentation'],
      icon: '/images/home/Operations.png'
    },
    { 
      id: '04', 
      title: 'Creative', 
      desc: 'Branding, interface and motion that shape how the network looks and feels.', 
      chips: ['Branding', 'UI/UX', 'Graphic Design', 'Motion Graphics'],
      icon: '/images/home/Creative.png'
    }
  ];

  return (
    <section id="departments" className="relative z-10 py-[60px]">
      <div className="max-w-[1160px] mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.2 }} // once: false ensures it repeats
          variants={staggerContainer}
          className="max-w-[640px] mb-[56px]"
        >
          <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
            Our Departments
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading font-semibold text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.02em] mt-[16px] mb-[16px] text-white">
            Five Teams <span className="text-[#c39967]">One Engine Room</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#a5adb6] text-[18px] leading-relaxed">
            Every part of the BricketX ecosystem is built, run and scaled by a dedicated department in Karachi.
          </motion.p>
        </motion.div>
        
        {/* Cards Grid - Removed parent animation constraints so children manage themselves */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {depts.map((dept, i) => (
            <motion.div 
              key={i} 
              // EACH card tracks its own visibility now
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: false, amount: 0.15 }} // Resets as soon as it leaves viewport
              variants={{
                hidden: { 
                  opacity: 0, 
                  x: i % 2 === 0 ? -100 : 100 // Left items come from left, right from right
                },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    type: "spring", 
                    stiffness: 50, 
                    damping: 15,   
                    mass: 1,
                    // Creates a micro-stagger: Left card animates instantly, right card delays by 0.15s
                    delay: (i % 2) * 0.15 
                  }
                }
              }} 
              className="relative overflow-hidden bg-gradient-to-b from-[#12151A] to-[#0A0C10] border border-white/[0.05] rounded-[20px] p-[32px] sm:p-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-500 hover:border-[#c39967]/30 hover:shadow-[0_0_40px_rgba(195,153,103,0.08)] hover:-translate-y-[4px] group cursor-pointer flex flex-col min-h-[320px]"
            >
              {/* Radial Hover Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(195,153,103,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

              {/* Watermark Icon */}
              <div className="absolute -right-8 -top-8 w-[180px] h-[180px] opacity-10 transition-all duration-700 ease-out group-hover:opacity-25 group-hover:scale-110 group-hover:-rotate-6 pointer-events-none z-0">
                <Image src={dept.icon} alt={`${dept.title} Icon`} fill className="object-contain" />
              </div>

              {/* Card Content Wrapper */}
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans font-semibold text-[13px] text-[#c39967]/80 tracking-[0.1em]">{dept.id}</span>
                  {/* Arrow Icon on Hover */}
                  <span className="text-[#c39967] opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all duration-500 ease-out">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </span>
                </div>
                
                <h3 className="font-heading font-semibold text-[26px] text-white mb-3 group-hover:text-[#c39967] transition-colors duration-300">{dept.title}</h3>
                <p className="text-[#8b95a1] text-[15.5px] leading-[1.6] mb-8 flex-1">{dept.desc}</p>
                
                {/* Sleek Pill Chips */}
                <div className="flex flex-wrap gap-[10px] mt-auto pt-4 border-t border-white/[0.03]">
                  {dept.chips.map((chip, j) => (
                    <span key={j} className="font-sans font-medium text-[12px] tracking-wide text-[#8b95a1] bg-white/[0.02] border border-white/[0.05] px-[14px] py-[6px] rounded-full transition-all duration-300 group-hover:border-[#c39967]/30 group-hover:text-[#e2e8f0] group-hover:bg-[#c39967]/5">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Production Card (Double Width) - Tracks its own visibility */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: false, amount: 0.15 }} // Resets individually
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  type: "spring", 
                  stiffness: 50, 
                  damping: 15,
                  mass: 1,
                  delay: 0.1 // Slight delay as it comes up
                }
              }
            }}
            className="relative overflow-hidden md:col-span-2 bg-gradient-to-b from-[#12151A] to-[#0A0C10] border border-white/[0.05] rounded-[20px] p-[32px] sm:p-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-500 hover:border-[#c39967]/30 hover:shadow-[0_0_40px_rgba(195,153,103,0.08)] hover:-translate-y-[4px] group cursor-pointer flex flex-col"
          >
             {/* Radial Hover Glow */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(195,153,103,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

            {/* Production Icon */}
            <div className="absolute -right-12 -top-12 w-[260px] h-[260px] opacity-10 transition-all duration-700 ease-out group-hover:opacity-25 group-hover:scale-110 group-hover:-rotate-3 pointer-events-none z-0">
              <Image src="/images/home/Production.png" alt="Production Icon" fill className="object-contain" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans font-semibold text-[13px] text-[#c39967]/80 tracking-[0.1em]">05</span>
                <span className="text-[#c39967] opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all duration-500 ease-out">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </span>
              </div>
              
              <h3 className="font-heading font-semibold text-[26px] text-white mb-3 group-hover:text-[#c39967] transition-colors duration-300">Production</h3>
              <p className="text-[#8b95a1] text-[15.5px] leading-[1.6] mb-8 max-w-[700px]">Research, process and coordination that turn ideas into shipped, scalable work across every region.</p>
              
              <div className="flex flex-wrap gap-[10px] mt-auto pt-4 border-t border-white/[0.03]">
                {['Research', 'Process Management', 'Training', 'Global Coordination'].map((chip, j) => (
                  <span key={j} className="font-sans font-medium text-[12px] tracking-wide text-[#8b95a1] bg-white/[0.02] border border-white/[0.05] px-[14px] py-[6px] rounded-full transition-all duration-300 group-hover:border-[#c39967]/30 group-hover:text-[#e2e8f0] group-hover:bg-[#c39967]/5">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}