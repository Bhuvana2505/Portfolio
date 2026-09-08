import React from "react";
import HeroVisual from "./HeroVisual";
import { ArrowRight, Download, Sparkles, MapPin, GraduationCap } from "lucide-react";
import { bioData } from "../data/bio";

export default function Hero({ onOpenResume }) {
  const handleScrollToWork = (e) => {
    e.preventDefault();
    const workEl = document.getElementById("work");
    if (workEl) {
      workEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Info */}
          <div className="lg:col-span-7 space-y-6 md:space-y-7 text-left">
            
            {/* Salutation */}
            <div className="space-y-1">
              <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#7A6F64] uppercase block">
                HI, I'M
              </span>
              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold text-[#191614] leading-[1.02] tracking-[-0.02em]">
                {bioData.name}
              </h1>
              <p className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.28em] text-[#695E54] uppercase pt-1">
                {bioData.role}
              </p>
            </div>

            {/* Subtitle / Value proposition */}
            <p className="text-base sm:text-lg md:text-xl text-[#4A423A] font-normal leading-relaxed max-w-xl">
              {bioData.tagline}
            </p>

            {/* Corporate / In-house Status Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs md:text-sm text-[#5E554B]">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F3ECE0] border border-[#E2D7C7] shadow-2xs">
                <GraduationCap className="w-4 h-4 text-[#A05C3D]" />
                <span className="font-medium">{bioData.graduationBadge}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#F3ECE0] border border-[#E2D7C7] shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#3D5A6C]" />
                <span className="font-medium">{bioData.locationBadge}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#work"
                onClick={handleScrollToWork}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#191614] text-[#FAF7F2] font-semibold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#332D28] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 text-[#E6DDD0] group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-md bg-[#FAF7F2] border border-[#D5C9B8] text-[#2D2620] font-semibold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#EFE8DC] hover:border-[#B5A592] hover:shadow-sm"
              >
                <span>VIEW RESUME</span>
                <Download className="w-3.5 h-3.5 text-[#A05C3D] group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Desk Workspace Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
