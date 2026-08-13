"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

export default function CultureCareers() {
  return (
    <section id="culture" className="relative z-10 py-[100px] bg-[#101010] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* Culture */}
          <motion.div variants={fadeUp} className="bg-[#151515] border border-white/5 rounded-[24px] p-[40px] md:p-[56px] hover:border-[#c39967]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] group">
            <span className="font-sans font-bold text-[12px] tracking-[0.2em] uppercase text-[#c39967] mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#c39967]/60"></span>
              Our Culture
            </span>
            <h2 className="font-heading font-semibold text-[36px] md:text-[44px] text-white mb-10 group-hover:text-[#c39967] transition-colors">How We <span className="text-[#c39967] group-hover:text-white transition-colors">Think.</span></h2>
            
            <div className="flex flex-col gap-5">
              {['Educate first', 'Innovate continuously', 'Operate with excellence', 'Think globally, build for scale', 'Never stop learning'].map((val, i) => (
                <div key={i} className="font-sans text-[17px] md:text-[19px] text-[#a5adb6] flex items-center gap-4 group/item hover:translate-x-2 hover:text-white transition-all duration-300 cursor-default">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-[#c39967] text-[13px] font-bold group-hover/item:bg-[#c39967] group-hover/item:border-[#c39967] group-hover/item:text-[#212121] transition-colors">
                    0{i + 1}
                  </span>
                  {val}
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Careers */}
          <motion.div variants={fadeUp} className="bg-gradient-to-br from-[#151515] to-[#1a1a1a] border border-white/5 rounded-[24px] p-[40px] md:p-[56px] hover:border-[#c39967]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c39967]/5 blur-[80px] rounded-full group-hover:bg-[#c39967]/15 transition-colors duration-500" />
            <div className="relative z-10">
              <span className="font-sans font-bold text-[12px] tracking-[0.2em] uppercase text-[#c39967] mb-6 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#c39967]/60"></span>
                Careers
              </span>
              <h2 className="font-heading font-semibold text-[36px] md:text-[44px] text-white mb-6 group-hover:text-white transition-colors leading-[1.1]">
                Join The Team Building The Future Of <span className="text-[#c39967]">Alternative Investments.</span>
              </h2>
              <p className="text-[#a5adb6] text-[17px] md:text-[19px] mb-10">We hire across every department in the hub.</p>
              
              <div className="flex flex-wrap gap-3">
                {['Developers', 'UI/UX', 'Designers', 'Marketing', 'AI', 'Operations', 'Production', 'Management'].map((role, i) => (
                  <a key={i} href="#" className="font-sans font-medium text-[14px] py-[10px] px-[20px] bg-white/5 border border-white/10 rounded-full text-[#a5adb6] transition-all duration-300 hover:border-[#c39967] hover:text-white hover:bg-[#c39967]/20 hover:-translate-y-1 shadow-sm">
                    {role}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}