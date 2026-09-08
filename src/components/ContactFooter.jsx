import React, { useState } from "react";
import { Check, Copy, ArrowUpRight, FileText } from "lucide-react";
import { bioData } from "../data/bio";
import confetti from "canvas-confetti";

export default function ContactFooter({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(bioData.contact.email);
    setCopied(true);
    confetti({
      particleCount: 45,
      spread: 65,
      origin: { y: 0.85 },
      colors: ['#C8372D', '#244B7A', '#FAF7F2']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative pt-20 pb-0 bg-[#FAF7F2] text-[#211E1C] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 mb-20 text-center">
        
        {/* Header matching Image 2 */}
        <div className="space-y-2 mb-12">
          <span className="font-mono text-xs text-[#8A7E72] tracking-[0.3em] uppercase block">
            — REPLY ENVELOPE ENCLOSED —
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#191614] tracking-tight">
            Get in Touch
          </h2>
          <p className="font-hand text-xl text-[#8E4426] pt-1">
            I'd love to hear from you ♡
          </p>
        </div>

        {/* Vintage Airmail Envelope Container */}
        <div className="relative p-3.5 sm:p-4 rounded-xl shadow-[0_15px_45px_rgba(40,30,20,0.12)] airmail-stripes">
          
          {/* Inner Cream Paper Card */}
          <div className="bg-[#FAF7F2] rounded-lg p-6 sm:p-10 border border-[#DDD3C4] text-left relative space-y-6">
            
            {/* Top-left handwritten "Reply to:" */}
            <div className="border-b border-[#EAE2D5] pb-3 flex items-center justify-between">
              <span className="font-hand text-2xl sm:text-3xl text-[#6B5E52] select-none">
                Reply to:
              </span>
              <span className="font-mono text-[10px] text-[#A89D90] uppercase tracking-widest hidden sm:inline">
                AIRMAIL POSTAGE
              </span>
            </div>

            {/* Ruled Rows for Contact Info */}
            <div className="space-y-4">
              
              {/* Email */}
              <div 
                onClick={copyEmail}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-[#EAE2D5] hover:bg-white/60 px-2 rounded-sm transition-colors cursor-pointer"
                title="Click to copy email address"
              >
                <div className="flex items-baseline gap-6 sm:gap-12">
                  <span className="font-mono text-xs text-[#8A7E72] tracking-[0.2em] uppercase w-20 shrink-0">
                    EMAIL
                  </span>
                  <span className="font-sans text-sm sm:text-base font-medium text-[#1E1B18] group-hover:text-[#C8372D] transition-colors">
                    {bioData.contact.email}
                  </span>
                </div>
                <div className="mt-1 sm:mt-0 flex items-center gap-1.5 text-xs font-mono text-[#7A6E63]">
                  {copied ? (
                    <span className="text-[#2E7D32] font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> COPIED!
                    </span>
                  ) : (
                    <span className="group-hover:text-[#1E1B18] flex items-center gap-1">
                      <Copy className="w-3 h-3" /> CLICK TO COPY
                    </span>
                  )}
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={bioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-[#EAE2D5] hover:bg-white/60 px-2 rounded-sm transition-colors"
              >
                <div className="flex items-baseline gap-6 sm:gap-12">
                  <span className="font-mono text-xs text-[#8A7E72] tracking-[0.2em] uppercase w-20 shrink-0">
                    LINKEDIN
                  </span>
                  <span className="font-sans text-sm sm:text-base font-medium text-[#1E1B18] group-hover:text-[#244B7A] transition-colors">
                    /in/bhuvana
                  </span>
                </div>
                <span className="text-xs font-mono text-[#7A6E63] group-hover:text-[#1E1B18] mt-1 sm:mt-0 flex items-center gap-1">
                  CONNECT <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>

              {/* GitHub */}
              <a
                href={bioData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-[#EAE2D5] hover:bg-white/60 px-2 rounded-sm transition-colors"
              >
                <div className="flex items-baseline gap-6 sm:gap-12">
                  <span className="font-mono text-xs text-[#8A7E72] tracking-[0.2em] uppercase w-20 shrink-0">
                    GITHUB
                  </span>
                  <span className="font-sans text-sm sm:text-base font-medium text-[#1E1B18] group-hover:text-[#1E1B18] transition-colors">
                    @bhuvana
                  </span>
                </div>
                <span className="text-xs font-mono text-[#7A6E63] group-hover:text-[#1E1B18] mt-1 sm:mt-0 flex items-center gap-1">
                  VIEW CODE <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>

              {/* Location */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-[#EAE2D5] px-2">
                <div className="flex items-baseline gap-6 sm:gap-12">
                  <span className="font-mono text-xs text-[#8A7E72] tracking-[0.2em] uppercase w-20 shrink-0">
                    LOCATION
                  </span>
                  <span className="font-sans text-sm sm:text-base font-medium text-[#1E1B18]">
                    India (Open to Relocation)
                  </span>
                </div>
                <span className="text-xs font-mono text-[#2E7D32] font-semibold mt-1 sm:mt-0">
                  OPEN TO ROLES
                </span>
              </div>

              {/* Resume Trigger */}
              <div 
                onClick={onOpenResume}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-3 hover:bg-white/60 px-2 rounded-sm transition-colors cursor-pointer"
              >
                <div className="flex items-baseline gap-6 sm:gap-12">
                  <span className="font-mono text-xs text-[#8A7E72] tracking-[0.2em] uppercase w-20 shrink-0">
                    RESUME
                  </span>
                  <span className="font-sans text-sm sm:text-base font-medium text-[#1E1B18] group-hover:text-[#C8372D] transition-colors flex items-center gap-1.5">
                    View Full Resume PDF
                  </span>
                </div>
                <span className="text-xs font-mono text-[#C8372D] font-bold mt-1 sm:mt-0">
                  PDF PREVIEW ↓
                </span>
              </div>

            </div>

            {/* Bottom-right Vintage Postage Permit Box */}
            <div className="pt-4 flex justify-end">
              <div className="p-3 border-2 border-[#8E4426]/70 rounded-xs text-center font-mono text-[9px] text-[#8E4426] tracking-wider leading-snug select-none shadow-2xs rotate-[-1deg]">
                <div className="border border-[#8E4426]/40 p-2">
                  <p className="font-bold uppercase">NO POSTAGE</p>
                  <p className="uppercase">NECESSARY</p>
                  <p className="uppercase text-[8px] text-[#A05C3D]">IF MAILED IN 2026</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Full-Width Dark Footer Bar with Top Airmail Stripe */}
      <div className="w-full bg-[#181512] text-[#E5DDD2] pt-0 pb-10 relative">
        
        {/* Top Airmail Striped Ribbon */}
        <div className="w-full h-3.5 airmail-stripes shadow-inner" />

        <div className="max-w-4xl mx-auto px-6 pt-8 text-center space-y-3">
          
          {/* Handwritten Subtitle in Caveat */}
          <p className="font-hand text-xl sm:text-2xl text-[#E5DDD2]/90">
            Bhuvana Shree N. — Product Designer & UX Researcher
          </p>

          {/* Copyright line in monospace */}
          <p className="font-mono text-[10px] text-[#9E9385] tracking-[0.25em] uppercase">
            PORTFOLIO © 2026 — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
