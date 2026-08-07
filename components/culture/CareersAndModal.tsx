"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const roles = ["Developers", "UI/UX", "Designers", "Marketing", "AI", "Operations", "Production", "Management"];

export default function CareersAndModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const openModal = (role: string) => {
    setSelectedRole(role);
    setIsSubmitted(false);
    setFileName("");
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File too large — max 5MB.');
        e.target.value = '';
        setFileName('');
      } else {
        setFileName(file.name);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <section id="careers" className="relative z-10 py-[100px]">
        <div className="max-w-[1160px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="max-w-[640px] mb-[40px]">
              <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
                Careers
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-heading font-semibold text-[clamp(28px,4vw,42px)] text-[#E7EAF0] mt-[14px] mb-[12px]">
                Join the team building the future of alternative investments.
              </motion.h2>
              <motion.p variants={fadeUp} className="font-sans text-[#8B95A6] text-[17px]">
                We hire across every department in the hub. Find the one that fits.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px]">
              {roles.map((role, i) => (
                <motion.button
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openModal(role)}
                  className="bg-[#151A21] border border-[#313B48] rounded-[14px] p-[24px] transition-all duration-300 flex justify-between items-center w-full text-left hover:border-[#c39967] hover:shadow-[0_15px_40px_rgba(195,153,103,0.15)] group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c39967]/0 to-[#c39967]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="font-heading font-semibold text-[17px] text-[#E7EAF0] group-hover:text-[#c39967] transition-colors relative z-10">{role}</h3>
                  <span className="font-sans text-[16px] text-[#c39967] transition-transform duration-300 group-hover:translate-x-2 relative z-10">&rarr;</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal Overlay with Glassmorphism */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] bg-[#06080b]/60 flex items-start justify-center p-[40px_20px] overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#151A21] border border-[#c39967]/30 shadow-[0_0_80px_rgba(195,153,103,0.1)] rounded-[16px] max-w-[560px] w-full relative m-auto overflow-hidden"
            >
              {/* Subtle top edge highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c39967]/50 to-transparent" />

              <button onClick={closeModal} className="absolute top-[20px] right-[20px] w-[34px] h-[34px] rounded-[8px] border border-[#313B48] text-[#8B95A6] flex items-center justify-center text-[18px] transition-all hover:border-[#c39967] hover:text-[#c39967] hover:bg-[#c39967]/10 hover:rotate-90">
                &times;
              </button>

              {!isSubmitted ? (
                <>
                  <div className="p-[26px_28px_18px] border-b border-[#252D38]">
                    <span className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] mb-[8px] inline-block">Apply</span>
                    <h3 className="font-heading font-semibold text-[23px] text-[#E7EAF0]">Apply — {selectedRole}</h3>
                    <div className="font-sans text-[12px] text-[#c39967] tracking-[0.03em] mt-[6px]">{selectedRole} · BricketX Pakistan</div>
                  </div>

                  <div className="p-[24px_28px_28px]">
                    <form onSubmit={handleSubmit} className="space-y-[16px]">
                      <div>
                        <label className="block font-sans font-medium text-[11.5px] tracking-[0.06em] uppercase text-[#8B95A6] mb-[7px]">Full Name <span className="text-[#c39967]">*</span></label>
                        <input required type="text" placeholder="Your full name" className="w-full bg-[#0E1116] border border-[#313B48] rounded-[9px] p-[12px_14px] text-[#E7EAF0] font-sans text-[14.5px] focus:outline-none focus:border-[#c39967] focus:shadow-[0_0_15px_rgba(195,153,103,0.15)] transition-all" />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                        <div>
                          <label className="block font-sans font-medium text-[11.5px] tracking-[0.06em] uppercase text-[#8B95A6] mb-[7px]">Email <span className="text-[#c39967]">*</span></label>
                          <input required type="email" placeholder="you@email.com" className="w-full bg-[#0E1116] border border-[#313B48] rounded-[9px] p-[12px_14px] text-[#E7EAF0] font-sans text-[14.5px] focus:outline-none focus:border-[#c39967] focus:shadow-[0_0_15px_rgba(195,153,103,0.15)] transition-all" />
                        </div>
                        <div>
                          <label className="block font-sans font-medium text-[11.5px] tracking-[0.06em] uppercase text-[#8B95A6] mb-[7px]">Phone <span className="text-[#c39967]">*</span></label>
                          <input required type="tel" placeholder="+92 3xx xxxxxxx" className="w-full bg-[#0E1116] border border-[#313B48] rounded-[9px] p-[12px_14px] text-[#E7EAF0] font-sans text-[14.5px] focus:outline-none focus:border-[#c39967] focus:shadow-[0_0_15px_rgba(195,153,103,0.15)] transition-all" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                        <div>
                          <label className="block font-sans font-medium text-[11.5px] tracking-[0.06em] uppercase text-[#8B95A6] mb-[7px]">Experience Level <span className="text-[#c39967]">*</span></label>
                          <select required defaultValue="" className="w-full bg-[#0E1116] border border-[#313B48] rounded-[9px] p-[12px_14px] text-[#E7EAF0] font-sans text-[14.5px] focus:outline-none focus:border-[#c39967] focus:shadow-[0_0_15px_rgba(195,153,103,0.15)] transition-all appearance-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C6A067' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
                            <option value="" disabled>Select level</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Expert</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-sans font-medium text-[11.5px] tracking-[0.06em] uppercase text-[#8B95A6] mb-[7px]">Years of Experience</label>
                          <input type="number" min="0" max="50" placeholder="e.g. 3" className="w-full bg-[#0E1116] border border-[#313B48] rounded-[9px] p-[12px_14px] text-[#E7EAF0] font-sans text-[14.5px] focus:outline-none focus:border-[#c39967] focus:shadow-[0_0_15px_rgba(195,153,103,0.15)] transition-all" />
                        </div>
                      </div>

                      <div>
                        <label className="block font-sans font-medium text-[11.5px] tracking-[0.06em] uppercase text-[#8B95A6] mb-[7px]">Portfolio / LinkedIn</label>
                        <input type="url" placeholder="https://" className="w-full bg-[#0E1116] border border-[#313B48] rounded-[9px] p-[12px_14px] text-[#E7EAF0] font-sans text-[14.5px] focus:outline-none focus:border-[#c39967] focus:shadow-[0_0_15px_rgba(195,153,103,0.15)] transition-all" />
                      </div>

                      <div>
                        <label className="block font-sans font-medium text-[11.5px] tracking-[0.06em] uppercase text-[#8B95A6] mb-[7px]">Resume / CV <span className="text-[#c39967]">*</span></label>
                        <label className="block border border-dashed border-[#313B48] rounded-[9px] p-[16px] text-center cursor-pointer transition-all hover:border-[#c39967] hover:bg-[#c39967]/5 hover:text-[#E7EAF0] text-[#8B95A6] font-sans text-[13.5px] group">
                          <span className="transition-transform group-hover:scale-105 inline-block"><b className="text-[#c39967] font-medium">Click to upload</b> — PDF, DOC or DOCX (max 5MB)</span>
                          {fileName && <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="font-sans text-[12px] text-[#9AA7BC] mt-[6px]">{fileName}</motion.div>}
                          <input type="file" accept=".pdf,.doc,.docx" required className="hidden" onChange={handleFileChange} />
                        </label>
                      </div>

                      <div>
                        <label className="block font-sans font-medium text-[11.5px] tracking-[0.06em] uppercase text-[#8B95A6] mb-[7px]">Why BricketX?</label>
                        <textarea placeholder="A few lines on why you want to join (optional)" className="w-full bg-[#0E1116] border border-[#313B48] rounded-[9px] p-[12px_14px] text-[#E7EAF0] font-sans text-[14.5px] focus:outline-none focus:border-[#c39967] focus:shadow-[0_0_15px_rgba(195,153,103,0.15)] transition-all min-h-[80px] resize-y" />
                      </div>

                      <p className="font-sans text-[12px] text-[#5C6577] mb-[18px] leading-relaxed mt-[4px]">
                        By applying you agree that BricketX Pakistan may store and process your details for recruitment purposes.
                      </p>

                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit" 
                        className="w-full font-heading font-medium text-[15px] p-[14px_26px] rounded-[10px] bg-[#c39967] text-[#1a1206] transition-colors hover:bg-[#d4ac74] shadow-[0_0_20px_rgba(195,153,103,0.2)]"
                      >
                        Submit Application
                      </motion.button>
                    </form>
                  </div>
                </>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-[48px_28px]"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.6 }}
                    className="w-[64px] h-[64px] rounded-full border-[3px] border-[#c39967] text-[#c39967] flex items-center justify-center text-[32px] mx-auto mb-[20px] shadow-[0_0_30px_rgba(195,153,103,0.3)]"
                  >
                    ✓
                  </motion.div>
                  <h3 className="font-heading font-semibold text-[24px] text-[#E7EAF0] mb-[10px]">Application received</h3>
                  <p className="font-sans text-[#8B95A6] text-[15px] max-w-[400px] mx-auto">
                    Thanks for applying for <b className="text-[#c39967] font-medium">{selectedRole}</b>. Our team will review your details and reach out if there's a fit.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}