import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { FEATURES } from '../data/features';
import AmbientBlobs from './AmbientBlobs';

const ICON_GRADIENTS = [
  'from-copper to-ember',
  'from-bush to-bush-dark',
  'from-ember to-copper-dark',
  'from-bush-dark to-copper',
  'from-copper-light to-ember-glow',
  'from-bush to-copper'
];

export default function Features() {
  return (
    <section id="features" className="section relative overflow-hidden bg-gradient-to-b from-sand-50 to-bone-50">
      <AmbientBlobs variant="mixed" />
      <div className="container-prose relative">
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
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl bg-bone-50 p-7 shadow-soft ring-1 ring-ink/5 transition-shadow hover:shadow-card"
            >
              <span className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${ICON_GRADIENTS[i % ICON_GRADIENTS.length]} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`} />
              <span className={`relative inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${ICON_GRADIENTS[i % ICON_GRADIENTS.length]} text-bone-50 shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <f.icon size={24} />
              </span>
              <h3 className="relative mt-6 font-display text-2xl text-ink">{f.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-ink-soft">{f.description}</p>
              <span className="absolute bottom-0 left-7 right-7 h-px scale-x-0 bg-gradient-to-r from-transparent via-copper to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
