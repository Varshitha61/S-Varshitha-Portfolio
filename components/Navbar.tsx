
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Magnetic from './Magnetic';

type ModalType = 'about' | 'skills' | 'projects' | 'experience' | 'coding' | 'connect' | null;

interface NavbarProps {
  onNavigate: (modal: ModalType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Index', modal: null as ModalType },
    { name: 'About', modal: 'about' as ModalType },
    { name: 'Skills', modal: 'skills' as ModalType },
    { name: 'Work', modal: 'projects' as ModalType },
    { name: 'Coding', modal: 'coding' as ModalType },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, modal: ModalType) => {
    e.preventDefault();
    setIsOpen(false);

    if (modal === null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigate(modal);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${scrolled ? 'py-4 glass border-b border-green-500/5' : 'py-8 bg-transparent'
        }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-[110]"
        >
          <a href="#" onClick={(e) => handleNavClick(e, null)} className="text-xl font-bold font-sans-modern tracking-tighter text-[#fdfbf7] group flex items-center gap-2">
            <span className="text-green-500 italic">V</span>S
          </a>
        </motion.div>

        {/* Centered Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Magnetic key={link.name} strength={0.3}>
              <a
                href="#"
                onClick={(e) => handleNavClick(e, link.modal)}
                className="text-[10px] font-black font-sans-modern text-green-100/40 hover:text-green-400 transition-all uppercase tracking-[0.4em] relative group p-2"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-green-500 group-hover:w-full transition-all duration-500" />
              </a>
            </Magnetic>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="hidden md:block relative z-[110]">
          <Magnetic strength={0.1}>
            <a
              href="#"
              onClick={(e) => handleNavClick(e, 'connect')}
              className="text-[10px] font-black font-sans-modern uppercase tracking-[0.4em] text-white px-8 py-3 border border-green-500/10 hover:bg-green-500 hover:text-black transition-all inline-block cursor-pointer"
            >
              Connect
            </a>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-green-400 p-2 relative z-[110]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="md:hidden fixed inset-0 bg-black z-[105] flex flex-col justify-center items-center p-12"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  onClick={(e) => handleNavClick(e, link.modal)}
                  className="text-4xl font-medium italic text-[#fdfbf7] hover:text-green-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-20 border-t border-green-500/10 pt-10 w-full text-center">
              <p className="text-[10px] font-bold font-sans-modern tracking-[0.3em] uppercase text-green-500/40">AVAILABLE FOR WORK • 2025</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
