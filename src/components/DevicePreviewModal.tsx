import React, { useState, useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Monitor, Tablet, Smartphone } from 'lucide-react';

interface DevicePreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

export const DevicePreviewModal: React.FC<DevicePreviewModalProps> = ({
  project,
  onClose,
}) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setIframeError(false);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const deviceWidths = {
    desktop: 'w-full max-w-5xl h-[560px]',
    tablet: 'w-[640px] h-[580px]',
    mobile: 'w-[360px] h-[600px]',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-6xl max-h-[96vh] rounded-2xl border border-purple-900/40 bg-[#090710] shadow-2xl flex flex-col z-10 overflow-hidden">
        
        {/* Device Controls Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-purple-900/40 px-4 py-3 bg-[#0e0b17] gap-3">
          
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-white tracking-tight truncate max-w-[200px]">
              {project.title}
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">·</span>
            <span className="text-xs text-purple-400 font-mono hidden sm:inline truncate max-w-[220px]">
              {project.liveUrl}
            </span>
          </div>

          {/* Viewport switchers */}
          <div className="flex items-center gap-1 bg-[#161224] border border-purple-900/40 rounded-lg p-1">
            <button
              onClick={() => setDevice('desktop')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                device === 'desktop'
                  ? 'bg-purple-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Desktop View (1440px)"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                device === 'tablet'
                  ? 'bg-purple-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Tablet View (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tablet</span>
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                device === 'mobile'
                  ? 'bg-purple-600 text-white font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile View (375px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
          </div>

          {/* Close & external link */}
          <div className="flex items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-purple-300 hover:text-white bg-purple-950/40 border border-purple-800/40 px-2.5 py-1 rounded"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-purple-950 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

        </div>

        {/* Device Stage Canvas */}
        <div className="flex-1 bg-[#050408] p-4 sm:p-8 flex items-center justify-center overflow-auto">
          <div
            className={`transition-all duration-300 rounded-xl border border-purple-900/40 bg-[#0e0b17] shadow-2xl overflow-hidden flex flex-col ${deviceWidths[device]}`}
          >
            {/* Device mock browser chrome */}
            <div className="h-8 bg-[#090710] border-b border-purple-900/30 px-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-[10px] font-mono text-purple-300 bg-[#161224] px-3 py-0.5 rounded truncate max-w-[280px]">
                {project.liveUrl}
              </div>
              <div className="w-10" />
            </div>

            {/* Content area: Iframe or Screenshot Preview with fallback */}
            <div className="relative flex-1 bg-black overflow-auto">
              {!iframeError ? (
                <iframe
                  src={project.liveUrl}
                  title={project.title}
                  className="w-full h-full border-0 bg-black"
                  onError={() => setIframeError(true)}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              ) : null}

              {/* Fallback image view in case cross-origin iframe security prevents embedding */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black ${
                  iframeError ? 'block' : 'pointer-events-none opacity-0'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-64 rounded-lg border border-purple-900/40 mb-4 object-cover"
                />
                <p className="text-xs text-slate-400 max-w-sm mb-3">
                  This website employs security headers restricting external frame embedding. Launch the site directly in a fresh tab for the interactive experience.
                </p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-purple-600 text-white hover:bg-purple-500"
                >
                  <span>Launch {project.title}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
