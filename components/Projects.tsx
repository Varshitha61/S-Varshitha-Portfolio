
import React, { useState } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, ChevronDown } from 'lucide-react';

const projects = [
  {
    title: 'SpendWiser',
    subtitle: 'AI-Powered Personal Finance MERN App',
    tags: ['MongoDB', 'Express.js', 'React 19', 'Node.js', 'TypeScript', 'Gemini API', 'Recharts'],
    desc: 'Developed a cloud-ready MERN stack personal finance Single Page Application (SPA) using React 19, TypeScript, and Recharts to track budgets and visualize financial health.\n\nEngineered a secure Node.js/Express.js backend with MongoDB encryption and SMS webhook integrations for automated, real-time transaction logging.\n\nIntegrated the Google Gemini API to analyze user spending habits and generate personalized budgeting, saving, and investment strategies.',
    img: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&q=80&w=1200',
    github: 'https://github.com/Varshitha61',
    demo: 'https://spend-wiser-iblq.vercel.app/'
  },
  {
    title: 'HireIQ',
    subtitle: 'AI-Powered Recruitment Assistant',
    tags: ['FastAPI', 'React', 'Python', 'TypeScript', 'NLP', 'Generative AI', 'Gemini API'],
    desc: 'Designed a full-stack AI recruitment platform featuring automated resume ranking, skill gap analysis, and dynamic interview question generation.\n\nIntegrated Google\'s Gemini API and NLP models (spaCy/scikit-learn) with a high-performance React dashboard to provide real-time applicant analytics and insights.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    github: 'https://github.com/Varshitha61',
    demo: ''
  },
  {
    title: 'Cafe Aroma',
    subtitle: 'Boutique Café E-Commerce & AI Chatbot',
    tags: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Gemini API', 'Tailwind CSS', 'Vite'],
    desc: 'Built a responsive café web application featuring an AI-powered chatbot using Google Gemini.\n\nImplemented robust shopping cart functionality, secure authentication context, and smooth client-side routing.\n\nDesigned a modern user interface using Tailwind CSS and deployed the application using Vite and Vercel.',
    img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200',
    github: 'https://github.com/Varshitha61',
    demo: ''
  },
  {
    title: 'StitchLink',
    subtitle: 'Embroidery Business & AI Recommendations',
    tags: ['React', 'TypeScript', 'Supabase', 'Gemini API'],
    desc: 'Built custom customer and admin dashboards with protected routes and real-time sales and order analytics.\n\nIntegrated AI-based pattern recommendations and managed database and backend authentication services seamlessly via Supabase.',
    img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200',
    github: 'https://github.com/Varshitha61',
    demo: ''
  },
  {
    title: 'Pill Sense',
    subtitle: 'IoT-Based Medication Adherence System',
    tags: ['Embedded C', 'Microcontrollers', 'IoT', 'Web Integrations', 'Sensors'],
    desc: 'Designed an IoT system to monitor pill intake using smart sensors and log timestamped medication compliance data.\n\nImplemented real-time data synchronization between embedded microcontroller devices and web dashboards for caregivers and doctors.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    github: 'https://github.com/Varshitha61',
    demo: ''
  }
];

interface ProjectRowProps {
  proj: any;
  idx: number;
  isExpanded: boolean;
  onToggle: () => void;
  setActive: (idx: number | null) => void;
}

const rowVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const ProjectImage: React.FC<{ proj: any }> = ({ proj }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [8, -8]);
  const rotateY = useTransform(mouseX, [-100, 100], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group/img w-full aspect-[3/4] rounded-[2rem] overflow-hidden border-2 border-green-500/30 hover:border-green-400/60 relative shadow-2xl shadow-green-950/60 hover:shadow-green-500/30 transition-all duration-700 ease-out"
    >
      {/* Image with enhanced effects */}
      <motion.img
        src={proj.img}
        alt={proj.title}
        style={{ scale: useTransform(mouseX, [-100, 100], [1, 1.05]) }}
        className="w-full h-full object-cover grayscale-[50%] group-hover/img:grayscale-0 brightness-[0.85] group-hover/img:brightness-100 transition-all duration-[1.2s] ease-out"
      />

      {/* Multi-layer gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-700" />

      {/* Animated border glow */}
      <div className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-green-400/20 blur-xl" />
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-green-400/40 rounded-tr-2xl opacity-0 group-hover/img:opacity-100 transition-all duration-500 group-hover/img:scale-110" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-green-400/40 rounded-bl-2xl opacity-0 group-hover/img:opacity-100 transition-all duration-500 group-hover/img:scale-110" />
    </motion.div>
  );
};

