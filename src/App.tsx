/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCarousel } from './components/ProjectCarousel';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { DevicePreviewModal } from './components/DevicePreviewModal';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const avatarPath = '/assets/images/avatar_jehu_portrait_1791287285360.jpg';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090710] text-slate-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-200">
      {/* Top Bar Navigation */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
          avatarSrc={avatarPath}
        />

        {/* Featured Project Carousel & Deep Dive */}
        <ProjectCarousel
          onSelectProject={(project) => setSelectedProject(project)}
          onPreviewDevice={(project) => setPreviewProject(project)}
        />

        {/* About & Narrative */}
        <AboutSection />

        {/* Tech Stack & Capabilities */}
        <SkillsSection />

        {/* Interactive CLI Terminal for Recruiters & Engineers */}
        <InteractiveTerminal />

        {/* Contact & Hire Me */}
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <DevicePreviewModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />
    </div>
  );
}
