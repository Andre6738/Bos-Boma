import { motion } from 'framer-motion';
import { Award as AwardIcon, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { AWARDS } from '../data/highlights';

export default function Awards() {
  return (
    <section
      id="awards"
      className="section relative overflow-hidden bg-gradient-to-b from-bone-50 to-sand-50"
    >
      <div className="container-prose">
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
              className="group relative overflow-hidden rounded-3xl bg-bone-50 shadow-soft ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="grid gap-0 sm:grid-cols-[1fr_1.2fr]">
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-sand-100 to-sand-200 sm:aspect-auto">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-copper/10 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-copper/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-copper">
                    <AwardIcon size={12} />
                    {a.subtitle}
                  </span>
                  <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">{a.title}</h3>
                  <div className="inline-flex items-center gap-1.5 text-xs text-ink-mute">
                    <Calendar size={13} className="text-copper" />
                    {a.date}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
