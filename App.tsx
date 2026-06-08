
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CodingProfiles from './components/CodingProfiles';
import VelocityText from './components/VelocityText';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';
import CustomCursor from './components/CustomCursor';
import Modal from './components/Modal';

type ModalType = 'about' | 'skills' | 'projects' | 'experience' | 'coding' | 'connect' | null;

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (modal: ModalType) => {
    setActiveModal(modal);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="relative min-h-screen cursor-none">
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--black)]"
            exit={{
              clipPath: 'inset(0 0 100% 0)',
              transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl font-heading italic text-emerald-500 mb-2">VS</div>
              <div className="w-48 h-[1px] bg-emerald-950 relative overflow-hidden">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 w-1/2 h-full bg-emerald-500 shadow-[0_0_15px_#10b981]"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <StarBackground />
      <Navbar onNavigate={openModal} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <VelocityText />
        <Projects />
        <CodingProfiles />
      </main>

      <Footer />

      {/* Modals - Open when navbar is clicked */}
      <Modal isOpen={activeModal === 'about'} onClose={closeModal} title="About Me">
        <About />
      </Modal>

      <Modal isOpen={activeModal === 'skills'} onClose={closeModal} title="Skills & Expertise">
        <Skills />
      </Modal>

      <Modal isOpen={activeModal === 'projects'} onClose={closeModal} title="Featured Work">
        <Projects />
      </Modal>

      <Modal isOpen={activeModal === 'experience'} onClose={closeModal} title="Professional Experience">
        <Experience />
      </Modal>

      <Modal isOpen={activeModal === 'coding'} onClose={closeModal} title="Coding Profiles">
        <CodingProfiles />
      </Modal>

      <Modal isOpen={activeModal === 'connect'} onClose={closeModal} title="Get In Touch">
        <Footer />
      </Modal>
    </div>
  );
};

export default App;
