import React from "react";
import { Download, Sparkles, Heart, Compass, Coffee, Camera } from "lucide-react";
import { WashiTape, StickyNote, Annotation } from "./ui/NotebookElements";
import { bioData } from "../data/bio";

export default function AboutMe({ onOpenResume }) {
  return (
    <section id="about" className="relative py-16 md:py-24 border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center text-left">
          
          {/* Left Column: Polaroid Photo with Tape & Stamp (4 Cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative polaroid-frame w-64 sm:w-72 bg-white rounded-xs">
              <WashiTape width="w-28" rotate="-rotate-2" />
              
              {/* Photo Area */}
              <div className="aspect-[4/4.5] w-full bg-[#352D26] overflow-hidden rounded-xs relative group">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Bhuvana Shree N."
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              <div className="pt-3 text-center">
                <span className="font-hand text-sm text-[#7A6E63]">
                  Bhuvana • 2026
                </span>
              </div>

              {/* Circular "MADE WITH CURIOSITY" Stamp */}
              <div className="absolute -bottom-4 -left-4 w-18 h-18 rounded-full border-2 border-dashed border-[#4A3F35] bg-[#FAF7F2] p-1 shadow-md flex flex-col items-center justify-center text-center rotate-[-12deg] select-none">
                <span className="text-[7px] font-mono font-bold tracking-widest text-[#4A3F35] uppercase">
                  MADE WITH
                </span>
                <Heart className="w-3 h-3 text-[#C85A32] fill-[#C85A32]" />
                <span className="text-[7px] font-mono tracking-widest text-[#7A6E63] uppercase">
                  CURIOSITY
                </span>
              </div>
            </div>
          </div>

          {/* Middle Column: Bio Narrative & Resume CTA (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#191614] tracking-[-0.02em]">
                A little about me.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#4E443B] leading-relaxed">
              <p>
                I'm a product designer and UX researcher who loves turning complicated, messy systems into simple, intuitive, and meaningful digital experiences.
              </p>
              <p>
                I thrive in corporate and cross-functional environments where design acts as the bridge between ambitious product strategy, technical engineering reality, and genuine human empathy.
              </p>
              <p>
                When I'm not designing in Figma or conducting usability sessions, I'm probably experimenting with generative art, diving into behavioral psychology books, or sipping iced coffee.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#FAF7F2] border border-[#D5C9B8] text-[#2D2620] font-semibold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#EFE8DC] hover:border-[#B5A592] shadow-2xs"
              >
                <span>VIEW RESUME</span>
                <Download className="w-4 h-4 text-[#A05C3D]" />
              </button>
            </div>
          </div>

          {/* Right Column: "currently into ->" Sticky Note (3 Cols) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <StickyNote color="yellow" rotate="rotate-2" pin={true} className="w-full max-w-[260px]">
              <div className="space-y-3 pt-2">
                <Annotation text="currently into" direction="right" className="text-base text-[#8A6D1F]" />
                
                <ul className="space-y-2 font-hand text-lg text-[#4F4220] pl-1">
                  {bioData.currentlyInto.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#C85A32]">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StickyNote>
          </div>

        </div>

      </div>
    </section>
  );
}
