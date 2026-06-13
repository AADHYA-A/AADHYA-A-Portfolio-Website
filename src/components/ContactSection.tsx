import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import FadeIn from './FadeIn';

const CONTACT_METHODS = [
  {
    label: 'Email',
    value: 'aadhyababu@gmail.com',
    href: 'mailto:aadhyababu@gmail.com',
    Icon: Mail,
  },
  {
    label: 'Mobile',
    value: '+91 8147297635',
    href: 'tel:+918147297635',
    Icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'aadhya-a-317790250',
    href: 'https://linkedin.com/in/aadhya-a-317790250',
    Icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'AADHYA-A',
    href: 'https://github.com/AADHYA-A',
    Icon: Github,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C0C0C] py-28 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="font-kanit font-light text-xs text-[#7C6AF7] tracking-widest uppercase">
            Contact
          </span>
          <h2 className="font-kanit font-black text-5xl md:text-7xl text-[#F0EDE8] mt-4 leading-tight">
            Let's Build<br />
            <span className="hero-heading">Together.</span>
          </h2>
          <p className="font-kanit font-light text-base text-[#6B7280] mt-6 max-w-md leading-relaxed">
            Open to research collaborations, internships, and full-time roles in AI, ML, and data engineering. Reach out anytime.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {CONTACT_METHODS.map((method, i) => (
            <FadeIn key={method.label} delay={i * 0.08}>
              <a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex flex-col gap-4 bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 hover:border-[#7C6AF7]/50 hover:bg-[#161616] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7C6AF7]/10 border border-[#7C6AF7]/20 flex items-center justify-center group-hover:bg-[#7C6AF7]/20 transition-all duration-300">
                  <method.Icon size={18} className="text-[#7C6AF7]" />
                </div>
                <div>
                  <p className="font-kanit font-light text-xs text-[#4B5563] tracking-widest uppercase">
                    {method.label}
                  </p>
                  <p className="font-kanit font-medium text-sm text-[#D1D5DB] mt-1 group-hover:text-[#C084FC] transition-colors duration-300 break-all">
                    {method.value}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-20 pt-8 border-t border-[#1F1F1F] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-kanit font-light text-xs text-[#4B5563]">
              © 2025 Aadhya A · Bengaluru, Karnataka, India
            </p>
            <p className="font-kanit font-light text-xs text-[#4B5563]">
              M.Tech Data Sciences · Ramaiah Institute of Technology
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
