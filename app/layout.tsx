// layout.tsx
import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BricketX Pakistan | Operational Backbone",
  description: "The operational and innovation hub of the BricketX network.",
  icons: { icon: "/logo/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${outfit.variable} antialiased`}
    >
      <body>
        {/* FIX: Changed overflow-x-hidden to overflow-x-clip. This unlocks Sticky positioning! */}
        <div className="relative min-h-screen bg-[#0a0a0a] text-[#ffffff] font-sans overflow-x-clip selection:bg-[#c39967] selection:text-[#212121] flex flex-col">
          
          {/* Global Mesh Gradient Background */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#c39967]/10 blur-[160px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#c39967]/5 blur-[140px] rounded-full mix-blend-screen" />
            <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] bg-white/5 blur-[120px] rounded-full mix-blend-screen" />
          </div>

          <Navbar />
          
          <main className="relative flex-grow z-10">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}