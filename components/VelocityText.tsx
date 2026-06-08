
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface VelocityTextProps {
  children: string;
  baseVelocity: number;
}

// Fixed ParallaxText by explicitly typing as React.FC to handle children correctly in JSX
const ParallaxText: React.FC<VelocityTextProps> = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden tracking-tighter leading-[0.8] whitespace-nowrap flex flex-nowrap py-10 md:py-20">
      <motion.div className="font-heading font-black text-6xl md:text-8xl lg:text-[10rem] uppercase italic flex flex-nowrap gap-12" style={{ x }}>
        <span className="text-gradient block">{children} </span>
        <span className="text-gradient block">{children} </span>
        <span className="text-gradient block">{children} </span>
        <span className="text-gradient block">{children} </span>
      </motion.div>
    </div>
  );
};

const VelocityText: React.FC = () => {
  return (
    <section className="relative bg-[var(--black)] border-y border-green-500/5 py-10">
      {/* Component usages with single child string literals */}
      <ParallaxText baseVelocity={-2}>Innovative Design & Engineering</ParallaxText>
      <ParallaxText baseVelocity={2}>Full Stack Development • AI Solutions</ParallaxText>
    </section>
  );
};

export default VelocityText;
