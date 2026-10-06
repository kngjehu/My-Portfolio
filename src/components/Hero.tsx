import React, { useState } from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { ArrowDown, Copy, Check, ExternalLink, Terminal, Mail, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
  avatarSrc: string;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onContactClick,
  avatarSrc,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background ambient purple lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-20 -z-10 h-80 w-80 rounded-full bg-violet-600/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Editorial Introduction & Typographic Hierarchy */}
          <div className="lg:col-span-7">
            {/* Unboxed editorial kicker */}
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-purple-400">
              <span>{DEVELOPER_INFO.role}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{DEVELOPER_INFO.experience}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Hire
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Crafting modern web software with high velocity & precision.
            </h1>

            {/* Sub-copy / Bio */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl">
              Hello, I'm <strong className="font-semibold text-white">{DEVELOPER_INFO.name}</strong>. 
              In less than a year of full-stack engineering, I've transformed from building core primitives to shipping 
              three distinct production web applications across high-scale digital platforms, luxury e-commerce, and AI habit tracking.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-600/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
              >
                <span>Explore Live Projects</span>
                <ArrowDown className="h-4 w-4" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-purple-900/50 bg-[#120e20] px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-purple-600 hover:bg-purple-950/40 hover:text-white"
              >
                <span>Get in Touch</span>
                <Mail className="h-4 w-4 text-purple-400" />
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-400 transition-colors hover:border-slate-700 hover:text-slate-200"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span className="text-xs">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quantitative Stats Row */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-purple-950/40 pt-6 sm:grid-cols-4">
              {DEVELOPER_INFO.stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl font-bold tracking-tight text-white font-mono tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Anchor & Developer Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-2xl border border-purple-900/40 bg-[#0e0b17] p-6 shadow-2xl shadow-purple-950/30">
              
              {/* Card Header with Clean Avatar Presentation (No edit buttons) */}
              <div className="flex items-center gap-4">
                <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-2xl border border-purple-800/60 bg-gradient-to-br from-purple-900/60 via-purple-950 to-slate-950 flex items-center justify-center shadow-inner">
                  {/* Styled Avatar with initials monogram */}
                  <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-purple-400">
                    JA
                  </div>
                  {/* Active status pip */}
                  <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#0e0b17]" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-lg font-bold text-white">
                    {DEVELOPER_INFO.name}
                  </h3>
                  <p className="truncate text-xs text-slate-400">
                    {DEVELOPER_INFO.role}
                  </p>
                  <p className="mt-1 text-xs text-purple-400 font-medium">
                    {DEVELOPER_INFO.location}
                  </p>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-5 rounded-lg border border-purple-950/60 bg-purple-950/20 p-3 text-xs text-slate-300">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span className="font-semibold text-purple-200">Engineering Focus</span>
                  <span className="font-mono text-[10px] text-purple-400">active</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Building scalable Full-stack applications with React 19, TypeScript, modern REST/Edge backends, and responsive UI systems.
                </p>
              </div>

              {/* Featured Deployed Stack Previews */}
              <div className="mt-4 space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Live Deployed Showcases
                </div>
                <div className="space-y-1.5 text-xs">
                  <a
                    href="https://blackstonexlabs.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-md p-2 bg-slate-900/60 hover:bg-purple-950/50 hover:text-purple-300 border border-slate-800/80 hover:border-purple-800/50 transition-all text-slate-300 group"
                  >
                    <span className="font-medium">BlackstoneX Labs</span>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-purple-400">
                      blackstonexlabs.vercel.app
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </a>
                  <a
                    href="https://auralab-ng.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-md p-2 bg-slate-900/60 hover:bg-purple-950/50 hover:text-purple-300 border border-slate-800/80 hover:border-purple-800/50 transition-all text-slate-300 group"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium">Aura Lab</span>
                      <span className="text-[10px] text-purple-400 font-mono">(Hair & Perfume)</span>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-purple-400">
                      auralab-ng.vercel.app
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </a>
                  <a
                    href="https://bcome-ai.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-md p-2 bg-slate-900/60 hover:bg-purple-950/50 hover:text-purple-300 border border-slate-800/80 hover:border-purple-800/50 transition-all text-slate-300 group"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium">Become AI</span>
                      <span className="text-[10px] text-purple-400 font-mono">(Habit Tracker)</span>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-purple-400">
                      bcome-ai.vercel.app
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Quick CLI affordance */}
              <div className="mt-5 pt-4 border-t border-purple-950/40 flex items-center justify-between text-xs">
                <a
                  href="#terminal"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-purple-400 transition-colors"
                >
                  <Terminal className="h-3.5 w-3.5 text-purple-400" />
                  <span>Launch interactive terminal</span>
                </a>
                <span className="text-slate-500 font-mono text-[11px]">scroll or click</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
