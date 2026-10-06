import React, { useState } from 'react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { ArrowUpRight, Menu, X, Mail } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Terminal', href: '#terminal' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-purple-950/40 bg-[#090710]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-slate-100 transition-colors hover:text-purple-400"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-violet-700 text-xs font-black text-white shadow-sm shadow-purple-500/30">
            JA
          </span>
          <span>{DEVELOPER_INFO.name}</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-purple-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${DEVELOPER_INFO.email}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-purple-300 transition-colors mr-1"
            title="Send Email"
          >
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            <span className="truncate max-w-[150px]">{DEVELOPER_INFO.email}</span>
          </a>

          <button
            onClick={onContactClick}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-purple-600 px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:bg-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 shadow-sm shadow-purple-600/30 whitespace-nowrap"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-purple-900/30 bg-[#0e0b17] px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-purple-950/40 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-purple-950/40 flex items-center justify-between">
            <span className="text-xs text-slate-400">{DEVELOPER_INFO.experience}</span>
            <span className="text-xs font-medium text-purple-400">{DEVELOPER_INFO.status}</span>
          </div>
        </div>
      )}
    </header>
  );
};
