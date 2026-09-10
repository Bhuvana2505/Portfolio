import React from "react";

const works = [
  {
    id: "ecinet",
    num: "01",
    title: "ECINET",
    subtitle: "WEB APP • 2025",
    desc: "Real-time analytics platform handling 2M+ daily events. Led the frontend architecture and built the core design system from scratch.",
    tags: ["React", "TypeScript", "D3.js", "WebSockets"]
  },
  {
    id: "medapp",
    num: "02",
    title: "MEDAPP",
    subtitle: "IOS / ANDROID • 2025",
    desc: "Cross-platform equity management app used by 50k+ employees across Series A-C startups. Rebuilt the onboarding flow, cutting drop-off by 40%.",
    tags: ["React Native", "GraphQL", "Expo"]
  },
  {
    id: "synapse",
    num: "03",
    title: "SYNAPSE",
    subtitle: "OPEN SOURCE • 2024",
    desc: "Headless CMS with a visual editor for independent publishers. 4k GitHub stars, 200+ contributors.",
    tags: ["Node.js", "PostgreSQL", "Vue 3"]
  },
  {
    id: "colorease",
    num: "04",
    title: "COLOR EASE",
    subtitle: "DESIGN SYSTEM • 2024",
    desc: "Token-based design system adopted across 6 product teams. Reduced design-to-dev handoff time by 60%.",
    tags: ["Figma", "Storybook", "CSS"]
  },
  {
    id: "sweetpea",
    num: "05",
    title: "SWEET PEA",
    subtitle: "CLI TOOL • 2023",
    desc: "Developer CLI that syncs Figma tokens to code. 800+ installs/week on npm. Used by indie studios worldwide.",
    tags: ["Node.js", "TypeScript", "npm"]
  },
  {
    id: "avira",
    num: "06",
    title: "AVIRA",
    subtitle: "DATA VIZ • 2023",
    desc: "Interactive geospatial dashboard for urban planners. Visualizes city data across 40+ metrics in real time.",
    tags: ["React", "Mapbox", "D3.js"]
  }
];

export default function SelectedWork() {
  return (
    <section id="work" className="relative pt-20 pb-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[#8A7E72] tracking-[0.25em] uppercase block">
              — ENCLOSED —
            </span>
            <span className="font-hand text-base sm:text-lg text-[#8A7868]">
              a few things I've been working on →
            </span>
          </div>
          <div className="flex items-center gap-6 mt-2">
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#191614] shrink-0 tracking-tight">
              Selected Work
            </h2>
            <div className="flex-1 h-[1px] bg-[#D8CEBF]" />
          </div>
        </div>

        {/* 2-Column Slate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {works.map((work) => (
            <div
              key={work.id}
              className="group relative bg-[#586475] rounded-md shadow-md overflow-visible cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Corner Badge */}
              <div className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-[#495465] border border-[#7F8D9F] flex items-center justify-center shadow-sm">
                <span className="font-mono text-[9px] font-bold text-[#DFE4E8] tracking-wider">
                  {work.num}
                </span>
              </div>

              {/* Image Placeholder Area */}
              <div className="relative h-64 md:h-72 w-full bg-[#515D6D] rounded-t-md overflow-hidden border-b border-[#637083] flex items-center justify-center p-6">
                {/* Subtle Decorative Lines imitating a blueprint/wireframe */}
                <div className="absolute inset-0 flex">
                  <div className="w-1/3 border-r border-[#5B6779] h-full" />
                  <div className="w-1/3 border-r border-[#5B6779] h-full" />
                </div>
                {/* Curved line aesthetic */}
                <div className="absolute w-[200%] h-[200%] border border-[#637083] rounded-full top-[-50%] left-[-150%] opacity-40" />
                
                {/* Placeholder text (e.g. WEB APP, OPEN SOURCE) lightly stamped */}
                <span className="relative z-10 font-mono text-[10px] text-[#718096] tracking-[0.3em] uppercase mix-blend-plus-lighter">
                  {work.subtitle.split('•')[0].trim()}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between text-left">
                <div className="space-y-1.5 mb-4">
                  {/* Title in Caveat */}
                  <h3 className="font-hand text-3xl font-medium text-[#F7F9FA] leading-tight">
                    {work.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="font-mono text-[9px] text-[#A0AAB6] tracking-[0.2em] uppercase">
                    {work.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-[#D3DBE2] leading-relaxed font-normal opacity-90 mb-6 max-w-sm">
                  {work.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-mono px-2 py-1 rounded-[2px] border border-[#6E7B8E] text-[#B0BCC9] bg-[#536072] hover:bg-[#606D80] hover:text-[#DFE4E8] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Scalloped Decorative Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-4 scallop-divider pointer-events-none opacity-80" />
    </section>
  );
}
