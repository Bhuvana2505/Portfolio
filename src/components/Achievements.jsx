import React from "react";
import { Trophy, Users, Video, Mic, Award, Star, Heart } from "lucide-react";
import { Annotation } from "./ui/NotebookElements";
import { achievements } from "../data/achievements";

export default function Achievements() {
  const iconMap = {
    trophy: Trophy,
    users: Users,
    video: Video,
    mic: Mic,
    award: Award,
    star: Star,
  };

  return (
    <section className="relative py-16 md:py-24 border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12 text-left">
          <Annotation 
            text="little wins, a lot of lessons" 
            direction="right" 
            className="text-base text-[#8A7D70] block mb-1" 
          />
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#191614] tracking-[-0.02em]">
            Achievements & Leadership.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 6 Postage Stamps (10 Cols) */}
          <div className="lg:col-span-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((item) => {
              const Icon = iconMap[item.icon] || Trophy;

              return (
                <div
                  key={item.id}
                  className="stamp-edge p-4 rounded-xs flex flex-col justify-between items-center text-center space-y-3 min-h-[160px] group transition-transform duration-300 hover:-translate-y-1 hover:rotate-1"
                >
                  {/* Icon container */}
                  <div className="w-9 h-9 rounded-full bg-[#EFE8DD] border border-[#DDD3C4] flex items-center justify-center text-[#4A3F35] group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 text-[#A05C3D]" />
                  </div>

                  {/* Stamp Details */}
                  <div className="space-y-1 w-full">
                    <span className="font-editorial text-base sm:text-lg font-bold text-[#1E1B18] block leading-tight">
                      {item.place}
                    </span>
                    <span className="text-[11px] font-semibold text-[#4A423A] block truncate">
                      {item.event}
                    </span>
                    <span className="text-[9px] text-[#7A6E63] block line-clamp-2 leading-tight">
                      {item.detail}
                    </span>
                  </div>

                  {/* Stamp Postmark Line */}
                  <div className="w-full pt-1 border-t border-dashed border-[#DDD3C4] text-[8px] font-mono text-[#A89D90] uppercase tracking-widest">
                    VERIFIED
                  </div>
                </div>
              );
            })}
          </div>

          {/* Grateful for the journey circular ink stamp (2 Cols) */}
          <div className="lg:col-span-2 flex justify-center py-4">
            <div className="relative w-28 h-28 rounded-full border-2 border-dashed border-[#4A3F35]/70 flex flex-col items-center justify-center p-2 text-center select-none rotate-6 transition-transform duration-300 hover:rotate-0">
              <div className="absolute inset-1.5 rounded-full border border-[#4A3F35]/30 pointer-events-none" />
              <Heart className="w-5 h-5 text-[#C85A32] fill-[#C85A32]/20 mb-1" />
              <span className="text-[9px] font-mono font-bold tracking-widest text-[#4A3F35] uppercase leading-tight">
                GRATEFUL
              </span>
              <span className="text-[8px] font-mono tracking-widest text-[#7A6E63] uppercase leading-tight">
                FOR THE JOURNEY
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
