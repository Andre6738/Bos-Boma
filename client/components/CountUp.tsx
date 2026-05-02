import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

interface Props {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function CountUp({ to, duration = 1.6, prefix = '', suffix = '', className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const rounded = useTransform(spring, (latest) => `${prefix}${Math.round(latest)}${suffix}`);
  const [text, setText] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (inView) motionValue.set(to);
  }, [inView, to, motionValue]);

  useEffect(() => rounded.on('change', (v) => setText(v)), [rounded]);

  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  );
}
