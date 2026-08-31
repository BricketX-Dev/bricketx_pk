import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#a5adb6]/20 pt-[48px] pb-[32px] bg-[#0E1116]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-[28px] lg:gap-[40px]">
          <div>
            <Link href="/" className="flex items-center mb-[14px] group">
              <Image
                src="/logo/logo.png"
                alt="BricketX PK Logo"
                width={120}
                height={34}
                className="w-[120px] h-auto object-contain -ml-2 transition-opacity duration-300 group-hover:opacity-80"
                style={{ height: "auto" }} 
              />
            </Link>
            <p className="text-[#a5adb6] text-[14px] max-w-[280px]">
              The operational backbone of the BricketX network. Karachi, Pakistan.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-sans font-medium text-[12px] tracking-[0.08em] uppercase text-[#a5adb6] mb-[16px]">
              Departments
            </h4>
            {[
              { label: "Technology", href: "/departments#technology" },
              { label: "Marketing", href: "/departments#marketing" },
              { label: "Operations", href: "/departments#operations" },
              { label: "Creative", href: "/departments#creative" },
              { label: "Production", href: "/departments#production" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#a5adb6]/70 text-[14px] mb-[10px] transition-all duration-300 hover:text-[#c39967] hover:translate-x-1 inline-block w-max"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col">
            <h4 className="font-sans font-medium text-[12px] tracking-[0.08em] uppercase text-[#a5adb6] mb-[16px]">
              Explore
            </h4>
            {[
              { label: "What We Build", href: "/what-we-build" },
              { label: "Our Ecosystem", href: "/company#ecosystem" },
              { label: "Global Operations", href: "/company#operations" },
              { label: "Innovation Lab", href: "/company#innovation" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#a5adb6]/70 text-[14px] mb-[10px] transition-all duration-300 hover:text-[#c39967] hover:translate-x-1 inline-block w-max"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col">
            <h4 className="font-sans font-medium text-[12px] tracking-[0.08em] uppercase text-[#a5adb6] mb-[16px]">
              Company
            </h4>
            <Link
              href="/our-culture"
              className="text-[#a5adb6]/70 text-[14px] mb-[10px] transition-all duration-300 hover:text-[#c39967] hover:translate-x-1 inline-block w-max"
            >
              Culture
            </Link>
            <Link
              href="/careers"
              className="text-[#a5adb6]/70 text-[14px] mb-[10px] transition-all duration-300 hover:text-[#c39967] hover:translate-x-1 inline-block w-max"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-[#a5adb6]/70 text-[14px] mb-[10px] transition-all duration-300 hover:text-[#c39967] hover:translate-x-1 inline-block w-max"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-[48px] pt-[24px] border-t border-[#a5adb6]/20 flex justify-between flex-wrap gap-[10px] font-sans font-medium text-[12px] text-[#a5adb6]/70">
          <span>© 2026 BricketX Pakistan</span>
          <span>UK/BVI · DUBAI · KENYA · PAKISTAN</span>
        </div>
      </div>
    </footer>
  );
}