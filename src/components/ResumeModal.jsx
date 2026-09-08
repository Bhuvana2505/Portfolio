import React, { useEffect } from "react";
import { X, Printer, Mail, GraduationCap, Briefcase, Award } from "lucide-react";
import { bioData } from "../data/bio";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-xl shadow-2xl border border-[#E0D7C9] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#FAF7F2] border-b border-[#E5DCD0]">
          <span className="font-mono text-xs text-[#7A6E63] uppercase tracking-wider font-semibold">
            Bhuvana_Shree_Resume_2026.pdf
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#D5C9B8] bg-white text-xs font-semibold text-[#3D352E] hover:bg-[#F3EDE3] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href={`mailto:${bioData.contact.email}?subject=Interview%20Invitation%20-%20Product%20Design`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#191614] text-white text-xs font-semibold hover:bg-[#38312B] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Candidate</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-[#7A6E63] hover:text-[#191614] hover:bg-[#EFE8DD] transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-left bg-white text-[#211E1C]">
          
          {/* Header */}
          <div className="border-b border-[#EAE2D5] pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-[#141210]">
                {bioData.name}
              </h1>
              <span className="text-xs font-mono text-[#8E4426] font-semibold tracking-wider uppercase">
                {bioData.graduationBadge}
              </span>
            </div>

            <p className="text-sm font-semibold tracking-widest text-[#5A5046] uppercase">
              {bioData.role}
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-[#6B6055] pt-1">
              <span>✉ {bioData.contact.email}</span>
              <span>•</span>
              <span>🔗 linkedin.com/in/bhuvana</span>
              <span>•</span>
              <span>📍 India (Open to Relocation)</span>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A7E72] border-b border-[#EFE8DD] pb-1">
              Skills & Methodologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1.5">
                <span className="font-semibold text-[#1E1B18] block">UX Research & Strategy:</span>
                <p className="text-[#554C42] leading-relaxed">
                  User Interviews, Contextual Inquiries, Affinity Mapping, Persona Creation, User Journey Maps, Heuristic Evaluation, Usability Testing (SUS).
                </p>
              </div>
              <div className="space-y-1.5">
                <span className="font-semibold text-[#1E1B18] block">Product & UI Design:</span>
                <p className="text-[#554C42] leading-relaxed">
                  Design Systems & Token Architectures, Responsive Web/Mobile, Auto Layout, Interactive Prototyping, Accessibility (WCAG 2.1 AA/AAA), Microcopy.
                </p>
              </div>
              <div className="space-y-1.5">
                <span className="font-semibold text-[#1E1B18] block">Tool Stack:</span>
                <p className="text-[#554C42] leading-relaxed">
                  Figma, FigJam, Miro, Framer, Notion, Maze, Adobe Creative Cloud, HTML5/CSS3 basics.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Product Design Projects */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A7E72] border-b border-[#EFE8DD] pb-1 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#A05C3D]" />
              <span>Selected Product Case Studies</span>
            </h2>

            {/* Synapse */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-[#191614]">
                  Synapse — AI Cognitive Learning Platform (Lead Product Designer & UX Researcher)
                </h3>
                <span className="text-xs font-mono text-[#7A6E63]">Fall 2025</span>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#52483E] space-y-1">
                <li>Conducted 12 user interviews across university student cohorts to map cognitive friction points in study scheduling.</li>
                <li>Designed an adaptive daily blueprint and spaced-repetition workflow, yielding a <strong>36% increase in 30-day retention</strong>.</li>
                <li>Iterated 3 prototype cycles in Figma and Framer, reducing session initiation delay by an average of 18 minutes.</li>
              </ul>
            </div>

            {/* Avira */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-[#191614]">
                  Avira — Collaborative Event & Wedding Workspace (UX/UI Lead)
                </h3>
                <span className="text-xs font-mono text-[#7A6E63]">2025</span>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#52483E] space-y-1">
                <li>Interviewed 8 couples and 4 event planners to synthesize vendor friction into an interactive milestone canvas.</li>
                <li>Streamlined vendor quotation reviews, decreasing overall planning management time by <strong>50%</strong>.</li>
                <li>Developed responsive web component library with comprehensive design tokens.</li>
              </ul>
            </div>

            {/* MediTrack */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-[#191614]">
                  MediTrack — Chronic Care & Adherence Platform (UX Researcher)
                </h3>
                <span className="text-xs font-mono text-[#7A6E63]">2025</span>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#52483E] space-y-1">
                <li>Researched adherence barriers for 10 chronic condition patients, architecting a 1-tap lockscreen logging flow.</li>
                <li>Achieved <strong>40% boost in daily logging efficiency</strong> and 88% clinical approval rating for physician export reports.</li>
              </ul>
            </div>

            {/* Color Ease */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold text-[#191614]">
                  Color Ease — Accessible Design Token Engine (Design Systems Architect)
                </h3>
                <span className="text-xs font-mono text-[#7A6E63]">2025</span>
              </div>
              <ul className="list-disc pl-4 text-xs text-[#52483E] space-y-1">
                <li>Built an automated APCA & WCAG contrast scoring tool tested with 15+ low-vision and CVD participants.</li>
                <li>Awarded <strong>3rd Place at InnoVeX National Design Challenge</strong> for accessibility innovation.</li>
              </ul>
            </div>
          </div>

          {/* Education & Leadership */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A7E72] border-b border-[#EFE8DD] pb-1 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#3D5A6C]" />
                <span>Education</span>
              </h2>
              <div className="text-xs text-[#52483E] space-y-1">
                <p className="font-bold text-[#191614]">Bachelor of Design (B.Des / UX)</p>
                <p>Graduation: 2026 • Top Academic Standing</p>
                <p className="text-[#7A6E63]">Coursework: Human-Computer Interaction, Information Architecture, Cognitive Psychology, Design Systems.</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A7E72] border-b border-[#EFE8DD] pb-1 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#E74C3C]" />
                <span>Leadership & Honors</span>
              </h2>
              <ul className="text-xs text-[#52483E] space-y-1 list-disc pl-4">
                <li><strong>GDG Design Team</strong> — Core Member & Student Mentor</li>
                <li><strong>Dept Lead</strong> — VerTechX (Managed student design team for annual symposium)</li>
                <li><strong>TEDx</strong> — Visual Editor & Storytelling Coordinator</li>
                <li><strong>Inscribe Workshop Speaker</strong> — Micro-interactions in UX</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
