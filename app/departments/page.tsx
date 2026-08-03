"use client";

import React, { useState, useEffect } from "react";

import DepartmentsHero from "@/components/departments/DepartmentsHero";
import JumpNav from "@/components/departments/JumpNav";
import DepartmentSection from "@/components/departments/DepartmentSection";
import PipelineFlow from "@/components/departments/PipelineFlow";
import DepartmentsFaq from "@/components/departments/DepartmentsFaq";
import DepartmentsCTA from "@/components/departments/DepartmentsCTA";

const departmentsData = [
  {
    id: "technology",
    idx: "01",
    title: "Technology",
    lead: "The engineering core of the network - the platforms, intelligence, automation and security everything else runs on.",
    viewLink: "/technology/",
    capabilities: [
      { title: "Web Development", description: "Investor portals, dashboards and public platforms built to scale.", link: "/technology-web-development/" },
      { title: "AI", description: "Models and assistants that automate research, support and reporting.", link: "/technology-ai/" },
      { title: "Automation", description: "Workflows that remove manual, repetitive operational work.", link: "/technology-automation/" },
      { title: "Cyber Security", description: "Protecting investor data and network infrastructure end to end.", link: "/technology-cyber-security/" },
    ],
  },
  {
    id: "marketing",
    idx: "02",
    title: "Marketing",
    lead: "How the network is discovered, understood and trusted - demand, brand and investor reach across every channel and search surface.",
    viewLink: "/marketing/",
    capabilities: [
      { title: "Social Media", description: "Presence and community across every platform.", link: "/marketing-social-media/" },
      { title: "SEO", description: "Ranking the network across search and AI answer engines.", link: "/marketing-seo/" },
      { title: "Video Production", description: "Films, explainers and investor-facing visual content.", link: "/marketing-video-production/" },
      { title: "Paid Ads", description: "Performance campaigns that bring qualified investors.", link: "/marketing-paid-ads/" },
      { title: "PR", description: "Reputation, media and public positioning.", link: "/marketing-pr/" },
    ],
  },
  {
    id: "operations",
    idx: "03",
    title: "Operations",
    lead: "The machinery that keeps capital, data and reporting moving - the day-to-day systems behind every investor relationship.",
    viewLink: "/operations/",
    capabilities: [
      { title: "Investor Relations", description: "Onboarding, communication and support for every investor.", link: "/operations-investor-relations/" },
      { title: "CRM", description: "Systems that manage each investor and partner relationship.", link: "/operations-crm/" },
      { title: "Reporting", description: "Structured, auditable performance reporting.", link: "/operations-reporting/" },
      { title: "Documentation", description: "Records, compliance and process documentation.", link: "/operations-documentation/" },
    ],
  },
  {
    id: "creative",
    idx: "04",
    title: "Creative",
    lead: "How the network looks, feels and communicates - the identity, interfaces and motion across the entire ecosystem.",
    viewLink: "/creative/",
    capabilities: [
      { title: "Branding", description: "Identity and guidelines across the ecosystem.", link: "/creative-branding/" },
      { title: "UI/UX", description: "Interfaces designed for clarity and trust.", link: "/creative-ui-ux/" },
      { title: "Graphic Design", description: "Visual assets for every channel and campaign.", link: "/creative-graphic-design/" },
      { title: "Motion Graphics", description: "Animation and motion for product and marketing.", link: "/creative-motion-graphics/" },
    ],
  },
  {
    id: "production",
    idx: "05",
    title: "Production",
    lead: "Turning ideas into shipped, coordinated, scalable work - the research, process and coordination that hold delivery together across regions.",
    viewLink: "/production/",
    capabilities: [
      { title: "Research", description: "Market, product and process research.", link: "/production-research/" },
      { title: "Process Management", description: "Systems that keep delivery consistent and repeatable.", link: "/production-process-management/" },
      { title: "Training", description: "Upskilling teams across the hub.", link: "/production-training/" },
      { title: "Global Coordination", description: "Aligning execution across UK/BVI, Dubai and Kenya.", link: "/production-global-coordination/" },
    ],
  },
];

export default function DepartmentsPage() {
  const [activeId, setActiveId] = useState<string>("technology");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    departmentsData.forEach((dept) => {
      const el = document.getElementById(dept.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <DepartmentsHero />
      <JumpNav activeId={activeId} />

      {departmentsData.map((dept) => (
        <DepartmentSection
          key={dept.id}
          id={dept.id}
          idx={dept.idx}
          title={dept.title}
          lead={dept.lead}
          viewLink={dept.viewLink}
          capabilities={dept.capabilities}
        />
      ))}

      <PipelineFlow />
      <DepartmentsFaq />
      <DepartmentsCTA />
    </>
  );
}