const ProjectRow: React.FC<ProjectRowProps> = ({ proj, idx, isExpanded, onToggle, setActive }) => {
  const hasDemo = proj.demo && proj.demo !== '#' && proj.demo !== '';

  return (
    <motion.div
      layout
      variants={rowVariants}
      onMouseEnter={() => !isExpanded && setActive(idx)}
      onMouseLeave={() => setActive(null)}
      onClick={onToggle}
      className={`group relative py-12 md:py-16 border-b border-green-500/10 cursor-pointer transition-colors duration-500 ${isExpanded ? 'bg-green-500/[0.04]' : 'hover:bg-green-500/[0.01]'}`}
    >
      <div className="flex items-center justify-between px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 relative z-10">
          <span className="text-green-500/30 font-black font-sans-modern text-lg">0{idx + 1}</span>
          <div className="flex flex-col">
            <h4 className={`text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter lowercase italic transition-all duration-500 ${isExpanded ? 'text-green-400 pl-4' : 'text-[#fdfbf7] group-hover:text-green-400 group-hover:pl-4'}`}>
              {proj.title}
            </h4>
            <p className="text-green-100/20 text-sm md:text-base uppercase tracking-[0.4em] font-sans-modern mt-4">
              {proj.subtitle}
            </p>

            {/* Project Tags - prominent placement */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex flex-wrap gap-3 mt-8"
                >
                  {proj.tags.map((tag: string) => (
                    <span key={tag} className="text-[10px] md:text-[11px] text-emerald-300 font-black border border-green-500/40 bg-green-500/10 px-5 py-2 rounded-full uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(16,185,129,0.05)] backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 relative z-10">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className={`w-14 h-14 rounded-full border border-green-500/20 flex items-center justify-center text-green-500 transition-all ${isExpanded ? 'bg-green-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'group-hover:bg-green-500 group-hover:text-black group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]'}`}
          >
            {isExpanded ? <ChevronDown size={28} /> : <ArrowUpRight size={28} />}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-16 pb-12 px-4 md:pl-28 md:pr-4">
              <div className="grid lg:grid-cols-12 gap-3">
                <div className="lg:col-span-7">
                  <div className="space-y-12">
                    <p className="text-[#fdfbf7]/60 text-lg md:text-xl lg:text-2xl leading-relaxed font-light whitespace-pre-line">
                      {proj.desc}
                    </p>

                    <div className="flex flex-wrap gap-6 items-center pt-4">
                      <motion.a
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 px-10 py-4 bg-green-500 text-black rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-green-400 transition-all shadow-xl shadow-green-950/20"
                      >
                        Source Code <Github size={18} />
                      </motion.a>

                      {hasDemo && (
                        <motion.a
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 px-10 py-4 border border-green-500/40 text-green-400 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-green-500/10 transition-all backdrop-blur-md"
                        >
                          Live Demo <ExternalLink size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 lg:block hidden">
                  <ProjectImage proj={proj} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 400, damping: 30 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [5, -5]);
  const rotateY = useTransform(x, [-300, 300], [-5, 5]);

  // Use window-based mouse tracking for accurate positioning
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX + 20);
      mouseY.set(e.clientY + 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const handleToggle = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
    if (expandedIdx === idx) {
      setActive(null);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Professional staggering
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="projects" className="py-40 px-4 md:px-8 lg:px-24 bg-black relative">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-green-500 text-[11px] font-black font-sans-modern tracking-[0.8em] uppercase mb-10">Portfolio Archives</h2>
          <h3 className="text-6xl md:text-9xl font-bold font-heading text-gradient tracking-tighter italic lowercase">
            Selected <span className="not-italic font-black text-gradient">Creations</span>
          </h3>
        </motion.div>

        <motion.div
          className="relative mt-32 flex flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((proj, idx) => (
            <ProjectRow
              key={proj.title}
              proj={proj}
              idx={idx}
              isExpanded={expandedIdx === idx}
              onToggle={() => handleToggle(idx)}
              setActive={setActive}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {active !== null && expandedIdx !== active && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.85, rotateX: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'fixed',
                left: 0,
                top: 0,
                x,
                y,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                pointerEvents: 'none',
                zIndex: 50
              }}
              className="hidden lg:block w-[480px] aspect-[16/10] rounded-[2.5rem] overflow-hidden border-2 border-green-500/40 shadow-[0_60px_120px_rgba(16,185,129,0.3),0_0_80px_rgba(16,185,129,0.15)]"
            >
              {/* Animated glow border */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-green-400/50 via-emerald-400/50 to-green-400/50 rounded-[2.5rem] blur-sm animate-pulse" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black">
                <img
                  src={projects[active].img}
                  alt={projects[active].title}
                  className="w-full h-full object-cover grayscale-[20%] brightness-[0.9] scale-105 transition-transform duration-[2s]"
                />

                {/* Enhanced gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-emerald-500/10" />

                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent"
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Info card with enhanced styling */}
                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl border border-green-500/30 backdrop-blur-2xl bg-black/60 shadow-2xl">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-black text-green-400 tracking-[0.4em] uppercase mb-2">Stack Intelligence</p>
                      <p className="text-xl font-black text-white tracking-tight italic font-heading">{projects[active].tags.join(" • ")}</p>
                    </div>
                    <div className="flex gap-3">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center"
                      >
                        <Github size={16} className="text-green-400" />
                      </motion.div>
                      {projects[active].demo && (
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center"
                        >
                          <ExternalLink size={16} className="text-green-400" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-green-400/50 rounded-tr-xl" />
                <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-green-400/50 rounded-bl-xl" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative background text */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 opacity-[0.015] text-[35rem] font-black pointer-events-none select-none uppercase tracking-tighter">
        Archive
      </div>
    </section>
  );
};

export default Projects;
