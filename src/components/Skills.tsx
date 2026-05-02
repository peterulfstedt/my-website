import { Code2, Brain, Wrench, Cpu } from 'lucide-react';

const categories = [
  {
    label: 'Programming Languages',
    icon: Code2,
    color: 'sky',
    items: ['C', 'C#', 'Embedded Systems (C)', 'PowerShell', 'SQL'],
  },
  {
    label: 'AI / ML',
    icon: Brain,
    color: 'emerald',
    items: ['RLHF', 'SFT', 'DPO / RPO', 'LLM Fine-tuning', 'RAG Systems', 'AI Automation'],
  },
  {
    label: 'Tools & Software',
    icon: Wrench,
    color: 'amber',
    items: ['MATLAB', 'Xcode', 'VSCode', 'Git', 'Label Studio', 'Open WebUI'],
  },
  {
    label: 'Infrastructure',
    icon: Cpu,
    color: 'rose',
    items: ['Ollama', 'NVIDIA CUDA', 'CasaOS', 'Linux (Pop!_OS)', 'Docker / Containers'],
  },
];

const colorMap: Record<string, { icon: string; tag: string; border: string }> = {
  sky: {
    icon: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    tag: 'bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/20',
    border: 'border-sky-500/20',
  },
  emerald: {
    icon: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    tag: 'bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20',
    border: 'border-emerald-500/20',
  },
  amber: {
    icon: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    tag: 'bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/20',
    border: 'border-amber-500/20',
  },
  rose: {
    icon: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    tag: 'bg-rose-500/10 text-rose-300 ring-1 ring-rose-500/20',
    border: 'border-rose-500/20',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-sky-400 uppercase font-medium">Expertise</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-16">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const c = colorMap[cat.color];
            return (
              <div
                key={cat.label}
                className={`bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={`p-2 rounded-lg border ${c.icon}`}>
                    <Icon size={16} />
                  </span>
                  <h3 className="text-white font-semibold text-sm">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className={`text-xs px-2.5 py-1 rounded-md font-medium ${c.tag}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
