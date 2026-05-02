import { motion } from 'framer-motion';
import { Award as AwardIcon, Calendar, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AmbientBlobs from './AmbientBlobs';
import { AWARDS } from '../data/highlights';

export default function Awards() {
  return (
    <section
      id="awards"
      className="section relative overflow-hidden bg-gradient-to-b from-bone-50 to-sand-50"
    >
      <AmbientBlobs variant="warm" />
      <div className="container-prose relative">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards & memberships"
          subtitle="A few of the certifications and titles we have been honoured to receive."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {AWARDS.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: (i % 2) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl bg-bone-50 shadow-soft ring-1 ring-ink/5 transition-shadow hover:shadow-card"
            >
              <div className="grid gap-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-sand-100 via-bone-50 to-sand-200">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(184,107,58,0.15),transparent_60%)]" />
                  <div className="pointer-events-none absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle, rgba(184,107,58,0.4) 1px, transparent 1px)', backgroundSize:'18px 18px'}} />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-bone-50/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-copper shadow-soft backdrop-blur">
                    <Sparkles size={10} />
                    Certified
                  </span>
                  <motion.img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                    className="relative h-full w-full object-contain p-8 drop-shadow-xl transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-copper/15 to-ember/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-copper-dark">
                    <AwardIcon size={12} />
                    {a.subtitle}
                  </span>
                  <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">{a.title}</h3>
                  <div className="inline-flex items-center gap-1.5 text-xs text-ink-mute">
                    <Calendar size={13} className="text-copper" />
                    {a.date}
                  </div>
                  <span className="mt-2 h-px w-16 bg-gradient-to-r from-copper to-transparent" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
