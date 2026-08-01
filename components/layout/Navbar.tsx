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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0E1116]/[0.72] border-b border-[#a5adb6]/20 transition-all">
      <div className="max-w-[1160px] mx-auto px-6">
        <nav className="flex items-center justify-between h-[68px]">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <Image
              src="/logo/logo.png"
              alt="BricketX PK Logo"
              width={160}
              height={45}
              className="h-[48px] w-auto object-contain scale-[1.4] origin-left"
              priority
            />
          </Link>

          <div className="hidden md:flex gap-[30px] text-[14px] font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isActive ? "text-[#c39967]" : "text-[#a5adb6] hover:text-[#c39967]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="hidden md:block font-sans text-[12.5px] tracking-[0.04em] py-[9px] px-[16px] border border-[#a5adb6]/30 rounded-lg text-[#ffffff] transition-all duration-300 hover:border-[#c39967] hover:text-[#c39967] hover:shadow-[0_0_15px_rgba(195,153,103,0.2)]"
          >
            CONTACT &rarr;
          </Link>

          <button
            className="md:hidden text-[#ffffff] hover:text-[#c39967] transition-colors p-2"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-xl leading-none">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </nav>

        {/* Mobile Menu Dropdown Drawer */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#a5adb6]/20 py-4 space-y-3 bg-[#0E1116] px-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#a5adb6] hover:text-[#c39967] text-[15px] font-medium py-1.5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block font-sans text-[12.5px] tracking-[0.04em] py-[9px] px-[16px] border border-[#a5adb6]/30 rounded-lg text-[#ffffff] hover:border-[#c39967] hover:text-[#c39967] transition-all"
              >
                CONTACT &rarr;
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}