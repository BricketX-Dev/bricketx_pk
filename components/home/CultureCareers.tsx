"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

export default function CultureCareers() {
  return (
    <section id="culture" className="relative z-10 py-[60px]">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-[20px] items-stretch"
        >
          {/* Culture */}
          <motion.div variants={fadeUp} className="bg-[#151A21] border border-[#a5adb6]/20 rounded-[14px] p-[36px] hover:border-[#c39967] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(195,153,103,0.1)] group">
            <span className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
              Our Culture
            </span>
            <h2 className="font-heading font-semibold text-[30px] mt-[16px] group-hover:text-[#c39967] transition-colors">How We <span className="text-[#c39967] group-hover:text-[#ffffff] transition-colors">Think</span></h2>
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
            <h2 className="font-heading font-semibold text-[30px] mt-[16px] group-hover:text-[#ffffff] transition-colors">Join The Team Building The Future Of <span className="text-[#c39967]">Alternative Investments</span></h2>
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
  );
}