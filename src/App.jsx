import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import DesignProcess from "./components/DesignProcess";
import Achievements from "./components/Achievements";
import AboutMe from "./components/AboutMe";
import ContactFooter from "./components/ContactFooter";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#211E1C] flex flex-col justify-between selection:bg-[#EAE0D2] selection:text-[#1A1816]">
      {/* Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <SelectedWork />
        <DesignProcess />
        <Achievements />
        <AboutMe onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Bottom Contact / Footer */}
      <ContactFooter onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}
