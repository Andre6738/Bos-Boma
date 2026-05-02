import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Maximize2 } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { SPECIALS } from '../data/highlights';

export default function Specials() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section id="specials" className="section relative overflow-hidden bg-bone-50">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="container-prose relative">
        <SectionHeading
          eyebrow="Our specials"
          title="Curated offers, just for you."
          subtitle="Limited-time packages crafted around real bushveld moments. Tap any card to view full pricing."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SPECIALS.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: (i % 2) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl bg-bone-50 shadow-soft ring-1 ring-ink/5 transition-shadow hover:shadow-card"
            >
              <button
                type="button"
                onClick={() => setLightbox(s.image)}
                aria-label={`View ${s.title} full image`}
                className="relative block aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-sand-100 via-bone-50 to-sand-200 sm:aspect-[4/3]"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-contain p-4 transition-transform duration-[1200ms] group-hover:scale-105 sm:p-6"
                />
                {s.badge && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ember-glow/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink shadow-glow">
                    <Sparkles size={12} />
                    {s.badge}
                  </span>
                )}
                <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-bone-50/90 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink shadow-soft backdrop-blur opacity-0 transition-opacity group-hover:opacity-100">
                  <Maximize2 size={11} />
                  Tap to expand
                </span>
              </button>
              <div className="flex flex-col gap-3 p-6 sm:p-7">
                <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{s.description}</p>
                <a
                  href="#contact"
                  className="shine-on-hover mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-copper px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-bone-50 transition-colors hover:bg-copper-dark"
                >
                  Enquire now
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 rounded-full bg-bone-50/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-bone-50 backdrop-blur hover:bg-bone-50/20"
          >
            Close
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={lightbox}
            alt="Special package details"
            className="max-h-[92vh] max-w-[96vw] rounded-2xl object-contain shadow-card"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
