import { motion } from 'framer-motion';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: Props) {
  const a = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className={`max-w-2xl ${a} mb-12 sm:mb-16`}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="eyebrow inline-flex items-center gap-2"
        >
          <span className="h-px w-6 bg-copper/60" />
          {eyebrow}
          <span className="h-px w-6 bg-copper/60" />
        </motion.span>
      )}
      <h2 className="mt-3 heading-display">{title}</h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
