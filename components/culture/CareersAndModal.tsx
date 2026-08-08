"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { X, UploadCloud, CheckCircle2, ChevronDown } from "lucide-react";

const roles = ["Developers", "UI/UX", "Designers", "Marketing", "AI", "Operations", "Production", "Management"];
const experienceLevels = ["Beginner", "Intermediate", "Expert"];

// Custom Dropdown Component
const CustomDropdown = ({ 
  value, 
  onChange, 
  options, 
  placeholder 
}: { 
  value: string, 
  onChange: (val: string) => void, 
  options: string[], 
  placeholder: string 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-[#151A21] border ${isOpen ? 'border-[#c39967] ring-1 ring-[#c39967]/40 shadow-[0_0_20px_rgba(195,153,103,0.15)]' : 'border-[#252D38] hover:border-[#313B48] hover:bg-[#1A2028]'} rounded-[10px] px-[16px] py-[13px] flex items-center justify-between cursor-pointer transition-all duration-300 ease-out`}
      >
        <span className={`font-sans text-[15px] ${value ? 'text-[#E7EAF0]' : 'text-[#5C6577]'}`}>
          {value || placeholder}
        </span>
        <ChevronDown className={`w-[16px] h-[16px] transition-transform duration-300 ${isOpen ? 'text-[#c39967] rotate-180' : 'text-[#8B95A6]'}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 top-[calc(100%+8px)] left-0 w-full bg-[#151A21] border border-[#313B48] shadow-[0_15px_40px_rgba(0,0,0,0.8)] rounded-[10px] overflow-hidden py-[8px]"
          >
            {options.map((option, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`px-[16px] py-[10px] font-sans text-[14.5px] cursor-pointer transition-colors duration-200 ${value === option ? 'bg-[#c39967]/10 text-[#c39967] font-medium' : 'text-[#E7EAF0] hover:bg-[#252D38] hover:text-[#c39967]'}`}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CareersAndModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState(""); 

  const openModal = (role: string) => {
    setSelectedRole(role);
    setExperienceLevel("");
    setIsSubmitted(false);
    setFileName("");
    setFileError("");
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError(""); 
    
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFileError("File too large. Maximum size is 5MB.");
        e.target.value = '';
        setFileName('');
      } else {
        setFileName(file.name);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) {
      alert("Please select a department.");
      return;
    }
    if (!experienceLevel) {
      alert("Please select an experience level.");
      return;
    }
    if (fileError) {
      return; 
    }
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
                Join The Team Building The Future Of Alternative Investments
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

      {/* Professional Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#06080b]/80 flex items-center justify-center p-[16px] sm:p-[40px] perspective-[1000px]"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40, rotateX: 5, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, y: 20, rotateX: -2, filter: "blur(4px)" }}
              transition={{ type: "spring", damping: 28, stiffness: 220, mass: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0E1116] border border-[#252D38] shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(195,153,103,0.05)] rounded-[20px] max-w-[880px] w-full relative flex flex-col max-h-[70vh] overflow-hidden"
            >
              {/* Dynamic top edge highlight */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#c39967]/70 to-transparent shadow-[0_0_10px_rgba(195,153,103,0.5)]" />

              {/* Enhanced Professional Header */}
              <div className="flex items-center justify-between p-[28px_32px] border-b border-[#252D38] bg-[#0E1116] shrink-0 z-10 relative overflow-hidden">
                {/* Decorative ambient glow */}
                <div className="absolute top-[-50px] left-[-50px] w-[180px] h-[180px] bg-[#c39967]/15 blur-[60px] rounded-full pointer-events-none" />
                
                <div className="relative z-10">
                  <motion.h3 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="font-heading font-semibold text-[24px] tracking-tight flex items-center gap-[6px]"
                  >
                    {!isSubmitted ? (
                      <>
                        <span className="text-[#E7EAF0]">Apply To</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c39967] via-[#e8c89c] to-[#c39967] drop-shadow-[0_0_15px_rgba(195,153,103,0.3)]">
                          BricketX
                        </span>
                      </>
                    ) : (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c39967] to-[#e8c89c]">Application Received</span>
                    )}
                  </motion.h3>
                  
                  {!isSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="flex items-center gap-[8px] font-sans text-[11px] font-medium uppercase tracking-[0.2em] mt-[8px]"
                    >
                      <span className="relative flex h-[6px] w-[6px]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c39967] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-[#c39967]"></span>
                      </span>
                      <span className="text-[#c39967]">Karachi Hub</span>
                      <span className="text-[#313B48] px-[2px]">|</span>
                      <span className="text-[#8B95A6]">Engine Room</span>
                    </motion.div>
                  )}
                </div>
                
                <motion.button 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  onClick={closeModal} 
                  className="w-[38px] h-[38px] rounded-full bg-[#151A21] border border-[#252D38] text-[#8B95A6] flex items-center justify-center transition-all duration-300 hover:border-[#c39967] hover:text-[#c39967] hover:bg-[#c39967]/10 hover:rotate-90 hover:scale-110 relative z-10 shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
                >
                  <X className="w-[18px] h-[18px]" />
                </motion.button>
              </div>

              {/* Scrollable Body with Custom Styled Webkit Scrollbar */}
              <div className="p-[32px] overflow-y-auto [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#252D38] [&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-[#0E1116] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#313B48] transition-all">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-[24px] gap-y-[24px]">
                    
                    {/* Department Dropdown */}
                    <div className="sm:col-span-2 group">
                      <label className="block font-sans font-medium text-[11px] tracking-[0.08em] uppercase text-[#8B95A6] mb-[8px] transition-colors duration-300 group-focus-within:text-[#c39967]">Department <span className="text-[#c39967]">*</span></label>
                      <CustomDropdown 
                        options={roles}
                        value={selectedRole}
                        onChange={setSelectedRole}
                        placeholder="Select a department"
                      />
                    </div>

                    <div className="group">
                      <label className="block font-sans font-medium text-[11px] tracking-[0.08em] uppercase text-[#8B95A6] mb-[8px] transition-colors duration-300 group-focus-within:text-[#c39967]">Full Name <span className="text-[#c39967]">*</span></label>
                      <input required type="text" placeholder="John Doe" className="w-full bg-[#151A21] border border-[#252D38] rounded-[10px] px-[16px] py-[12px] text-[#E7EAF0] font-sans text-[15px] placeholder:text-[#5C6577] transition-all duration-300 ease-out hover:border-[#313B48] hover:bg-[#1A2028] focus:outline-none focus:border-[#c39967] focus:ring-1 focus:ring-[#c39967]/40 focus:bg-[#0E1116] focus:shadow-[0_0_20px_rgba(195,153,103,0.15)]" />
                    </div>
                    
                    <div className="group">
                      <label className="block font-sans font-medium text-[11px] tracking-[0.08em] uppercase text-[#8B95A6] mb-[8px] transition-colors duration-300 group-focus-within:text-[#c39967]">Email <span className="text-[#c39967]">*</span></label>
                      <input required type="email" placeholder="you@example.com" className="w-full bg-[#151A21] border border-[#252D38] rounded-[10px] px-[16px] py-[12px] text-[#E7EAF0] font-sans text-[15px] placeholder:text-[#5C6577] transition-all duration-300 ease-out hover:border-[#313B48] hover:bg-[#1A2028] focus:outline-none focus:border-[#c39967] focus:ring-1 focus:ring-[#c39967]/40 focus:bg-[#0E1116] focus:shadow-[0_0_20px_rgba(195,153,103,0.15)]" />
                    </div>

                    <div className="group">
                      <label className="block font-sans font-medium text-[11px] tracking-[0.08em] uppercase text-[#8B95A6] mb-[8px] transition-colors duration-300 group-focus-within:text-[#c39967]">Phone <span className="text-[#c39967]">*</span></label>
                      <input required type="tel" placeholder="+92 3xx xxxxxxx" className="w-full bg-[#151A21] border border-[#252D38] rounded-[10px] px-[16px] py-[12px] text-[#E7EAF0] font-sans text-[15px] placeholder:text-[#5C6577] transition-all duration-300 ease-out hover:border-[#313B48] hover:bg-[#1A2028] focus:outline-none focus:border-[#c39967] focus:ring-1 focus:ring-[#c39967]/40 focus:bg-[#0E1116] focus:shadow-[0_0_20px_rgba(195,153,103,0.15)]" />
                    </div>

                    <div className="group">
                      <label className="block font-sans font-medium text-[11px] tracking-[0.08em] uppercase text-[#8B95A6] mb-[8px] transition-colors duration-300 group-focus-within:text-[#c39967]">Portfolio / LinkedIn</label>
                      <input type="url" placeholder="https://" className="w-full bg-[#151A21] border border-[#252D38] rounded-[10px] px-[16px] py-[12px] text-[#E7EAF0] font-sans text-[15px] placeholder:text-[#5C6577] transition-all duration-300 ease-out hover:border-[#313B48] hover:bg-[#1A2028] focus:outline-none focus:border-[#c39967] focus:ring-1 focus:ring-[#c39967]/40 focus:bg-[#0E1116] focus:shadow-[0_0_20px_rgba(195,153,103,0.15)]" />
                    </div>

                    {/* Custom Experience Dropdown */}
                    <div className="group">
                      <label className="block font-sans font-medium text-[11px] tracking-[0.08em] uppercase text-[#8B95A6] mb-[8px] transition-colors duration-300 group-focus-within:text-[#c39967]">Experience Level <span className="text-[#c39967]">*</span></label>
                      <CustomDropdown 
                        options={experienceLevels}
                        value={experienceLevel}
                        onChange={setExperienceLevel}
                        placeholder="Select level"
                      />
                    </div>

                    {/* Number input with hidden spin buttons */}
                    <div className="group">
                      <label className="block font-sans font-medium text-[11px] tracking-[0.08em] uppercase text-[#8B95A6] mb-[8px] transition-colors duration-300 group-focus-within:text-[#c39967]">Years of Experience</label>
                      <input 
                        type="number" 
                        min="0" 
                        max="50" 
                        placeholder="e.g. 3" 
                        className="w-full bg-[#151A21] border border-[#252D38] rounded-[10px] px-[16px] py-[12px] text-[#E7EAF0] font-sans text-[15px] placeholder:text-[#5C6577] transition-all duration-300 ease-out hover:border-[#313B48] hover:bg-[#1A2028] focus:outline-none focus:border-[#c39967] focus:ring-1 focus:ring-[#c39967]/40 focus:bg-[#0E1116] focus:shadow-[0_0_20px_rgba(195,153,103,0.15)] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]" 
                      />
                    </div>

                    {/* Professional File Upload with Inline Error */}
                    <div className="sm:col-span-2 group">
                      <label className="block font-sans font-medium text-[11px] tracking-[0.08em] uppercase text-[#8B95A6] mb-[8px] transition-colors duration-300 group-focus-within:text-[#c39967]">Resume / CV <span className="text-[#c39967]">*</span></label>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-[16px]">
                          <label className={`relative overflow-hidden flex items-center justify-center gap-[8px] cursor-pointer bg-[#1B222B] hover:bg-[#252D38] focus-within:bg-[#252D38] focus-within:border-[#c39967] focus-within:ring-1 focus-within:ring-[#c39967]/40 border ${fileError ? 'border-red-500/50' : 'border-[#313B48]'} text-[#E7EAF0] font-sans font-medium text-[13px] px-[20px] py-[10px] rounded-[8px] transition-all duration-300 shadow-sm`}>
                            <UploadCloud className={`w-[16px] h-[16px] ${fileError ? 'text-red-400' : 'text-[#c39967]'}`} />
                            Choose File
                            <input type="file" accept=".pdf,.doc,.docx" required className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileChange} />
                          </label>
                          <span className={`font-sans text-[14px] truncate max-w-[300px] transition-colors duration-300 ${fileError ? 'text-red-400' : 'text-[#8B95A6] group-focus-within:text-[#E7EAF0]'}`}>
                            {fileName ? (
                              <span className="text-[#E7EAF0] flex items-center gap-2">
                                <CheckCircle2 className="w-[14px] h-[14px] text-[#c39967]" />
                                {fileName}
                              </span>
                            ) : (
                              "No file chosen (PDF, DOC max 5MB)"
                            )}
                          </span>
                        </div>
                        {/* Smooth Inline Error Message */}
                        <AnimatePresence>
                          {fileError && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }} 
                              animate={{ opacity: 1, height: 'auto' }} 
                              exit={{ opacity: 0, height: 0 }} 
                              className="text-red-400 font-sans text-[13px] pt-1"
                            >
                              {fileError}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="sm:col-span-2 group">
                      <label className="block font-sans font-medium text-[11px] tracking-[0.08em] uppercase text-[#8B95A6] mb-[8px] transition-colors duration-300 group-focus-within:text-[#c39967]">Why BricketX?</label>
                      <textarea placeholder="Tell us why you're a great fit for the engine room... (optional)" className="w-full bg-[#151A21] border border-[#252D38] rounded-[10px] px-[16px] py-[16px] text-[#E7EAF0] font-sans text-[15px] placeholder:text-[#5C6577] transition-all duration-300 ease-out hover:border-[#313B48] hover:bg-[#1A2028] focus:outline-none focus:border-[#c39967] focus:ring-1 focus:ring-[#c39967]/40 focus:bg-[#0E1116] focus:shadow-[0_0_20px_rgba(195,153,103,0.15)] min-h-[100px] resize-y" />
                    </div>

                    {/* Footer / Submit Area */}
                    <div className="sm:col-span-2 flex flex-col-reverse sm:flex-row items-center justify-between gap-[20px] mt-[12px] pt-[24px] border-t border-[#252D38]">
                      <p className="font-sans text-[12px] text-[#5C6577] leading-[1.6] max-w-[400px] text-center sm:text-left">
                        By applying you agree that BricketX Pakistan may store and process your details for recruitment purposes.
                      </p>

                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit" 
                        className="w-full sm:w-auto flex-shrink-0 font-heading font-medium text-[15px] px-[32px] py-[14px] rounded-[8px] bg-[#c39967] text-[#1a1206] transition-colors hover:bg-[#d4ac74] shadow-[0_4px_20px_rgba(195,153,103,0.25)] hover:shadow-[0_6px_25px_rgba(195,153,103,0.4)]"
                      >
                        Submit Application
                      </motion.button>
                    </div>

                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
                    className="text-center py-[80px]"
                  >
                    <motion.div 
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", bounce: 0.6, delay: 0.1 }}
                      className="w-[72px] h-[72px] rounded-full border-[2px] border-[#c39967]/30 bg-[#c39967]/10 text-[#c39967] flex items-center justify-center mx-auto mb-[24px] shadow-[0_0_40px_rgba(195,153,103,0.2)]"
                    >
                      <CheckCircle2 className="w-[32px] h-[32px]" />
                    </motion.div>
                    <h3 className="font-heading font-semibold text-[26px] text-[#E7EAF0] mb-[12px]">Application Received</h3>
                    <p className="font-sans text-[#8B95A6] text-[16px] max-w-[420px] mx-auto leading-relaxed">
                      Thanks for applying for the <b className="text-[#c39967] font-medium">{selectedRole}</b> department. Our team will review your details and reach out if there's a fit.
                    </p>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={closeModal}
                      className="mt-[40px] font-sans font-medium text-[14px] text-[#c39967] border border-[#c39967]/30 px-[28px] py-[12px] rounded-[8px] hover:bg-[#c39967]/10 hover:border-[#c39967]/60 transition-all duration-300"
                    >
                      Close Window
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}