import { motion } from 'framer-motion';
import { ChevronDown, Phone, Calendar } from 'lucide-react';
import { HERO_IMAGE, SITE } from '../data/site';

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_IMAGE}
          alt="BosBoma bushveld wedding venue"
          className="h-full w-full animate-kenburns object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-ember-radial mix-blend-overlay opacity-60" />
      </div>

      <div className="container-prose relative w-full pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-36">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-bone-50/30 bg-bone-50/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-bone-50 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ember-glow animate-flicker" />
          Bushveld elegance, redefined
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,7vw,5.5rem)] leading-[1.02] text-bone-50"
        >
          Your day,{' '}
          <span className="italic text-sand-200">our undivided</span>{' '}
          attention.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-bone-100/90 sm:text-lg"
        >
          Host your wedding in a serene, open-air setting where rustic textures meet modern luxury.
          Exclusive use, tailored celebrations and unforgettable moments beneath the African sky,
          just north of Pretoria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <a href="#contact" className="btn-primary">
            <Calendar size={16} />
            Plan your day
          </a>
          <a href={SITE.phoneHref} className="btn-ghost">
            <Phone size={16} />
            {SITE.phone}
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to discover"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-bone-50/80 transition-colors hover:text-bone-50 sm:block"
      >
        <ChevronDown size={28} className="animate-float" />
      </a>
    </section>
  );
}
