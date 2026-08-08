"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

export default function Departments() {
  const depts = [
    { id: '01', title: 'Technology', desc: 'The web platforms, AI, automation and security that keep the network running.', chips: ['Web Development', 'AI', 'Automation', 'Cyber Security'] },
    { id: '02', title: 'Marketing', desc: 'Demand, brand and investor reach across every channel and search surface.', chips: ['Social Media', 'SEO', 'Video Production', 'Paid Ads', 'PR'] },
    { id: '03', title: 'Operations', desc: 'Investor relations, CRM, reporting and documentation that keep capital moving.', chips: ['Investor Relations', 'CRM', 'Reporting', 'Documentation'] },
    { id: '04', title: 'Creative', desc: 'Branding, interface and motion that shape how the network looks and feels.', chips: ['Branding', 'UI/UX', 'Graphic Design', 'Motion Graphics'] }
  ];

  return (
    <section id="departments" className="relative z-10 py-[60px]">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="max-w-[640px] mb-[44px]"
        >
          <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
            Our Departments
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading font-semibold text-[clamp(30px,4vw,44px)] leading-[1.08] tracking-[-0.02em] mt-[16px] mb-[14px]">
            Five Teams <span className="text-[#c39967]">One Engine Room</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#a5adb6] text-[17px]">Every part of the BricketX ecosystem is built, run and scaled by a dedicated department in Karachi.</motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-[16px]"
        >
          {depts.map((dept, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-[#151A21] border border-[#a5adb6]/20 rounded-[14px] p-[28px] transition-all duration-300 hover:border-[#c39967] hover:bg-[#151A21]/80 hover:-translate-y-[4px] hover:shadow-[0_10px_30px_rgba(195,153,103,0.15)] group cursor-pointer">
              <span className="font-sans font-medium text-[12px] text-[#c39967] tracking-[0.1em]">{dept.id}</span>
              <h3 className="font-heading font-semibold text-[23px] mt-[14px] mb-[8px] group-hover:text-[#c39967] transition-colors">{dept.title}</h3>
              <p className="text-[#a5adb6] text-[15px] mb-[16px]">{dept.desc}</p>
              <div className="flex flex-wrap gap-[8px]">
                {dept.chips.map((chip, j) => (
                  <span key={j} className="font-sans font-medium text-[11.5px] tracking-[0.03em] text-[#a5adb6] bg-[#0E1116] border border-[#a5adb6]/20 px-[11px] py-[5px] rounded-[20px] transition-colors group-hover:border-[#c39967]/50 group-hover:text-[#ffffff]">{chip}</span>
                ))}
              </div>
            </motion.div>
          ))}
          
          <motion.div variants={fadeUp} className="md:col-span-2 bg-[#151A21] border border-[#a5adb6]/20 rounded-[14px] p-[28px] transition-all duration-300 hover:border-[#c39967] hover:bg-[#151A21]/80 hover:-translate-y-[4px] hover:shadow-[0_10px_30px_rgba(195,153,103,0.15)] group cursor-pointer">
            <span className="font-sans font-medium text-[12px] text-[#c39967] tracking-[0.1em]">05</span>
            <h3 className="font-heading font-semibold text-[23px] mt-[14px] mb-[8px] group-hover:text-[#c39967] transition-colors">Production</h3>
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
  );
}