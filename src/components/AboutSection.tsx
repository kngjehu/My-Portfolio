import React from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { Code2, Zap, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Web Engineering',
      description: 'Building responsive user interfaces with modern React and TypeScript, paired with clean API integrations.',
    },
    {
      icon: Zap,
      title: 'Real Production Experience',
      description: 'Deployed multiple live production web applications on Vercel with fast page loads and mobile-first design.',
    },
    {
      icon: ShieldCheck,
      title: 'Clean Code & Accessibility',
      description: 'Disciplined component structure, semantic HTML, and accessible contrast standards across all viewports.',
    },
  ];

  return (
    <section id="about" className="scroll-mt-20 py-16 md:py-24 border-t border-purple-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
            <span>About</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Profile & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Jehu Ranyang Akafa
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I am an entry-level Full-stack Developer with less than a year of experience, focused on creating clean, practical, and responsive web applications.
          </p>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              My focus is on practical implementation: taking ideas from layout to live production deployments on modern cloud hosting platforms like Vercel.
            </p>
            <p>
              My deployed projects so far include:
            </p>
            <ul className="space-y-3 text-sm text-slate-300 pl-4 border-l-2 border-purple-600/40">
              <li>
                <strong className="text-white">BlackstoneX Labs</strong>: High-performance web development and automation platform.
              </li>
              <li>
                <strong className="text-white">Aura Lab</strong>: Luxury beauty brand platform for wig revamping, custom installations, and curated perfumes.
              </li>
              <li>
                <strong className="text-white">Become AI</strong>: AI-powered habit tracking and personal transformation system.
              </li>
            </ul>
            <p>
              I am currently available for full-time junior and entry-level developer roles, contracts, and collaborative engineering projects.
            </p>
          </div>

          {/* Highlights Column */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-purple-900/30 bg-[#0e0b17] p-5 hover:border-purple-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
