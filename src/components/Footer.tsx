import React from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-950/40 bg-[#07050d] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Status */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-sm font-bold text-white">
              {DEVELOPER_INFO.name}
            </div>
            <p className="text-xs text-slate-500">
              {DEVELOPER_INFO.role} · {DEVELOPER_INFO.experience}
            </p>
          </div>

          {/* Quick links to the 3 deployed apps */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a
              href="https://blackstonexlabs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              BlackstoneX Labs
            </a>
            <a
              href="https://auralab-ng.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              Aura Lab (Hair & Perfume)
            </a>
            <a
              href="https://bcome-ai.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              Become AI (Habit Tracker)
            </a>
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-lg border border-purple-900/40 bg-[#120e20] px-3 py-1.5 text-xs text-slate-300 hover:border-purple-600 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-purple-950/30 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} {DEVELOPER_INFO.name}. Built with React, TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};
