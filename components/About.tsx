
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, GraduationCap, FileText } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-black/40 border-t border-pink-500/5">
      {/* Subtle Background Animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pulsating Gradient Blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-pink-500/20 rounded-full blur-[120px]"
        />

        {/* Slow Drifting Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0
            }}
            animate={{
              y: [null, "-20%", "20%"],
              x: [null, "10%", "-10%"],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
            className="absolute w-1 h-1 bg-pink-400 rounded-full blur-[1px]"
          />
        ))}
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="glass p-8 md:p-12 lg:p-16 rounded-3xl border border-pink-500/20 shadow-2xl shadow-pink-500/10"
          initial={{ boxShadow: "0 0 0px rgba(236, 72, 153, 0)" }}
          whileInView={{
            boxShadow: [
              "0 0 0px rgba(236, 72, 153, 0)",
              "0 0 40px rgba(236, 72, 153, 0.3)",
              "0 0 20px rgba(236, 72, 153, 0.15)"
            ]
          }}
          viewport={{ once: true }}
          transition={{ duration: 3, times: [0, 0.5, 1], ease: "easeInOut" }}
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-pink-500 text-xs font-bold tracking-[0.4em] uppercase mb-8">Personal Narrative</h2>
              <h3 className="text-4xl md:text-6xl font-black font-heading mb-10 leading-tight">
                Solving <span className="text-gradient">complex problems</span> with simple code.
              </h3>

              <p className="text-[#fdfbf7]/70 text-lg md:text-xl leading-relaxed mb-12 font-light">
                I am a Full-Stack / MERN Stack Developer based in Coimbatore, specialized in building responsive, scalable web applications using MongoDB, Express.js, React, and Node.js. With hands-on experience in developing production-ready SPAs, designing robust REST APIs, and integrating Google Gemini AI features, I focus on clean code, database optimization, and premium UI design.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass p-8 rounded-3xl border-pink-500/10 flex flex-col gap-4"
                >
                  <MapPin className="text-pink-400" size={28} />
                  <div>
                    <h4 className="font-bold text-[#fdfbf7] text-lg">Location</h4>
                    <p className="text-sm text-[#fdfbf7]/40 uppercase tracking-widest mt-1">Coimbatore, Tamil Nadu</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass p-8 rounded-3xl border-pink-500/10 flex flex-col gap-4"
                >
                  <BookOpen className="text-pink-400" size={28} />
                  <div>
                    <h4 className="font-bold text-[#fdfbf7] text-lg">Philosophy</h4>
                    <p className="text-sm text-[#fdfbf7]/40 uppercase tracking-widest mt-1">Efficiency is Elegance</p>
                  </div>
                </motion.div>
              </div>


            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <h2 className="text-pink-500 text-xs font-bold tracking-[0.4em] uppercase mb-10">Academic Path</h2>
              <div className="space-y-12">
                <div className="relative pl-12 border-l-2 border-pink-500/10 py-2 group">
                  <div className="absolute left-[-9px] top-4 w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-transform group-hover:scale-125" />
                  <span className="text-xs text-pink-500 font-bold uppercase tracking-widest">2023 – 2027</span>
                  <h4 className="text-2xl md:text-3xl font-bold mt-3 text-[#fdfbf7]">KIT, Coimbatore</h4>
                  <p className="text-[#fdfbf7]/50 mt-2 text-lg">B.E. Computer Science and Engineering</p>
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 rounded-xl text-xs font-black text-pink-400 border border-pink-500/20">
                    <GraduationCap size={14} /> CURRENT CGPA: 8.0
                  </div>
                </div>

                <div className="relative pl-12 border-l-2 border-pink-500/5 py-2 group">
                  <div className="absolute left-[-9px] top-4 w-4 h-4 rounded-full bg-pink-500/20 transition-transform group-hover:scale-125" />
                  <span className="text-xs text-[#fdfbf7]/30 font-bold uppercase tracking-widest">Pre-University</span>
                  <h4 className="text-2xl font-bold mt-3 text-[#fdfbf7]/80">Gnanadhara PU College</h4>
                  <p className="text-[#fdfbf7]/40 mt-2 text-lg">Class XII (PCMC)</p>
                  <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl text-xs font-black text-[#fdfbf7]/30 border border-white/5">
                    FINAL RESULT: 80%
                  </div>
                </div>
              </div>

              <motion.a
                href="https://drive.google.com/file/d/1ZdMATG_XCsTwjMdH3V_XSfa1LkVxmKZP/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-pink-500 text-black rounded-full font-bold text-sm tracking-widest uppercase hover:bg-pink-400 transition-colors shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
              >
                <FileText size={18} />
                View Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Decorative Text */}
      <div className="absolute top-1/2 -right-20 opacity-[0.02] text-[15rem] font-black pointer-events-none select-none vertical-text">
        PROFILE
      </div>
    </section>
  );
};

export default About;
