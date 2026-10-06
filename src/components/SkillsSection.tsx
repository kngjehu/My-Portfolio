import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Server, Terminal } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [Code, Server, Terminal];

  return (
    <section id="skills" className="scroll-mt-20 py-16 md:py-24 border-t border-purple-950/40 bg-[#07050d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
            <span>Capabilities</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Technical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Tech Stack & Competencies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Tools, libraries, and languages I leverage daily to construct resilient, full-stack web applications.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-purple-950/40 pb-4">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = icons[idx] || Code;
            const isActive = idx === activeTab;
            return (
              <button
                key={category.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25'
                    : 'bg-[#120e20] text-slate-400 hover:text-white hover:bg-purple-950/40'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Active Skills Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-xl border border-purple-900/30 bg-[#0e0b17] p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-white">
                  {SKILL_CATEGORIES[activeTab].title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {SKILL_CATEGORIES[activeTab].description}
                </p>
              </div>

              {/* Skill list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-lg border border-purple-900/20 bg-[#161124] hover:border-purple-700/50 transition-colors"
                  >
                    <span className="text-xs font-semibold text-slate-200">
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-mono text-purple-400">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code Architecture Demonstration Panel (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-purple-900/30 bg-[#090710] overflow-hidden shadow-xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e0b17] border-b border-purple-900/30 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-rose-500" />
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-[11px] text-slate-500">developer.config.ts</span>
                </div>
                <span className="text-[10px] text-purple-400 font-mono">TypeScript</span>
              </div>
              <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
{`// Jehu Ranyang Akafa · Engineer Profile
export const engineer = {
  name: "Jehu Ranyang Akafa",
  level: "Entry Level Full-stack",
  tenure: "< 1 year",
  deployedProjects: [
    "blackstonexlabs.vercel.app",
    "auralab-ng.vercel.app",
    "bcome-ai.vercel.app"
  ],
  strengths: [
    "Rapid prototype-to-prod cycle",
    "Component modularity & reuse",
    "Tailwind layout precision",
    "Eager learner & collaborator"
  ],
  readyToHire: true
};`}
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
