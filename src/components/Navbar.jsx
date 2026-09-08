import React, { useState, useEffect } from "react";
import { Annotation } from "./ui/NotebookElements";
import { Menu, X, FileText } from "lucide-react";

export default function Navbar({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ["work", "process", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "WORK", href: "#work", id: "work" },
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "PROCESS", href: "#process", id: "process" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#EAE2D5] shadow-xs py-3.5" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left Handwritten Annotation / Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="group flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#3D5A6C] text-[#FAF6F0] flex items-center justify-center font-editorial font-bold text-lg shadow-xs group-hover:scale-105 transition-transform">
              B
            </span>
            <div className="hidden sm:block">
              <Annotation text="open when you're curious." direction="right" className="text-sm md:text-base text-[#7A7065]" />
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xs font-semibold tracking-[0.2em] transition-all relative py-1 ${
                activeSection === link.id
                  ? "text-[#1E1B18] font-bold"
                  : "text-[#756C63] hover:text-[#1E1B18]"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C85A32] rounded-full" />
              )}
            </a>
          ))}

          {/* Quick Resume Link */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#D5C9B8] bg-[#F5EFE6] text-xs font-semibold tracking-wider text-[#3D352E] hover:bg-[#ECE3D5] hover:border-[#BEB09C] transition-all shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5 text-[#A05C3D]" />
            <span>RESUME</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 rounded border border-[#D5C9B8] text-[11px] font-semibold text-[#3D352E]"
          >
            RESUME
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-[#3D352E] hover:bg-[#EFE8DD] transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 bg-[#FAF7F2] border-b border-[#E5DCD0] shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-semibold tracking-widest py-2 border-b border-[#EFE8DD] ${
                  activeSection === link.id ? "text-[#C85A32] font-bold" : "text-[#5A5046]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
