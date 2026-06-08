import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    // Check if variables are possibly empty strings (e.g. initial setup)
    // to avoid misleading errors, though functionality depends on valid envs.
    const { error } = await supabase
      .from('messages')
      .insert([formData]);

    if (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.type === 'email' ? 'email' : e.target.type === 'text' ? 'name' : 'message']: e.target.value }));
  };

  return (
    <footer id="connect" className="relative pt-24 pb-12 px-4 md:px-8 lg:px-12 overflow-hidden border-t border-pink-500/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-6xl font-black font-heading mb-8 leading-[1.1] text-[#fdfbf7] tracking-tighter">
              Let's craft <br /> something <span className="text-gradient">memorable</span>.
            </h2>
            <p className="text-pink-100/40 text-lg md:text-xl mb-12 max-w-lg font-light">
              Available for collaborations where high-end design meets engineering excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05, y: -4 }}
                href="https://github.com/Varshitha61" target="_blank" className="p-5 glass rounded-[1.5rem] border-pink-500/10 hover:border-pink-500/30 text-pink-400"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -4 }}
                href="https://www.linkedin.com/in/s-varshitha-69a2692a6" target="_blank" className="p-5 glass rounded-[1.5rem] border-pink-500/10 hover:border-pink-500/30 text-pink-400"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -4 }}
                href="mailto:varshithasomashekar22@gmail.com" className="p-5 glass rounded-[1.5rem] border-pink-500/10 hover:border-pink-500/30 text-pink-400"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <h4 className="text-[10px] font-bold tracking-[0.4em] text-pink-500 uppercase mb-6 lg:text-right">Get in Touch</h4>

            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 border border-pink-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors placeholder:text-pink-500/60 text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 border border-pink-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors placeholder:text-pink-500/60 text-sm"
                  required
                />
              </div>
              <textarea
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/10 border border-pink-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors placeholder:text-pink-500/60 text-sm resize-none"
                required
              />
              <div className="flex justify-end items-center gap-4">
                {status === 'success' && <span className="text-pink-400 text-xs font-bold uppercase tracking-widest">Message Sent!</span>}
                {status === 'error' && <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Error sending.</span>}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'submitting'}
                  className="px-6 py-3 bg-pink-500 text-black font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-pink-400 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'} <Mail size={14} />
                </motion.button>
              </div>
            </form>

            <div className="space-y-4 lg:text-right">
              <div>
                <span className="text-pink-500/40 text-[10px] uppercase tracking-[0.2em] font-black block mb-1">Email:</span>
                <a href="mailto:varshithasomashekar22@gmail.com" className="text-xl md:text-2xl font-bold text-[#fdfbf7] hover:text-pink-400 transition-colors font-heading tracking-tighter block">
                  varshithasomashekar22@gmail.com
                </a>
              </div>
              <div className="mt-4">
                <span className="text-pink-500/40 text-[10px] uppercase tracking-[0.2em] font-black block mb-1">Phone:</span>
                <a href="tel:+917892598335" className="text-xl md:text-2xl font-bold text-[#fdfbf7] hover:text-pink-400 transition-colors font-heading tracking-tighter block">
                  7892598335
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-pink-500/5 gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-pink-800 flex items-center justify-center text-white text-xs font-bold border border-pink-500/10">V</div>
            <p className="text-pink-100/60 text-[11px] font-bold uppercase tracking-[0.2em]">
              © S Varshitha • Animation & Code
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-3 px-8 py-3 glass rounded-full text-xs font-bold uppercase tracking-widest hover:bg-pink-950/20 transition-all border-pink-500/10 text-pink-400"
          >
            Back to Top <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>

      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-950/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
};

export default Footer;
