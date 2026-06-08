
import React, { useState, useEffect } from 'react';

interface TextScrambleProps {
  text: string;
  autostart?: boolean;
  className?: string;
  delay?: number;
}

const chars = '!<>-_\\/[]{}—=+*^?#________';

const TextScramble: React.FC<TextScrambleProps> = ({ text, autostart = true, className = "", delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (autostart) {
      const timer = setTimeout(() => {
        scramble();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [text, autostart, delay]);

  const scramble = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsAnimating(false);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span className={className}>
      {displayText || text}
    </span>
  );
};

export default TextScramble;
