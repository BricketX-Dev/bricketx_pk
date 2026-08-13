"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "./animations";

export default function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: 'What is BricketX Pakistan?', 
      a: 'BricketX Pakistan is the operational and innovation hub of the BricketX network, based in Karachi. It builds the technology, runs the operations, and produces the work behind the group\'s Shariah-compliant investment platform.' 
    },
    { 
      q: 'Is BricketX Pakistan an IT or software company?', 
      a: 'No. BricketX Pakistan is the in-house execution hub for the BricketX group. Technology is one of five core departments, working alongside Marketing, Operations, Creative, and Production.' 
    },
    { 
      q: 'What does the Karachi hub do for BricketX?', 
      a: 'It acts as the engine room. It powers the investor experience, digital infrastructure, marketing funnels, production, and global coordination for the entire BricketX network.' 
    },
    { 
      q: 'How does BricketX Pakistan fit into the global network?', 
      a: 'It is the execution layer of the group. Pakistan handles operations, Dubai handles management, Kenya handles physical gold and precious metal mining, and the UK/BVI holds the corporate structure and governance.' 
    },
    { 
      q: 'Which departments operate from Pakistan?', 
      a: 'Five dedicated departments operate from the Karachi hub: Technology, Marketing, Operations, Creative, and Production.' 
    }
  ];

  return (
    <section className="relative z-10 py-[100px] lg:py-[130px] bg-[#121212] border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          
          {/* Left Column: Heading & Visuals */}
          <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col items-start relative lg:sticky lg:top-[120px]">
            <span className="font-sans font-bold text-[12px] tracking-[0.2em] uppercase text-[#c39967] mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#c39967]"></span>
              Common Questions
            </span>
            
            <h2 className="font-heading font-semibold text-[38px] md:text-[52px] leading-[1.1] text-white mb-6">
              Frequently <br />
              <span className="text-[#c39967]">Asked Questions.</span>
            </h2>
            
            <p className="text-[#a5adb6] text-[17px] leading-[1.7] mb-10 max-w-[440px]">
              Everything you need to know about how the BricketX Karachi hub operates, builds, and scales the global network.
            </p>

            {/* Visual Image Block */}
            <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10 group">
              <Image 
                src="/dummy-image.jpg" 
                alt="BricketX Team Collaboration" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
              
              {/* Floating Contact Card inside Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 rounded-[16px] p-5 flex items-center justify-between">
                <div>
                  <div className="text-white font-bold text-[15px] mb-1">Still have questions?</div>
                  <div className="text-[#a5adb6] text-[13px]">Reach out to our support team.</div>
                </div>
                <a href="mailto:hello@bricketx.pk" className="w-10 h-10 rounded-full bg-[#c39967] text-[#212121] flex items-center justify-center hover:bg-white transition-colors duration-300">
                  <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m-7-7l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Accordion */}
          <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              
              return (
                <div 
                  key={i} 
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className={`border rounded-[20px] bg-[#151515] overflow-hidden transition-all duration-300 group cursor-pointer ${
                    isOpen 
                      ? 'border-[#c39967]/50 shadow-[0_10px_30px_rgba(195,153,103,0.1)]' 
                      : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  {/* Question Header */}
                  <div className="p-6 md:p-8 flex justify-between items-center gap-6">
                    <h3 className={`font-heading text-[18px] md:text-[22px] font-semibold leading-[1.3] transition-colors duration-300 ${
                      isOpen ? 'text-[#c39967]' : 'text-white group-hover:text-[#c39967]'
                    }`}>
                      {faq.q}
                    </h3>
                    
                    {/* Animated Toggle Icon */}
                    <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isOpen 
                        ? 'border-[#c39967] bg-[#c39967] text-[#212121]' 
                        : 'border-white/10 bg-white/5 text-white group-hover:border-[#c39967]/50 group-hover:text-[#c39967]'
                    }`}>
                      <motion.svg 
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </motion.svg>
                    </div>
                  </div>
                  
                  {/* Answer Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-0">
                          <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent mb-6" />
                          <p className="text-[#a5adb6] text-[16px] leading-[1.7] max-w-[90%]">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}