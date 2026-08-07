import type { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — BricketX Pakistan | The Operational Hub",
  description: "Get in touch with the BricketX Pakistan hub. Partner with us, integrate our infrastructure, or join the team building the future of alternative investments.",
  alternates: {
    canonical: "https://www.bricketx.pk/contact/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    title: "Contact Us — BricketX Pakistan",
    description: "Get in touch with the BricketX Pakistan hub. The engine room is open.",
    url: "https://www.bricketx.pk/contact/",
    siteName: "BricketX Pakistan",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ============ SEO: Breadcrumb ============ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.bricketx.pk/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact",
                item: "https://www.bricketx.pk/contact/",
              },
            ],
          }),
        }}
      />

      <div className="relative min-h-screen bg-[#0E1116] text-[#E7EAF0] overflow-x-hidden">
        <main className="relative z-10 flex flex-col">
          <ContactSection />
        </main>
      </div>
    </>
  );
}