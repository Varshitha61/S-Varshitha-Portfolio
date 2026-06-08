
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 400, damping: 28 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      const hoverText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
      const isClickable = window.getComputedStyle(target).cursor === 'pointer';
      
      setCursorText(hoverText || "");
      setIsHovering(!!hoverText);
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-green-500 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center overflow-hidden"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        x: '-50%',
        y: '-50%',
      }}
      animate={{
        width: isHovering ? 80 : (isPointer ? 30 : 12),
        height: isHovering ? 80 : (isPointer ? 30 : 12),
      }}
    >
      {isHovering && (
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[10px] font-black text-black uppercase tracking-tighter"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
