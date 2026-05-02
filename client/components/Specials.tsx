import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { SPECIALS } from '../data/highlights';

export default function Specials() {
  return (
    <section id="specials" className="section relative overflow-hidden bg-bone-50">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Our specials"
          title="Curated offers, just for you."
          subtitle="Limited-time packages crafted around real bushveld moments. Reach out for full details and availability."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SPECIALS.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: (i % 2) * 0.08 }}
              className="group relative isolate overflow-hidden rounded-3xl bg-ink shadow-soft ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3]">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
                {s.badge && (
                  <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-ember-glow/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink shadow-glow">
                    <Sparkles size={12} />
                    {s.badge}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 className="font-display text-3xl leading-tight text-bone-50 sm:text-4xl">{s.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-bone-100/85">{s.description}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-bone-50 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink transition-all hover:bg-copper hover:text-bone-50"
                  >
                    Enquire now
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
