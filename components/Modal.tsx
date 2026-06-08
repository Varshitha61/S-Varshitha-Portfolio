import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
                    />

                    {/* Modal Card */}
                    <div className="fixed inset-0 z-[201] flex items-center justify-center p-2 md:p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 50 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full h-[95vh] overflow-y-auto pointer-events-auto glass rounded-2xl md:rounded-3xl border border-pink-500/20 shadow-2xl shadow-pink-500/20"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="sticky top-4 right-4 float-right z-10 p-3 glass rounded-full border border-pink-500/20 hover:bg-pink-500/20 transition-all text-pink-400 hover:text-pink-300"
                            >
                                <X size={20} />
                            </button>

                            {/* Content */}
                            <div className="p-6 md:p-10 lg:p-12">
                                {title && (
                                    <h2 className="text-3xl md:text-4xl font-black font-heading mb-8 text-gradient">
                                        {title}
                                    </h2>
                                )}
                                {children}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;
