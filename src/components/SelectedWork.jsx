import React, { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import CaseStudyModal from "./CaseStudyModal";
import { projects } from "../data/projects";

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Card theme banners matching the reference image
  const cardThemes = [
    {
      bgBanner: "bg-[#D8CFBF]",
      label: "[ Mobile / AI Platform ]",
      badge: "FEATURED",
      badgeColor: "border-[#C8372D] text-[#C8372D]",
      techTags: ["Product Design", "UX Research", "Figma", "Framer", "AI Companion"]
    },
    {
      bgBanner: "bg-[#BFCBB8]",
      label: "[ Web / Systems ]",
      badge: "FEATURED",
      badgeColor: "border-[#C8372D] text-[#C8372D]",
      techTags: ["UX/UI Design", "Information Arch", "Web App", "Marketplace"]
    },
    {
      bgBanner: "bg-[#C4BFB7]",
      label: "[ Mobile / Healthcare ]",
      badge: "CASE STUDY",
      badgeColor: "border-[#7A6E63] text-[#7A6E63]",
      techTags: ["Healthcare UX", "Accessibility", "Design Tokens", "Usability"]
    },
    {
      bgBanner: "bg-[#D9C8BF]",
      label: "[ Design Systems / A11y ]",
      badge: "AWARD WINNER",
      badgeColor: "border-[#A05C3D] text-[#A05C3D]",
      techTags: ["Design Tokens", "WCAG 2.1 AAA", "APCA Contrast", "Figma Plugin"]
    }
  ];

  return (
    <section id="work" className="relative pt-20 pb-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Horizontal Rule & Vintage Stamp */}
        <div className="mb-14 text-left">
          
          {/* Top mono label */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#8A7E72] tracking-[0.25em] uppercase block">
              — ENCLOSED —
            </span>

            {/* Caveat annotation */}
            <span className="font-hand text-base sm:text-lg text-[#8A7868]">
              a few things I've been working on →
            </span>
          </div>

          {/* Heading Row with Horizontal Line & Postmark Stamp */}
          <div className="flex items-center gap-6 mt-2">
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#191614] shrink-0 tracking-tight">
              Selected Work
            </h2>
            
            {/* Fine rule extending across */}
            <div className="flex-1 h-[1px] bg-[#D8CEBF]" />

            {/* Vintage Circular Postmark Stamp */}
            <div className="shrink-0 relative w-16 h-16 rounded-full border-2 border-[#8E4426]/70 flex flex-col items-center justify-center p-1 text-center rotate-6 select-none shadow-2xs">
              <div className="absolute inset-1 rounded-full border border-[#8E4426]/40 pointer-events-none" />
              <div className="w-full border-t border-b border-[#8E4426]/40 py-0.5 my-auto">
                <span className="text-[7px] font-mono font-bold tracking-widest text-[#8E4426] uppercase block">
                  PORTFOLIO
                </span>
                <span className="text-[8px] font-mono tracking-widest text-[#5A3828] block">
                  2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pinned Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {projects.map((project, idx) => {
            const theme = cardThemes[idx] || cardThemes[0];

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-[#FDFBF7] rounded-sm border border-[#DDD3C4] shadow-[0_6px_20px_rgba(45,35,25,0.06)] hover:shadow-[0_12px_28px_rgba(45,35,25,0.12)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden text-left"
              >
                {/* Card Top Colored Banner */}
                <div className={`relative h-32 ${theme.bgBanner} p-4 flex items-center justify-center border-b border-[#DDD3C4]/60 transition-colors`}>
                  
                  {/* Handwritten Bracketed Subtitle */}
                  <span className="font-hand italic text-xl sm:text-2xl text-[#3D352E]/90 select-none">
                    {theme.label}
                  </span>

                  {/* Pinned Mini Stamp / Card in Top-Right with Push-Pin */}
                  <div className="absolute -top-1.5 right-3 w-10 h-12 bg-[#FAF7F2] border border-[#DDD3C4] shadow-xs flex flex-col items-center justify-between p-1 rounded-xs rotate-3 group-hover:rotate-0 transition-transform">
                    {/* Red Push-Pin */}
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D93829] shadow-xs border border-[#9A2216] -mt-1.5" />
                    <span className="font-editorial text-[9px] font-bold text-[#7A6E63]">{project.num}</span>
                    <span className="text-[7px] font-mono text-[#A89D90]">2026</span>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-2">
                    {/* Title + Small Outline Badge */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-editorial text-2xl font-bold text-[#1E1B18] group-hover:text-[#C8372D] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-xs border ${theme.badgeColor} tracking-wider font-semibold shrink-0 mt-0.5`}>
                        {theme.badge}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-[#52483E] leading-relaxed font-normal">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tech / Skill Pills in Typewriter Ticket Style */}
                  <div className="pt-2 border-t border-[#F0EAE1]">
                    <div className="flex flex-wrap gap-1.5">
                      {theme.techTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-[#F5EFEB] border border-[#E2D8CA] text-[#63574A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Subtle bottom hover trigger line */}
                <div className="px-5 py-2.5 bg-[#FAF7F0] border-t border-[#EFE8DD] flex items-center justify-between text-[11px] font-mono text-[#8A7E72] group-hover:text-[#C8372D] transition-colors">
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Scalloped Decorative Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-4 scallop-divider pointer-events-none opacity-80" />

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
