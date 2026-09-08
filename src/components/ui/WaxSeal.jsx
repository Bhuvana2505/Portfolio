import React from "react";

export default function WaxSeal({ size = 72, className = "", label = "B" }) {
  return (
    <div 
      className={`relative inline-flex items-center justify-center select-none group cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
      title="Monogram Wax Seal"
    >
      {/* Outer irregular wax rim */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-[0_8px_16px_rgba(40,55,70,0.35)] filter transition-all duration-300"
      >
        <defs>
          <radialGradient id="waxGrad" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#6C879B" />
            <stop offset="45%" stopColor="#4A6578" />
            <stop offset="85%" stopColor="#314859" />
            <stop offset="100%" stopColor="#223340" />
          </radialGradient>
          <filter id="waxTexture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feComposite in="SourceGraphic" in2="noise" operator="arithmetic" k1="0" k2="1" k3="0.08" k4="0" />
          </filter>
        </defs>

        {/* Wax melted blob shape */}
        <path
          d="M 50 4 C 65 3, 78 8, 88 20 C 98 32, 97 48, 93 64 C 89 80, 78 92, 62 96 C 46 100, 28 97, 16 86 C 4 75, 2 58, 6 42 C 10 26, 25 10, 50 4 Z"
          fill="url(#waxGrad)"
          stroke="#2A3D4C"
          strokeWidth="1.5"
        />

        {/* Inner pressed rim ring */}
        <circle 
          cx="50" 
          cy="50" 
          r="34" 
          fill="none" 
          stroke="#384F60" 
          strokeWidth="2.5" 
          strokeDasharray="2 1"
          opacity="0.7"
        />
        <circle 
          cx="50" 
          cy="50" 
          r="30" 
          fill="#3E576A" 
          stroke="#283945" 
          strokeWidth="1.5" 
          className="shadow-inner"
        />

        {/* Wax highlight shine */}
        <ellipse 
          cx="42" 
          cy="32" 
          rx="18" 
          ry="10" 
          fill="#8CA5B7" 
          opacity="0.25" 
          transform="rotate(-20 42 32)"
        />

        {/* Monogram Letter */}
        <text 
          x="50" 
          y="62" 
          textAnchor="middle" 
          fontFamily="'Instrument Serif', 'Newsreader', Georgia, serif" 
          fontSize="40" 
          fontWeight="bold" 
          fill="#E7EFF5"
          filter="drop-shadow(0 -1px 1px rgba(255,255,255,0.4)) drop-shadow(0 2px 2px rgba(15,25,35,0.8))"
          className="select-none tracking-normal"
        >
          {label}
        </text>
      </svg>
    </div>
  );
}
