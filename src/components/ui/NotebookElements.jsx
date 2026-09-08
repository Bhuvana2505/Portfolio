import React from "react";

export function WashiTape({ className = "", width = "w-24", rotate = "-rotate-1" }) {
  return (
    <div
      className={`absolute -top-3 left-1/2 -translate-x-1/2 h-6 ${width} ${rotate} bg-[#EBE2D2]/80 backdrop-blur-[1px] border-l-2 border-r-2 border-dashed border-[#C5BBA9]/60 shadow-[0_1px_4px_rgba(0,0,0,0.06)] pointer-events-none z-10 ${className}`}
      style={{
        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.2) 5px, rgba(255,255,255,0.2) 10px)"
      }}
    />
  );
}

export function StickyNote({ 
  children, 
  color = "yellow", 
  rotate = "-rotate-1", 
  className = "",
  pin = false 
}) {
  const colorStyles = {
    yellow: "bg-[#FEF9D9] border-[#F2E7B3] text-[#3D382B]",
    peach: "bg-[#FFEADB] border-[#F5D5C0] text-[#4A3830]",
    mint: "bg-[#EAF5E9] border-[#D4EBD2] text-[#2C4230]",
    cream: "bg-[#FDFBF7] border-[#E8DFC8] text-[#3A352F]"
  };

  return (
    <div 
      className={`relative p-4 md:p-5 rounded-sm border shadow-[3px_6px_16px_rgba(60,50,40,0.08)] transition-all duration-300 hover:shadow-[4px_10px_22px_rgba(60,50,40,0.12)] hover:-translate-y-0.5 ${colorStyles[color] || colorStyles.yellow} ${rotate} ${className}`}
    >
      {pin && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#E74C3C] shadow-[0_2px_4px_rgba(0,0,0,0.2)] border border-[#C0392B] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </div>
      )}
      {children}
    </div>
  );
}

export function Annotation({ 
  text, 
  direction = "right", 
  className = "", 
  heart = false,
  color = "text-[#685F54]"
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 font-hand font-medium text-lg md:text-xl ${color} select-none ${className}`}>
      <span>{text}</span>
      {heart && <span className="text-[#C85A32] text-sm">♡</span>}
      {direction === "right" && (
        <svg className="w-5 h-4 inline-block text-current transform translate-y-0.5" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 8 C 8 8, 14 7, 20 8" />
          <path d="M15 3 L 21 8 L 15 13" />
        </svg>
      )}
      {direction === "up-right" && (
        <svg className="w-4 h-4 inline-block text-current" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 16 C 8 12, 12 8, 16 4" />
          <path d="M8 4 L 16 4 L 16 12" />
        </svg>
      )}
      {direction === "down" && (
        <svg className="w-4 h-5 inline-block text-current transform translate-y-0.5" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2 C 8 8, 8 14, 8 20" />
          <path d="M3 15 L 8 21 L 13 15" />
        </svg>
      )}
    </span>
  );
}

export function StampCard({ children, className = "", onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`relative p-5 bg-[#FAF7F2] border border-dashed border-[#D6CABA] rounded-xs shadow-[0_4px_12px_rgba(50,40,30,0.04)] transition-all duration-300 hover:shadow-[0_8px_20px_rgba(50,40,30,0.08)] hover:-translate-y-1 ${className}`}
    >
      <div className="absolute inset-1 border border-[#EBE3D5] pointer-events-none rounded-[1px]" />
      {children}
    </div>
  );
}
