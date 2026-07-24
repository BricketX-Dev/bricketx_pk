"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    
    // If we are already on the home page, smoothly scroll to the section
    if (pathname === "/") {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If we are on another page, route to the home page with the hash
      router.push(`/${id}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0E1116]/[0.72] border-b border-[#a5adb6]/20 transition-all">
      <div className="max-w-[1160px] mx-auto px-6">
        <nav className="flex items-center justify-between h-[68px]">
          
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <Image 
                src="/logo/logo.png" 
                alt="BricketX PK Logo" 
                width={160} 
                height={45} 
                // 1. Increased base height to 48px
                // 2. Added scale-[1.4] to zoom in by 40%
                // 3. Added origin-left so it scales outward to the right, keeping it aligned with the container edge
                className="h-[48px] w-auto object-contain scale-[1.4] origin-left" 
                priority 
            />
            </Link>
          
          <div className="hidden md:flex gap-[30px] text-[14px] text-[#a5adb6] font-medium">
            <button onClick={() => handleNavClick('#departments')} className="transition-colors hover:text-[#c39967]">Departments</button>
            <button onClick={() => handleNavClick('#build')} className="transition-colors hover:text-[#c39967]">What We Build</button>
            <button onClick={() => handleNavClick('#company')} className="transition-colors hover:text-[#c39967]">The Company</button>
            <button onClick={() => handleNavClick('#culture')} className="transition-colors hover:text-[#c39967]">Culture & Careers</button>
          </div>
          
          <button 
            onClick={() => handleNavClick('#contact')} 
            className="hidden md:block font-sans text-[12.5px] tracking-[0.04em] py-[9px] px-[16px] border border-[#a5adb6]/30 rounded-lg text-[#ffffff] transition-all duration-300 hover:border-[#c39967] hover:text-[#c39967] hover:shadow-[0_0_15px_rgba(195,153,103,0.2)]"
          >
            CONTACT &rarr;
          </button>
          
          <button 
            className="md:hidden text-[#ffffff] hover:text-[#c39967] transition-colors" 
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776;
          </button>
        </nav>

        {/* Optional: Add mobile menu dropdown here if you plan to implement the open state UI */}
      </div>
    </header>
  );
}