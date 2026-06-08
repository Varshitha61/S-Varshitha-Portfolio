
import React, { useMemo, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const AtmosphericBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax effects
  const yParallaxSlow = useTransform(scrollY, [0, 5000], [0, -150]);
  const yParallaxFast = useTransform(scrollY, [0, 5000], [0, -300]);

  // Ambient organic blobs
  const blobs = useMemo(() => [
    { id: 1, size: 'w-[800px] h-[800px]', color: 'bg-emerald-950/20', initial: { x: '-20%', y: '10%' }, animate: { x: '10%', y: '40%' }, duration: 25 },
    { id: 2, size: 'w-[600px] h-[600px]', color: 'bg-emerald-900/10', initial: { x: '80%', y: '60%' }, animate: { x: '50%', y: '20%' }, duration: 30 },
    { id: 3, size: 'w-[400px] h-[400px]', color: 'bg-emerald-800/5', initial: { x: '40%', y: '-10%' }, animate: { x: '70%', y: '30%' }, duration: 20 },
  ], []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#000000]">
      {/* 1. Subtle Dot Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #de3e53 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* 2. Moving Atmospheric Blobs */}
      <motion.div style={{ y: yParallaxSlow }} className="absolute inset-0">
        {blobs.map((blob) => (
          <motion.div
            key={blob.id}
            initial={blob.initial}
            animate={{
              x: [blob.initial.x, blob.animate.x, blob.initial.x],
              y: [blob.initial.y, blob.animate.y, blob.initial.y],
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute rounded-full blur-[120px] ${blob.color} ${blob.size}`}
          />
        ))}
      </motion.div>

      {/* 3. Interactive Mouse Spotlight Overlay */}
      <motion.div
        className="absolute inset-0 z-10 opacity-30"
        style={{
          background: useTransform(
            [smoothMouseX, smoothMouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(223, 173, 39, 0.08), transparent 70%)`
          )
        }}
      />

      {/* 4. Drifting Particles (Stars) */}
      <motion.div style={{ y: yParallaxFast }} className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-500/10"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.5, 1] }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity,
              delay: Math.random() * 5 
            }}
          />
        ))}
      </motion.div>

      {/* 5. Vignette Shadow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
};

export default AtmosphericBackground;
