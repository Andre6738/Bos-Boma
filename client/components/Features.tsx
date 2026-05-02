import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { FEATURES } from '../data/features';

export default function Features() {
  return (
    <section id="features" className="section relative overflow-hidden bg-gradient-to-b from-sand-50 to-bone-50">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Signature features"
          title="Crafted for couples who want it all"
          subtitle="Every detail at BosBoma is designed to feel intentional, intimate and unmistakably bushveld."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1], delay: (i % 3) * 0.06 }}
              className="group relative overflow-hidden rounded-3xl bg-bone-50 p-7 shadow-soft ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-copper/0 transition-all duration-500 group-hover:bg-copper/10" />
              <span className="relative inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-copper to-ember text-bone-50 shadow-glow">
                <f.icon size={24} />
              </span>
              <h3 className="relative mt-6 font-display text-2xl text-ink">{f.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-ink-soft">{f.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
