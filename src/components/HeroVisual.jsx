import React from "react";
import WaxSeal from "./ui/WaxSeal";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[480px] lg:max-w-[540px] mx-auto select-none">
      {/* Desk workspace photo/mockup container with rich shadows and textures */}
      <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(40,30,20,0.14),0_6px_16px_rgba(40,30,20,0.06)] border border-[#E6DDD0] bg-[#EFE9DF]">
        {/* Workspace composition */}
        <div className="relative aspect-[4/3.8] w-full bg-[#E5DCD0] overflow-hidden p-6 flex items-center justify-center">
          {/* Subtle wooden/linen desk surface */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ECE3D5] via-[#E4D8C7] to-[#D8C9B4] opacity-90" />

          {/* Coffee mug with shadow */}
          <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#2E2824] to-[#1A1614] p-1.5 shadow-[4px_10px_20px_rgba(0,0,0,0.25)] border-4 border-[#F0EBE1] flex items-center justify-center transform -rotate-12">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#452D1E] via-[#331E12] to-[#1E110A] flex items-center justify-center">
              {/* Coffee foam swirl */}
              <div className="w-5 h-5 rounded-full border border-[#B38B6D]/40 opacity-70" />
            </div>
            {/* Mug handle */}
            <div className="absolute -right-2 top-3 w-3 h-6 rounded-r-md border-2 border-l-0 border-[#F0EBE1] bg-[#F0EBE1]" />
          </div>

          {/* Stack of Design Books (Top Right) */}
          <div className="absolute top-4 right-8 flex flex-col items-end opacity-90">
            <div className="w-36 h-6 bg-[#2B3A42] rounded-xs shadow-md border-l-4 border-[#3D525E] flex items-center px-2 text-[9px] font-mono tracking-widest text-[#D1DCE5] transform -rotate-1">
              THE DESIGN OF EVERYDAY THINGS
            </div>
            <div className="w-40 h-6 bg-[#8B5A3C] rounded-xs shadow-md border-l-4 border-[#A36C4A] flex items-center px-2 text-[9px] font-mono tracking-widest text-[#F7EBE1] transform rotate-1 -mt-1">
              DON'T MAKE ME THINK
            </div>
            <div className="w-44 h-7 bg-[#FAF7F2] rounded-xs shadow-lg border-l-4 border-[#35302D] flex items-center px-2 text-[9px] font-mono tracking-widest text-[#35302D] -mt-1">
              UNIVERSAL PRINCIPLES OF DESIGN
            </div>
          </div>

          {/* Main Open Sketchbook / Designer's Notebook */}
          <div className="relative z-10 w-[88%] mt-8 bg-[#FBF9F4] rounded-lg shadow-[0_12px_32px_rgba(40,30,20,0.18)] border border-[#D8CEBF] p-5 rotate-[-2deg]">
            {/* Center Book Crease / Spine shadow */}
            <div className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.06)] to-transparent pointer-events-none" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-[#D1C5B3]" />

            <div className="grid grid-cols-2 gap-4 text-[#4A423A]">
              {/* Left Notebook Page: Wireframe Sketch & Notes */}
              <div className="space-y-2 pr-1 border-r border-[#EFE8DC]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8A7E72]">01. Wireframe Flow</span>
                  <span className="font-hand text-xs text-[#9E6240]">iter 03</span>
                </div>
                
                {/* Hand-drawn UI Wireframe sketch */}
                <div className="p-2 border border-dashed border-[#CFC3B0] rounded bg-[#FAF7F0] space-y-1.5">
                  <div className="flex items-center justify-between pb-1 border-b border-[#E5DBCB]">
                    <div className="w-3 h-1 bg-[#8A7E72] rounded-xs" />
                    <div className="w-8 h-1 bg-[#D1C5B3] rounded-xs" />
                  </div>
                  <div className="h-6 rounded bg-[#EDE5D8] flex items-center justify-center px-1.5">
                    <div className="w-full h-1.5 bg-[#D1C5B3] rounded-xs" />
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="h-7 rounded border border-[#D5C9B7] bg-white/60 p-1 flex flex-col justify-between">
                      <div className="w-4 h-1 bg-[#B5A896] rounded-xs" />
                      <div className="w-6 h-1 bg-[#DDD2C0] rounded-xs" />
                    </div>
                    <div className="h-7 rounded border border-[#D5C9B7] bg-white/60 p-1 flex flex-col justify-between">
                      <div className="w-5 h-1 bg-[#B5A896] rounded-xs" />
                      <div className="w-4 h-1 bg-[#DDD2C0] rounded-xs" />
                    </div>
                  </div>
                </div>

                <p className="font-hand text-xs text-[#6B5E52] leading-tight pt-1">
                  → Simplify cognitive load on onboarding step 2.
                </p>
              </div>

              {/* Right Notebook Page: User Insights & Sketch */}
              <div className="space-y-2 pl-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8A7E72]">User Insights</span>
                  <span className="font-hand text-xs text-[#5DADE2]">n=12</span>
                </div>

                <div className="p-2 bg-[#FEF9D9] border border-[#F2E7B3] rounded text-[#4A402D] shadow-xs">
                  <p className="font-hand text-xs leading-snug">
                    "I want the app to predict my next study task without making me feel guilty."
                  </p>
                </div>

                <div className="flex items-center gap-1.5 pt-1">
                  <div className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                  <span className="text-[10px] font-medium text-[#5A5046]">36% ↑ retention in beta</span>
                </div>
              </div>
            </div>

            {/* Fountain Pen sitting across page */}
            <div className="absolute -bottom-3 right-6 w-36 h-3 bg-gradient-to-r from-[#1E272C] via-[#33424A] to-[#1E272C] rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.35)] transform rotate-[25deg] flex items-center justify-between px-1">
              <div className="w-4 h-1.5 bg-[#D4AF37] rounded-l-sm" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            </div>
          </div>
        </div>
      </div>

      {/* Torn Paper Bookmark / Card on the Right (from Image 1: "design is clarity") */}
      <div 
        className="absolute -right-4 md:-right-6 top-8 md:top-12 z-20 w-32 md:w-36 p-4 bg-[#FAF7F0] shadow-[0_8px_24px_rgba(50,40,30,0.14)] border border-[#E2D8C8] rotate-[5deg] transform transition-transform duration-300 hover:rotate-[3deg]"
        style={{
          clipPath: "polygon(0% 0%, 100% 2%, 98% 97%, 3% 100%, 1% 75%, 2% 40%)"
        }}
      >
        <div className="text-center py-2 space-y-1">
          <span className="font-hand text-xl md:text-2xl text-[#8E4426] block leading-tight font-medium">
            design
          </span>
          <span className="font-hand text-lg md:text-xl text-[#3A322C] block italic leading-none">
            is clarity
          </span>
        </div>
      </div>

      {/* Blue Wax Seal Monogram "B" overlapping lower right */}
      <div className="absolute -bottom-5 right-6 md:right-8 z-30 transform rotate-[-6deg] hover:rotate-0 transition-transform duration-300">
        <WaxSeal size={84} label="B" />
      </div>
    </div>
  );
}
