import FadeIn from './FadeIn';

const SKILL_GROUPS = [
  {
    label: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    label: 'ML / AI',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'GenAI'],
  },
  {
    label: 'Frameworks',
    skills: ['React.js', 'Django', 'TensorFlow', 'Scikit-learn', 'XGBoost'],
  },
  {
    label: 'Cloud / Tools',
    skills: ['AWS', 'IoT / MQTT', 'Power BI', 'Tableau', 'GitHub'],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0C0C0C] py-28 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* Bio */}
        <div>
          <FadeIn>
            <span className="font-kanit font-light text-xs text-[#7C6AF7] tracking-widest uppercase">
              About
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-kanit font-black text-5xl md:text-6xl text-[#F0EDE8] mt-4 leading-tight">
              Researcher.<br />
              <span className="text-[#7C6AF7]">Builder.</span><br />
              Dancer.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-kanit font-light text-base text-[#9CA3AF] mt-8 leading-relaxed">
              I'm a passionate AI & Data Science professional pursuing M.Tech at Ramaiah Institute of Technology (CGPA 8.95). My work spans the full stack of intelligent systems — from IoT sensor pipelines on AWS to LLM-powered policy tools.
            </p>
            <p className="font-kanit font-light text-base text-[#9CA3AF] mt-4 leading-relaxed">
              I've published research with IEEE Xplore and Springer Nature, interned at Infosys Springboard and SN Info Systems, and built production-grade applications across healthcare, education, and safety domains. Off-screen, I'm a trained Bharatanatyam dancer.
            </p>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.3}>
            <div className="mt-10 space-y-4">
              <p className="font-kanit font-light text-xs text-[#7C6AF7] tracking-widest uppercase mb-4">Education</p>
              {[
                { institute: 'Ramaiah Institute of Technology', degree: 'M.Tech — Data Sciences', year: '2025–2027', score: 'CGPA 8.95' },
                { institute: 'Sri Venkateshwara College of Engineering', degree: 'B.E. — CSE', year: '2021–2025', score: 'CGPA 8.3' },
              ].map((e) => (
                <div key={e.degree} className="flex items-start justify-between border-b border-[#1F1F1F] pb-4">
                  <div>
                    <p className="font-kanit font-semibold text-sm text-[#F0EDE8]">{e.institute}</p>
                    <p className="font-kanit font-light text-xs text-[#6B7280] mt-0.5">{e.degree} · {e.year}</p>
                  </div>
                  <span className="font-kanit font-medium text-xs text-[#7C6AF7] shrink-0 ml-4">{e.score}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Skills */}
        <div>
          <FadeIn delay={0.15}>
            <span className="font-kanit font-light text-xs text-[#7C6AF7] tracking-widest uppercase">
              Skills
            </span>
          </FadeIn>
          <div className="mt-6 space-y-8">
            {SKILL_GROUPS.map((group, i) => (
              <FadeIn key={group.label} delay={0.2 + i * 0.08}>
                <div>
                  <p className="font-kanit font-light text-xs text-[#4B5563] tracking-widest uppercase mb-3">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-kanit font-light text-sm px-4 py-1.5 rounded-full bg-[#141414] border border-[#1F1F1F] text-[#D1D5DB] hover:border-[#7C6AF7]/50 hover:text-[#C084FC] transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Certifications mini-list */}
          <FadeIn delay={0.5}>
            <div className="mt-10">
              <p className="font-kanit font-light text-xs text-[#7C6AF7] tracking-widest uppercase mb-4">Certifications</p>
              <ul className="space-y-2">
                {[
                  'SnowPro Associate: Platform — Snowflake',
                  'Agentic AI: Building Autonomous Systems — RIT',
                  'AI & Machine Learning — Microsoft',
                  'Power BI for Business — Microsoft',
                  'Google Cybersecurity Specialization — Google',
                ].map((cert) => (
                  <li key={cert} className="font-kanit font-light text-xs text-[#6B7280] flex items-start gap-2">
                    <span className="text-[#7C6AF7] mt-0.5">▸</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
