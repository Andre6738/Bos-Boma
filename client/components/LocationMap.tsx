import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import SectionHeading from './SectionHeading';

const MAPS_DIRECTIONS = 'https://www.google.com/maps/search/?api=1&query=BosBoma+Pretoria';
const MAPS_EMBED =
  'https://www.google.com/maps?q=BosBoma+Pretoria&output=embed';

export default function LocationMap() {
  return (
    <section id="location" className="section bg-bone-50">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Find us"
          title="A short drive into the bushveld."
          subtitle="BosBoma sits just north of Pretoria, far enough to feel wild, close enough for guests to find easily."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="overflow-hidden rounded-[2rem] bg-bone-50 shadow-card ring-1 ring-ink/5"
        >
          <div className="grid lg:grid-cols-[1fr_1.4fr]">
            <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-copper/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-copper">
                <MapPin size={14} />
                Just north of Pretoria
              </div>
              <h3 className="font-display text-3xl text-ink sm:text-4xl">
                Wild on the outside, refined on the inside.
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
                We&rsquo;ll send a detailed pin and turn-by-turn directions when you book your private
                tour. Please contact us for the exact location and the best route from your area.
              </p>
              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline self-start"
              >
                <Navigation size={16} />
                Open in Google Maps
              </a>
            </div>

            <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[420px]">
              <iframe
                title="BosBoma location map"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
