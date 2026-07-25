"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

export default function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'What is BricketX Pakistan?', a: 'BricketX Pakistan is the operational and innovation hub of the BricketX network, based in Karachi. It builds the technology, runs the operations, and produces the work behind the group\'s Shariah-compliant investment platform.' },
    { q: 'Is BricketX Pakistan an IT or software company?', a: 'No. BricketX Pakistan is the in-house execution hub for the BricketX group. Technology is one of five departments, alongside Marketing, Operations, Creative and Production.' },
    { q: 'What does the Karachi hub do for BricketX?', a: 'It powers investor experience, digital infrastructure, marketing, production and global coordination for the wider BricketX network.' },
    { q: 'How does BricketX Pakistan fit into the global network?', a: 'It is the execution layer of the group. Pakistan handles operations, Dubai handles management, Kenya handles mining, and the UK/BVI holds the corporate structure.' },
    { q: 'Which departments operate from Pakistan?', a: 'Five departments operate from the Karachi hub: Technology, Marketing, Operations, Creative and Production.' }
  ];

  return (
    <section className="relative z-10 py-[60px] bg-[#151A21] border-y border-[#a5adb6]/20">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
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
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
        >
          {faqs.map((faq, i) => {
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
  );
}