
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Terminal, Award, Zap, ExternalLink } from 'lucide-react';

const BongoCat: React.FC = () => {
  return (
    <div className="relative w-40 h-24 mb-12 mx-auto lg:mx-0">
      <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
        {/* Cat Body/Head */}
        <motion.path
          d="M20,50 Q20,20 50,20 Q80,20 80,50"
          fill="none"
          stroke="#68d391"
          strokeWidth="3"
        />
        {/* Eyes */}
        <circle cx="35" cy="35" r="2" fill="#68d391" />
        <circle cx="65" cy="35" r="2" fill="#68d391" />

        {/* Left Paw - Fast Typing */}
        <motion.path
          d="M25,45 Q20,55 35,55"
          fill="none"
          stroke="#68d391"
          strokeWidth="3"
          animate={{
            y: [0, -10, 0],
            rotate: [0, -15, 0]
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Right Paw - Fast Typing */}
        <motion.path
          d="M75,45 Q80,55 65,55"
          fill="none"
          stroke="#68d391"
          strokeWidth="3"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            ease: "linear",
            delay: 0.05
          }}
        />

        {/* Floating Code Snippets/Particles */}
        <motion.g
          animate={{ opacity: [0, 1, 0], y: [0, -20] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
        >
          <text x="20" y="20" fill="#68d391" fontSize="5" className="font-sans-modern font-black">{"{ }"}</text>
        </motion.g>
        <motion.g
          animate={{ opacity: [0, 1, 0], y: [0, -25] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
        >
          <text x="70" y="15" fill="#68d391" fontSize="4" className="font-sans-modern font-black">01</text>
        </motion.g>

        {/* Keyboard Base */}
        <rect x="25" y="52" width="50" height="6" rx="2" fill="#68d391" fillOpacity="0.2" stroke="#68d391" strokeWidth="1" />
      </svg>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-black text-green-500 tracking-[0.3em] uppercase font-sans-modern whitespace-nowrap">
        ACTIVE COMPILER
      </div>
    </div>
  );
};

const ProfileCard: React.FC<{ item: any; idx: number }> = ({ item, idx }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // High-fidelity 3D interaction state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
    setGlowPos({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative group perspective-2000 h-full">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ y: 20 }} // Simulates the mechanical "Press"
        className="relative cursor-pointer transition-all duration-700 h-full"
      >
        {/* Layer 1: Keyboard Bottom Plate (The Base) */}
        <div className="absolute inset-0 bg-[#050505] rounded-[3.5rem] translate-y-8 shadow-[0_30px_60px_rgba(0,0,0,0.9)] border-b-8 border-green-950/80" />

        {/* Layer 2: The Mechanical Switch "Stem" (Middle Layer) */}
        <div className="absolute inset-x-4 inset-y-0 bg-emerald-900/30 rounded-[3rem] translate-y-4 blur-[1px] group-hover:bg-green-500/10 transition-colors duration-500" />

        {/* Layer 3: The Keycap Surface (Main Card Body) */}
        <div className="relative h-full glass p-10 md:p-14 rounded-[3.5rem] border border-green-500/10 bg-black/95 overflow-hidden transition-all duration-500 group-hover:border-green-500/30">

          {/* Reactive RGB Backlight Glow */}
          <div
            className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(500px circle at ${glowPos.x}px ${glowPos.y}px, rgba(16, 185, 129, 0.15), transparent 70%)`,
              inset: 0
            }}
          />

          {/* Key Legend - Floating at high translateZ */}
          <div
            className="absolute top-10 right-12 flex flex-col items-end pointer-events-none select-none transition-all duration-500 group-hover:translate-y-[-10px]"
            style={{ transform: "translateZ(80px)" }}
          >
            <span className="text-7xl font-black font-sans-modern text-green-500/10 group-hover:text-green-500/80 leading-none transition-all duration-700 italic">
              {item.keyCode}
            </span>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[7px] font-black tracking-[0.3em] text-green-500/40 uppercase">Gateron Green</span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#68d391]" />
            </div>
          </div>

          <div className="flex flex-col h-full relative z-10" style={{ transform: "translateZ(40px)" }}>
            {/* Header / Platform Icon */}
            <div className="mb-8 flex items-center gap-6 group-hover:translate-x-2 transition-transform duration-500">
              <div className="p-5 bg-green-500/10 rounded-2xl text-green-400 border border-green-500/20 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                {item.icon}
              </div>
              <h4 className="text-4xl font-bold font-heading text-[#fdfbf7] tracking-tighter">{item.platform}</h4>
            </div>

            {/* Stats Content */}
            <div className="space-y-8 flex-grow">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 group-hover:translate-x-2 transition-transform duration-500">
                {item.rating && (
                  <div>
                    <p className="text-[10px] font-black text-green-500/50 tracking-[0.2em] uppercase mb-1 font-sans-modern">Rating</p>
                    <p className="text-2xl font-bold text-[#fdfbf7] tracking-tight">{item.rating}</p>
                  </div>
                )}
                {item.solved && (
                  <div>
                    <p className="text-[10px] font-black text-green-500/50 tracking-[0.2em] uppercase mb-1 font-sans-modern">Solved</p>
                    <p className="text-2xl font-bold text-[#fdfbf7] tracking-tight">{item.solved}</p>
                  </div>
                )}
                {item.rank && (
                  <div className="col-span-2">
                    <p className="text-[10px] font-black text-green-500/50 tracking-[0.2em] uppercase mb-1 font-sans-modern">Rank / Category</p>
                    <p className="text-lg font-bold text-green-400 tracking-tight">{item.rank}</p>
                  </div>
                )}
              </div>

              <div className="h-px bg-green-500/10" />

              <div className="group-hover:translate-x-4 transition-transform duration-500">
                <p className="text-[10px] font-black text-green-500/50 tracking-[0.4em] uppercase mb-2 font-sans-modern">Profile Link</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xl font-black text-[#fdfbf7] tracking-tighter hover:text-green-400 transition-colors duration-300 group/link"
                >
                  Visit Profile
                  <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Keycap Bevel Effect - Overlay */}
        <div className="absolute inset-0 pointer-events-none rounded-[3.5rem] border border-white/5 z-20" />
      </motion.div>
    </div>
  );
};

const stats = [
  {
    platform: 'LeetCode',
    link: 'https://leetcode.com/u/varshithasomashekar22/',
    rank: 'Top 50%',
    solved: '240+',
    rating: '1659',
    icon: <Zap size={28} />,
    color: 'emerald',
    keyCode: 'L'
  },
  {
    platform: 'CodeChef',
    link: 'https://www.codechef.com/users/varshitha061',
    rank: '3★',
    solved: '500 Solved',
    rating: '1725',
    icon: <Award size={28} />,
    color: 'cream',
    keyCode: 'C'
  },
  {
    platform: 'Codeforces',
    link: 'https://codeforces.com/profile/varshithasomashekar_02',
    rank: 'Pupil',
    solved: 'Active',
    rating: '1218',
    icon: <Terminal size={28} />,
    color: 'emerald',
    keyCode: 'F'
  }
];

const CodingProfiles: React.FC = () => {
  return (
    <section id="coding" className="py-48 px-4 md:px-8 lg:px-12 bg-[#000000] border-t border-green-500/5 relative overflow-hidden">
      {/* Background Matrix/Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#68d39108_1px,transparent_1px),linear-gradient(to_bottom,#68d39108_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Accent Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green-950/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <h2 className="text-green-500 text-[10px] font-black font-sans-modern tracking-[0.8em] uppercase mb-10">Algorithmic Engineering</h2>
            <h3 className="text-7xl md:text-9xl font-bold font-heading tracking-tighter italic text-gradient">
              Technical <span className="not-italic font-black text-gradient">Profiles</span>
            </h3>
            <p className="text-green-100/30 mt-10 max-w-2xl text-xl font-light leading-relaxed mx-auto lg:mx-0">
              Mastering the art of efficiency. Each platform represents a different facet of my problem-solving architecture, optimized for speed and logic.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
          >
            <BongoCat />
          </motion.div>
        </div>

        {/* 3D Keycap Grid */}
        <div className="grid lg:grid-cols-3 gap-16 md:gap-24">
          {stats.map((item, idx) => (
            <ProfileCard key={item.platform} item={item} idx={idx} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .perspective-2000 {
          perspective: 2000px;
        }
      `}} />
    </section>
  );
};

export default CodingProfiles;
