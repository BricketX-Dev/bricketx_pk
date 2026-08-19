"use client";

import { motion } from "framer-motion";

export default function CultureCareers() {
  const easePremium = [0.16, 1, 0.3, 1] as const;
  
  const cultureList = ['Educate first', 'Innovate continuously', 'Operate with excellence', 'Think globally, build for scale', 'Never stop learning'];
  const careersList = ['Developers', 'UI/UX', 'Designers', 'Marketing', 'AI', 'Operations', 'Production', 'Management'];

  return (
    <section id="culture" className="relative z-10 py-[100px] bg-transparent border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Culture - Swoops from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -120, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: easePremium }}
            style={{ perspective: 1000 }}
            className="bg-[#121212]/80 backdrop-blur-md border border-white/5 rounded-[24px] p-[40px] md:p-[56px] hover:border-[#c39967]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] group"
          >
            <span className="font-sans font-bold text-[12px] tracking-[0.2em] uppercase text-[#c39967] mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#c39967]/60"></span>
              Our Culture
            </span>
            <h2 className="font-heading font-semibold text-[36px] md:text-[44px] text-white mb-10 group-hover:text-[#c39967] transition-colors">How We <span className="text-[#c39967] group-hover:text-white transition-colors">Think.</span></h2>
            
            <div className="flex flex-col gap-5 overflow-hidden py-2">
              {cultureList.map((val, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + (i * 0.1), ease: easePremium }}
                  className="font-sans text-[17px] md:text-[19px] text-[#a5adb6] flex items-center gap-4 group/item hover:translate-x-2 hover:text-white transition-all duration-300 cursor-default"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-[#c39967] text-[13px] font-bold group-hover/item:bg-[#c39967] group-hover/item:border-[#c39967] group-hover/item:text-[#212121] transition-colors">
                    0{i + 1}
                  </span>
                  {val}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Careers - Swoops from Right */}
          <motion.div 
            initial={{ opacity: 0, x: 120, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: easePremium }}
            style={{ perspective: 1000 }}
            className="bg-gradient-to-br from-[#151515] to-[#1a1a1a] border border-white/5 rounded-[24px] p-[40px] md:p-[56px] hover:border-[#c39967]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c39967]/10 blur-[100px] rounded-full group-hover:bg-[#c39967]/20 transition-colors duration-500" />
            <div className="relative z-10">
              <span className="font-sans font-bold text-[12px] tracking-[0.2em] uppercase text-[#c39967] mb-6 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#c39967]/60"></span>
                Careers
              </span>
              <h2 className="font-heading font-semibold text-[36px] md:text-[44px] text-white mb-6 group-hover:text-white transition-colors leading-[1.1]">
                Join The Team Building The Future Of <span className="text-[#c39967]">Alternative Investments.</span>
              </h2>
              <p className="text-[#a5adb6] text-[17px] md:text-[19px] mb-10">We hire across every department in the hub.</p>
              
              <div className="flex flex-wrap gap-3 overflow-hidden p-1">
                {careersList.map((role, i) => (
                  <motion.a 
                    key={i} 
                    href="#" 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + (i * 0.08), ease: easePremium }}
                    className="font-sans font-medium text-[14px] py-[10px] px-[20px] bg-white/5 border border-white/10 rounded-full text-[#a5adb6] transition-all duration-300 hover:border-[#c39967] hover:text-white hover:bg-[#c39967]/20 hover:-translate-y-1 shadow-sm block"
                  >
                    {role}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}