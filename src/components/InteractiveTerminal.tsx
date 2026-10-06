import React, { useState, useRef, useEffect } from 'react';
import { DEVELOPER_INFO, PROJECTS } from '../data/portfolioData';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'system';
  text: string | React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: 'system',
      text: `Jehu CLI v1.0.0 (Interactive Developer Shell)
Type 'help' for available commands, or try 'projects', 'whoami', 'skills'.`,
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory: TerminalLine[] = [...history, { type: 'input', text: `$ ${inputVal}` }];

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (cmd === 'help' || cmd === '?') {
      newHistory.push({
        type: 'output',
        text: (
          <div className="space-y-1 text-slate-300">
            <div>Available Commands:</div>
            <div>  <span className="text-purple-400 font-bold">whoami</span>    - Display developer identity and experience</div>
            <div>  <span className="text-purple-400 font-bold">projects</span>  - List all 3 deployed production web apps</div>
            <div>  <span className="text-purple-400 font-bold">skills</span>    - View current tech stack & libraries</div>
            <div>  <span className="text-purple-400 font-bold">contact</span>   - Get direct email & social coordinates</div>
            <div>  <span className="text-purple-400 font-bold">hire</span>      - Inquire about opportunities</div>
            <div>  <span className="text-purple-400 font-bold">clear</span>     - Clear terminal history</div>
          </div>
        ),
      });
    } else if (cmd === 'whoami') {
      newHistory.push({
        type: 'output',
        text: (
          <div className="space-y-1 text-slate-300">
            <div><strong className="text-white">{DEVELOPER_INFO.name}</strong></div>
            <div>Role: {DEVELOPER_INFO.role}</div>
            <div>Experience: {DEVELOPER_INFO.experience}</div>
            <div>Location: {DEVELOPER_INFO.location}</div>
            <div>Status: <span className="text-emerald-400">{DEVELOPER_INFO.status}</span></div>
          </div>
        ),
      });
    } else if (cmd === 'projects') {
      newHistory.push({
        type: 'output',
        text: (
          <div className="space-y-2 text-slate-300">
            <div>Deployed Production Applications:</div>
            {PROJECTS.map((p, idx) => (
              <div key={p.id} className="pl-2 border-l-2 border-purple-500/50">
                <div className="text-purple-300 font-bold">0{idx + 1}. {p.title}</div>
                <div className="text-xs text-slate-400">{p.summary}</div>
                <div className="text-xs font-mono text-purple-400">
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {p.liveUrl} ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        ),
      });
    } else if (cmd === 'skills') {
      newHistory.push({
        type: 'output',
        text: (
          <div className="space-y-1 text-slate-300">
            <div>Frontend: React 19, TypeScript, Tailwind CSS, Next.js, Vite, Framer Motion</div>
            <div>Backend: Node.js, Express, REST APIs, JSON data pipelines, Serverless</div>
            <div>DevOps: Vercel, Git & GitHub, NPM, Postman, Linux CLI</div>
          </div>
        ),
      });
    } else if (cmd === 'contact' || cmd === 'email') {
      newHistory.push({
        type: 'output',
        text: (
          <div className="space-y-1 text-slate-300">
            <div>Direct Email: <a href={`mailto:${DEVELOPER_INFO.email}`} className="text-purple-400 underline">{DEVELOPER_INFO.email}</a></div>
            <div>Location: {DEVELOPER_INFO.location}</div>
          </div>
        ),
      });
    } else if (cmd === 'hire') {
      newHistory.push({
        type: 'output',
        text: (
          <div className="space-y-1 text-emerald-400">
            <div>Thank you for your interest! Jehu is actively open to full-time junior/entry-level positions and high-impact contract roles.</div>
            <div>Send an email directly to <span className="underline text-white">{DEVELOPER_INFO.email}</span>.</div>
          </div>
        ),
      });
    } else {
      newHistory.push({
        type: 'output',
        text: `Command not recognized: "${cmd}". Type 'help' for a list of commands.`,
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <section id="terminal" className="scroll-mt-20 py-16 md:py-24 border-t border-purple-950/40 bg-[#07050d]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">
            <TerminalIcon className="h-4 w-4" />
            <span>Developer Shell</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Interactive Command Line
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Prefer terminal interfaces? Interact with my developer profile and deployed projects directly from this shell.
          </p>
        </div>

        {/* Terminal Window */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="cursor-text rounded-2xl border border-purple-900/40 bg-[#090710] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm"
        >
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0d0917] border-b border-purple-900/30">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs text-slate-400 font-sans">jehu@akafa-workstation:~</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-purple-400/70">
              <span>bash / zsh</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 min-h-[260px] max-h-[380px] overflow-y-auto space-y-3">
            {history.map((line, idx) => (
              <div key={idx} className="leading-relaxed">
                {line.type === 'input' && (
                  <span className="text-purple-400 font-semibold">{line.text}</span>
                )}
                {line.type === 'system' && (
                  <span className="text-slate-400">{line.text}</span>
                )}
                {line.type === 'output' && (
                  <div className="text-slate-200 mt-1">{line.text}</div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />

            {/* Input Line */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2 pt-2">
              <span className="text-purple-400 font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'projects', or 'whoami'..."
                className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-600 focus:ring-0 text-xs sm:text-sm"
              />
              <button
                type="submit"
                className="text-slate-500 hover:text-purple-400 transition-colors p-1"
                aria-label="Submit command"
              >
                <CornerDownLeft className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Quick Command Bar */}
          <div className="px-4 py-2 bg-[#0d0917] border-t border-purple-900/30 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
            <span className="text-slate-500">Quick suggestions:</span>
            {['whoami', 'projects', 'skills', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={(e) => {
                  e.stopPropagation();
                  setInputVal(cmd);
                  setTimeout(() => inputRef.current?.focus(), 10);
                }}
                className="px-2 py-0.5 rounded bg-[#161124] border border-purple-900/30 text-purple-300 hover:bg-purple-950 hover:border-purple-500/50 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
