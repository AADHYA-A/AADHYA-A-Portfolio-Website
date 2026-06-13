import FadeIn from './FadeIn';

const PUBLICATIONS = [
  {
    venue: 'IEEE Xplore · SPICES 2024',
    title: 'Leveraging LightGBM, MLP & Extra Tree Classifiers for Early Detection of Autism Spectrum Disorder',
    highlight: '97.2% detection accuracy on benchmark datasets',
    status: 'Published',
    color: '#7C6AF7',
  },
  {
    venue: 'Springer Nature · ICSHIT 2024',
    title: 'Cloud-Integrated IoT System for Women\'s Safety & Emergency Health Response',
    highlight: 'Real-time AWS IoT pipeline with SOS alerts & mobile integration',
    status: 'Published',
    color: '#C084FC',
  },
  {
    venue: 'Under Review',
    title: 'TinyKannada: Edge AI Framework for Offline Kannada NLP on Resource-Constrained Android Devices',
    highlight: 'Lightweight offline Kannada NLP optimized for low-resource Android',
    status: 'Under Review',
    color: '#6B7280',
  },
];

const EXPERIENCE = [
  {
    role: 'AI Intern',
    company: 'PolicyNav · Infosys Springboard 6.0',
    period: 'Sep 2025 – Nov 2025',
    desc: 'Built an AI-powered Public Policy Navigation system using NLP and LLMs — summarization, keyword extraction, and semantic search for improved stakeholder decision-making.',
  },
  {
    role: 'Web Development Intern',
    company: 'SN Info Systems',
    period: 'Nov 2024 – Feb 2025',
    desc: 'Developed a responsive React.js platform for BBA colleges in Bengaluru with dynamic search, filtering, SEO optimization, and mobile-friendly design.',
  },
  {
    role: 'ML with Python Intern',
    company: 'Compsoft Technology Solutions Group Inc.',
    period: 'May 2023 – Jul 2023',
    desc: 'Designed, tested, and evaluated ML models for the LTS project — identifying functional gaps and delivering a comprehensive technical performance report.',
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="bg-[#0C0C0C] py-28 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Publications */}
        <FadeIn>
          <span className="font-kanit font-light text-xs text-[#7C6AF7] tracking-widest uppercase">
            Publications
          </span>
          <h2 className="font-kanit font-black text-5xl md:text-6xl text-[#F0EDE8] mt-4 leading-tight">
            Research Work
          </h2>
        </FadeIn>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {PUBLICATIONS.map((pub, i) => (
            <FadeIn key={pub.title} delay={i * 0.1}>
              <div className="h-full flex flex-col bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 hover:border-[#7C6AF7]/40 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="font-kanit font-light text-xs tracking-wider px-3 py-1 rounded-full"
                    style={{
                      background: `${pub.color}15`,
                      border: `1px solid ${pub.color}40`,
                      color: pub.color,
                    }}
                  >
                    {pub.venue}
                  </span>
                  <span
                    className="font-kanit font-light text-xs ml-2 shrink-0"
                    style={{ color: pub.status === 'Published' ? '#22C55E' : '#6B7280' }}
                  >
                    {pub.status === 'Published' ? '● Published' : '◌ Review'}
                  </span>
                </div>
                <p className="font-kanit font-semibold text-sm text-[#F0EDE8] leading-snug flex-1">
                  {pub.title}
                </p>
                <p className="font-kanit font-light text-xs text-[#6B7280] mt-4 leading-relaxed">
                  {pub.highlight}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Experience */}
        <FadeIn delay={0.1}>
          <h3 className="font-kanit font-black text-4xl text-[#F0EDE8] mt-24 mb-12">
            Experience
          </h3>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#7C6AF7] via-[#C084FC]/40 to-transparent" />
          <div className="space-y-10 pl-8">
            {EXPERIENCE.map((exp, i) => (
              <FadeIn key={exp.role + exp.company} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -left-10 top-1.5 w-3 h-3 rounded-full bg-[#7C6AF7] border-2 border-[#0C0C0C]" />
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                    <div>
                      <p className="font-kanit font-semibold text-base text-[#F0EDE8]">{exp.role}</p>
                      <p className="font-kanit font-light text-sm text-[#7C6AF7]">{exp.company}</p>
                    </div>
                    <span className="font-kanit font-light text-xs text-[#6B7280] shrink-0 md:text-right">
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-kanit font-light text-sm text-[#9CA3AF] mt-2 leading-relaxed max-w-2xl">
                    {exp.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
