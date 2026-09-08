import React from "react";
import { Sparkles, Calendar, Heart, ShieldCheck, Activity, Layers, CheckCircle2 } from "lucide-react";

export default function ProjectCardPreview({ id }) {
  if (id === "synapse") {
    return (
      <div className="w-full aspect-[16/10] bg-[#1E242B] rounded-lg p-3 text-white overflow-hidden flex flex-col justify-between border border-[#303B47] shadow-inner font-sans select-none">
        <div className="flex items-center justify-between pb-1.5 border-b border-[#303B47]/60">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#5DADE2]" />
            <span className="text-[10px] font-medium tracking-wide text-slate-300">Synapse AI</span>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#2B3540] text-[#76D7C4] font-mono">Streak: 18d</span>
        </div>
        <div className="space-y-1.5 my-auto">
          <div className="p-2 rounded bg-[#27313B] border border-[#364452] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-slate-100">Cognitive Neuro Flashcards</span>
              <span className="text-[9px] text-[#5DADE2]">25m Focus</span>
            </div>
            <div className="w-full bg-[#181F26] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#5DADE2] h-full rounded-full w-3/4" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="p-1.5 rounded bg-[#222A33] text-[9px] text-slate-300 flex items-center justify-between">
              <span>Retention</span>
              <span className="text-[#58D68D] font-bold">89%</span>
            </div>
            <div className="p-1.5 rounded bg-[#222A33] text-[9px] text-slate-300 flex items-center justify-between">
              <span>Next Review</span>
              <span className="text-[#F5B041]">Tomorrow</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-1 border-t border-[#303B47]/40 text-[9px] text-slate-400">
          <span>Spaced Repetition Active</span>
          <span className="text-slate-300 font-mono">v3.2</span>
        </div>
      </div>
    );
  }

  if (id === "avira") {
    return (
      <div className="w-full aspect-[16/10] bg-[#FAF8F5] rounded-lg p-3 text-[#2D2620] overflow-hidden flex flex-col justify-between border border-[#E8DFC8] shadow-inner select-none">
        <div className="flex items-center justify-between pb-1.5 border-b border-[#E8DFC8]">
          <div className="flex items-center gap-1.5">
            <span className="font-editorial italic font-bold text-xs text-[#8E4426]">Avira</span>
            <span className="text-[9px] text-[#7A6E63]">Wedding Planner</span>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#FCECE4] text-[#A05C3D] font-medium">84 days to go</span>
        </div>
        <div className="space-y-1.5 my-auto">
          <div className="p-2 rounded bg-white border border-[#EDE4D5] shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-medium text-[#2E2822]">Vendor Vault & Milestones</span>
              <span className="text-[#2E7D32] font-semibold">12/14 Done</span>
            </div>
            <div className="flex gap-1 pt-0.5">
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#F3EFE6] text-[#695E54]">Catering ✓</span>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#F3EFE6] text-[#695E54]">Photography ✓</span>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#FCECE4] text-[#C85A32]">Seating Chart</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-1 border-t border-[#E8DFC8] text-[9px] text-[#7A6E63]">
          <span>RSVP Confirmed: 142/160</span>
          <span className="text-[#8E4426] font-medium">50% ↓ task time</span>
        </div>
      </div>
    );
  }

  if (id === "meditrack") {
    return (
      <div className="w-full aspect-[16/10] bg-[#FFFFFF] rounded-lg p-3 text-[#1C2833] overflow-hidden flex flex-col justify-between border border-[#E0E8E3] shadow-inner select-none">
        <div className="flex items-center justify-between pb-1.5 border-b border-[#EAF0EC]">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-[#2E7D32]" />
            <span className="text-[10px] font-semibold text-[#1E3A2B]">MediTrack Vital</span>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#EAF5EC] text-[#2E7D32] font-mono">100% Adherence</span>
        </div>
        <div className="space-y-1.5 my-auto">
          <div className="grid grid-cols-3 gap-1 text-center">
            <div className="p-1 rounded bg-[#F6FAF7] border border-[#E1ECE3]">
              <span className="block text-[8px] text-[#5D7063]">Systolic</span>
              <span className="text-[11px] font-bold text-[#1C3B2B]">118</span>
            </div>
            <div className="p-1 rounded bg-[#F6FAF7] border border-[#E1ECE3]">
              <span className="block text-[8px] text-[#5D7063]">Glucose</span>
              <span className="text-[11px] font-bold text-[#1C3B2B]">94</span>
            </div>
            <div className="p-1 rounded bg-[#F6FAF7] border border-[#E1ECE3]">
              <span className="block text-[8px] text-[#5D7063]">Hydration</span>
              <span className="text-[11px] font-bold text-[#2E7D32]">2.4L</span>
            </div>
          </div>
          <div className="p-1.5 rounded bg-[#F4F9F5] border border-[#DCEADE] flex items-center justify-between text-[9px]">
            <span className="text-[#3E5C49]">Evening Dose</span>
            <span className="px-1.5 py-0.2 bg-[#2E7D32] text-white rounded text-[8px]">1-Tap Logged</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-1 border-t border-[#EAF0EC] text-[9px] text-[#5A7364]">
          <span>Physician Summary Ready</span>
          <span className="text-[#2E7D32] font-semibold">40% ↑ efficiency</span>
        </div>
      </div>
    );
  }

  // color-ease
  return (
    <div className="w-full aspect-[16/10] bg-[#F7F6FA] rounded-lg p-3 text-[#211E3B] overflow-hidden flex flex-col justify-between border border-[#E4E0F0] shadow-inner select-none">
      <div className="flex items-center justify-between pb-1.5 border-b border-[#E4E0F0]">
        <div className="flex items-center gap-1.5">
          <Layers className="w-3 h-3 text-[#5B50A0]" />
          <span className="text-[10px] font-semibold text-[#302758]">Color Ease Studio</span>
        </div>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#EDEAF7] text-[#5B50A0] font-mono">APCA Lc 82</span>
      </div>
      <div className="space-y-1.5 my-auto">
        <div className="grid grid-cols-4 gap-1">
          <div className="h-6 rounded bg-[#1B1930] flex items-center justify-center text-[7px] text-white font-mono">
            #1B1930
          </div>
          <div className="h-6 rounded bg-[#5B50A0] flex items-center justify-center text-[7px] text-white font-mono">
            #5B50A0
          </div>
          <div className="h-6 rounded bg-[#00897B] flex items-center justify-center text-[7px] text-white font-mono">
            #00897B
          </div>
          <div className="h-6 rounded bg-[#E64A19] flex items-center justify-center text-[7px] text-white font-mono">
            #E64A19
          </div>
        </div>
        <div className="p-1.5 rounded bg-white border border-[#E2DEF0] flex items-center justify-between text-[9px]">
          <span className="text-[#49416D]">WCAG 2.1 AA / AAA</span>
          <span className="px-1.5 py-0.2 rounded bg-[#E8F8F5] text-[#00897B] font-bold text-[8px] flex items-center gap-0.5">
            <CheckCircle2 className="w-2.5 h-2.5" /> 7.2:1 Passed
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-1 border-t border-[#E4E0F0] text-[9px] text-[#5A517E]">
        <span>Tokens Export: CSS / JSON</span>
        <span className="text-[#5B50A0] font-semibold">15+ CVD tested</span>
      </div>
    </div>
  );
}
