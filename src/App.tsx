import { useEffect, useRef, useState } from 'react';
import {
  Code2,
  Cpu,
  Database,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Server,
  Shield,
  Terminal,
  Wrench,
} from 'lucide-react';

const NAV_LINKS = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

const EXPERIENCE = [
  {
    role: 'AI Technical Specialist',
    company: 'Invisible Technologies',
    period: '2026 - Present',
    color: 'from-cyan-500 to-blue-500',
    bullets: [
      'Leading technical evaluations for "Personalization" projects focusing on RLHF, model alignment, and complex reasoning tasks.',
      'Maintained 100% quality metrics using professional-grade monitoring and reporting tools.',
    ],
  },
  {
    role: 'Language Data & Quality Reviewer',
    company: 'Uber AI Solutions',
    period: '2026 - Present',
    color: 'from-blue-500 to-teal-500',
    bullets: [
      'Labeled and structured large volumes of raw conversational data for speech recognition model training.',
      'Transcribed complex audio files with strict verbatim accuracy across multiple languages.',
    ],
  },
  {
    role: 'Project Evaluator',
    company: 'Scale AI (Outlier)',
    period: '2025 - Present',
    color: 'from-teal-500 to-green-500',
    bullets: [
      'Contributed to 8+ projects handling over 80,000 AI data items.',
      'Performed RLHF and SFT to improve model quality while maintaining 100% accuracy.',
    ],
  },
  {
    role: 'Operations Supervisor',
    company: 'Finnish Defense Forces',
    period: '2023 – 2024',
    color: 'from-green-500 to-emerald-600',
    bullets: [
      'Operated a high-value military vessel with full responsibility for crew safety and system maintenance.',
      'Managed high-stakes technical systems under operational pressure.',
    ],
  },
];

