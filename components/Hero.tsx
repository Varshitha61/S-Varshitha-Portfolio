
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import Magnetic from './Magnetic';
import TextScramble from './TextScramble';
import profileImg from '/assets/profile.jpg';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for page to fully load, then wait 6 seconds before starting animations
    const startAnimations = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000); // 1 second delay
    };

    if (document.readyState === 'complete') {
      startAnimations();
    } else {
      window.addEventListener('load', startAnimations);
      return () => window.removeEventListener('load', startAnimations);
    }
  }, []);

  const handleDiscoverClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('projects');
    if (elem) {
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[var(--black)]">
      {/* Sidebar - Magnetic Socials */}
      <div className="absolute left-0 top-0 h-full w-12 md:w-20 border-r border-emerald-500/10 flex flex-col justify-between items-center py-12 z-20 hidden sm:flex">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="vertical-text text-[10px] font-bold tracking-[0.4em] uppercase text-emerald-500/40"
        >
          COIMBATORE, INDIA
        </motion.div>

        <div className="flex flex-col gap-8 items-center">
          <Magnetic strength={0.2}>
            <a href="https://github.com/Varshitha61" target="_blank" rel="noopener noreferrer" className="text-emerald-100/30 hover:text-emerald-400 transition-colors block p-2">
              <Github size={18} />
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="https://www.linkedin.com/in/s-varshitha-69a2692a6" target="_blank" rel="noopener noreferrer" className="text-emerald-100/30 hover:text-emerald-400 transition-colors block p-2">
              <Linkedin size={18} />
            </a>
          </Magnetic>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="vertical-text text-[10px] font-bold tracking-[0.4em] uppercase text-emerald-500/40"
        >
          EST. 2025
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto w-full px-6 md:pl-32 md:pr-12 grid lg:grid-cols-12 gap-8 lg:gap-0 items-center min-h-screen pt-20 lg:pt-0">

        {/* Text Section */}
        <div className="lg:col-span-6 relative z-10 flex flex-col justify-center">
          <div>
            <div className="mb-2">
              <span className="text-green-500 font-sans-modern font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs block">
                <TextScramble text="SOFTWARE ENGINEER & DEVELOPER" delay={isLoaded ? 800 : 999999} autostart={isLoaded} />
              </span>
            </div>

            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-medium leading-[0.85] mb-12 text-[#fdfbf7] tracking-tighter italic min-h-[180px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px]">
              <motion.span
                className="block"
                initial={{ scale: 0.85 }}
                animate={isLoaded ? { scale: 1 } : { scale: 0.85 }}
                transition={{
                  delay: 1.3 + 0.5,
                  duration: 1.2,
                  ease: "easeInOut"
                }}
                style={{ transformOrigin: "left center" }}
              >
                <TextScramble text="Varshitha" delay={isLoaded ? 1300 : 999999} className="block" autostart={isLoaded} />
              </motion.span>
              <motion.span
                className="block mt-8 font-sans-modern font-black capitalize tracking-normal not-italic text-gradient text-5xl sm:text-6xl md:text-7xl lg:text-8xl pl-12 sm:pl-16 md:pl-20 lg:pl-28"
                initial={{ scale: 0.85 }}
                animate={isLoaded ? { scale: 1.25 } : { scale: 0.85 }}
                transition={{
                  delay: 1.45 + 0.5,
                  duration: 1.2,
                  ease: "easeInOut"
                }}
                style={{ transformOrigin: "left center" }}
              >
                <TextScramble text="Somashekar" delay={isLoaded ? 1450 : 999999} autostart={isLoaded} />
              </motion.span>
            </h1>
          </div>
        </div>

        {/* Image Section - Interactive Frame */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: [1, 1.05, 0.95, 1.02, 1],
              y: [0, -30, 10, -15, 0],
              x: [0, 10, -5, 8, 0],
              rotate: [0, 5, -3, 2, 0]
            }}
            transition={{
              opacity: { duration: 1, ease: "easeOut" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-full aspect-square sm:max-w-[400px] lg:max-w-[450px] rounded-full"
            data-cursor-text="VIEW"
            style={{ filter: "drop-shadow(0 0 30px rgba(104, 211, 145, 0.3))" }}
          >
            <motion.div
              className="group relative w-full h-full overflow-hidden grayscale-[60%] hover:grayscale-0 transition-all duration-[1.5s] border-2 border-emerald-500/30 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(104, 211, 145, 0.2)",
                  "0 0 40px rgba(104, 211, 145, 0.4)",
                  "0 0 20px rgba(104, 211, 145, 0.2)"
                ]
              }}
              transition={{ boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            >
              <img
                src={profileImg}
                alt="Varshitha Portrait"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.19,1,0.22,1] group-hover:scale-[1.5] group-hover:rotate-3"
                style={{ objectPosition: 'center 20%', transform: 'scale(1.3)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>


          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        onClick={() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        whileHover={{ y: [0, 20, 0] }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
      >
        <div className="flex gap-0.5">
          {['E', 'X', 'P', 'L', 'O', 'R', 'E'].map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0.7 }}
              whileHover={{
                opacity: [0.6, 1, 0.7, 1],
                y: [0, -10, 0, -5, 0],
                x: [0, 2, 0, -2, 0],
                scale: [1, 1.4, 1, 1.2, 1],
                rotate: [0, 5, 0, -5, 0],
                color: [
                  "rgb(52, 211, 153)",
                  "rgb(167, 243, 208)",
                  "rgb(52, 211, 153)",
                  "rgb(134, 239, 172)",
                  "rgb(52, 211, 153)"
                ],
                textShadow: [
                  "0 0 0px rgba(16, 185, 129, 0)",
                  "0 0 20px rgba(16, 185, 129, 1), 0 0 30px rgba(16, 185, 129, 0.5)",
                  "0 0 10px rgba(16, 185, 129, 0.6)",
                  "0 0 15px rgba(16, 185, 129, 0.8)",
                  "0 0 0px rgba(16, 185, 129, 0)"
                ]
              }}
              transition={{
                delay: index * 0.15,
                duration: 2.5,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
              className="text-[10px] font-black tracking-wide uppercase text-emerald-400"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.div
          className="w-[2px] h-14 rounded-full bg-gradient-to-b from-emerald-400 via-emerald-500/70 to-transparent"
          animate={{
            scaleY: [1, 1.5, 1, 1.3, 1],
            opacity: [0.4, 1, 0.6, 0.8, 0.4],
            boxShadow: [
              "0 0 0px rgba(16, 185, 129, 0)",
              "0 0 15px rgba(16, 185, 129, 0.8)",
              "0 0 5px rgba(16, 185, 129, 0.4)",
              "0 0 10px rgba(16, 185, 129, 0.6)",
              "0 0 0px rgba(16, 185, 129, 0)"
            ]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1]
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
