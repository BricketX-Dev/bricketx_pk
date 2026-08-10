"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Added Image import
import { motion, Variants } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function LifeAtBricketX() {
  // Enhanced stagger variants for a smoother photo gallery introduction
  const galleryStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, // increased stagger time
        delayChildren: 0.2 // faster start
      }
    }
  };

  const photoFade: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 20 } // smoother spring
    }
  };

  return (
    <section className="relative z-10 py-[100px] bg-[#151A21] border-y border-[#252D38]">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[48px] items-center" // adjusted col ratio and gap
        >
          {/* LEFT CONTENT */}
          <motion.div variants={fadeUp} className="pr-0 lg:pr-10">
            <span className="font-sans font-medium text-[12px] tracking-[0.18em] uppercase text-[#c39967] inline-flex items-center gap-[10px] before:content-[''] before:w-[22px] before:h-[1px] before:bg-[#c39967] before:opacity-70">
              Life at BricketX
            </span>
            <h2 className="font-heading font-semibold text-[clamp(26px,3.5vw,42px)] text-[#E7EAF0] mt-[14px] mb-[16px] leading-[1.2]">
              Real People Real Work<br /> No Stock Photos
            </h2>
            <p className="font-sans text-[#8B95A6] text-[17px] mb-[18px] leading-relaxed">
              Inside the Karachi hub you'll find engineers, designers, marketers and operators building side by side — coding, filming, designing, brainstorming and shipping the systems that run the network.
            </p>
            <p className="font-sans text-[13px] text-[#9AA7BC] border-l-2 border-[#c39967] pl-[14px] py-1 bg-gradient-to-r from-[#c39967]/5 to-transparent">
              This is a working studio, not a portfolio. Every image on this page is our team, our space, our work.
            </p>
            <div className="mt-[32px]">
              <Link
                  href="/contact"
                  className="group font-heading font-medium text-[15px] py-[14px] px-[26px] rounded-[10px] transition-all duration-300 inline-flex items-center gap-[10px] border border-[#313B48] text-[#E7EAF0] hover:border-[#c39967] hover:bg-[#c39967]/10 hover:shadow-[0_0_20px_rgba(195,153,103,0.15)] hover:-translate-y-1"
                >
                  Connect With BricketX
                  <span className="transition-transform duration-300 group-hover:translate-x-1 text-[#c39967]">
                    &rarr;
                  </span>
                </Link>
            </div>
          </motion.div>

          {/* RIGHT GALLERY (replacing boxes) */}
          <motion.div 
            variants={galleryStagger} 
            className="grid grid-cols-12 gap-4 h-[500px]" // grid layout for images
          >
            {/* Primary Image: large, full-height col-7 */}
            <motion.div variants={photoFade} className="col-span-7 relative h-full rounded-[16px] overflow-hidden shadow-2xl">
              <Image 
                src="/images/our-culture/life-at-bricketx.png" 
                alt="BricketX Team Collaboration in Karachi Hub"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-w-768px) 100vw, 40vw"
                priority // Priority loading for the main image
              />
            </motion.div>

            {/* Right Column (col-5) - holds two smaller stacked images */}
            <div className="col-span-5 grid grid-rows-2 gap-4">
              {/* Secondary Image: Upper row */}
              <motion.div variants={photoFade} className="relative rounded-[16px] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/our-culture/life-at-bricketx2.png" 
                  alt="Detailed design work in the BricketX studio"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-w-768px) 100vw, 30vw"
                />
              </motion.div>

              {/* Tertiary Image: Lower row */}
              <motion.div variants={photoFade} className="relative rounded-[16px] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/our-culture/life-at-bricketx3.png" 
                  alt="Video production and filming at BricketX hub"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-w-768px) 100vw, 30vw"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}