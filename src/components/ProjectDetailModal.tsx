import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2, Cpu, Sparkles, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl rounded-2xl border border-purple-900/40 bg-[#0e0b17] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-purple-900/40 px-6 py-4 bg-[#090710]">
          <div className="flex items-center gap-3">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: project.accentColor }}
            />
            <span className="text-xs font-mono uppercase tracking-wider text-purple-300">
              {project.category} · Case Study
            </span>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-purple-950 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Title & Live Action Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-purple-400">
                {project.tagline}
              </p>
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-xs font-bold text-white hover:bg-purple-500 transition-colors shadow-sm shrink-0"
            >
              <span>Visit Live Web App</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Project Preview Image */}
          <div className="rounded-xl overflow-hidden border border-purple-900/40 bg-black shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-96"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Deep Description */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300">
              Project Overview & Mission
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              {project.detailedDescription}
            </p>
          </div>

          {/* Highlights & Accomplishments */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300">
              Key Engineering Accomplishments
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-purple-900/30 bg-[#161224] p-3.5 text-xs text-slate-300 flex items-start gap-2.5"
                >
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 mt-0.5"
                    style={{ color: project.accentColor }}
                  />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Notes & Key Learnings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="rounded-xl border border-purple-900/30 bg-[#120e20] p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-200">
                <Cpu className="h-4 w-4 text-purple-400" />
                <span>Architecture Decisions</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {project.architectureNotes}
              </p>
            </div>

            <div className="rounded-xl border border-purple-900/30 bg-[#120e20] p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-200">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span>Developer Learnings</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {project.keyLearnings}
              </p>
            </div>
          </div>

          {/* Tech Stack & Benchmarks */}
          <div className="border-t border-purple-900/30 pt-6 space-y-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                Technologies & Tools
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-[#161224] border border-purple-900/40 text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono pt-3 border-t border-purple-900/30">
              <div>
                <span className="text-slate-500">Live URL: </span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  {project.liveUrl}
                </a>
              </div>
              <div>
                <span className="text-slate-500">Benchmark: </span>
                <span className="text-purple-300">{project.metrics}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="border-t border-purple-900/40 px-6 py-4 bg-[#090710] flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Deployed on Vercel Edge
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg transition-colors"
            >
              Close
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors shadow-sm"
            >
              <span>Launch Site</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
