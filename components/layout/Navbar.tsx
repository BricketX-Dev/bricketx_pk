"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith("#")) {
      // Handle smooth scroll if clicking a section hash on the home page
      if (pathname === "/") {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/${href}`);
      }
    } else {
      router.push(href);
    }
  };

  const navLinks = [
    { label: "Departments", href: "/departments" },
    { label: "What We Build", href: "/what-we-build" },
    { label: "The Company", href: "/company" },
    { label: "Culture & Careers", href: "/our-culture" },
  ];

  return (
    <>
      {/* 1. FIXED NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-white/5 transition-all">


        {/* Main Navbar */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-[80px] lg:h-[90px]">
            {/* Logo */}
            <Link href="/" className="flex items-center transition-opacity hover:opacity-80 shrink-0">
              <Image
                src="/logo/logo.png"
                alt="BricketX PK Logo"
                width={160}
                height={45}
                className="h-[40px] lg:h-[48px] w-auto object-contain origin-left"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-[36px] text-[15px] font-semibold">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`transition-colors duration-300 flex items-center gap-1 group ${
                      isActive ? "text-[#c39967]" : "text-[#e0e0e0] hover:text-[#c39967]"
                    }`}
                  >
                    {link.label}
                    {/* Tiny dot indicator on hover matching modern designs */}
                    <span className="w-1 h-1 rounded-full bg-[#c39967] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-[1px]"></span>
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-4">
              {/* Search Icon Button */}
              <button className="w-[44px] h-[44px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#c39967] hover:text-[#212121] hover:border-[#c39967] transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>

              {/* Design-Matched Contact Button */}
              <Link
                href="/contact"
                className="group flex items-center gap-3 bg-[#c39967] text-[#212121] font-bold text-[15px] py-1.5 pl-6 pr-1.5 rounded-full hover:bg-[#d4a873] transition-all duration-300 hover:shadow-[0_4px_15px_rgba(195,153,103,0.25)]"
              >
                Contact
                <span className="w-[34px] h-[34px] rounded-full bg-[#212121] text-[#c39967] flex items-center justify-center transform group-hover:-rotate-45 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m-7-7l7 7-7 7"></path></svg>
                </span>
              </Link>

              {/* Grid Menu Icon (Optional extra design element, currently toggles mobile menu) */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-[44px] h-[44px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 ml-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>

            {/* Standard Mobile Menu Toggle (Visible only on small screens without the grid icon) */}
            <button
              className="md:hidden w-[40px] h-[40px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#c39967] transition-colors"
              aria-label="Toggle Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path></svg>
              )}
            </button>
          </nav>

          {/* Mobile Menu Dropdown Drawer */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-[400px] opacity-100 py-4 border-t border-white/10" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col space-y-4 px-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-[16px] font-medium transition-colors ${
                      isActive ? "text-[#c39967]" : "text-[#a5adb6] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-white/5 pb-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center gap-3 bg-[#c39967] text-[#212121] font-bold text-[14px] py-1.5 pl-5 pr-1.5 rounded-full hover:bg-[#d4a873] transition-all"
                >
                  Contact
                  <span className="w-[28px] h-[28px] rounded-full bg-[#212121] text-[#c39967] flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m-7-7l7 7-7 7"></path></svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <div className="h-[80px] lg:h-[90px] w-full bg-transparent pointer-events-none" />
    </>
  );
}