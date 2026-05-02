import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { REVIEWS } from '../data/reviews';

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="section relative overflow-hidden bg-gradient-to-b from-bush to-bush-dark text-bone-50"
    >
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-ember-glow blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-copper blur-3xl" />
      </div>

      <div className="container-prose">
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.28em] text-sand-200">
            Google Reviews
          </span>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Trust shaped by real experiences.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1], delay: (i % 2) * 0.08 }}
              className="relative rounded-3xl bg-bone-50/[0.06] p-7 ring-1 ring-bone-50/15 backdrop-blur-md"
            >
              <Quote className="absolute -top-3 left-7 h-9 w-9 rounded-full bg-copper p-2 text-bone-50 shadow-glow" />
              <div className="flex gap-1 text-ember-glow">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-xl leading-snug text-bone-50/95 sm:text-2xl">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-medium uppercase tracking-wider text-sand-200">
                {r.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