const SKILLS = [
  {
    category: 'Programming Languages',
    icon: <Code2 size={20} />,
    items: ['C', 'C#', 'Embedded C', 'PowerShell', 'SQL'],
  },
  {
    category: 'AI / ML',
    icon: <Cpu size={20} />,
    items: ['RLHF', 'SFT', 'DPO / RPO', 'LLM Fine-tuning', 'RAG Systems', 'AI Automation'],
  },
  {
    category: 'Infrastructure',
    icon: <Server size={20} />,
    items: ['Ollama', 'NVIDIA CUDA', 'CasaOS', 'Docker / Containers', 'Linux (Pop!_OS)'],
  },
  {
    category: 'AI Platforms',
    icon: <Database size={20} />,
    items: ['Hula-Hoop (Scale AI)', 'ATMS (Scale AI)', 'Label Studio', 'Open WebUI'],
  },
  {
    category: 'Developer Tools',
    icon: <Wrench size={20} />,
    items: ['Git', 'VSCode', 'Xcode', 'MatLab'],
  },
  {
    category: 'Languages',
    icon: <Globe size={20} />,
    items: ['Russian (Native)', 'Ukrainian (Native)', 'Swedish (Fluent)', 'English (Fluent)', 'Finnish (Intermediate)'],
  },
];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400 uppercase">{label}</span>
      <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-cyan-500 to-blue-500" />
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const expSection = useInView();
  const skillsSection = useInView();
  const projectSection = useInView();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-300 antialiased">
      {/* NAV */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight text-white">
            P<span className="text-cyan-400">.</span>U
          </span>
          <ul className="hidden gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="https://www.linkedin.com/in/peter-j-ulfstedt-401171357"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-300 transition-all hover:bg-cyan-500/20 hover:border-cyan-400 md:flex"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(6,182,212,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-600/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium tracking-widest text-cyan-400 uppercase">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            Available for opportunities
          </div>
          <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-white sm:text-7xl">
            Peter
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ulfstedt
            </span>
          </h1>
          <p className="mb-2 text-lg font-medium text-gray-400 sm:text-xl">
            Computer Science Student &amp; AI Technical Specialist
          </p>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-gray-500">
            CS student at Mälardalen University with 1 year of hands-on AI industry experience —
            specializing in RLHF, model alignment, and building private inference infrastructure.
            Combining technical depth with high-responsibility leadership from the Finnish Defence Forces.
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-cyan-500" />
              Västerås, Sweden
            </span>
            <span className="text-gray-700">|</span>
            <span className="flex items-center gap-1.5">
              <GraduationCap size={13} className="text-cyan-500" />
              Mälardalen University
            </span>
            <span className="text-gray-700">|</span>
            <span className="flex items-center gap-1.5">
              <Mail size={13} className="text-cyan-500" />
              ulfstedtpj@gmail.com
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/peter-j-ulfstedt-401171357"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#0a0a0f] transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
            <button
              onClick={() => scrollTo('Experience')}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
            >
              View Experience
            </button>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <SectionTitle label="Career" title="Experience" />
          <div
            ref={expSection.ref}
            className={`relative transition-all duration-700 ${
              expSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-transparent md:left-1/2 md:-translate-x-px" />
            <div className="space-y-10">
              {EXPERIENCE.map((exp, i) => (
                <div
                  key={i}
                  className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="relative z-10 mt-1 flex-shrink-0 md:absolute md:left-1/2 md:top-4 md:-translate-x-1/2">
                    <div className={`h-4 w-4 rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-[#0a0a0f]`} />
                  </div>
                  <div
                    className={`ml-8 w-full rounded-xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur transition-all hover:border-white/10 hover:bg-white/[0.05] md:ml-0 md:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="mb-1 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-white">{exp.role}</h3>
                        <p
                          className={`text-sm bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-medium`}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-gray-500">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 text-sm leading-relaxed text-gray-400">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-y border-white/5 bg-white/[0.01] py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <SectionTitle label="Expertise" title="Technical Skills" />
          <div
            ref={skillsSection.ref}
            className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${
              skillsSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {SKILLS.map((skill, i) => (
              <div
                key={i}
                className="group rounded-xl border border-white/5 bg-white/[0.03] p-5 transition-all hover:border-cyan-500/20 hover:bg-white/[0.05]"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
                    {skill.icon}
                  </span>
                  <h3 className="text-sm font-semibold text-white">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/8 bg-white/5 px-2.5 py-0.5 text-xs text-gray-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <SectionTitle label="Work" title="Featured Project" />
          <div
            ref={projectSection.ref}
            className={`transition-all duration-700 ${
              projectSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-8 transition-all hover:border-cyan-500/20">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-600/10 blur-3xl" />
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                    <Server size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Private AI Inference Server &amp; Local Cluster
                    </h3>
                    <p className="text-xs text-gray-500">On-premise LLM infrastructure</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: <Terminal size={14} />,
                      label: 'Architecture',
                      text: 'High-performance on-premise AI ecosystem using Ollama and Open WebUI for cloud-independent LLM inference.',
                    },
                    {
                      icon: <Cpu size={14} />,
                      label: 'Hardware',
                      text: 'NVIDIA GPU/CUDA acceleration with specialized VRAM allocation and hardware-level tuning for RAG workloads.',
                    },
                    {
                      icon: <Shield size={14} />,
                      label: 'Security',
                      text: 'Air-gapped data strategy for processing sensitive legal and financial documents with zero external data leakage.',
                    },
                    {
                      icon: <Database size={14} />,
                      label: 'Deployment',
                      text: 'Containerized via CasaOS on Linux (Pop!_OS) with Open WebUI providing a production-grade chat interface.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="rounded-lg border border-white/5 bg-white/[0.03] p-4">
                      <div className="mb-1.5 flex items-center gap-1.5 text-cyan-400">
                        {item.icon}
                        <span className="text-xs font-semibold uppercase tracking-wider">{item.label}</span>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-400">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {['Ollama', 'CUDA', 'RAG', 'CasaOS', 'Linux', 'Open WebUI', 'LLM'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/5 bg-white/[0.01] py-24 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle label="Get in Touch" title="Contact" />
          <p className="mb-8 text-sm leading-relaxed text-gray-500">
            Open to AI/ML roles, research collaborations, and freelance projects. Reach out via LinkedIn or
            email.
          </p>
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/peter-j-ulfstedt-401171357"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#0a0a0f] transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
            <a
              href="mailto:ulfstedtpj@gmail.com"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
            >
              <Mail size={16} />
              Send an Email
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <Phone size={13} />
              +358-45-239-0011
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} />
              Västerås, Sweden
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-6 text-center text-xs text-gray-700">
        &copy; {new Date().getFullYear()} Peter Ulfstedt. All rights reserved.
      </footer>
    </div>
  );
}
