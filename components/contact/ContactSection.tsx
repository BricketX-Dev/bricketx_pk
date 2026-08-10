"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { submitLeadAction } from "@/app/actions/submit-lead"; // Adjust path if needed

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    // Call the Server Action
    const result = await submitLeadAction(formData);

    if (result.success) {
      setIsSubmitted(true);
    } else {
      setErrorMsg("Something went wrong. Please try again.");
    }
    
    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const isFloat = (id: keyof typeof formData) => focusedField === id || formData[id].length > 0;

  return (
    <section className="relative z-10 min-h-[calc(100vh-68px)] flex items-center py-[80px] overflow-hidden">
      {/* High-End Ambient Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-br from-[#c39967]/10 to-transparent rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-[#c39967]/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="max-w-[1160px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[60px] lg:gap-[100px] items-center">
          
          {/* ================= LEFT SIDE: COPY & INFO ================= */}
          {/* ... [Your exact left side code remains unchanged here] ... */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-[540px]"
          >
            <motion.span variants={fadeUp} className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
              Get In Touch
            </motion.span>
            
            <motion.h1 variants={fadeUp} className="font-heading font-semibold text-[clamp(42px,5vw,60px)] leading-[1.08] tracking-[-0.02em] mt-[20px] mb-[24px] text-[#E7EAF0]">
              Let's build the <br />
              <span className="text-[#c39967] drop-shadow-[0_0_25px_rgba(195,153,103,0.25)]">next system</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="font-sans text-[#8B95A6] text-[18px] leading-relaxed mb-[56px] max-w-[480px]">
              Whether you're looking to partner with the operational hub, integrate our infrastructure, or join the team, the engine room is open. 
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-[40px]">
              <div className="group">
                <div className="font-sans font-medium text-[11px] tracking-[0.12em] uppercase text-[#5C6577] mb-[10px]">Direct Email</div>
                <a href="mailto:Info@bricketx.pk" className="inline-flex items-center gap-[12px] font-heading font-medium text-[22px] text-[#E7EAF0] group-hover:text-[#c39967] transition-colors duration-300">
                  Info@bricketx.pk
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">&rarr;</span>
                </a>
              </div>
              
              <div className="relative pl-[20px] border-l border-[#313B48]">
                <div className="absolute left-[-5px] top-[4px] w-[9px] h-[9px] rounded-full bg-[#c39967] shadow-[0_0_12px_rgba(195,153,103,0.8)]">
                  <div className="absolute inset-0 rounded-full bg-[#c39967] animate-ping opacity-75"></div>
                </div>
                <div className="font-sans font-medium text-[11px] tracking-[0.12em] uppercase text-[#5C6577] mb-[8px]">The Hub</div>
                <div className="font-heading font-medium text-[22px] text-[#E7EAF0] mb-[4px]">
                  Karachi, Pakistan
                </div>
                <div className="font-sans text-[15px] text-[#8B95A6]">
                  Operations & Innovation Center
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE: HIGH-END FORM CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative bg-gradient-to-b from-[#131820] to-[#0E1116] border border-[#2A3340] shadow-[0_30px_80px_rgba(0,0,0,0.5)] rounded-[28px] p-[32px] sm:p-[48px] overflow-hidden">
              
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#c39967]/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#ffffff]/5 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c39967]/5 via-transparent to-transparent pointer-events-none" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleSubmit} 
                    className="relative z-10 space-y-[24px]"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                      
                      {/* --- NAME INPUT --- */}
                      <div className="relative w-full group">
                        <div className={`absolute inset-0 rounded-[12px] bg-gradient-to-b from-[#c39967]/20 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none ${focusedField === 'name' ? 'opacity-100' : ''}`} style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                        <label 
                          htmlFor="name" 
                          className={`absolute left-[20px] font-sans font-medium tracking-[0.05em] uppercase pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-10
                            ${isFloat('name') ? 'top-[12px] text-[10px] text-[#c39967]' : 'top-[22px] text-[13px] text-[#5C6577] group-hover:text-[#8B95A6]'}`}
                        >
                          Name <span className="text-[#c39967]">*</span>
                        </label>
                        <input 
                          required 
                          type="text" 
                          id="name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="block w-full h-[64px] rounded-[12px] border border-[#252D38] bg-[#0A0C10] px-[20px] pb-[10px] pt-[26px] text-[16px] font-sans text-[#E7EAF0] focus:border-[#c39967]/50 focus:bg-[#0E1116] focus:outline-none focus:shadow-[0_0_25px_rgba(195,153,103,0.08)] transition-all duration-300" 
                        />
                      </div>

                      {/* --- CONTACT NO INPUT --- */}
                      <div className="relative w-full group">
                        <div className={`absolute inset-0 rounded-[12px] bg-gradient-to-b from-[#c39967]/20 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none ${focusedField === 'contact' ? 'opacity-100' : ''}`} style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                        <label 
                          htmlFor="contact" 
                          className={`absolute left-[20px] font-sans font-medium tracking-[0.05em] uppercase pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-10
                            ${isFloat('contact') ? 'top-[12px] text-[10px] text-[#c39967]' : 'top-[22px] text-[13px] text-[#5C6577] group-hover:text-[#8B95A6]'}`}
                        >
                          Contact No <span className="text-[#c39967]">*</span>
                        </label>
                        <input 
                          required 
                          type="tel" 
                          id="contact" 
                          value={formData.contact}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('contact')}
                          onBlur={() => setFocusedField(null)}
                          className="block w-full h-[64px] rounded-[12px] border border-[#252D38] bg-[#0A0C10] px-[20px] pb-[10px] pt-[26px] text-[16px] font-sans text-[#E7EAF0] focus:border-[#c39967]/50 focus:bg-[#0E1116] focus:outline-none focus:shadow-[0_0_25px_rgba(195,153,103,0.08)] transition-all duration-300" 
                        />
                      </div>
                    </div>

                    {/* --- EMAIL INPUT --- */}
                    <div className="relative w-full group">
                      <div className={`absolute inset-0 rounded-[12px] bg-gradient-to-b from-[#c39967]/20 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none ${focusedField === 'email' ? 'opacity-100' : ''}`} style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                      <label 
                        htmlFor="email" 
                        className={`absolute left-[20px] font-sans font-medium tracking-[0.05em] uppercase pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-10
                          ${isFloat('email') ? 'top-[12px] text-[10px] text-[#c39967]' : 'top-[22px] text-[13px] text-[#5C6577] group-hover:text-[#8B95A6]'}`}
                      >
                        Email Address <span className="text-[#c39967]">*</span>
                      </label>
                      <input 
                        required 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="block w-full h-[64px] rounded-[12px] border border-[#252D38] bg-[#0A0C10] px-[20px] pb-[10px] pt-[26px] text-[16px] font-sans text-[#E7EAF0] focus:border-[#c39967]/50 focus:bg-[#0E1116] focus:outline-none focus:shadow-[0_0_25px_rgba(195,153,103,0.08)] transition-all duration-300" 
                      />
                    </div>

                    {/* --- MESSAGE TEXTAREA --- */}
                    <div className="relative w-full group">
                      <div className={`absolute inset-0 rounded-[12px] bg-gradient-to-b from-[#c39967]/20 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none ${focusedField === 'message' ? 'opacity-100' : ''}`} style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                      <label 
                        htmlFor="message" 
                        className={`absolute left-[20px] font-sans font-medium tracking-[0.05em] uppercase pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-10
                          ${isFloat('message') ? 'top-[14px] text-[10px] text-[#c39967]' : 'top-[24px] text-[13px] text-[#5C6577] group-hover:text-[#8B95A6]'}`}
                      >
                        Message <span className="text-[#5C6577] tracking-normal normal-case ml-[4px] capitalize">(Optional)</span>
                      </label>
                      <textarea 
                        id="message" 
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="block w-full min-h-[140px] rounded-[12px] border border-[#252D38] bg-[#0A0C10] px-[20px] pb-[16px] pt-[36px] text-[16px] font-sans text-[#E7EAF0] focus:border-[#c39967]/50 focus:bg-[#0E1116] focus:outline-none focus:shadow-[0_0_25px_rgba(195,153,103,0.08)] transition-all duration-300 resize-y" 
                      />
                    </div>

                    {errorMsg && (
                      <div className="text-red-500 text-sm font-sans">{errorMsg}</div>
                    )}

                    {/* --- SUBMIT BUTTON --- */}
                    <div className="pt-[8px]">
                      <motion.button 
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit" 
                        disabled={isLoading}
                        className="relative w-full overflow-hidden font-heading font-semibold text-[16px] p-[18px_32px] rounded-[12px] bg-[#c39967] text-[#1a1206] transition-all shadow-[0_0_20px_rgba(195,153,103,0.15)] hover:shadow-[0_0_35px_rgba(195,153,103,0.35)] flex justify-center items-center gap-[12px] group disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1s] ease-in-out" />
                        <span className="relative z-10">{isLoading ? "Sending..." : "Send Message"}</span>
                        {!isLoading && (
                          <svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  
                  /* ================= SUCCESS STATE ================= */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
                    className="text-center py-[70px] relative z-10"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                      className="w-[80px] h-[80px] rounded-full border-[3px] border-[#c39967] text-[#c39967] flex items-center justify-center text-[36px] mx-auto mb-[28px] shadow-[0_0_50px_rgba(195,153,103,0.25)] bg-gradient-to-b from-[#c39967]/10 to-transparent"
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                    <h3 className="font-heading font-semibold text-[32px] text-[#E7EAF0] mb-[12px] tracking-tight">Message Sent</h3>
                    <p className="font-sans text-[#8B95A6] text-[17px] max-w-[340px] mx-auto leading-relaxed">
                      Thank you for reaching out to the hub. Our team will review your message and connect with you shortly.
                    </p>
                    <button 
                      onClick={() => {
                        setFormData({ name: "", contact: "", email: "", message: "" });
                        setIsSubmitted(false);
                      }}
                      className="mt-[40px] font-sans font-medium text-[14px] text-[#c39967] hover:text-[#E7EAF0] transition-colors border-b border-[#c39967]/30 hover:border-[#E7EAF0]/50 pb-1"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}