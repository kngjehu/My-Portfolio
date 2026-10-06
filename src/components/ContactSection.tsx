import React, { useState } from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-20 py-16 md:py-24 border-t border-purple-950/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let's build something remarkable together.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            I am actively available for full-time junior/entry-level software engineering roles and contract projects worldwide.
          </p>
        </div>

        {/* Dedicated Email Contact Card */}
        <div className="mt-10 rounded-2xl border border-purple-900/40 bg-[#0e0b17] p-8 sm:p-10 shadow-2xl shadow-purple-950/30 text-center">
          
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600/15 border border-purple-500/30 text-purple-400 mb-5">
            <Mail className="h-7 w-7" />
          </div>

          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            Official Business Email
          </div>

          <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight my-2">
            {DEVELOPER_INFO.email}
          </div>

          <p className="text-xs text-slate-400 max-w-md mx-auto mb-8">
            Click below to launch your email client directly or copy the address to your clipboard.
          </p>

          {/* Direct Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${DEVELOPER_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-600/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              <span>Email {DEVELOPER_INFO.email}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-purple-900/50 bg-[#161224] px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-purple-600 hover:text-white"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-purple-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Location & Status footer inside card */}
          <div className="mt-8 pt-6 border-t border-purple-950/40 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-purple-400" />
              <span>{DEVELOPER_INFO.location}</span>
            </div>
            <span className="text-slate-600">·</span>
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
