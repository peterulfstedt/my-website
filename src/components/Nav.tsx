import { Linkedin } from 'lucide-react';

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">Peter Ulfstedt</span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </nav>
        <a
          href="https://www.linkedin.com/in/peter-j-ulfstedt-401171357"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-zinc-300 border border-zinc-700 px-3 py-1.5 rounded-md hover:border-zinc-400 hover:text-white transition-all"
        >
          <Linkedin size={14} />
          LinkedIn
        </a>
      </div>
    </header>
  );
}
