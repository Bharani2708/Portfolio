import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection } from './sections/ContactSection';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Top Floating Glass Navigation */}
      <Navbar />

      {/* Main Single-Page Cinematic Flow */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Futuristic Cyber Footer */}
      <Footer />
    </div>
  );
}

export default App;
