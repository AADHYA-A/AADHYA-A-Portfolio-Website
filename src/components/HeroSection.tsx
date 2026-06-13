import { motion } from 'framer-motion';
import Magnet from './Magnet';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0C0C0C] flex flex-col overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-7 z-10">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-kanit font-semibold text-lg tracking-widest text-[#F0EDE8] uppercase"
        >
          Aadhya A
        </motion.span>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex gap-10 font-kanit font-light text-sm tracking-wider text-[#6B7280]"
        >
          {['About', 'Research', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#F0EDE8] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </motion.div>
        <motion.a
          href="mailto:aadhyababu@gmail.com"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-kanit font-medium text-sm px-5 py-2 rounded-full border border-[#7C6AF7] text-[#7C6AF7] hover:bg-[#7C6AF7] hover:text-white transition-all duration-300"
        >
          Hire Me
        </motion.a>
      </nav>

      {/* Hero Body */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pb-16 gap-12">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#7C6AF7] animate-pulse" />
            <span className="font-kanit font-light text-sm text-[#7C6AF7] tracking-widest uppercase">
              AI & Data Science · M.Tech @ RIT
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-kanit font-black text-[13vw] md:text-[8vw] leading-none hero-heading"
          >
            AADHYA A
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="font-kanit font-light text-lg md:text-xl text-[#9CA3AF] max-w-lg leading-relaxed"
          >
            Building intelligent systems that solve real-world problems — from
            IEEE-published research to production ML pipelines and GenAI apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-3 mt-2"
          >
            {['Machine Learning', 'NLP · LLMs', 'IoT · AWS', 'GenAI', 'Research'].map((tag) => (
              <span
                key={tag}
                className="font-kanit font-light text-xs px-3 py-1.5 rounded-full research-tag text-[#C084FC] tracking-wide"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex gap-4 mt-4"
          >
            <a
              href="#projects"
              className="font-kanit font-semibold text-sm px-7 py-3 rounded-full bg-[#7C6AF7] text-white hover:bg-[#6B5BE0] transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#research"
              className="font-kanit font-light text-sm px-7 py-3 rounded-full border border-[#1F1F1F] text-[#9CA3AF] hover:border-[#7C6AF7] hover:text-[#C084FC] transition-all duration-300"
            >
              Publications →
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 z-10"
        >
          <Magnet strength={0.3}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7C6AF7] to-[#C084FC] opacity-20 blur-2xl scale-110" />
              <div className="absolute inset-0 rounded-full border border-[#7C6AF7]/20" />
              <img
                src="/aadhya.png"
                alt="Aadhya A"
                className="relative w-full h-full rounded-full object-cover object-top"
                style={{ filter: 'brightness(1.05) contrast(1.02)' }}
              />
            </div>
          </Magnet>
        </motion.div>
      </div>

      {/* Ambient gradient */}
      <div className="pointer-events-none absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#7C6AF7]/5 to-transparent" />
    </section>
  );
}
