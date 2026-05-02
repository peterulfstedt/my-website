import { Linkedin, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(56,189,248,0.08),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full text-center">
        <p className="text-xs tracking-[0.3em] text-sky-400 uppercase mb-5 font-medium">
          Computer Science · AI Specialist
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4 leading-none">
          Peter <span className="text-zinc-400">Ulfstedt</span>
        </h1>

        <p className="mt-6 text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          CS student at Mälardalen University with 1+ year in the AI industry.
          Specializing in RLHF, model alignment, and on-premise AI infrastructure.
          Former Operations Supervisor in the Finnish Defence Forces.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500">
          <span className="flex items-center gap-1.5"><MapPin size={13} /> Västerås, Sweden</span>
          <span className="flex items-center gap-1.5"><Phone size={13} /> +358 45 239 0011</span>
          <a href="mailto:ulfstedtpj@gmail.com" className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors">
            <Mail size={13} /> ulfstedtpj@gmail.com
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/peter-j-ulfstedt-401171357"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium px-6 py-3 rounded-lg transition-all shadow-lg shadow-sky-500/20 hover:shadow-sky-400/30"
          >
            <Linkedin size={15} />
            Connect on LinkedIn
          </a>
          <a
            href="#experience"
            className="flex items-center gap-2 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 text-sm font-medium px-6 py-3 rounded-lg transition-all"
          >
            View Experience
          </a>
        </div>
      </div>

      <a
        href="#experience"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-zinc-400 transition-colors animate-bounce"
      >
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
