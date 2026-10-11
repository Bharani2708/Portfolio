import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SkillsSection } from './sections/SkillsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Floating Glass Navigation Header with Scroll Spy */}
      <Navbar />

      {/* Single-Page Smooth Scrolling Flow */}
      <main className="flex-1">
        {/* 1. Landing Page / Hero Section */}
        <HeroSection />

        {/* 2. Projects Showcase */}
        <ProjectsSection />

        {/* 3. Professional Experience & Internships */}
        <ExperienceSection />

        {/* 4. Technical & Soft Skills */}
        <SkillsSection />

        {/* 5. Education & Schooling Credentials */}
        <EducationSection />

        {/* 6. Contact Section (At Last) */}
        <ContactSection />
      </main>

      {/* Futuristic Cyber Footer */}
      <Footer />
    </div>
  );
}

export default App;
