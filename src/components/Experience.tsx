import { Briefcase, Shield } from 'lucide-react';

const roles = [
  {
    company: 'Invisible Technologies',
    title: 'AI Technical Specialist',
    period: '2024 – Present',
    icon: Briefcase,
    accent: 'sky',
    bullets: [
      'Leading technical evaluations for "Personalization" projects focused on RLHF, model alignment, and complex reasoning tasks.',
      'Maintained 100% quality metrics and high-fidelity data standards using professional-grade monitoring tools.',
    ],
  },
  {
    company: 'Uber AI Solutions',
    title: 'Language Data & Quality Reviewer',
    period: '2024',
    icon: Briefcase,
    accent: 'emerald',
    bullets: [
      'Labeled and structured large volumes of raw conversational data for speech recognition model training.',
      'Transcribed complex audio files with strict verbatim accuracy across multiple languages.',
    ],
  },
  {
    company: 'Scale AI (Outlier)',
    title: 'Project Evaluator',
    period: '2023 – 2024',
    icon: Briefcase,
    accent: 'amber',
    bullets: [
      'Contributed to 8+ projects handling over 80,000 AI data items across RLHF and SFT pipelines.',
      'Adapted rapidly to evolving project requirements while maintaining 100% quality compliance.',
    ],
  },
  {
    company: 'Finnish Defence Forces',
    title: 'Operations Supervisor',
    period: '2023 – 2024',
    icon: Shield,
    accent: 'rose',
    bullets: [
      'Commanded a high-value military patrol vessel with full accountability for crew safety and mission execution.',
      'Managed complex technical systems and real-time decision-making under high-pressure operational conditions.',
    ],
  },
];

const accentMap: Record<string, string> = {
  sky: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
};

const dotMap: Record<string, string> = {
  sky: 'bg-sky-500',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-500',
  rose: 'bg-rose-500',
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionLabel text="Experience" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-16">Professional Timeline</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />

          <div className="space-y-10">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <div key={role.company} className="group md:pl-16 relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-2.5 top-5 w-3 h-3 rounded-full ${dotMap[role.accent]} -translate-x-1/2 hidden md:block ring-4 ring-zinc-950`} />

                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className={`p-2 rounded-lg border ${accentMap[role.accent]}`}>
                          <Icon size={15} />
                        </span>
                        <div>
                          <h3 className="text-white font-semibold text-base leading-tight">{role.title}</h3>
                          <p className="text-zinc-400 text-sm mt-0.5">{role.company}</p>
                        </div>
                      </div>
                      <span className="text-xs text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full whitespace-nowrap">
                        {role.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {role.bullets.map((b) => (
                        <li key={b} className="text-zinc-400 text-sm leading-relaxed flex gap-2">
                          <span className="text-zinc-600 mt-1.5 shrink-0">—</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-xs tracking-[0.3em] text-sky-400 uppercase font-medium">{text}</p>
  );
}
