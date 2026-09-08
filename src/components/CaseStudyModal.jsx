import React, { useEffect } from "react";
import { X, ArrowUpRight, CheckCircle2, Users, Layers, Award, Sparkles, Clock, Target, BarChart3 } from "lucide-react";
import ProjectCardPreview from "./ProjectCardPreview";

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FBF9F5] rounded-xl shadow-2xl border border-[#E0D7C9] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F5EFEB]/95 backdrop-blur-md border-b border-[#E5DCD0]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#E8DFC8] text-[#554B3F] font-bold">
              {project.num}
            </span>
            <h2 className="font-editorial text-2xl md:text-3xl font-bold text-[#1E1B18]">
              {project.title}
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#6B6055] hover:text-[#1E1B18] hover:bg-[#EBE2D5] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-6 py-8 sm:px-10 space-y-10 text-left">
          
          {/* Hero Section */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 text-xs">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-[#EFE8DD] text-[#5A5046] font-medium">
                  {tag}
                </span>
              ))}
              <span className="px-3 py-1 rounded-full bg-[#ECE5D8] text-[#7A6E63] font-mono">
                {project.timeline}
              </span>
            </div>

            <p className="text-lg md:text-xl text-[#3A332C] font-normal leading-relaxed">
              {project.tagline}
            </p>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#E5DCD0] shadow-2xs">
                  <span className="text-[11px] uppercase tracking-wider text-[#8A7E72] font-semibold block">
                    {m.label}
                  </span>
                  <span className={`text-base font-bold mt-0.5 block ${m.highlight ? "text-[#C85A32]" : "text-[#2A241F]"}`}>
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Screen Preview */}
          <div className="rounded-xl p-4 sm:p-6 bg-[#EBE4D8] border border-[#D8CEBF] shadow-inner">
            <ProjectCardPreview id={project.id} />
          </div>

          {/* Problem & Opportunity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg bg-[#FFF8F5] border border-[#F2D7CD] space-y-2">
              <div className="flex items-center gap-2 text-[#C85A32] font-semibold text-sm">
                <Target className="w-4 h-4" />
                <span>The Core Problem</span>
              </div>
              <p className="text-sm text-[#4E3F38] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#F5FBF6] border border-[#D5EBD9] space-y-2">
              <div className="flex items-center gap-2 text-[#2E7D32] font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Design Hypothesis</span>
              </div>
              <p className="text-sm text-[#384E3F] leading-relaxed">
                {project.hypothesis}
              </p>
            </div>
          </div>

          {/* UX Research & Key Discoveries */}
          <div className="space-y-4">
            <h3 className="font-editorial text-2xl font-bold text-[#1E1B18] border-b border-[#E8DFC8] pb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#3D5A6C]" />
              <span>User Research & Behavioral Insights</span>
            </h3>
            <p className="text-sm text-[#5C5349] italic">
              {project.research.interviews}
            </p>

            <div className="space-y-2.5">
              {project.research.keyFindings.map((finding, idx) => (
                <div key={idx} className="p-3.5 rounded bg-[#FAF7F0] border-l-4 border-[#3D5A6C] border border-[#E8DFC8] text-sm text-[#3E3832]">
                  <span className="font-semibold text-[#3D5A6C] mr-1.5">Finding {idx + 1}:</span>
                  {finding}
                </div>
              ))}
            </div>
          </div>

          {/* Wireframes & Iteration Narrative */}
          <div className="space-y-3 p-5 rounded-lg bg-[#FEF9D9]/70 border border-[#F0E6B6]">
            <div className="flex items-center gap-2 font-hand text-xl font-bold text-[#8A6D1F]">
              <span>✏️ Wireframe Iterations & Decision Rationale</span>
            </div>
            <p className="text-sm text-[#52462A] leading-relaxed font-sans">
              {project.wireframeNotes}
            </p>
          </div>

          {/* The Solution Architecture */}
          <div className="space-y-4">
            <h3 className="font-editorial text-2xl font-bold text-[#1E1B18] border-b border-[#E8DFC8] pb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#C85A32]" />
              <span>Key Features & Design Execution</span>
            </h3>
            
            <div className="grid grid-cols-1 gap-3">
              {project.solution.map((sol, idx) => {
                const [title, desc] = sol.split(": ");
                return (
                  <div key={idx} className="p-4 rounded-lg bg-white border border-[#E2D8C8] shadow-2xs space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                      <h4 className="font-semibold text-sm text-[#26211C]">{title}</h4>
                    </div>
                    {desc && <p className="text-xs sm:text-sm text-[#5C5248] pl-6 leading-relaxed">{desc}</p>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Measurable Results & Business Outcomes */}
          <div className="space-y-4">
            <h3 className="font-editorial text-2xl font-bold text-[#1E1B18] border-b border-[#E8DFC8] pb-2 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#2E7D32]" />
              <span>Measurable Business & User Outcomes</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.results.map((res, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#FAF7F2] border border-[#E2D8C8] text-center space-y-1">
                  <span className="font-editorial text-2xl font-bold text-[#2E7D32] block">
                    {res.metric}
                  </span>
                  <p className="text-xs text-[#5E544A] leading-relaxed">
                    {res.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Action */}
        <div className="px-6 py-4 bg-[#F5EFEB] border-t border-[#E5DCD0] flex items-center justify-between">
          <span className="font-hand text-base text-[#7A6F64]">
            Crafted for high-impact production environments ♡
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-md bg-[#241F1B] text-[#FAF7F2] text-xs font-semibold tracking-wider uppercase hover:bg-[#3D352F] transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
