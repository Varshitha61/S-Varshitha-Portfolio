
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Full-Stack Developer Intern',
    company: 'LearnLogicify Technologies LLP',
    type: 'Coimbatore, India (On-site)',
    duration: 'June 2025 – July 2025',
    desc: [
      'Developed and maintained full-stack components using React.js, and MySQL. Designed and consumed RESTful APIs for business workflows.',
      'Performed unit testing and debugging to improve stability.',
      'Followed CI/CD concepts and Git-based version control. Participated in peer code reviews and documentation.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Subtle Background Animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pulsating Gradient Blob */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[100px]"
        />

        {/* Slow Drifting Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0
            }}
            animate={{
              y: [null, "-30%", "10%"],
              x: [null, "-5%", "5%"],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 18 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3
            }}
            className="absolute w-1 h-1 bg-pink-500 rounded-full blur-[1px]"
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-pink-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-gradient">Professional Experience</h3>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative glass p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-600" />
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-2 text-[#fdfbf7]">{exp.role}</h4>
                  <p className="text-gradient font-bold uppercase text-xs tracking-widest">{exp.company} <span className="text-pink-100/30 font-normal ml-2">/ {exp.type}</span></p>
                </div>
                <div className="px-5 py-2 glass rounded-full text-xs font-bold text-emerald-300 border border-pink-500/20 whitespace-nowrap">
                  {exp.duration}
                </div>
              </div>

              <ul className="space-y-5">
                {exp.desc.map((item, i) => (
                  <li key={i} className="flex gap-4 text-pink-100/40 leading-relaxed font-light text-base md:text-lg">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-pink-500/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-pink-100/10">
                <Briefcase size={14} /> Industrial Experience
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
