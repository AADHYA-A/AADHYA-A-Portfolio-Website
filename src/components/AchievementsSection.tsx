import { Trophy, Star, Award, BookOpen } from 'lucide-react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    color: '#27e0ff',
    title: '3rd Rank — BitLabs Leaderboard',
    description: 'Secured 3rd position on the competitive BitLabs coding leaderboard.',
  },
  {
    icon: Star,
    color: '#ff4f9a',
    title: 'Most Obedient Student Award',
    description: 'Recognized for outstanding conduct and discipline (2018–2019).',
  },
  {
    icon: Award,
    color: '#a78bfa',
    title: 'Trained Bharatanatyam Dancer',
    description: 'Classical dance training with stage performances and cultural presentations.',
  },
];

const CERTIFICATIONS = [
  {
    name: 'SnowPro Associate: Platform Certification',
    issuer: 'Snowflake',
    color: '#27e0ff',
  },
  {
    name: 'Hands-on Agentic AI: Building Autonomous Systems',
    issuer: 'Ramaiah Institute of Technology',
    color: '#ff4f9a',
  },
  {
    name: 'Artificial Intelligence & Machine Learning',
    issuer: 'Microsoft',
    color: '#a78bfa',
  },
  {
    name: 'Power BI for Business Applications',
    issuer: 'Microsoft',
    color: '#27e0ff',
  },
  {
    name: 'Google Cybersecurity Specialization',
    issuer: 'Google',
    color: '#ff4f9a',
  },
];

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="relative w-full overflow-hidden bg-[#101014] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#27e0ff]/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(39,224,255,0.07),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 text-center sm:mb-20">
            <span className="mb-4 inline-flex rounded-full border border-[#27e0ff]/30 bg-[#27e0ff]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#6ee7ff]">
              Honours & Credentials
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
            >
              Achievements
            </h2>
          </div>
        </FadeIn>

        {/* Achievement cards */}
        <div className="mb-16 grid gap-5 md:grid-cols-3 sm:mb-20">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="group flex flex-col gap-5 border border-[#D7E2EA]/10 bg-[#141418]/80 p-6 backdrop-blur-md sm:p-7"
                  style={{ borderTop: `2px solid ${item.color}40` }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border"
                    style={{
                      borderColor: `${item.color}40`,
                      backgroundColor: `${item.color}12`,
                      boxShadow: `0 0 20px ${item.color}30`,
                    }}
                  >
                    <Icon size={22} style={{ color: item.color }} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase leading-tight text-white sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#D7E2EA]/65">{item.description}</p>
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        {/* Certifications */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <BookOpen size={22} className="text-[#ff4f9a]" strokeWidth={1.6} />
            <h3 className="text-2xl font-black uppercase text-white sm:text-3xl">Certifications</h3>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="group flex items-start gap-4 border border-[#D7E2EA]/10 bg-[#0C0C0C] p-5"
              >
                <span
                  className="mt-1 h-2 w-2 shrink-0 rounded-full"
                  style={{
                    backgroundColor: cert.color,
                    boxShadow: `0 0 8px ${cert.color}`,
                  }}
                />
                <div>
                  <p className="text-sm font-semibold leading-snug text-[#D7E2EA]">{cert.name}</p>
                  <p
                    className="mt-1 text-xs font-medium uppercase tracking-[0.18em]"
                    style={{ color: cert.color }}
                  >
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
