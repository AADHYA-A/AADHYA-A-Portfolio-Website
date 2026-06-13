import { Award, Briefcase, GraduationCap } from 'lucide-react';
import FadeIn from './FadeIn';

const EXPERIENCE = [
  {
    title: 'AI Intern - PolicyNav',
    org: 'Infosys Springboard 6.0',
    date: 'Sep 2025 - Nov 2025',
    detail:
      'Built an AI-powered public policy navigation system using NLP and LLMs for summarization, keyword extraction, and semantic search.',
  },
  {
    title: 'Web Development Intern',
    org: 'SN Info Systems',
    date: 'Nov 2024 - Feb 2025',
    detail:
      'Developed a responsive React.js platform for BBA colleges in Bengaluru with search, filtering, SEO, and mobile-first UX.',
  },
  {
    title: 'Machine Learning Research Intern',
    org: 'Compsoft Technology Solutions Group Inc.',
    date: 'May 2023 - Jul 2023',
    detail:
      'Designed, tested, and evaluated ML models, documented performance gaps, and delivered a technical research report.',
  },
];

const EDUCATION = [
  'M.Tech Data Sciences - Ramaiah Institute of Technology, CGPA 8.95',
  'B.E. Computer Science & Engineering - Sri Venkateshwara College of Engineering, CGPA 8.3',
  'PCMB - Chethana PU College, 81.7%',
];

const PUBLICATIONS = [
  'IEEE Xplore SPICES 2024 - Early Detection of Autism Spectrum Disorder, 97.2% accuracy',
  "Atlantis Press / Springer Nature ICSHIT 2024 - Cloud-Integrated IoT System for Women's Safety",
  'TinyKannada - Edge AI framework for offline Kannada NLP on low-resource Android devices',
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative w-full overflow-hidden bg-[#101014] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff4f9a]/70 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <FadeIn className="lg:sticky lg:top-28 lg:self-start">
          <span className="mb-4 inline-flex rounded-full border border-[#ff4f9a]/30 bg-[#ff4f9a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#ff9fca]">
            Resume highlights
          </span>
          <h2
            className="hero-heading font-black uppercase leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 130px)' }}
          >
            Experience
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#D7E2EA]/70 sm:text-lg">
            A research-driven builder with hands-on work across LLM systems,
            data science, cloud-connected IoT, and user-focused web products.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="group border-l-2 border-[#ff4f9a]/50 bg-[#17171d] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#27e0ff] hover:bg-[#1d1d25] sm:p-7">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#27e0ff]">
                  <Briefcase size={18} strokeWidth={1.6} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#ff9fca]">
                  {item.org}
                </p>
                <p className="mt-4 max-w-3xl text-base leading-7 text-[#D7E2EA]/72">
                  {item.detail}
                </p>
              </article>
            </FadeIn>
          ))}

          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn>
              <div className="h-full border border-[#D7E2EA]/12 bg-[#0C0C0C] p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3 text-[#27e0ff]">
                  <GraduationCap size={24} strokeWidth={1.6} />
                  <h3 className="text-xl font-black uppercase text-white">Education</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {EDUCATION.map((item) => (
                    <p key={item} className="text-sm leading-6 text-[#D7E2EA]/72">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="h-full border border-[#D7E2EA]/12 bg-[#0C0C0C] p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3 text-[#ff4f9a]">
                  <Award size={24} strokeWidth={1.6} />
                  <h3 className="text-xl font-black uppercase text-white">Research</h3>
                </div>
                <div className="flex flex-col gap-4">
                  {PUBLICATIONS.map((item) => (
                    <p key={item} className="text-sm leading-6 text-[#D7E2EA]/72">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
