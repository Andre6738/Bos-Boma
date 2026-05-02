import { motion } from 'framer-motion';
import { ABOUT_IMAGE } from '../data/site';
import { MapPin, Star } from 'lucide-react';
import CountUp from './CountUp';
import AmbientBlobs from './AmbientBlobs';

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden bg-bone-50">
      <AmbientBlobs variant="warm" />
      <div className="container-prose relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-copper/25 via-sand-100 to-bush/20 blur-2xl animate-gradient-pan bg-[length:200%_200%]" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-ink/5">
            <img
              src={ABOUT_IMAGE}
              alt="BosBoma bushveld setting"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-bush/15 via-transparent to-copper/10 mix-blend-soft-light" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 left-6 hidden gap-3 rounded-2xl bg-bone-50 px-5 py-4 shadow-card ring-1 ring-ink/5 sm:flex sm:items-center"
          >
            <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-ember to-copper text-bone-50 shadow-glow">
              <Star size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Trusted by real couples</p>
              <p className="text-xs text-ink-mute">From the moment you arrive, you feel at home.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span className="eyebrow">About BosBoma</span>
          <h2 className="mt-3 heading-display">
            Nature distilled, <span className="text-gradient-warm italic">luxury defined.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            BosBoma is a private bushveld estate where indigenous trees, copper firelight and an
            open-air boma create the backdrop to your most important day. We host one event at a
            time so the entire venue, and our undivided attention, belongs to you.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.5, delay: 0, ease: [0.22, 0.61, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-bush to-bush-dark p-4 text-bone-50 shadow-soft sm:p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-bone-50/5 to-bone-50/15 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-baseline gap-2">
                <CountUp to={1} duration={0.9} className="font-display text-4xl leading-none sm:text-5xl" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand-200 sm:text-xs">event<br />at a time</span>
              </div>
              <p className="relative mt-3 text-xs leading-relaxed text-bone-100/80">Exclusive use, always. The venue is yours alone.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-copper to-copper-dark p-4 text-bone-50 shadow-soft sm:p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-bone-50/5 to-bone-50/15 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-baseline gap-2">
                <CountUp to={0} from={750} prefix="R" duration={1.1} className="font-display text-4xl leading-none sm:text-5xl" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand-100 sm:text-xs">corkage<br />no fees</span>
              </div>
              <p className="relative mt-3 text-xs leading-relaxed text-bone-50/85">Bring your own drinks. We never charge for it.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl bg-bone-50 p-4 ring-1 ring-ink/10 shadow-soft sm:p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-copper/0 to-copper/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-baseline gap-2">
                <CountUp to={200} duration={1.2} className="font-display text-4xl leading-none text-copper sm:text-5xl" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-mute sm:text-xs">guests<br />capacity</span>
              </div>
              <p className="relative mt-3 text-xs leading-relaxed text-ink-soft">Intimate gatherings to grand celebrations.</p>
            </motion.div>
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
