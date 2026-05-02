import { motion } from 'framer-motion';
import { ABOUT_IMAGE } from '../data/site';
import { MapPin, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden bg-bone-50">
      <div className="container-prose grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-copper/15 via-sand-100 to-bush/10 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] shadow-card ring-1 ring-ink/5">
            <img
              src={ABOUT_IMAGE}
              alt="BosBoma bushveld setting"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 left-6 hidden gap-3 rounded-2xl bg-bone-50 px-5 py-4 shadow-card ring-1 ring-ink/5 sm:flex sm:items-center">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-ember/10 text-ember">
              <Star size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Trusted by real couples</p>
              <p className="text-xs text-ink-mute">From the moment you arrive, you feel at home.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span className="eyebrow">About BosBoma</span>
          <h2 className="mt-3 heading-display">Nature distilled, luxury defined.</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            BosBoma is a private bushveld estate where indigenous trees, copper firelight and an
            open-air boma create the backdrop to your most important day. We host one event at a
            time so the entire venue, and our undivided attention, belongs to you.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-sand-50 p-5 ring-1 ring-ink/5">
              <p className="text-3xl font-display text-copper">1</p>
              <p className="mt-1 text-sm text-ink-soft">Event at a time. Always exclusive use.</p>
            </div>
            <div className="rounded-2xl bg-sand-50 p-5 ring-1 ring-ink/5">
              <p className="text-3xl font-display text-copper">0</p>
              <p className="mt-1 text-sm text-ink-soft">Corkage. Bring your own drinks.</p>
            </div>
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-sm text-ink-mute">
            <MapPin size={16} className="text-copper" />
            Just north of Pretoria, South Africa
          </div>
        </motion.div>
      </div>
    </section>
  );
}
