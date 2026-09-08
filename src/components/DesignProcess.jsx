import React, { useState } from "react";
import { processSteps, processPhilosophy } from "../data/process";
import { Annotation } from "./ui/NotebookElements";
import WaxSeal from "./ui/WaxSeal";

export default function DesignProcess() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // SVG Coordinates for desktop winding path (viewBox: 0 0 800 1600)
  const nodePositions = [
    { x: 310, y: 110 },  // 01
    { x: 510, y: 310 },  // 02
    { x: 290, y: 530 },  // 03
    { x: 450, y: 730 },  // 04
    { x: 290, y: 930 },  // 05
    { x: 470, y: 1150 }, // 06
    { x: 310, y: 1330 }, // 07
    { x: 450, y: 1490 }, // 08
  ];

  // SVG Meandering Cubic Bezier Path connecting all 8 nodes
  const pathD = `
    M 310 110
    C 420 120, 510 200, 420 270
    C 380 300, 460 305, 510 310
    C 490 400, 520 450, 410 490
    C 340 515, 300 520, 290 530
    C 275 580, 360 620, 410 650
    C 450 675, 440 705, 450 730
    C 460 790, 420 830, 370 870
    C 320 905, 300 915, 290 930
    C 275 990, 360 1020, 420 1060
    C 465 1090, 460 1120, 470 1150
    C 480 1220, 430 1255, 380 1285
    C 330 1310, 320 1320, 310 1330
    C 290 1380, 370 1420, 415 1450
    C 435 1465, 445 1475, 450 1490
  `;

  return (
    <section id="process" className="relative py-20 md:py-28 border-t border-[#EAE2D5] overflow-hidden bg-[#FAF7F2]/40">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 md:mb-20">
          <h2 className="font-editorial text-xs sm:text-sm md:text-base tracking-[0.35em] text-[#1E1B18] uppercase font-bold">
            {processPhilosophy.header}
          </h2>
          
          <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#2B2621] max-w-xl mx-auto leading-relaxed font-normal">
            I build the right thing before I build it right — <br className="hidden sm:inline" />
            <span className="text-[#685D52]">every step has to make sense on its own.</span>
          </p>

          <div className="pt-2">
            <Annotation 
              text="how I turn chaos into clarity" 
              direction="right" 
              className="text-base text-[#D93829]" 
            />
          </div>
        </div>

        {/* Desktop View: Winding Dashed Curve with 8 Alternating Steps */}
        <div className="hidden md:block relative w-full h-[1620px] max-w-3xl mx-auto select-none">
          
          {/* SVG Background Path */}
          <svg 
            viewBox="0 0 800 1600" 
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            fill="none"
          >
            {/* Meandering Dashed Black Line */}
            <path
              d={pathD}
              stroke="#1C1A18"
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeLinecap="round"
              className="opacity-85"
            />

            {/* Black Dot Node Anchors */}
            {nodePositions.map((pos, idx) => {
              const isHovered = hoveredIndex === idx;
              return (
                <g key={idx} className="transition-all duration-300">
                  {/* Outer glow circle on hover */}
                  {isHovered && (
                    <circle 
                      cx={pos.x} 
                      cy={pos.y} 
                      r="12" 
                      fill="#D93829" 
                      opacity="0.2" 
                      className="animate-pulse"
                    />
                  )}
                  {/* Core Black Anchor Dot */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isHovered ? 6 : 5}
                    fill={isHovered ? "#D93829" : "#1A1715"}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}
          </svg>

          {/* 8 Process Step Text Blocks */}
          {processSteps.map((step, idx) => {
            const isLeft = step.side === "left";
            const pos = nodePositions[idx];
            const isHovered = hoveredIndex === idx;

            // Position calculation for each step block relative to percentage
            const topPercent = (pos.y / 1600) * 100;

            return (
              <div
                key={step.step}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`absolute z-10 w-[270px] lg:w-[290px] transition-all duration-300 cursor-pointer ${
                  isLeft ? "text-left" : "text-left"
                }`}
                style={{
                  top: `calc(${topPercent}% - 32px)`,
                  left: isLeft ? `calc(${(pos.x / 800) * 100}% - 290px)` : `calc(${(pos.x / 800) * 100}% + 28px)`
                }}
              >
                <div className={`space-y-1 p-2 rounded-lg transition-colors ${
                  isHovered ? "bg-white/90 shadow-sm border border-[#EAE1D3]" : "bg-transparent"
                }`}>
                  {/* Red Serif Step Number */}
                  <span className="font-editorial text-3xl font-bold text-[#D93829] block leading-none tracking-tight">
                    {step.step}
                  </span>

                  {/* Red Uppercase Subtitle */}
                  <h3 className="text-xs font-bold tracking-[0.18em] text-[#D93829] uppercase pt-0.5">
                    {step.title}
                  </h3>

                  {/* Description text */}
                  <p className="text-xs text-[#3E3832] font-normal leading-relaxed">
                    {step.description}
                  </p>

                  {/* Expanded detail on hover */}
                  {isHovered && (
                    <div className="pt-1.5 border-t border-[#F0E6D8] mt-1">
                      <span className="text-[10px] text-[#7A6E63] font-mono block leading-tight">
                        ✦ {step.details}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View: Vertical Clean Connected Timeline */}
        <div className="md:hidden relative space-y-8 pl-8 border-l-2 border-dashed border-[#1C1A18]/60 ml-3 text-left py-4">
          {processSteps.map((step, idx) => (
            <div key={step.step} className="relative group">
              {/* Dot Anchor on the Line */}
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#FAF7F2] border-2 border-[#1C1A18] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D93829]" />
              </div>

              <div className="space-y-1">
                <span className="font-editorial text-2xl font-bold text-[#D93829] block leading-none">
                  {step.step}
                </span>

                <h3 className="text-xs font-bold tracking-widest text-[#D93829] uppercase">
                  {step.title}
                </h3>

                <p className="text-xs text-[#423C35] leading-relaxed">
                  {step.description}
                </p>
                
                <span className="text-[10px] text-[#7A6E63] font-mono block pt-0.5">
                  ✦ {step.details}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Philosophy & Monogram Wax Seal */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#EAE2D5] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1 max-w-md">
            <span className="font-hand text-xl text-[#8E4426] block">
              "Every loop refines the intuition." ♡
            </span>
            <p className="text-xs text-[#7A6E63]">
              Grounding user empathy into defensible, business-ready product architectures.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <svg className="w-8 h-14 text-[#B5A896] opacity-75 transform -rotate-12 pointer-events-none" viewBox="0 0 40 80" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M 20 80 Q 20 40 22 5" />
              <path d="M 21 60 Q 32 50 35 52" />
              <path d="M 20 45 Q 8 38 6 42" />
              <path d="M 21 30 Q 34 22 36 26" />
            </svg>
            <WaxSeal size={68} label="B" />
          </div>
        </div>

      </div>
    </section>
  );
}
