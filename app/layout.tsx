import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Initialize Manrope for body text
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// Initialize Outfit for headings
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BricketX Pakistan | Operational Backbone",
  description: "The operational and innovation hub of the BricketX network.",
  icons: {
    icon: "/logo/logo.png",
  },
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
        <div className="relative min-h-screen bg-[#0E1116] text-[#ffffff] font-sans overflow-x-hidden selection:bg-[#c39967] selection:text-[#212121] flex flex-col">
          <Navbar />
          
          <main className="relative flex-grow">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}