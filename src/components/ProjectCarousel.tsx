import React, { useState, useEffect, useRef } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Play,
  Pause,
  Layers,
  Sparkles,
  Maximize2,
  CheckCircle2,
  Monitor,
  LayoutGrid
} from 'lucide-react';

interface ProjectCarouselProps {
  onSelectProject: (project: Project) => void;
  onPreviewDevice: (project: Project) => void;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  onSelectProject,
  onPreviewDevice,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [progress, setProgress] = useState(0);

  const activeProject = PROJECTS[currentIndex];
  const timerRef = useRef<number | null>(null);
  const AUTOPLAY_INTERVAL = 6000;

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying || viewMode === 'grid') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const startTime = Date.now();
    setProgress(0);

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / AUTOPLAY_INTERVAL) * 100, 100);
      setProgress(pct);

      if (elapsed >= AUTOPLAY_INTERVAL) {
        setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
      }
    }, 50);

    timerRef.current = interval;

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPlaying, viewMode]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    setProgress(0);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="relative scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-purple-950/40">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
              <span>Featured Work</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">3 Production Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Selected Projects & Systems
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Real-world web applications architected, developed, and deployed to production on Vercel within my first year of software engineering.
            </p>
          </div>

          {/* View mode toggle & auto-play control */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-[#100d1c] border border-purple-900/40 rounded-lg p-1">
              <button
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  viewMode === 'carousel'
                    ? 'bg-purple-600 text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Carousel View</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  viewMode === 'grid'
                    ? 'bg-purple-600 text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>All Projects (3)</span>
              </button>
            </div>

            {viewMode === 'carousel' && (
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-purple-900/40 bg-[#100d1c] text-slate-400 hover:text-white hover:border-purple-700/60 transition-colors"
                title={isPlaying ? 'Pause slideshow' : 'Resume slideshow'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-purple-400" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-purple-400" />
                    <span className="hidden sm:inline">Play</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Carousel View Mode */}
        {viewMode === 'carousel' ? (
          <div className="mt-10">
            {/* Main Stage */}
            <div className="relative rounded-2xl border border-purple-900/40 bg-[#0e0b17] overflow-hidden shadow-2xl transition-all duration-300">
              
              {/* Autoplay Progress Line */}
              {isPlaying && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-purple-950/80 z-20 overflow-hidden">
                  <div
                    className="h-full bg-purple-500 transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
                
                {/* Visual Showcase (7 cols) */}
                <div className="lg:col-span-7 relative group bg-black flex flex-col justify-between overflow-hidden">
                  {/* Project Screenshot / Mockup */}
                  <div className="relative h-64 sm:h-80 lg:h-full w-full overflow-hidden">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay for Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b17] via-transparent to-black/30 pointer-events-none" />

                    {/* Top Overlay Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-xs font-mono font-medium text-slate-300 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: activeProject.accentColor }}
                      />
                      <span>{activeProject.category}</span>
                    </div>

                    {/* Viewport & Device Preview Trigger */}
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                      <button
                        onClick={() => onPreviewDevice(activeProject)}
                        className="flex items-center gap-1.5 text-xs text-slate-200 bg-black/80 backdrop-blur-md hover:bg-black px-3 py-1.5 rounded-md border border-white/10 transition-colors"
                        title="Open device responsive frame"
                      >
                        <Monitor className="w-3.5 h-3.5 text-purple-400" />
                        <span className="hidden sm:inline">Responsive Frame</span>
                      </button>
                    </div>

                    {/* Carousel Nav Arrows */}
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-black/90 hover:scale-110 transition-all opacity-80 hover:opacity-100 z-10"
                      aria-label="Previous project"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-black/90 hover:scale-110 transition-all opacity-80 hover:opacity-100 z-10"
                      aria-label="Next project"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Information & Deep Details Panel (5 cols) */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-purple-900/30 bg-[#0e0b17]">
                  <div>
                    {/* Unboxed Metadata Header */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span className="text-purple-400 font-semibold font-mono">
                        0{currentIndex + 1} / 0{PROJECTS.length}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{activeProject.role}</span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {activeProject.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-purple-300">
                      {activeProject.tagline}
                    </p>

                    {/* Detailed Summary */}
                    <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                      {activeProject.summary}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="mt-5 space-y-2">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Key Highlights
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {activeProject.highlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2
                              className="h-3.5 w-3.5 shrink-0 mt-0.5 text-purple-400"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="mt-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded bg-[#161224] border border-purple-900/40 text-purple-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics Bar */}
                    <div className="mt-5 pt-3 border-t border-purple-900/30 text-xs text-slate-400 font-mono">
                      <span className="text-slate-500">Benchmark: </span>
                      <span className="text-purple-200">{activeProject.metrics}</span>
                    </div>
                  </div>

                  {/* Actions & Live Links */}
                  <div className="mt-8 pt-4 border-t border-purple-900/30 flex flex-wrap items-center gap-3">
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-purple-500 transition-colors shadow-sm shadow-purple-600/30"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    <button
                      onClick={() => onSelectProject(activeProject)}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple-900/50 bg-[#161224] px-4 py-2.5 text-xs font-medium text-slate-200 hover:border-purple-600 hover:text-white transition-colors"
                    >
                      <Maximize2 className="h-3.5 w-3.5 text-purple-400" />
                      <span>Full Case Study</span>
                    </button>

                    <button
                      onClick={() => onPreviewDevice(activeProject)}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-purple-900/40 bg-[#100d1c] px-3 py-2.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
                      title="Preview in frame"
                    >
                      <Monitor className="h-3.5 w-3.5 text-purple-400" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Thumbnail Navigation Bar */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PROJECTS.map((project, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={project.id}
                    onClick={() => handleThumbnailClick(idx)}
                    className={`text-left p-4 rounded-xl border transition-all flex items-center gap-3.5 ${
                      isActive
                        ? 'border-purple-500 bg-purple-950/40 shadow-lg shadow-purple-950/30'
                        : 'border-purple-900/30 bg-[#0e0b17] hover:border-purple-800/50 hover:bg-[#161124] text-slate-400'
                    }`}
                  >
                    <div className="h-12 w-16 shrink-0 rounded-lg overflow-hidden border border-purple-900/40 relative bg-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-purple-600/15 ring-1 ring-inset ring-purple-500" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-bold truncate ${
                            isActive ? 'text-white' : 'text-slate-300'
                          }`}
                        >
                          {project.title}
                        </span>
                        <span className="text-[10px] font-mono text-purple-400">
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {project.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Carousel Dot Indicators */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {PROJECTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleThumbnailClick(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-8 bg-purple-500'
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        ) : (
          /* Grid View Mode */
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="rounded-2xl border border-purple-900/30 bg-[#0e0b17] overflow-hidden flex flex-col justify-between hover:border-purple-700/60 transition-all group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-slate-200 border border-white/10">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-[11px] font-mono text-purple-400 mb-1">
                      Project 0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-purple-300 mt-1 mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161224] border border-purple-900/40 text-purple-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-purple-900/30 flex items-center justify-between gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => onPreviewDevice(project)}
                      className="p-1.5 rounded hover:bg-purple-950 text-slate-400 hover:text-white transition-colors"
                      title="Responsive Preview"
                    >
                      <Monitor className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-2.5 py-1 rounded bg-purple-950/70 border border-purple-800/40 hover:bg-purple-900 text-xs text-purple-200 font-medium transition-colors"
                    >
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
