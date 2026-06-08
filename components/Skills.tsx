
import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion';
import languagesImg from '../assets/skills/languages.png';
import frontendImg from '../assets/skills/frontend.png';
import backendImg from '../assets/skills/backend.png';
import aiIotImg from '../assets/skills/ai_iot.png';
import toolsCloudImg from '../assets/skills/tools_cloud.png';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'C++', 'JavaScript (ES6+)', 'TypeScript'],
    color: 'green',
    image: languagesImg
  },
  {
    title: 'Frontend',
    skills: ['React.js (v19)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Vite', 'Recharts'],
    color: 'pink',
    image: frontendImg
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Serverless (Vercel)', 'Webhooks'],
    color: 'green',
    image: backendImg
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'Mongoose (ODM)', 'MySQL', 'SQL'],
    color: 'pink',
    image: aiIotImg
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Cheerio'],
    color: 'green',
    image: toolsCloudImg
  }
];

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  return (
    <section id="skills" className="py-32 px-4 md:px-8 lg:px-12 bg-black relative overflow-hidden">
      {/* Background Matrix/Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#68d39105_1px,transparent_1px),linear-gradient(to_bottom,#f687b305_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Accent Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-pink-500 text-xs font-bold tracking-[0.4em] uppercase mb-6 text-center md:text-left">Technical Stack</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight text-gradient text-center md:text-left">
            Core Expertise
          </h3>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory will-change-transform"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <style>{`
            #skills .flex::-webkit-scrollbar { 
              display: none; 
            }
          `}</style>

          {/* Left spacer for centering */}
          <div className="min-w-[50px] sm:min-w-[100px] md:min-w-[200px] lg:min-w-[300px] flex-shrink-0" />

          {skillCategories.map((cat, idx) => (
            <SpotlightCard key={cat.title} cat={cat} idx={idx} containerRef={containerRef} />
          ))}

          {/* Right spacer for centering */}
          <div className="min-w-[50px] sm:min-w-[100px] md:min-w-[200px] lg:min-w-[300px] flex-shrink-0" />
        </motion.div>
      </div>
    </section>
  );
};

const SpotlightCard: React.FC<{ cat: any; idx: number; containerRef: React.RefObject<HTMLDivElement> }> = ({ cat, idx, containerRef }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollXProgress } = useScroll({
    container: containerRef,
    target: divRef,
    axis: "x",
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.75, 1.1, 0.75]);
  const opacity = useTransform(scrollXProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08
      }
    }
  };

  const accentColor = cat.color === 'green' ? {
    border: 'border-green-500/10 hover:border-green-500/30',
    gradient: 'rgba(104, 211, 145, 0.1)',
    gradientStrong: 'rgba(104, 211, 145, 0.15)',
    bgGradient: 'from-green-950/20',
    shadow: 'drop-shadow-[0_0_30px_rgba(104,211,145,0.3)]',
    decorBorder: 'border-green-500/10',
    indicator: 'bg-green-500 shadow-[0_0_15px_rgba(104,211,145,0.6)]',
    divider: 'from-green-500/50',
    skillBg: 'bg-green-950/20 border-green-500/10 hover:bg-green-800/20 hover:text-green-400 hover:border-green-500/30'
  } : {
    border: 'border-pink-500/10 hover:border-pink-500/30',
    gradient: 'rgba(246, 135, 179, 0.1)',
    gradientStrong: 'rgba(246, 135, 179, 0.15)',
    bgGradient: 'from-pink-950/20',
    shadow: 'drop-shadow-[0_0_30px_rgba(246,135,179,0.3)]',
    decorBorder: 'border-pink-500/10',
    indicator: 'bg-pink-500 shadow-[0_0_15px_rgba(246,135,179,0.6)]',
    divider: 'from-pink-500/50',
    skillBg: 'bg-pink-950/20 border-pink-500/10 hover:bg-pink-800/20 hover:text-pink-400 hover:border-pink-500/30'
  };

  return (
    <motion.div
      ref={divRef}
      variants={cardVariants}
      style={{ scale, opacity }}
      onMouseMove={handleMouseMove}
      className={`group relative flex flex-col md:flex-row overflow-hidden rounded-[2rem] md:rounded-[3rem] border ${accentColor.border} bg-black/90 shadow-2xl transition-all duration-500 ease-out min-w-[280px] sm:min-w-[320px] md:min-w-[500px] lg:min-w-[600px] h-auto md:h-[400px] snap-center`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${accentColor.gradient}, transparent 40%)`,
        }}
      />

      {/* Spotlight Border Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${accentColor.gradientStrong}, transparent 40%)`,
        }}
      />

      {/* Image Section - Top on mobile, Left on desktop */}
      <div className={`relative w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br ${accentColor.bgGradient} to-black/50 p-8 md:p-12 transition-all duration-500 ease-out`}>
        <div className="relative z-10">
          <motion.img
            src={cat.image}
            alt={cat.title}
            className={`w-32 h-32 md:w-48 md:h-48 object-contain ${accentColor.shadow} transition-all duration-500 ease-out`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </div>
        {/* Decorative Elements */}
        <motion.div
          className={`absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-20 md:h-20 border ${accentColor.decorBorder} rounded-2xl rotate-12 transition-all duration-500 ease-out`}
          whileHover={{ rotate: 24, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        <motion.div
          className={`absolute bottom-4 left-4 md:bottom-8 md:left-8 w-10 h-10 md:w-16 md:h-16 border ${accentColor.decorBorder} rounded-xl -rotate-12 transition-all duration-500 ease-out`}
          whileHover={{ rotate: -24, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </div>

      {/* Content Section - Bottom on mobile, Right on desktop */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-between p-6 md:p-10">
        <div>
          <motion.div
            className="flex items-center justify-between mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-2xl md:text-3xl font-bold text-[#fdfbf7] tracking-tight">
              {cat.title}
            </h4>
            <motion.div
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${accentColor.indicator}`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className={`h-px bg-gradient-to-r ${accentColor.divider} to-transparent mb-6 md:mb-8`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3">
          {cat.skills.map((skill: string, i: number) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{
                delay: idx * 0.1 + i * 0.06,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
              className={`px-3 py-1.5 md:px-4 md:py-2 ${accentColor.skillBg} rounded-xl text-xs md:text-sm font-medium text-[#fdfbf7]/60 transition-all duration-300 ease-out cursor-default border`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


export default Skills;
