import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const PROJECTS = [
  {
    title: 'Audio Forgery Detection',
    subtitle: 'Deep Learning · Signal Processing',
    desc: 'Hybrid GFCC-XGBoost and CNN-LSTM framework for detecting and localizing audio forgery. Robust across manipulated speech and compressed audio environments.',
    tags: ['Python', 'CNN-LSTM', 'XGBoost', 'GFCC'],
    color: '#7C6AF7',
  },
  {
    title: 'GenAI Picture-to-Story',
    subtitle: 'Multimodal AI · GenAI',
    desc: 'AI application that transforms images into age-specific stories and generates both text and audio narration for kids, teens, adults, and seniors.',
    tags: ['Python', 'Multimodal LLM', 'TTS', 'GenAI'],
    color: '#C084FC',
  },
  {
    title: 'KCET Rank Predictor',
    subtitle: 'Machine Learning · EdTech',
    desc: 'ML model predicting KCET ranks and recommending suitable colleges and branches using historical admission data — helping Karnataka students navigate admissions.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'React'],
    color: '#818CF8',
  },
  {
    title: 'Women Safety Analytics',
    subtitle: 'IoT · AWS · Flutter',
    desc: 'IoT-based women safety system with real-time monitoring, AWS cloud integration, emergency SOS alerts, and Flutter mobile app support. Published at Springer ICSHIT 2024.',
    tags: ['IoT', 'AWS', 'MQTT', 'Flutter'],
    color: '#A78BFA',
  },
  {
    title: 'Brain Sprint',
    subtitle: 'Full-Stack · EdTech',
    desc: 'Full-stack placement preparation platform covering aptitude, verbal, logical, and coding with timed practice questions and integrated meditation support for student well-being.',
    tags: ['React', 'Django', 'SQL', 'REST API'],
    color: '#9333EA',
  },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="sticky top-24"
    >
      <div
        className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-8 md:p-10 hover:border-opacity-60 transition-all duration-500"
        style={{ borderColor: `${project.color}30` }}
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="font-kanit font-black text-5xl md:text-6xl"
                style={{ color: `${project.color}20` }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <p className="font-kanit font-light text-xs tracking-widest uppercase mb-2" style={{ color: project.color }}>
              {project.subtitle}
            </p>
            <h3 className="font-kanit font-bold text-2xl md:text-3xl text-[#F0EDE8] leading-tight">
              {project.title}
            </h3>
            <p className="font-kanit font-light text-sm text-[#9CA3AF] mt-4 leading-relaxed max-w-xl">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-kanit font-light text-xs px-3 py-1 rounded-full bg-[#0C0C0C] border border-[#1F1F1F] text-[#6B7280]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] py-28 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <span className="font-kanit font-light text-xs text-[#7C6AF7] tracking-widest uppercase">
            Projects
          </span>
          <h2 className="font-kanit font-black text-5xl md:text-6xl text-[#F0EDE8] mt-4 leading-tight">
            Things I've Built
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
